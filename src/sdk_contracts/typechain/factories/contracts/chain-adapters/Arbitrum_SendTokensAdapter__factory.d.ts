import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Arbitrum_SendTokensAdapter, Arbitrum_SendTokensAdapterInterface } from "../../../contracts/chain-adapters/Arbitrum_SendTokensAdapter";
declare type Arbitrum_SendTokensAdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Arbitrum_SendTokensAdapter__factory extends ContractFactory {
    constructor(...args: Arbitrum_SendTokensAdapterConstructorParams);
    deploy(_l1ERC20GatewayRouter: string, _l2RefundL2Address: string, overrides?: Overrides & {
        from?: string;
    }): Promise<Arbitrum_SendTokensAdapter>;
    getDeployTransaction(_l1ERC20GatewayRouter: string, _l2RefundL2Address: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Arbitrum_SendTokensAdapter;
    connect(signer: Signer): Arbitrum_SendTokensAdapter__factory;
    static readonly bytecode = "0x610100346100d657601f610c8938819003918201601f19168301916001600160401b038311848410176100da5780849260409485528339810103126100d65780516001600160a01b039182821682036100d6576020015191821682036100d657662386f26fc1000060805264012a05f20060a05260c05260e052604051610b9a90816100ef82396080518181816102df0152818161061f0152610a09015260a051818181610386015281816106e501526109d4015260c0518181816101490152610848015260e05181818161034c015261068c0152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe604060808152600480361015610013575f80fd5b5f3560e01c806308f1ed151461086c5780631ba4a9cb146107fe57806328f2716e146107c357806352c8c75c146107085780639ae36685146106b05780639c3ba20014610642578063e599477e146105ea5763e6eb8ade14610073575f80fd5b817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610430576100a46108ad565b9060249081359167ffffffffffffffff9182841161043057366023850112156104305783810135936100d58561095a565b906100e288519283610919565b858252602095868301913686838301011161043057815f92878a9301853784010152878280518101031261043057519073ffffffffffffffffffffffffffffffffffffffff90818316809303610430578801519261013e6109ce565b9182471061058f57807f000000000000000000000000000000000000000000000000000000000000000016948a517fbda009fe0000000000000000000000000000000000000000000000000000000081528584820152898189818a5afa908115610585575f9161054f575b50828c51917fdd62ed3e0000000000000000000000000000000000000000000000000000000083523086840152169081898201528a816044818a5afa80156105455783905f90610514575b6101fe9250610994565b908c51918b8301917f095ea7b30000000000000000000000000000000000000000000000000000000083528a84015260448301526044825261023f826108d0565b8c51918d83018381108c8211176104e9575f8f916102b995948f94839285528587527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564868801525190828d5af1903d156104df573d6102a96102a08261095a565b92519283610919565b81525f81933d92013e5b88610a94565b80518a81159182156104bf575b505090501561043e575f9695949392916103bb918c51917f00000000000000000000000000000000000000000000000000000000000000008c8401528d808401528960608401526060835261031a836108d0565b8d519c8d998a9889977f4fb1a07b000000000000000000000000000000000000000000000000000000008952880152827f000000000000000000000000000000000000000000000000000000000000000016908701521660448501526064840152620493e060848401527f000000000000000000000000000000000000000000000000000000000000000060a484015260e060c484015260e4830190610a51565b03925af18015610434576103cb57005b3d805f853e6103da8185610919565b830192828185031261043057805191821161043057019082601f830112156104305781519261041461040b8561095a565b95519586610919565b838552818484010111610430578061042e94019101610a30565b005b5f80fd5b84513d5f823e3d90fd5b608483602a898c8f51937f08c379a00000000000000000000000000000000000000000000000000000000085528401528201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152fd5b838092935001031261043057890151801515810361043057808a5f6102c6565b50606091506102b3565b8a6041887f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b50508a81813d831161053e575b61052b8183610919565b8101031261043057826101fe91516101f4565b503d610521565b8d513d5f823e3d90fd5b90508981813d831161057e575b6105668183610919565b8101031261043057518281168103610430575f6101a9565b503d61055c565b8c513d5f823e3d90fd5b6064826018888b8e51937f08c379a00000000000000000000000000000000000000000000000000000000085528401528201527f496e73756666696369656e74204554482062616c616e636500000000000000006044820152fd5b8234610430575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261043057602090517f00000000000000000000000000000000000000000000000000000000000000008152f35b8234610430575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610430576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b8234610430575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261043057602090517f00000000000000000000000000000000000000000000000000000000000000008152f35b5060807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104305761073b6108ad565b5073ffffffffffffffffffffffffffffffffffffffff60243581811603610430576064359081160361043057602060649251917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601460248201527f72656c6179546f6b656e732064697361626c65640000000000000000000000006044820152fd5b8234610430575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104305760209051620493e08152f35b8234610430575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610430576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b8234610430575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610430576020906108a66109ce565b9051908152f35b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361043057565b6080810190811067ffffffffffffffff8211176108ec57604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176108ec57604052565b67ffffffffffffffff81116108ec57601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b919082018092116109a157565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b620493e07f00000000000000000000000000000000000000000000000000000000000000008181029181159183041417156109a157610a2d907f0000000000000000000000000000000000000000000000000000000000000000610994565b90565b5f5b838110610a415750505f910152565b8181015183820152602001610a32565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f602093610a8d81518092818752878088019101610a30565b0116010190565b91929015610b0f5750815115610aa8575090565b3b15610ab15790565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b825190915015610b225750805190602001fd5b610b60906040519182917f08c379a0000000000000000000000000000000000000000000000000000000008352602060048401526024830190610a51565b0390fdfea2646970667358221220335fee92042f452f4d193cd76ad3f56468d5cc491cce30513652946d96406a0464736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ArbitrumL1ERC20GatewayLike";
            readonly name: "_l1ERC20GatewayRouter";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_l2RefundL2Address";
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
        readonly name: "RELAY_TOKENS_L2_GAS_LIMIT";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
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
        readonly name: "l1ERC20GatewayRouter";
        readonly outputs: readonly [{
            readonly internalType: "contract ArbitrumL1ERC20GatewayLike";
            readonly name: "";
            readonly type: "address";
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
    static createInterface(): Arbitrum_SendTokensAdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Arbitrum_SendTokensAdapter;
}
export {};
