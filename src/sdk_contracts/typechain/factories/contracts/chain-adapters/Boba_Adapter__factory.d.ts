import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Boba_Adapter, Boba_AdapterInterface } from "../../../contracts/chain-adapters/Boba_Adapter";
declare type Boba_AdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Boba_Adapter__factory extends ContractFactory {
    constructor(...args: Boba_AdapterConstructorParams);
    deploy(_l1Weth: string, _crossDomainMessenger: string, _l1StandardBridge: string, overrides?: Overrides & {
        from?: string;
    }): Promise<Boba_Adapter>;
    getDeployTransaction(_l1Weth: string, _crossDomainMessenger: string, _l1StandardBridge: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Boba_Adapter;
    connect(signer: Signer): Boba_Adapter__factory;
    static readonly bytecode = "0x610100346100e257601f610d1638819003918201601f19168301916001600160401b038311848410176100e6578084926060946040528339810103126100e25780516001600160a01b039182821682036100e25760208101519083821682036100e2576040015192831683036100e257608052621e848060a05260c05260e052604051610c1b90816100fb823960805181818160eb0152610253015260a051818181610163015281816102b20152818161042501526106bc015260c05181818161034b01526109be015260e0518181816103c0015281816104f501526109520152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080604081815260049081361015610015575f80fd5b5f925f3560e01c9081631efd482a146109765750806335a2db6a1461090857806352c8c75c146102d65780635e743ef714610277578063927ede2d146102085763e6eb8ade14610063575f80fd5b807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610204576100946109e2565b91602435928467ffffffffffffffff918286116102005736602387011215610200578584013592831161020057602486019560248436920101116102005773ffffffffffffffffffffffffffffffffffffffff90817f00000000000000000000000000000000000000000000000000000000000000001690813b156101fc57839187519384927f3dbb202b0000000000000000000000000000000000000000000000000000000084521680978301526060602483015281838161015c8c8a6064840191610a87565b63ffffffff7f000000000000000000000000000000000000000000000000000000000000000016604483015203925af180156101f2576101da575b50507f9e6c52944e331ba6270e7fe4cea2a4086bae8f7a27e1cdba07f416806f5d0ac4936101d49184519485948552806020860152840191610a87565b0390a180f35b6101e390610a05565b6101ee57845f610197565b8480fd5b85513d84823e3d90fd5b8380fd5b5080fd5b8280fd5b83823461020057817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610200576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b83823461020057817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610200576020905163ffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b509060807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126107735761030a6109e2565b90602490813573ffffffffffffffffffffffffffffffffffffffff8082168092036107735760449384359360643595838716809703610773579683169689937f000000000000000000000000000000000000000000000000000000000000000081168981036104e857803b156104bc57858091868d51809481937f2e1a7d4d0000000000000000000000000000000000000000000000000000000083528d8a8401525af19081156104de5786916104ca575b50507f000000000000000000000000000000000000000000000000000000000000000016803b156101ee5784928760849260608b958e5198899788967f9a2ac6d500000000000000000000000000000000000000000000000000000000885287015263ffffffff7f000000000000000000000000000000000000000000000000000000000000000016908601528401528560648401525af180156104c0576104a0575b5050907fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b9460809493925b815194855260208501528301526060820152a180f35b6104ae909594939295610a05565b6104bc57909192855f61045f565b8580fd5b87513d84823e3d90fd5b6104d390610a05565b6101ee57845f6103bc565b8b513d88823e3d90fd5b50909192935097949596977f00000000000000000000000000000000000000000000000000000000000000001685517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230848201528185820152808a818560209485935afa9081156108fe575f916108d1575b508881018091116108a6578751828101917f095ea7b3000000000000000000000000000000000000000000000000000000008352848883015285820152848152608081019167ffffffffffffffff918084108385111761087b5760c0810184811084821117610850575f928f91849384918f528888527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460a082015251925af13d15610842573d918211610817579061065492918a5191610645867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160184610a46565b82523d5f8684013e5b8d610ac5565b80518281159182156107f7575b50509050156107775750803b15610773575f928360e4928a8c95898b51998a9889977f838b252000000000000000000000000000000000000000000000000000000000895288015286015284015289606484015263ffffffff7f000000000000000000000000000000000000000000000000000000000000000016608484015260c060a48401528160c48401525af1801561076957610729575b5091608093917fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b959361048a565b7fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b95939196509161075c60809593610a05565b5f969193955091936106fb565b83513d5f823e3d90fd5b5f80fd5b837f5361666545524332303a204552433230206f7065726174696f6e20646964206e84602a886084958c51957f08c379a00000000000000000000000000000000000000000000000000000000087528601528401528201527f6f742073756363656564000000000000000000000000000000000000000000006064820152fd5b83809293500103126107735781015180151581036107735780825f610661565b876041887f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b61065492915060609061064e565b8960418a7f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b886041897f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b856011867f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b90508181813d83116108f7575b6108e88183610a46565b8101031261077357515f61055d565b503d6108de565b88513d5f823e3d90fd5b5034610773575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610773576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b34610773575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126107735760209073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361077357565b67ffffffffffffffff8111610a1957604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610a1957604052565b601f82602094937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe093818652868601375f8582860101520116010190565b91929015610b405750815115610ad9575090565b3b15610ae25790565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b825190915015610b535750805190602001fd5b604051907f08c379a00000000000000000000000000000000000000000000000000000000082528160208060048301528251928360248401525f5b848110610bce575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f835f604480968601015201168101030190fd5b818101830151868201604401528593508201610b8e56fea26469706673582212202fd35c3b934786d939c8f972482146f57ca9ef9647c55d53c0bea7bbfb62f23664736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract WETH9Interface";
            readonly name: "_l1Weth";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_crossDomainMessenger";
            readonly type: "address";
        }, {
            readonly internalType: "contract IL1StandardBridge";
            readonly name: "_l1StandardBridge";
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
        readonly name: "L1_STANDARD_BRIDGE";
        readonly outputs: readonly [{
            readonly internalType: "contract IL1StandardBridge";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L1_WETH";
        readonly outputs: readonly [{
            readonly internalType: "contract WETH9Interface";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L2_GAS_LIMIT";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "MESSENGER";
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
            readonly name: "target";
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
            readonly name: "l1Token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "l2Token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "relayTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): Boba_AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Boba_Adapter;
}
export {};
