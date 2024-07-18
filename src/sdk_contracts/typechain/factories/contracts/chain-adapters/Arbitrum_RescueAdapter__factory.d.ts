import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Arbitrum_RescueAdapter, Arbitrum_RescueAdapterInterface } from "../../../contracts/chain-adapters/Arbitrum_RescueAdapter";
declare type Arbitrum_RescueAdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Arbitrum_RescueAdapter__factory extends ContractFactory {
    constructor(...args: Arbitrum_RescueAdapterConstructorParams);
    deploy(_l1ArbitrumInbox: string, overrides?: Overrides & {
        from?: string;
    }): Promise<Arbitrum_RescueAdapter>;
    getDeployTransaction(_l1ArbitrumInbox: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Arbitrum_RescueAdapter;
    connect(signer: Signer): Arbitrum_RescueAdapter__factory;
    static readonly bytecode = "0x6101403461011157601f61099238819003918201601f19168301916001600160401b038311848410176101155780849260209460405283398101031261011157516001600160a01b038116810361011157662386f26fc1000060805264012a05f20060a052621e848060c0526101009073d297fa914353c44b2e33ebe05f21846f1048cfeb82526101209081523360e05260405190610868928361012a84396080518381816101c1015281816103cf0152610782015260a05183818161021e015281816104f301526107ca015260c0518381816101f70152818161042c01526107a3015260e051838181610197015261049a0152518281816102ae015261068a01525181818161025401526105600152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe60406080815260049081361015610014575f80fd5b5f3560e01c806308f1ed15146106ae5780631cf3ec031461064057806352c8c75c146105845780638134f385146105165780639ae36685146104be5780639c3ba20014610450578063cf6e65b7146103f2578063e599477e1461039a5763e6eb8ade1461007f575f80fd5b807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102ff576100b06106ef565b5060249182359067ffffffffffffffff8083116102ff57366023840112156102ff578282013590811161036f576020928451610113857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601160182610712565b82815284810192368882850101116102ff5785815f928a8396018737830101528051810103126102ff5751610146610780565b948547106103145790610124849273ffffffffffffffffffffffffffffffffffffffff97875195869485937f6e6e8a6a0000000000000000000000000000000000000000000000000000000085528b7f00000000000000000000000000000000000000000000000000000000000000001680938601528401527f00000000000000000000000000000000000000000000000000000000000000006044840152806064840152608483015263ffffffff7f00000000000000000000000000000000000000000000000000000000000000001660a48301527f000000000000000000000000000000000000000000000000000000000000000060c483015261010060e48301525f610104830152887f0000000000000000000000000000000000000000000000000000000000000000165af1801561030a576102d9575b7f9e6c52944e331ba6270e7fe4cea2a4086bae8f7a27e1cdba07f416806f5d0ac46060855f8680878151947f0000000000000000000000000000000000000000000000000000000000000000168552840152820152a1005b90809391813d8311610303575b6102f08183610712565b810103126102ff57915f610281565b5f80fd5b503d6102e6565b83513d5f823e3d90fd5b601891506064938551937f08c379a00000000000000000000000000000000000000000000000000000000085528401528201527f496e73756666696369656e74204554482062616c616e636500000000000000006044820152fd5b846041837f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b50346102ff575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102ff57602090517f00000000000000000000000000000000000000000000000000000000000000008152f35b50346102ff575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102ff576020905163ffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346102ff575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102ff576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346102ff575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102ff57602090517f00000000000000000000000000000000000000000000000000000000000000008152f35b50346102ff575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102ff576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b509060807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102ff576105b86106ef565b5073ffffffffffffffffffffffffffffffffffffffff602435818116036102ff57606435908116036102ff57602060649251917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601060248201527f7573656c6573732066756e6374696f6e000000000000000000000000000000006044820152fd5b50346102ff575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102ff576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346102ff575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102ff576020906106e8610780565b9051908152f35b6004359073ffffffffffffffffffffffffffffffffffffffff821682036102ff57565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761075357604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000063ffffffff167f00000000000000000000000000000000000000000000000000000000000000008181029181159183041417156108055781018091116108055790565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffdfea2646970667358221220a19c90ee2f69c75165b02b31e7ada5304ba8476ac1ee0c4f569966f457c56d8864736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ArbitrumL1InboxLike";
            readonly name: "_l1ArbitrumInbox";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "MessageRelayed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "l1Token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "l2Token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "TokensRelayed";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "aliasedL2HubPoolAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getL1CallValue";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "l1Inbox";
        readonly outputs: readonly [{
            readonly internalType: "contract ArbitrumL1InboxLike";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "l2GasLimit";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "l2GasPrice";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "l2MaxSubmissionCost";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "l2RefundL2Address";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "relayMessage";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "relayTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): Arbitrum_RescueAdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Arbitrum_RescueAdapter;
}
export {};
