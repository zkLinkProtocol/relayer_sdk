"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcrossMessageHandler__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenSent",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "relayer",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "message",
                type: "bytes",
            },
        ],
        name: "handleV3AcrossMessage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class AcrossMessageHandler__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.AcrossMessageHandler__factory = AcrossMessageHandler__factory;
AcrossMessageHandler__factory.abi = _abi;
