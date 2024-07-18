"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockBedrockL2StandardBridge__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_localToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "_remoteToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_minGasLimit",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_extraData",
                type: "bytes",
            },
        ],
        name: "bridgeERC20To",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_l2Token",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "uint32",
                name: "_minGasLimit",
                type: "uint32",
            },
            {
                internalType: "bytes",
                name: "_extraData",
                type: "bytes",
            },
        ],
        name: "withdrawTo",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
const _bytecode = "0x60808060405234610016576102ba908161001b8239f35b5f80fdfe6080806040526004361015610012575f80fd5b5f3560e01c9081634823f114146100a3575063a3a7954814610032575f80fd5b60a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261009f57610064610210565b5061006d610233565b5060643563ffffffff81160361009f5760843567ffffffffffffffff811161009f5761009d903690600401610256565b005b5f80fd5b3461009f5760c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261009f576100da610210565b6100e2610233565b5073ffffffffffffffffffffffffffffffffffffffff906044358281160361009f5760a43567ffffffffffffffff9283821161009f57845f60649260209561012f84963690600401610256565b50507f23b872dd00000000000000000000000000000000000000000000000000000000845233600485015230602485015284356044850152165af180156102055761017657005b6020903d6020116101fd575b601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168301908111838210176101d05760209183916040528101031261009f57518015150361009f57005b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b3d9150610182565b6040513d5f823e3d90fd5b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361009f57565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361009f57565b9181601f8401121561009f5782359167ffffffffffffffff831161009f576020838186019501011161009f5756fea2646970667358221220cc2f2171b69b82f91de10325c310a1741c415eb84f33e32d1345f15d2c7382ed64736f6c63430008170033";
const isSuperArgs = (xs) => xs.length > 1;
class MockBedrockL2StandardBridge__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.MockBedrockL2StandardBridge__factory = MockBedrockL2StandardBridge__factory;
MockBedrockL2StandardBridge__factory.bytecode = _bytecode;
MockBedrockL2StandardBridge__factory.abi = _abi;
