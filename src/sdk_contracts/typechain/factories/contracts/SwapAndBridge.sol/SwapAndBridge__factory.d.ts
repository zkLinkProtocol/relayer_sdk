import { Signer, ContractFactory, BytesLike, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SwapAndBridge, SwapAndBridgeInterface } from "../../../contracts/SwapAndBridge.sol/SwapAndBridge";
declare type SwapAndBridgeConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SwapAndBridge__factory extends ContractFactory {
    constructor(...args: SwapAndBridgeConstructorParams);
    deploy(_spokePool: string, _exchange: string, _allowedSelectors: BytesLike[], _swapToken: string, _acrossInputToken: string, overrides?: Overrides & {
        from?: string;
    }): Promise<SwapAndBridge>;
    getDeployTransaction(_spokePool: string, _exchange: string, _allowedSelectors: BytesLike[], _swapToken: string, _acrossInputToken: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): SwapAndBridge;
    connect(signer: Signer): SwapAndBridge__factory;
    static readonly bytecode = "0x604061010060405234620001b857620015aa803803806200002081620001d0565b92833981019160a082840312620001b85781516001600160a01b03908181168103620001b857602092838501519283168303620001b85760408501516001600160401b039490858111620001b85786019680601f89011215620001b8578751958611620001bc576005978660051b9083806200009e818501620001d0565b809a81520192820101928311620001b8578301905b8282106200019657505050620000da6080620000d260608901620001f6565b9701620001f6565b96600195869560ff19956001875f5416175f5560805260a0525f955b6200015a575b888860c05260e05260405161139e90816200020c82396080518181816101da0152610ff4015260a05181818161042c015281816109ef0152610f9b015260c05181818160c901526108af015260e05181818161016c01526108d10152f35b8051861015620001905786809663ffffffff60e01b8582861b85010151165f52818552855f2082888254161790550195620000f6565b620000fc565b81516001600160e01b031981168103620001b8578152908301908301620000b3565b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6040519190601f01601f191682016001600160401b03811183821017620001bc57604052565b51906001600160a01b0382168203620001b85756fe60806040526004361015610011575f80fd5b5f3560e01c8063393bb94314610084578063652fa4b91461007f5780638021fef71461007a57806385f168eb14610075578063ac9650d814610070578063b50e44b81461006b5763e65ae3ae14610066575f80fd5b61045f565b6103e2565b61035a565b6101fe565b610190565b610122565b34610114575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101145773ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166080527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8060a0016080f35b5f80fd5b5f91031261011457565b34610114575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011457602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b34610114575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011457602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b346101145760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610114576004357fffffffff000000000000000000000000000000000000000000000000000000008116809103610114575f526001602052602060ff60405f2054166040519015158152f35b5f5b8381106102865750505f910152565b8181015183820152602001610277565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f6020936102d281518092818752878088019101610275565b0116010190565b6020808201906020835283518092526040830192602060408460051b8301019501935f915b84831061030e5750505050505090565b909192939495848061034a837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc086600196030187528a51610296565b98019301930191949392906102fe565b346101145760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101145767ffffffffffffffff6004358181116101145736602382011215610114578060040135918211610114573660248360051b83010111610114576103de9160246103d292016107ad565b604051918291826102d9565b0390f35b34610114575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011457602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b90816101409103126101145790565b346101145760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101145767ffffffffffffffff600435818111610114573660238201121561011457806004013582811161011457366024828401011161011457606435928311610114576104df6104ef933690600401610450565b9160443591602480359201610874565b005b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b67ffffffffffffffff811161053257604052565b6104f1565b6040810190811067ffffffffffffffff82111761053257604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761053257604052565b67ffffffffffffffff81116105325760051b60200190565b906105b682610594565b6105c36040519182610553565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe06105f18294610594565b01905f5b82811061060157505050565b8060606020809385010152016105f5565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe181360301821215610114570180359067ffffffffffffffff82116101145760200191813603831361011457565b908210156106ab576106a79160051b81019061063f565b9091565b610612565b908092918237015f815290565b67ffffffffffffffff811161053257601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b3d15610721573d90610708826106bd565b916107166040519384610553565b82523d5f602084013e565b606090565b6020818303126101145780519067ffffffffffffffff8211610114570181601f82011215610114578051610759816106bd565b926107676040519485610553565b81845260208284010111610114576107859160208085019101610275565b90565b906020610785928181520190610296565b80518210156106ab5760209160051b010190565b9190916107b9836105ac565b925f5b8181106107c857505050565b5f806107d5838587610690565b604093916107e78551809381936106b0565b0390305af4906107f56106f7565b911561081c57509060019161080a8288610799565b526108158187610799565b50016107bc565b9060448151106101145761087061084160049283810151602480918301019101610726565b92519283927f08c379a00000000000000000000000000000000000000000000000000000000084528301610788565b0390fd5b9193909260ff5f541615610afb576108ad7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff005f54165f55565b7f0000000000000000000000000000000000000000000000000000000000000000927f00000000000000000000000000000000000000000000000000000000000000009461093f61093b6109346109048486610b59565b7fffffffff00000000000000000000000000000000000000000000000000000000165f52600160205260405f2090565b5460ff1690565b1590565b610ad15761094f87303388610bfd565b6040517f70a082310000000000000000000000000000000000000000000000000000000080825230600483015273ffffffffffffffffffffffffffffffffffffffff98919260209182856024818c8f165afa948515610aab575f95610ab0575b506040519081523060048201529982908b9060249082908d165afa948515610aab57610a3b9a89935f97610a6b575b5050610a36925f92838093610a15887f00000000000000000000000000000000000000000000000000000000000000008096610ca6565b610a24604051809481936106b0565b03925af1610a306106f7565b90610bb7565b610eb1565b610a6960017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff005f5416175f55565b565b5f80949181949950610a36969381610a9792903d10610aa4575b610a8f8183610553565b810190610b9d565b98935050928194506109de565b503d610a85565b610bac565b83919550610aca90823d8411610aa457610a8f8183610553565b94906109af565b60046040517f42868c9b000000000000000000000000000000000000000000000000000000008152fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152fd5b7fffffffff000000000000000000000000000000000000000000000000000000009035818116939260048110610b8e57505050565b60040360031b82901b16169150565b90816020910312610114575190565b6040513d5f823e3d90fd5b15610bbf5750565b610870906040519182917f08c379a0000000000000000000000000000000000000000000000000000000008352602060048401526024830190610296565b9290604051927f23b872dd00000000000000000000000000000000000000000000000000000000602085015273ffffffffffffffffffffffffffffffffffffffff809216602485015216604483015260648201526064815260a081019181831067ffffffffffffffff84111761053257610a699260405261117d565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b60449192602073ffffffffffffffffffffffffffffffffffffffff604051948580927fdd62ed3e000000000000000000000000000000000000000000000000000000008252306004830152808916602483015286165afa928315610aab575f93610d82575b508201809211610d7d576040517f095ea7b300000000000000000000000000000000000000000000000000000000602082015273ffffffffffffffffffffffffffffffffffffffff939093166024840152604480840192909252908252610a699190610d78606483610553565b61117d565b610c79565b610d9c91935060203d602011610aa457610a8f8183610553565b915f610d0b565b91908203918211610d7d57565b3573ffffffffffffffffffffffffffffffffffffffff811681036101145790565b3563ffffffff811681036101145790565b601f82602094937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe093818652868601375f8582860101520116010190565b989590946107859d9b9792602095610ea39a959c976101809d8d73ffffffffffffffffffffffffffffffffffffffff998a8096818096168452169101521660408d01521660608b015260808a015260a089015260c08801521660e086015263ffffffff8092166101008601521661012084015261014083019063ffffffff169052565b816101608201520191610de2565b604080517f70a082310000000000000000000000000000000000000000000000000000000080825230600483015296989773ffffffffffffffffffffffffffffffffffffffff808a1698939796909560209390929184826024818e5afa8015610aab57610f25925f91611160575b50610da3565b9687106111375787519384523060048501528516928281602481875afa8015610aab578592610f5a925f926111185750610da3565b036110ef579261101b92878695937f646284e396b68ff4b4f34e0aa97bcdb9c100f5b44a20da5c475f627039853841848d9a9996610f978c610db0565b8b517f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020810197909752604087018990529b0135606086018190529a1693608090a47f0000000000000000000000000000000000000000000000000000000000000000168097610ca6565b611026828701610db0565b9161103360608801610db0565b9361103d88610db0565b9761104a60a08201610db0565b61105660c08301610dd1565b9061106360e08401610dd1565b926110716101008201610dd1565b9461108061012083018361063f565b9890978d3b1561011457519d8e9c8d9c8d957f7b93923200000000000000000000000000000000000000000000000000000000875260800135956004019c6110c79d610e20565b03815a5f948591f18015610aab576110dc5750565b806110e9610a699261051e565b80610118565b600486517fd6cf42f0000000000000000000000000000000000000000000000000000000008152fd5b611130919250853d8711610aa457610a8f8183610553565b905f610f1f565b600488517f0492ff87000000000000000000000000000000000000000000000000000000008152fd5b6111779150863d8811610aa457610a8f8183610553565b5f610f1f565b6040516111e79173ffffffffffffffffffffffffffffffffffffffff166111a382610537565b5f806020958685527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656487860152868151910182855af16111e16106f7565b916112a4565b8051828115918215611284575b50509050156112005750565b608490604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152fd5b83809293500103126101145781015180151581036101145780825f6111f4565b9192901561131f57508151156112b8575090565b3b156112c15790565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b8251909150156113325750805190602001fd5b610870906040519182917f08c379a00000000000000000000000000000000000000000000000000000000083526004830161078856fea2646970667358221220edabfb61dbb35825efaa6207b5c0753dec8b3d58b7ca9ce4b1268e38d22ac21d64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract V3SpokePoolInterface";
            readonly name: "_spokePool";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_exchange";
            readonly type: "address";
        }, {
            readonly internalType: "bytes4[]";
            readonly name: "_allowedSelectors";
            readonly type: "bytes4[]";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "_swapToken";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "_acrossInputToken";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidFunctionSelector";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "LeftoverSrcTokens";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MinimumExpectedInputAmount";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "exchange";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "swapToken";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "acrossInputToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "swapTokenAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "acrossInputAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "acrossOutputToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "acrossOutputAmount";
            readonly type: "uint256";
        }];
        readonly name: "SwapBeforeBridge";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "ACROSS_INPUT_TOKEN";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "EXCHANGE";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "SPOKE_POOL";
        readonly outputs: readonly [{
            readonly internalType: "contract V3SpokePoolInterface";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "SWAP_TOKEN";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly name: "allowedSelectors";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "data";
            readonly type: "bytes[]";
        }];
        readonly name: "multicall";
        readonly outputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "results";
            readonly type: "bytes[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "routerCalldata";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "swapTokenAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "minExpectedInputTokenAmount";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "outputToken";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "outputAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "depositor";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainid";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "exclusiveRelayer";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes";
                readonly name: "message";
                readonly type: "bytes";
            }];
            readonly internalType: "struct SwapAndBridgeBase.DepositData";
            readonly name: "depositData";
            readonly type: "tuple";
        }];
        readonly name: "swapAndBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): SwapAndBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SwapAndBridge;
}
export {};
