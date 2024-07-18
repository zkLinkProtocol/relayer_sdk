"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreInterface__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "currency",
                type: "address",
            },
        ],
        name: "computeFinalFee",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "rawValue",
                        type: "uint256",
                    },
                ],
                internalType: "struct FixedPoint.Unsigned",
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
                internalType: "uint256",
                name: "startTime",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "endTime",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "rawValue",
                        type: "uint256",
                    },
                ],
                internalType: "struct FixedPoint.Unsigned",
                name: "pfc",
                type: "tuple",
            },
        ],
        name: "computeRegularFee",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "rawValue",
                        type: "uint256",
                    },
                ],
                internalType: "struct FixedPoint.Unsigned",
                name: "regularFee",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "rawValue",
                        type: "uint256",
                    },
                ],
                internalType: "struct FixedPoint.Unsigned",
                name: "latePenalty",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "payOracleFees",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "erc20Address",
                type: "address",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "rawValue",
                        type: "uint256",
                    },
                ],
                internalType: "struct FixedPoint.Unsigned",
                name: "amount",
                type: "tuple",
            },
        ],
        name: "payOracleFeesErc20",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class StoreInterface__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.StoreInterface__factory = StoreInterface__factory;
StoreInterface__factory.abi = _abi;
