"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockHubPool__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_adapter",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "oldAdapter",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newAdapter",
                type: "address",
            },
        ],
        name: "AdapterChanged",
        type: "event",
    },
    {
        stateMutability: "payable",
        type: "fallback",
    },
    {
        inputs: [],
        name: "adapter",
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
                name: "target",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "l2CallData",
                type: "bytes",
            },
        ],
        name: "arbitraryMessage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "l2Token",
                type: "address",
            },
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_adapter",
                type: "address",
            },
        ],
        name: "changeAdapter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
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
                name: "l1Token",
                type: "address",
            },
            {
                internalType: "address",
                name: "l2Token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
        ],
        name: "relayTokens",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
const _bytecode = "0x60a03461008757601f61090438819003918201601f19168301916001600160401b0383118484101761008b5780849260209460405283398101031261008757516001600160a01b03811690819003610087575f80546001600160a01b0319169190911790553360805260405161086490816100a0823960805181818161023901526103be0152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe608060408181526004918236101561001f575b505050361561001d57005b005b5f3560e01c90816303eadcfc146105db5750806352c8c75c146104f95780637770a8a7146103e25780638da5cb5b14610374578063ae0bcf2b146101e65763f7888aec1461006d5780610012565b346101e257807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101e2576100a3610628565b916100ac61064b565b73ffffffffffffffffffffffffffffffffffffffff92835f5416938151927f70a0823100000000000000000000000000000000000000000000000000000000602085015216602483015260248252606082019282841067ffffffffffffffff8511176101b65761001d5f808789886101a47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08a838b526101778160808101967fe6eb8ade000000000000000000000000000000000000000000000000000000008852608482016107aa565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8081018452018261066e565b51915af46101b0610716565b50610745565b6041907f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b5f80fd5b5090346101e25760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101e25761021f610628565b9073ffffffffffffffffffffffffffffffffffffffff91827f00000000000000000000000000000000000000000000000000000000000000001633036103175782169283156102ba5750505f54827fffffffffffffffffffffffff00000000000000000000000000000000000000008216175f55167fc3f1d9acbad3d58bdbd12ae988485b64e4247fde6ecb72188ee8e0edaf73ca3e5f80a3005b90602060649251917f08c379a0000000000000000000000000000000000000000000000000000000008352820152600f60248201527f4e4f5f5a45524f5f4144445245535300000000000000000000000000000000006044820152fd5b60648260208651917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601760248201527f43616c6c6572206973206e6f7420746865206f776e65720000000000000000006044820152fd5b50346101e2575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101e2576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b5090346101e257817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101e25761041a610628565b6024359167ffffffffffffffff83116101e257366023840112156101e25782013592610445846106dc565b916104528251938461066e565b84835236602486860101116101e2576104cd6101a45f95948660208961001d9a6024849a01838601378301015273ffffffffffffffffffffffffffffffffffffffff865416945192839160208301957fe6eb8ade000000000000000000000000000000000000000000000000000000008752602484016107aa565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0810183528261066e565b50346101e25760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101e257610531610628565b61053961064b565b926064359273ffffffffffffffffffffffffffffffffffffffff938481168091036101e257845f5416948251968160208901967f52c8c75c000000000000000000000000000000000000000000000000000000008852166024890152166044870152604435606487015260848601526084855260c085019185831067ffffffffffffffff8411176101b65761001d5f8087878a88885251915af46101b0610716565b346101e2575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101e25760209073ffffffffffffffffffffffffffffffffffffffff5f54168152f35b6004359073ffffffffffffffffffffffffffffffffffffffff821682036101e257565b6024359073ffffffffffffffffffffffffffffffffffffffff821682036101e257565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176106af57604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b67ffffffffffffffff81116106af57601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b3d15610740573d90610727826106dc565b91610735604051938461066e565b82523d5f602084013e565b606090565b1561074c57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f64656c656761746563616c6c206661696c6564000000000000000000000000006044820152fd5b9073ffffffffffffffffffffffffffffffffffffffff909392931681526020604060208301528351938460408401525f5b85811061081a575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f845f6060809697860101520116010190565b8181018301518482016060015282016107db56fea2646970667358221220957ba0eb212eb5292adefefadf937ae68095baeeb0a0abe19fd94b814672e15964736f6c63430008170033";
const isSuperArgs = (xs) => xs.length > 1;
class MockHubPool__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_adapter, overrides) {
        return super.deploy(_adapter, overrides || {});
    }
    getDeployTransaction(_adapter, overrides) {
        return super.getDeployTransaction(_adapter, overrides || {});
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
exports.MockHubPool__factory = MockHubPool__factory;
MockHubPool__factory.bytecode = _bytecode;
MockHubPool__factory.abi = _abi;
