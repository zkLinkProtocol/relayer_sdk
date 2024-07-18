"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils/utils");
const utils_hre_1 = require("../utils/utils.hre");
const consts_1 = require("../deploy/consts");
const common_1 = require("@uma/common");
const node_fetch_1 = __importDefault(require("node-fetch"));
const MAX_L1_BLOCK_LOOKBACK = 1000;
const MAX_L2_BLOCK_LOOKBACK = 1000;
const chainToArtifactPrefix = {
    1: "Ethereum",
    5: "Ethereum",
    10: "Optimism",
    420: "Optimism",
    42161: "Arbitrum",
    421613: "Arbitrum",
    8453: "Base",
    84531: "Base",
    137: "Polygon",
    80001: "Polygon",
};
const messageTransmitterAbi = [
    {
        inputs: [
            {
                internalType: "bytes",
                name: "message",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "attestation",
                type: "bytes",
            },
        ],
        name: "receiveMessage",
        outputs: [
            {
                internalType: "bool",
                name: "success",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        name: "usedNonces",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
/**
 * Script to claim L1->L2 or L2->L1 messages. Run via
 * ```
 * RECEIVE_MESSAGES_ON=l1 \
 * yarn hardhat run ./scripts/claimLineaMessages.ts \
 * --network linea-goerli \
 * ```
 * Environment variables:
 * - `RECEIVE_MESSAGES_ON`: Which messages to claim. Either `l1` or `l2`.
 * Flags:
 * - `--network`: The L2 network, i.e. `arbitrum-goerli` or `arbitrum`.
 *
 */
async function main() {
    const receiveMessagesOn = process.env.RECEIVE_MESSAGES_ON || "l2";
    const l1BlockLookback = parseInt(process.env.BLOCK_LOOKBACK || "8640");
    const l2BlockLookback = parseInt(process.env.BLOCK_LOOKBACK || "17380");
    const l1ChainId = parseInt(await utils_hre_1.hre.companionNetworks.l1.getChainId());
    const l2ChainId = parseInt(await utils_hre_1.hre.getChainId());
    const l1Provider = new utils_1.ethers.providers.JsonRpcProvider((0, common_1.getNodeUrl)(l1ChainId === 1 ? "mainnet" : "goerli", true, l1ChainId));
    const l2Provider = utils_1.ethers.provider;
    const l1Signer = utils_1.ethers.Wallet.fromMnemonic(utils_hre_1.hre.network.config.accounts.mnemonic).connect(l1Provider);
    const [l2Signer] = await utils_1.ethers.getSigners();
    console.log("\nL1 chain ID:", l1ChainId);
    console.log("L2 chain ID:", l2ChainId);
    console.log("Signer address:", l1Signer.address);
    // Get relevant src events
    const srcEvents = receiveMessagesOn === "l1"
        ? await getL2SrcEvents(l2ChainId, l2Provider, l2Signer, l2BlockLookback)
        : await getL1SrcEvents(l1ChainId, l1Provider, l1Signer, l1BlockLookback);
    // Get relevant message hashes and bytes
    const uniqueTxHashes = new Set(srcEvents.map((event) => event.transactionHash));
    const messageHashesAndBytes = await parseMessageHashesAndBytes(Array.from(uniqueTxHashes), receiveMessagesOn === "l1" ? l2Provider : l1Provider);
    const relevantMessageHashesAndBytes = messageHashesAndBytes.filter((messageHashAndBytes) => messageHashAndBytes.destinationDomain === consts_1.CIRCLE_DOMAIN_IDs[receiveMessagesOn === "l1" ? l1ChainId : l2ChainId]);
    console.log(`\nParsed ${relevantMessageHashesAndBytes.length} relevant 'MessageSent' events`);
    if (relevantMessageHashesAndBytes.length === 0) {
        console.log("No relevant messages to receive");
        return;
    }
    // Request attestations
    console.log("\nRequesting attestations...");
    const attestations = [];
    for (const messageHashAndBytes of relevantMessageHashesAndBytes) {
        const attestation = await requestAttestation(messageHashAndBytes.messageHash);
        attestations.push(attestation);
    }
    // Receive messages
    const messageTransmitter = new utils_1.ethers.Contract(receiveMessagesOn === "l1"
        ? consts_1.L1_ADDRESS_MAP[l1ChainId].cctpMessageTransmitter
        : consts_1.L2_ADDRESS_MAP[l2ChainId].cctpMessageTransmitter, messageTransmitterAbi, receiveMessagesOn === "l1" ? l1Signer : l2Signer);
    console.log(`\nReceiving messages on ${receiveMessagesOn.toUpperCase()}`, {
        messageTransmitter: messageTransmitter.address,
        chainId: receiveMessagesOn === "l1" ? l1ChainId : l2ChainId,
    });
    for (const [i, messageHashAndBytes] of relevantMessageHashesAndBytes.entries()) {
        const attestation = attestations[i];
        const { messageBytes, messageHash, nonceHash } = messageHashAndBytes;
        console.log(`Receiving message ${messageHash}...`);
        try {
            // Skip message if already received
            const usedNonces = await messageTransmitter.usedNonces(nonceHash);
            if (usedNonces.eq(1)) {
                console.log(`Skipping already received message.`);
                continue;
            }
            const receiveTx = await messageTransmitter.receiveMessage(messageBytes, attestation);
            console.log(`Tx hash: ${receiveTx.hash}`);
            await receiveTx.wait();
            console.log(`Received message`);
        }
        catch (error) {
            console.log(`Failed to receive`, error);
            continue;
        }
    }
}
async function requestAttestation(messageHash) {
    console.log(`Attesting message hash: ${messageHash}`);
    let attestationResponse = { status: "pending", attestation: "" };
    while (attestationResponse.status !== "complete") {
        const response = await (0, node_fetch_1.default)(`https://iris-api-sandbox.circle.com/attestations/${messageHash}`);
        attestationResponse = await response.json();
        await new Promise((resolve) => setTimeout(resolve, 2000));
    }
    console.log("Attested");
    return attestationResponse.attestation;
}
async function parseMessageHashesAndBytes(txHashes, srcProvider) {
    const transactionReceipts = await Promise.all(txHashes.map((txHash) => srcProvider.getTransactionReceipt(txHash)));
    const messageHashesAndBytes = [];
    for (const transactionReceipt of transactionReceipts) {
        const eventTopic = utils_1.ethers.utils.id("MessageSent(bytes)");
        const log = transactionReceipt.logs.find((l) => l.topics[0] === eventTopic);
        if (!log) {
            continue;
        }
        const messageBytes = utils_1.ethers.utils.defaultAbiCoder.decode(["bytes"], log.data)[0];
        const messageBytesArray = utils_1.ethers.utils.arrayify(messageBytes);
        const sourceDomain = utils_1.ethers.utils.hexlify(messageBytesArray.slice(4, 8)); // sourceDomain 4 bytes starting index 4
        const destinationDomain = utils_1.ethers.utils.hexlify(messageBytesArray.slice(8, 12)); // destinationDomain 4 bytes starting index 8
        const nonce = utils_1.ethers.utils.hexlify(messageBytesArray.slice(12, 20)); // nonce 8 bytes starting index 12
        const nonceHash = utils_1.ethers.utils.solidityKeccak256(["uint32", "uint64"], [sourceDomain, nonce]);
        const messageHash = utils_1.ethers.utils.keccak256(messageBytes);
        messageHashesAndBytes.push({
            messageHash,
            messageBytes,
            nonceHash,
            destinationDomain: parseInt(destinationDomain),
        });
    }
    return messageHashesAndBytes;
}
async function getL1SrcEvents(l1ChainId, l1Provider, l1Signer, blockLookback, maxBlockLookback = MAX_L1_BLOCK_LOOKBACK) {
    const l1LatestBlock = await l1Provider.getBlockNumber();
    const hubPoolDeployment = await utils_hre_1.hre.companionNetworks.l1.deployments.get("HubPool");
    const adapter = (await (0, utils_1.getContractFactory)(`${chainToArtifactPrefix[l1ChainId]}_Adapter`, { signer: l1Signer })).attach(hubPoolDeployment.address);
    console.log("\nQuerying L1 src events...", {
        hubPool: hubPoolDeployment.address,
        l1ChainId,
    });
    return getSrcEvents(l1LatestBlock, blockLookback, async (fromBlock, toBlock) => {
        console.log(`Querying blocks ${fromBlock} - ${toBlock}...`);
        const tokensRelayedEvents = await adapter.queryFilter("TokensRelayed", fromBlock, toBlock);
        const usdcRelayedEvents = tokensRelayedEvents.filter((event) => event.args?.l1Token === consts_1.L1_ADDRESS_MAP[l1ChainId].usdc);
        console.log(`${usdcRelayedEvents.length} 'TokensRelayed'`);
        return usdcRelayedEvents;
    }, maxBlockLookback);
}
async function getL2SrcEvents(l2ChainId, l2Provider, l2Signer, blockLookback, maxBlockLookback = MAX_L2_BLOCK_LOOKBACK) {
    const l2LatestBlock = await l2Provider.getBlockNumber();
    const spokePoolArtifactPrefix = chainToArtifactPrefix[l2ChainId];
    const spokePoolArtifactName = `${spokePoolArtifactPrefix}_SpokePool`;
    const spokePoolEventName = `${spokePoolArtifactPrefix === "Base" ? "Optimism" : spokePoolArtifactPrefix}TokensBridged`;
    const spokePoolDeployment = await utils_hre_1.hre.deployments.get(spokePoolArtifactName);
    const spokePool = (await (0, utils_1.getContractFactory)(spokePoolArtifactName, { signer: l2Signer })).attach(spokePoolDeployment.address);
    console.log("\nQuerying L2 src events...", {
        spokePool: spokePool.address,
        l2ChainId,
    });
    return getSrcEvents(l2LatestBlock, blockLookback, async (fromBlock, toBlock) => {
        console.log(`Querying blocks ${fromBlock} - ${toBlock}...`);
        const tokensBridgedEvents = await spokePool.queryFilter(spokePoolEventName, fromBlock, toBlock);
        console.log(`${tokensBridgedEvents.length} '${spokePoolEventName}'`);
        return tokensBridgedEvents;
    }, maxBlockLookback);
}
async function getSrcEvents(latestBlock, blockLookback, queryFn, maxBlockLookback) {
    const initialFromBlock = latestBlock - blockLookback;
    let fromBlock = initialFromBlock;
    const relevantSrcEvents = [];
    while (fromBlock < latestBlock) {
        const numBlocks = Math.max(latestBlock - fromBlock, 0);
        if (numBlocks === 0) {
            break;
        }
        const toBlock = numBlocks > maxBlockLookback ? fromBlock + maxBlockLookback : fromBlock + numBlocks;
        const events = await queryFn(fromBlock, toBlock);
        relevantSrcEvents.push(...events);
        fromBlock = toBlock + 1;
    }
    return relevantSrcEvents;
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
