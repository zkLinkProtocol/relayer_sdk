import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Arbitrum_Adapter, Arbitrum_AdapterInterface } from "../../../../contracts/chain-adapters/Arbitrum_Adapter.sol/Arbitrum_Adapter";
declare type Arbitrum_AdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Arbitrum_Adapter__factory extends ContractFactory {
    constructor(...args: Arbitrum_AdapterConstructorParams);
    deploy(_l1ArbitrumInbox: string, _l1ERC20GatewayRouter: string, _l2RefundL2Address: string, _l1Usdc: string, _cctpTokenMessenger: string, overrides?: Overrides & {
        from?: string;
    }): Promise<Arbitrum_Adapter>;
    getDeployTransaction(_l1ArbitrumInbox: string, _l1ERC20GatewayRouter: string, _l2RefundL2Address: string, _l1Usdc: string, _cctpTokenMessenger: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Arbitrum_Adapter;
    connect(signer: Signer): Arbitrum_Adapter__factory;
    static readonly bytecode = "0x6101403461012257601f61142538819003918201601f19168301916001600160401b038311848410176101265780849260a094604052833981010312610122578051906001600160a01b03908183168303610122576020810151918083168303610122576040820151918183168303610122576060810151908282168203610122576080015191821682036101225760a05260c052600360805261010092835261012091825260e052604051906112ea928361013b843960805183818161060a0152610786015260a0518381816106cf01528181610c340152610d7d015260c0518381816105ac015261069f015260e0518381816101c00152818161041e0152610b3001525182818161021a01526103640152518181816104c701526109700152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080604081815260049182361015610015575f80fd5b5f3560e01c90816306dd524814610da15750806311eac85514610d335780631fc1ba7614610c9857806328f2716e14610c5d57806352c8c75c1461062e5780636e400983146105d05780639748cf7c14610562578063a253166914610523578063a567bbf0146104eb578063b077d3991461047d578063c735281e14610442578063cc7a3290146103d4578063e5216af714610388578063e585cc471461031a5763e6eb8ade146100c4575f80fd5b807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a9576100f5610ddc565b916024359167ffffffffffffffff83116102a957366023840112156102a957828201359361012285610e89565b9461012f83519687610e48565b80865260209436602483830101116102a957815f926024889301838a01378701015266470de4df820000908147106102be57849073ffffffffffffffffffffffffffffffffffffffff8091855194859384927f679b6ded0000000000000000000000000000000000000000000000000000000084521680988301525f6024830152662386f26fc100006044830152827f0000000000000000000000000000000000000000000000000000000000000000168060648401526084830152621e848060a483015264012a05f20060c483015261010060e48301528161021661010482018c610f46565b03927f0000000000000000000000000000000000000000000000000000000000000000165af180156102b457610286575b507f9e6c52944e331ba6270e7fe4cea2a4086bae8f7a27e1cdba07f416806f5d0ac493818061028193519586958652850152830190610f46565b0390a1005b8390813d83116102ad575b61029b8183610e48565b810103126102a9575f610247565b5f80fd5b503d610291565b82513d5f823e3d90fd5b606484868551917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601860248201527f496e73756666696369656e74204554482062616c616e636500000000000000006044820152fd5b50346102a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a9576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346102a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a95760209051736b175474e89094c44da98b954eedeac495271d0f8152f35b50346102a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a9576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346102a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a95760209051621e84808152f35b50346102a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a9576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346102a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a957602090515f8152f35b50346102a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a95760209051662386f26fc100008152f35b50346102a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a9576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346102a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a9576020905163ffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b509060807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a957610662610ddc565b91602490813573ffffffffffffffffffffffffffffffffffffffff8082168092036102a95760648035828116966044803597928990036102a957847f00000000000000000000000000000000000000000000000000000000000000001680151580610c30575b15610954577f0000000000000000000000000000000000000000000000000000000000000000906106fa8a8284610f89565b88517fcb75c11c00000000000000000000000000000000000000000000000000000000815260209283828781865afa91821561090d578993929185915f93610917575b50841691888d51809681937fa56ec632000000000000000000000000000000000000000000000000000000008352868c840152165afa92831561090d575f936108de575b5091967f000000000000000000000000000000000000000000000000000000000000000063ffffffff1692908c805b6107fe5750505050505050505050917fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b959391608095935b82519516855260208501528301526060820152a1005b8c8f8b8311156108d7578b915b51907f6fd3504e000000000000000000000000000000000000000000000000000000008252828b830152878c83015289820152848482015287816084815f8a5af180156108cd57610892575b50810390811161086757806107b0565b886011897f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b8781813d83116108c6575b6108a78183610e48565b810103126102a9575167ffffffffffffffff8116036102a9575f610857565b503d61089d565b8f513d5f823e3d90fd5b829161080b565b9092508381813d8311610906575b6108f68183610e48565b810103126102a95751915f610781565b503d6108ec565b8b513d5f823e3d90fd5b9250935081813d831161094d575b61092f8183610e48565b810103126102a957519188831683036102a95783898094929061073d565b503d610925565b505091506628db3066eac000979695949790814710610bd457837f0000000000000000000000000000000000000000000000000000000000000000168951927fbda009fe000000000000000000000000000000000000000000000000000000008452858a169081868601526020858581865afa948515610bca578a958a915f91610b85575b50906109e59184610f89565b8b5195662386f26fc1000060208801528c808801525f606088015260608752610a0d87610dff565b8c736b175474e89094c44da98b954eedeac495271d0f8403610af8575f9697610a8c9151988997889687957fd2ce7d650000000000000000000000000000000000000000000000000000000087528601528401528b6044840152620493e0606484015264012a05f200608484015260c060a484015260c4830190610f46565b03925af18015610aee5791608096959493917fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b9893610acc575b506107e8565b610ae7903d805f833e610adf8183610e48565b810190610ee4565b505f610ac6565b87513d5f823e3d90fd5b5f9650610a8c9051978896879586947f4fb1a07b0000000000000000000000000000000000000000000000000000000086528501528a7f000000000000000000000000000000000000000000000000000000000000000016908401528c60448401528b6064840152620493e0608484015264012a05f20060a484015260e060c484015260e4830190610f46565b92965050506020813d602011610bc2575b81610ba360209383610e48565b810103126102a957519386851685036102a957899489906109e56109d9565b3d9150610b96565b8c513d5f823e3d90fd5b82601860649260208c51937f08c379a00000000000000000000000000000000000000000000000000000000085528401528201527f496e73756666696369656e74204554482062616c616e636500000000000000006044820152fd5b50857f000000000000000000000000000000000000000000000000000000000000000016868c16146106c8565b50346102a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a95760209051620493e08152f35b50346102a95760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a95781359063ffffffff82168092036102a95764012a05f2009180830292830403610d0757662386f26fc10000918201809211610d07576020925051908152f35b6011837f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b50346102a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a9576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b346102a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a9578064012a05f20060209252f35b6004359073ffffffffffffffffffffffffffffffffffffffff821682036102a957565b6080810190811067ffffffffffffffff821117610e1b57604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610e1b57604052565b67ffffffffffffffff8111610e1b57601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f5b838110610ed45750505f910152565b8181015183820152602001610ec5565b6020818303126102a95780519067ffffffffffffffff82116102a9570181601f820112156102a9578051610f1781610e89565b92610f256040519485610e48565b818452602082840101116102a957610f439160208085019101610ec3565b90565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f602093610f8281518092818752878088019101610ec3565b0116010190565b9073ffffffffffffffffffffffffffffffffffffffff809216906040928351917fdd62ed3e00000000000000000000000000000000000000000000000000000000835230600484015216918260248301526020948583604481855afa9283156111da575f936111ab575b50820180921161117e57835191858301937f095ea7b3000000000000000000000000000000000000000000000000000000008552602484015260448301526044825261103e82610dff565b83519184830183811067ffffffffffffffff821117610e1b5785528583527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656483870152516110b9935f91829182855af13d15611176573d9161109f83610e89565b926110ac87519485610e48565b83523d5f8885013e6111e4565b8051838115918215611156575b50509050156110d3575050565b6084925051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152fd5b83809293500103126102a95782015180151581036102a95780835f6110c6565b6060916111e4565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b9092508581813d83116111d3575b6111c38183610e48565b810103126102a95751915f610ff3565b503d6111b9565b85513d5f823e3d90fd5b9192901561125f57508151156111f8575090565b3b156112015790565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b8251909150156112725750805190602001fd5b6112b0906040519182917f08c379a0000000000000000000000000000000000000000000000000000000008352602060048401526024830190610f46565b0390fdfea2646970667358221220b2d3d062cab2e83f61a9ac3971334d166f012d573c05afefb6f17b04aa3d13b164736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ArbitrumL1InboxLike";
            readonly name: "_l1ArbitrumInbox";
            readonly type: "address";
        }, {
            readonly internalType: "contract ArbitrumL1ERC20GatewayLike";
            readonly name: "_l1ERC20GatewayRouter";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_l2RefundL2Address";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "_l1Usdc";
            readonly type: "address";
        }, {
            readonly internalType: "contract ITokenMessenger";
            readonly name: "_cctpTokenMessenger";
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
        readonly name: "L1_DAI";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L1_ERC20_GATEWAY_ROUTER";
        readonly outputs: readonly [{
            readonly internalType: "contract ArbitrumL1ERC20GatewayLike";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L1_INBOX";
        readonly outputs: readonly [{
            readonly internalType: "contract ArbitrumL1InboxLike";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L2_CALL_VALUE";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L2_GAS_PRICE";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L2_MAX_SUBMISSION_COST";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L2_REFUND_L2_ADDRESS";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "RELAY_MESSAGE_L2_GAS_LIMIT";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
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
        readonly name: "cctpTokenMessenger";
        readonly outputs: readonly [{
            readonly internalType: "contract ITokenMessenger";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "l2GasLimit";
            readonly type: "uint32";
        }];
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
        readonly name: "recipientCircleDomainId";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
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
    }, {
        readonly inputs: readonly [];
        readonly name: "usdcToken";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): Arbitrum_AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Arbitrum_Adapter;
}
export {};
