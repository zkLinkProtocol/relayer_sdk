"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptimisticOracleInterface__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "requester",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "proposer",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "disputer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "identifier",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "proposedPrice",
                type: "int256",
            },
        ],
        name: "DisputePrice",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "requester",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "proposer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "identifier",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "proposedPrice",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "expirationTimestamp",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "currency",
                type: "address",
            },
        ],
        name: "ProposePrice",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "requester",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "identifier",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "address",
                name: "currency",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "reward",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "finalFee",
                type: "uint256",
            },
        ],
        name: "RequestPrice",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "requester",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "proposer",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "disputer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "identifier",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "price",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "payout",
                type: "uint256",
            },
        ],
        name: "Settle",
        type: "event",
    },
    {
        inputs: [],
        name: "ancillaryBytesLimit",
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
    {
        inputs: [],
        name: "defaultLiveness",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "requester",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "identifier",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
        ],
        name: "disputePrice",
        outputs: [
            {
                internalType: "uint256",
                name: "totalBond",
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
                name: "disputer",
                type: "address",
            },
            {
                internalType: "address",
                name: "requester",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "identifier",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
        ],
        name: "disputePriceFor",
        outputs: [
            {
                internalType: "uint256",
                name: "totalBond",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "finder",
        outputs: [
            {
                internalType: "contract FinderInterface",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getCurrentTime",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "requester",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "identifier",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
        ],
        name: "getRequest",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "proposer",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "disputer",
                        type: "address",
                    },
                    {
                        internalType: "contract IERC20",
                        name: "currency",
                        type: "address",
                    },
                    {
                        internalType: "bool",
                        name: "settled",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "refundOnDispute",
                        type: "bool",
                    },
                    {
                        internalType: "int256",
                        name: "proposedPrice",
                        type: "int256",
                    },
                    {
                        internalType: "int256",
                        name: "resolvedPrice",
                        type: "int256",
                    },
                    {
                        internalType: "uint256",
                        name: "expirationTime",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "reward",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "finalFee",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "bond",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "customLiveness",
                        type: "uint256",
                    },
                ],
                internalType: "struct OptimisticOracleInterface.Request",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "requester",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "identifier",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
        ],
        name: "getState",
        outputs: [
            {
                internalType: "enum OptimisticOracleInterface.State",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "requester",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "identifier",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
        ],
        name: "hasPrice",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "requester",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "identifier",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
            {
                internalType: "int256",
                name: "proposedPrice",
                type: "int256",
            },
        ],
        name: "proposePrice",
        outputs: [
            {
                internalType: "uint256",
                name: "totalBond",
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
                name: "proposer",
                type: "address",
            },
            {
                internalType: "address",
                name: "requester",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "identifier",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
            {
                internalType: "int256",
                name: "proposedPrice",
                type: "int256",
            },
        ],
        name: "proposePriceFor",
        outputs: [
            {
                internalType: "uint256",
                name: "totalBond",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "identifier",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
            {
                internalType: "contract IERC20",
                name: "currency",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "reward",
                type: "uint256",
            },
        ],
        name: "requestPrice",
        outputs: [
            {
                internalType: "uint256",
                name: "totalBond",
                type: "uint256",
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
        name: "requests",
        outputs: [
            {
                internalType: "address",
                name: "proposer",
                type: "address",
            },
            {
                internalType: "address",
                name: "disputer",
                type: "address",
            },
            {
                internalType: "contract IERC20",
                name: "currency",
                type: "address",
            },
            {
                internalType: "bool",
                name: "settled",
                type: "bool",
            },
            {
                internalType: "bool",
                name: "refundOnDispute",
                type: "bool",
            },
            {
                internalType: "int256",
                name: "proposedPrice",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "resolvedPrice",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "expirationTime",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "reward",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "finalFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "bond",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "customLiveness",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "identifier",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "bond",
                type: "uint256",
            },
        ],
        name: "setBond",
        outputs: [
            {
                internalType: "uint256",
                name: "totalBond",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "identifier",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "customLiveness",
                type: "uint256",
            },
        ],
        name: "setCustomLiveness",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "identifier",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
        ],
        name: "setRefundOnDispute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "requester",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "identifier",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
        ],
        name: "settle",
        outputs: [
            {
                internalType: "uint256",
                name: "payout",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "identifier",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
        ],
        name: "settleAndGetPrice",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "ancillaryData",
                type: "bytes",
            },
            {
                internalType: "address",
                name: "requester",
                type: "address",
            },
        ],
        name: "stampAncillaryData",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class OptimisticOracleInterface__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.OptimisticOracleInterface__factory = OptimisticOracleInterface__factory;
OptimisticOracleInterface__factory.abi = _abi;
