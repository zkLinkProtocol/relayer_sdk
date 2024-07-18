"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedHubPoolInterface__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "l1Token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "l1TokenAmount",
                type: "uint256",
            },
        ],
        name: "addLiquidity",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "l1Token",
                type: "address",
            },
        ],
        name: "claimProtocolFeesCaptured",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "l1Token",
                type: "address",
            },
        ],
        name: "disableL1TokenForLiquidityProvision",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "disputeRootBundle",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "emergencyDeleteProposal",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "l1Token",
                type: "address",
            },
        ],
        name: "enableL1TokenForLiquidityProvision",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "l1Token",
                type: "address",
            },
        ],
        name: "exchangeRateCurrent",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "groupIndex",
                type: "uint256",
            },
            {
                internalType: "uint256[]",
                name: "bundleLpFees",
                type: "uint256[]",
            },
            {
                internalType: "int256[]",
                name: "netSendAmounts",
                type: "int256[]",
            },
            {
                internalType: "int256[]",
                name: "runningBalances",
                type: "int256[]",
            },
            {
                internalType: "uint8",
                name: "leafId",
                type: "uint8",
            },
            {
                internalType: "address[]",
                name: "l1Tokens",
                type: "address[]",
            },
            {
                internalType: "bytes32[]",
                name: "proof",
                type: "bytes32[]",
            },
        ],
        name: "executeRootBundle",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "l1Token",
                type: "address",
            },
        ],
        name: "liquidityUtilizationCurrent",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "l1Token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "relayedAmount",
                type: "uint256",
            },
        ],
        name: "liquidityUtilizationPostRelay",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "loadEthForL2Calls",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "destinationChainId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "l1Token",
                type: "address",
            },
        ],
        name: "poolRebalanceRoute",
        outputs: [
            {
                internalType: "address",
                name: "destinationToken",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "bundleEvaluationBlockNumbers",
                type: "uint256[]",
            },
            {
                internalType: "uint8",
                name: "poolRebalanceLeafCount",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "poolRebalanceRoot",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "relayerRefundRoot",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "slowRelayRoot",
                type: "bytes32",
            },
        ],
        name: "proposeRootBundle",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "functionData",
                type: "bytes",
            },
        ],
        name: "relaySpokePoolAdminFunction",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "l1Token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "lpTokenAmount",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "sendEth",
                type: "bool",
            },
        ],
        name: "removeLiquidity",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "rootBundleProposal",
        outputs: [
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "poolRebalanceRoot",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes32",
                        name: "relayerRefundRoot",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes32",
                        name: "slowRelayRoot",
                        type: "bytes32",
                    },
                    {
                        internalType: "uint256",
                        name: "claimedBitMap",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "proposer",
                        type: "address",
                    },
                    {
                        internalType: "uint8",
                        name: "unclaimedPoolRebalanceLeafCount",
                        type: "uint8",
                    },
                    {
                        internalType: "uint32",
                        name: "challengePeriodEndTimestamp",
                        type: "uint32",
                    },
                ],
                internalType: "struct HubPoolInterface.RootBundle",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "newBondToken",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "newBondAmount",
                type: "uint256",
            },
        ],
        name: "setBond",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "l2ChainId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "adapter",
                type: "address",
            },
            {
                internalType: "address",
                name: "spokePool",
                type: "address",
            },
        ],
        name: "setCrossChainContracts",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "originChainId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "destinationChainId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "originToken",
                type: "address",
            },
            {
                internalType: "bool",
                name: "depositsEnabled",
                type: "bool",
            },
        ],
        name: "setDepositRoute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "newIdentifier",
                type: "bytes32",
            },
        ],
        name: "setIdentifier",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "newLiveness",
                type: "uint32",
            },
        ],
        name: "setLiveness",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "pause",
                type: "bool",
            },
        ],
        name: "setPaused",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "destinationChainId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "l1Token",
                type: "address",
            },
            {
                internalType: "address",
                name: "destinationToken",
                type: "address",
            },
        ],
        name: "setPoolRebalanceRoute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newProtocolFeeCaptureAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "newProtocolFeeCapturePct",
                type: "uint256",
            },
        ],
        name: "setProtocolFeeCapture",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "l1Token",
                type: "address",
            },
        ],
        name: "sync",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class ExtendedHubPoolInterface__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ExtendedHubPoolInterface__factory = ExtendedHubPoolInterface__factory;
ExtendedHubPoolInterface__factory.abi = _abi;
