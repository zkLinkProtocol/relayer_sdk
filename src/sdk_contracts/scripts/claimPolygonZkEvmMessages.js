"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable camelcase */
const utils_1 = require("../utils/utils");
const utils_hre_1 = require("../utils/utils.hre");
const consts_1 = require("../deploy/consts");
const common_1 = require("@uma/common");
const node_fetch_1 = __importDefault(require("node-fetch"));
const polygonZkEvmBridgeAbi = [
    {
        inputs: [
            { internalType: "bytes32[32]", name: "smtProof", type: "bytes32[32]" },
            { internalType: "uint32", name: "index", type: "uint32" },
            { internalType: "bytes32", name: "mainnetExitRoot", type: "bytes32" },
            { internalType: "bytes32", name: "rollupExitRoot", type: "bytes32" },
            { internalType: "uint32", name: "originNetwork", type: "uint32" },
            { internalType: "address", name: "originAddress", type: "address" },
            { internalType: "uint32", name: "destinationNetwork", type: "uint32" },
            { internalType: "address", name: "destinationAddress", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "bytes", name: "metadata", type: "bytes" },
        ],
        name: "claimMessage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "bytes32[32]", name: "smtProof", type: "bytes32[32]" },
            { internalType: "uint32", name: "index", type: "uint32" },
            { internalType: "bytes32", name: "mainnetExitRoot", type: "bytes32" },
            { internalType: "bytes32", name: "rollupExitRoot", type: "bytes32" },
            { internalType: "uint32", name: "originNetwork", type: "uint32" },
            { internalType: "address", name: "originTokenAddress", type: "address" },
            { internalType: "uint32", name: "destinationNetwork", type: "uint32" },
            { internalType: "address", name: "destinationAddress", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "bytes", name: "metadata", type: "bytes" },
        ],
        name: "claimAsset",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
/**
 * Script to claim L1->L2 or L2->L1 assets and messages. Run via
 * ```
 * CLAIM_MESSAGES_ON=l1 \
 * yarn hardhat run ./scripts/claimPolygonZkEvmMessages.ts \
 * --network polygon-zk-evm-testnet \
 * ```
 * Environment variables:
 * - `CLAIM_MESSAGES_ON`: Which messages to claim. Either `l1` or `l2`.
 * Flags:
 * - `--network`: The L2 network, i.e. `polygon-zk-evm-testnet` or `polygon-zk-evm`.
 *
 */
async function main() {
    const claimMessagesOn = process.env.CLAIM_MESSAGES_ON || "l1";
    const l1ChainId = parseInt(await utils_hre_1.hre.companionNetworks.l1.getChainId());
    const l2ChainId = parseInt(await utils_hre_1.hre.getChainId());
    const l1Provider = new utils_1.ethers.providers.JsonRpcProvider((0, common_1.getNodeUrl)(l1ChainId === 1 ? "mainnet" : "goerli", true, l1ChainId));
    const l1Signer = utils_1.ethers.Wallet.fromMnemonic(utils_hre_1.hre.network.config.accounts.mnemonic).connect(l1Provider);
    const [l2Signer] = await utils_1.ethers.getSigners();
    const bridgeApiBaseUrl = l1ChainId === 1 ? "https://bridge-api.zkevm-rpc.com" : "https://bridge-api.public.zkevm-test.net";
    console.log("\nL1 chain ID:", l1ChainId);
    console.log("L2 chain ID:", l2ChainId);
    console.log("Signer address:", l1Signer.address);
    console.log("Bridge API:", bridgeApiBaseUrl);
    // Get relevant src messages
    const srcMessages = claimMessagesOn === "l1"
        ? await getMessagesToClaimOnL1(bridgeApiBaseUrl)
        : await getMessagesToClaimOnL2(bridgeApiBaseUrl);
    // Filter out claimed or not yet ready messages
    const messagesNotYetReady = srcMessages.filter((message) => !message.ready_for_claim);
    const messagesAlreadyClaimed = srcMessages.filter((message) => Boolean(message.claim_tx_hash));
    const relevantMessages = srcMessages.filter((message) => Boolean(message.ready_for_claim) && !message.claim_tx_hash);
    console.log(`${srcMessages.length} total: ${relevantMessages.length} claimable, ${messagesNotYetReady.length} not yet ready, ${messagesAlreadyClaimed.length} already claimed`);
    if (relevantMessages.length === 0) {
        console.log("No relevant messages to claim");
        return;
    }
    // Receive messages
    const polygonZkEvmBridge = new utils_1.ethers.Contract(claimMessagesOn === "l1"
        ? consts_1.L1_ADDRESS_MAP[l1ChainId].polygonZkEvmBridge
        : consts_1.L2_ADDRESS_MAP[l2ChainId].polygonZkEvmBridge, polygonZkEvmBridgeAbi, claimMessagesOn === "l1" ? l1Signer : l2Signer);
    console.log(`\nClaiming messages on ${claimMessagesOn.toUpperCase()}`, {
        polygonZkEvmBridge: polygonZkEvmBridge.address,
        chainId: claimMessagesOn === "l1" ? l1ChainId : l2ChainId,
    });
    for (const message of relevantMessages) {
        const messageOrAsset = message.leaf_type === 0 ? "asset" : "message";
        console.log(`Claiming message:`, {
            originNetwork: message.orig_net,
            depositCount: message.deposit_cnt,
            messageOrAsset,
        });
        try {
            const proof = await getProof(bridgeApiBaseUrl, parseInt(message.deposit_cnt), claimMessagesOn === "l1" ? 1 : 0);
            const args = [
                proof.merkle_proof,
                message.deposit_cnt,
                proof.main_exit_root,
                proof.rollup_exit_root,
                message.orig_net,
                message.orig_addr,
                message.dest_net,
                message.dest_addr,
                message.amount,
                message.metadata,
            ];
            const claimTx = messageOrAsset === "asset"
                ? await polygonZkEvmBridge.claimAsset(...args)
                : await polygonZkEvmBridge.claimMessage(...args);
            console.log(`Tx hash: ${claimTx.hash}`);
            await claimTx.wait();
            console.log(`Claimed message`);
        }
        catch (error) {
            console.log(`Failed to claim`, error);
            continue;
        }
    }
}
async function getMessagesToClaimOnL1(apiBaseUrl) {
    const hubPoolDeployment = await utils_hre_1.hre.companionNetworks.l1.deployments.get("HubPool");
    console.log("\nFetch messages targeting HubPool address:", hubPoolDeployment.address);
    return getMessages(apiBaseUrl, hubPoolDeployment.address);
}
async function getMessagesToClaimOnL2(apiBaseUrl) {
    const spokePoolArtifactName = "PolygonZkEVM_SpokePool";
    const spokePoolDeployment = await utils_hre_1.hre.deployments.get(spokePoolArtifactName);
    console.log("\nFetch messages targeting PolygonZkEVM_SpokePool address:", spokePoolDeployment.address);
    return getMessages(apiBaseUrl, spokePoolDeployment.address);
}
async function getMessages(apiBaseUrl, messageTargetAddress, limit = 100, offset = 0) {
    const response = await (0, node_fetch_1.default)(`${apiBaseUrl}/bridges/${messageTargetAddress}?limit=${limit}&offset=${offset}`);
    const data = await response.json();
    return data.deposits;
}
async function getProof(apiBaseUrl, depositCount, originNetwork) {
    const response = await (0, node_fetch_1.default)(`${apiBaseUrl}/merkle-proof?deposit_cnt=${depositCount}&net_id=${originNetwork}`);
    const data = await response.json();
    return data.proof;
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
