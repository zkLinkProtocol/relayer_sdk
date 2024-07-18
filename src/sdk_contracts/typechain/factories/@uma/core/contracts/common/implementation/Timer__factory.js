"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
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
                internalType: "uint256",
                name: "time",
                type: "uint256",
            },
        ],
        name: "setCurrentTime",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60808060405234601757425f5560d0908161001c8239f35b5f80fdfe60808060405260043610156011575f80fd5b5f3560e01c806322f8e566146066576329cb924d14602d575f80fd5b346062575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126062576020905f548152f35b5f80fd5b3460625760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126062576004355f5500fea264697066735822122046cf1f280de2c02a68d3cab98cf8e794d47c37e9e9db6b987606a60fde15edbc64736f6c63430008170033";
const isSuperArgs = (xs) => xs.length > 1;
class Timer__factory extends ethers_1.ContractFactory {
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
exports.Timer__factory = Timer__factory;
Timer__factory.bytecode = _bytecode;
Timer__factory.abi = _abi;
