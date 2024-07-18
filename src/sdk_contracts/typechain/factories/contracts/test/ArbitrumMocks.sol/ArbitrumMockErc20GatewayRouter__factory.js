"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArbitrumMockErc20GatewayRouter__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "getGateway",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "outboundTransfer",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "outboundTransferCustomRefund",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
];
const _bytecode = "0x6080806040523461001657610323908161001b8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c80634fb1a07b146100f8578063bda009fe146100b65763d2ce7d651461003a575f80fd5b60c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b25761006c610179565b5061007561019c565b5060a43567ffffffffffffffff81116100b2576100a261009c6100ae9236906004016101bf565b90610251565b604051918291826101ed565b0390f35b5f80fd5b346100b25760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b2576100ed610179565b506020604051308152f35b60e07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b25761012a610179565b5061013361019c565b5060443573ffffffffffffffffffffffffffffffffffffffff8116036100b25760c43567ffffffffffffffff81116100b2576100a261009c6100ae9236906004016101bf565b6004359073ffffffffffffffffffffffffffffffffffffffff821682036100b257565b6024359073ffffffffffffffffffffffffffffffffffffffff821682036100b257565b9181601f840112156100b25782359167ffffffffffffffff83116100b257602083818601950101116100b257565b6020808252825181830181905293925f5b85811061023d575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f845f6040809697860101520116010190565b8181018301518482016040015282016101fe565b9067ffffffffffffffff918282116102c05760405192601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168401908111848210176102c05760405281835236828201116100b257815f92602092838601378301015290565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffdfea264697066735822122060a01995485e133f6b534a5d39ec669c2d7a60925ad0253d11e7c87963d7d3a764736f6c63430008170033";
const isSuperArgs = (xs) => xs.length > 1;
class ArbitrumMockErc20GatewayRouter__factory extends ethers_1.ContractFactory {
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
exports.ArbitrumMockErc20GatewayRouter__factory = ArbitrumMockErc20GatewayRouter__factory;
ArbitrumMockErc20GatewayRouter__factory.bytecode = _bytecode;
ArbitrumMockErc20GatewayRouter__factory.abi = _abi;
