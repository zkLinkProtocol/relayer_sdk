"use strict";
// @notice Run script to produce simple merkle roots required to test the HubPool/SpokePool interaction on a public
//         test net.
// @dev    Modify constants to modify merkle leaves. Command: `yarn hardhat run ./scripts/buildSampleTree.ts`
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils/utils");
const MerkleTree_1 = require("../utils/MerkleTree");
const test_utils_1 = require("../test-utils");
// Any variables not configurable in this set of constants is not used in this script and not important for testing in
// production.
const POOL_REBALANCE_LEAF_COUNT = 1;
const RELAYER_REFUND_LEAF_COUNT = 1;
const SLOW_RELAY_LEAF_COUNT = 1;
const POOL_REBALANCE_NET_SEND_AMOUNT = 0.1; // Amount of tokens to send from HubPool to SpokePool
const RELAYER_REFUND_AMOUNT_TO_RETURN = 0.1; // Amount of tokens to send from SpokePool to HubPool
const L1_TOKEN = "0x40153ddfad90c49dbe3f5c9f96f2a5b25ec67461";
const L2_TOKEN = "0x40153ddfad90c49dbe3f5c9f96f2a5b25ec67461";
const DECIMALS = 18;
const RELAYER_REFUND_ADDRESS_TO_REFUND = "0x9a8f92a830a5cb89a3816e3d267cb7791c16b04d";
const RELAYER_REFUND_AMOUNT_TO_REFUND = 0.1; // Amount of tokens to send out of SpokePool to relayer refund recipient
const SLOW_RELAY_RECIPIENT_ADDRESS = "0x9a8f92a830a5cb89a3816e3d267cb7791c16b04d";
const SLOW_RELAY_AMOUNT = 0.1; // Amount of tokens to send out of SpokePool to slow relay recipient address
const SPOKE_POOL_CHAIN_ID = 5;
function tuplelifyLeaf(leaf) {
    return JSON.stringify(Object.values(leaf).map((x) => (Array.isArray(x) ? x.map((y) => y.toString()) : x.toString())));
}
async function main() {
    if (POOL_REBALANCE_LEAF_COUNT > 0) {
        console.group(`\nGenerating pool rebalance merkle tree with ${POOL_REBALANCE_LEAF_COUNT} identical lea${POOL_REBALANCE_LEAF_COUNT > 1 ? "ves" : "f"}`);
        const leaves = [];
        for (let i = 0; i < POOL_REBALANCE_LEAF_COUNT; i++) {
            leaves.push({
                chainId: (0, utils_1.toBN)(SPOKE_POOL_CHAIN_ID),
                bundleLpFees: [(0, utils_1.toBN)(0)],
                netSendAmounts: [(0, utils_1.toBNWeiWithDecimals)(POOL_REBALANCE_NET_SEND_AMOUNT, DECIMALS)],
                runningBalances: [(0, utils_1.toBN)(0)],
                groupIndex: (0, utils_1.toBN)(0),
                leafId: (0, utils_1.toBN)(i),
                l1Tokens: [L1_TOKEN],
            });
            console.group();
            console.log(`- poolRebalanceLeaf ID#${i}: `, leaves[i]);
            console.log("- Tuple representation of leaf that you can input into etherscan.io: \n", tuplelifyLeaf(leaves[i]));
            console.groupEnd();
        }
        console.log(`- To execute this root, the HubPool needs to have at least ${POOL_REBALANCE_NET_SEND_AMOUNT * POOL_REBALANCE_LEAF_COUNT} amount of ${L1_TOKEN} to bridge to the SpokePool`);
        const paramType = await (0, utils_1.getParamType)("MerkleLibTest", "verifyPoolRebalance", "rebalance");
        const hashFn = (input) => (0, utils_1.keccak256)(utils_1.defaultAbiCoder.encode([paramType], [input]));
        const tree = new MerkleTree_1.MerkleTree(leaves, hashFn);
        console.log("- Pool rebalance root: ", tree.getHexRoot());
        console.group();
        for (let i = 0; i < POOL_REBALANCE_LEAF_COUNT; i++) {
            console.log(`- Proof for leaf ID#${i}: `, tree.getHexProof(leaves[i]));
        }
        console.groupEnd();
        console.groupEnd();
    }
    if (RELAYER_REFUND_LEAF_COUNT > 0) {
        console.group(`\nGenerating relayer refund merkle tree with ${RELAYER_REFUND_LEAF_COUNT} identical lea${RELAYER_REFUND_LEAF_COUNT > 1 ? "ves" : "f"}`);
        const leaves = [];
        for (let i = 0; i < RELAYER_REFUND_LEAF_COUNT; i++) {
            leaves.push({
                amountToReturn: (0, utils_1.toBNWeiWithDecimals)(RELAYER_REFUND_AMOUNT_TO_RETURN, DECIMALS),
                chainId: (0, utils_1.toBN)(SPOKE_POOL_CHAIN_ID),
                refundAmounts: [(0, utils_1.toBNWeiWithDecimals)(RELAYER_REFUND_AMOUNT_TO_REFUND, DECIMALS)],
                leafId: (0, utils_1.toBN)(i),
                l2TokenAddress: L2_TOKEN,
                refundAddresses: [RELAYER_REFUND_ADDRESS_TO_REFUND],
            });
            console.group();
            console.log(`- relayerRefundLeaf ID#${i}: `, leaves[i]);
            console.log("- Tuple representation of leaf that you can input into etherscan.io: \n", tuplelifyLeaf(leaves[i]));
            console.groupEnd();
        }
        console.log(`- To execute this root, the SpokePool needs to have at least ${(RELAYER_REFUND_AMOUNT_TO_RETURN + RELAYER_REFUND_AMOUNT_TO_REFUND) * RELAYER_REFUND_LEAF_COUNT} amount of ${L2_TOKEN} to bridge to the HubPool and send ${RELAYER_REFUND_LEAF_COUNT} refunds`);
        const paramType = await (0, utils_1.getParamType)("MerkleLibTest", "verifyRelayerRefund", "refund");
        const hashFn = (input) => (0, utils_1.keccak256)(utils_1.defaultAbiCoder.encode([paramType], [input]));
        const tree = new MerkleTree_1.MerkleTree(leaves, hashFn);
        console.log("- Relayer refund root: ", tree.getHexRoot());
        console.group();
        for (let i = 0; i < RELAYER_REFUND_LEAF_COUNT; i++) {
            console.log(`- Proof for leaf ID#${i}: `, tree.getHexProof(leaves[i]));
        }
        console.groupEnd();
        console.groupEnd();
    }
    if (SLOW_RELAY_LEAF_COUNT > 0) {
        console.group(`\nGenerating slow relay fulfillment merkle tree with ${SLOW_RELAY_LEAF_COUNT} identical lea${SLOW_RELAY_LEAF_COUNT > 1 ? "ves" : "f"}`);
        const leaves = [];
        for (let i = 0; i < SLOW_RELAY_LEAF_COUNT; i++) {
            leaves.push({
                relayData: {
                    depositor: SLOW_RELAY_RECIPIENT_ADDRESS,
                    recipient: SLOW_RELAY_RECIPIENT_ADDRESS,
                    exclusiveRelayer: test_utils_1.zeroAddress,
                    inputToken: L1_TOKEN,
                    outputToken: L2_TOKEN,
                    inputAmount: (0, utils_1.toBNWeiWithDecimals)(SLOW_RELAY_AMOUNT, DECIMALS),
                    outputAmount: (0, utils_1.toBNWeiWithDecimals)(SLOW_RELAY_AMOUNT, DECIMALS),
                    originChainId: SPOKE_POOL_CHAIN_ID,
                    fillDeadline: Math.floor(Date.now() / 1000) + 14400,
                    exclusivityDeadline: 0,
                    depositId: i,
                    message: "0x",
                },
                updatedOutputAmount: (0, utils_1.toBNWeiWithDecimals)(SLOW_RELAY_AMOUNT, DECIMALS),
                chainId: SPOKE_POOL_CHAIN_ID,
            });
            console.group();
            console.log(`- slowRelayLeaf ID#${i}: `, leaves[i]);
            console.log("- Tuple representation of leaf that you can input into etherscan.io: \n", tuplelifyLeaf(leaves[i].relayData));
            console.groupEnd();
        }
        console.log(`- To execute this root, the SpokePool needs to have at least ${SLOW_RELAY_AMOUNT * SLOW_RELAY_LEAF_COUNT} amount of ${L2_TOKEN} to fulfill ${SLOW_RELAY_LEAF_COUNT} relays`);
        const paramType = await (0, utils_1.getParamType)("MerkleLibTest", "verifyV3SlowRelayFulfillment", "slowFill");
        const hashFn = (input) => (0, utils_1.keccak256)(utils_1.defaultAbiCoder.encode([paramType], [input]));
        const tree = new MerkleTree_1.MerkleTree(leaves, hashFn);
        console.log("- Slow relay root: ", tree.getHexRoot());
        console.group();
        for (let i = 0; i < SLOW_RELAY_LEAF_COUNT; i++) {
            console.log(`- Proof for leaf ID#${i}: `, tree.getHexProof(leaves[i]));
        }
        console.groupEnd();
        console.groupEnd();
    }
}
main().then(() => process.exit(0), (error) => {
    console.log(error);
    process.exit(1);
});
