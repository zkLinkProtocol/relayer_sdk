"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBridgeMessageReceiver__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "originAddress",
                type: "address",
            },
            {
                internalType: "uint32",
                name: "originNetwork",
                type: "uint32",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "onMessageReceived",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
class IBridgeMessageReceiver__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IBridgeMessageReceiver__factory = IBridgeMessageReceiver__factory;
IBridgeMessageReceiver__factory.abi = _abi;
