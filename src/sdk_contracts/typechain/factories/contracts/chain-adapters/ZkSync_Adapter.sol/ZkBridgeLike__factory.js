"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZkBridgeLike__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_l2Receiver",
                type: "address",
            },
            {
                internalType: "address",
                name: "_l1Token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_l2TxGasLimit",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_l2TxGasPerPubdataByte",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_refundRecipient",
                type: "address",
            },
        ],
        name: "deposit",
        outputs: [
            {
                internalType: "bytes32",
                name: "txHash",
                type: "bytes32",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
];
class ZkBridgeLike__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ZkBridgeLike__factory = ZkBridgeLike__factory;
ZkBridgeLike__factory.abi = _abi;
