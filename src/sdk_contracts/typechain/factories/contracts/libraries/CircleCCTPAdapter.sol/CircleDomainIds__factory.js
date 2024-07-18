"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleDomainIds__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "Arbitrum",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "Base",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "Ethereum",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "Optimism",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "Polygon",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "UNINTIALIZED",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x6080806040523461001a576101d1908161001f823930815050f35b5f80fdfe60806040908082526004361015610014575f80fd5b5f3560e01c9081631c32a09e146101695750806358111a4a146101325780635ea102b0146100fe578063731f7ec0146100ca578063a29256bd146100975763abe8bf3614610060575f80fd5b5f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610093576020905160078152f35b5f80fd5b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261009357602090515f8152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610093576020905160038152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610093576020905160068152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610093576020905163ffffffff8152f35b5f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100935780600260209252f3fea2646970667358221220c85d6e0ed700c8c741986fd93fd99c3e71ce4076e1f3902b8beb4d066567101f64736f6c63430008170033";
const isSuperArgs = (xs) => xs.length > 1;
class CircleDomainIds__factory extends ethers_1.ContractFactory {
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
exports.CircleDomainIds__factory = CircleDomainIds__factory;
CircleDomainIds__factory.bytecode = _bytecode;
CircleDomainIds__factory.abi = _abi;
