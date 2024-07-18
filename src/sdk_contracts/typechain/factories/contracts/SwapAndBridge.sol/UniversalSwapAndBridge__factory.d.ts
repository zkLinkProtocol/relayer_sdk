import { Signer, ContractFactory, BytesLike, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UniversalSwapAndBridge, UniversalSwapAndBridgeInterface } from "../../../contracts/SwapAndBridge.sol/UniversalSwapAndBridge";
declare type UniversalSwapAndBridgeConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UniversalSwapAndBridge__factory extends ContractFactory {
    constructor(...args: UniversalSwapAndBridgeConstructorParams);
    deploy(_spokePool: string, _exchange: string, _allowedSelectors: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<UniversalSwapAndBridge>;
    getDeployTransaction(_spokePool: string, _exchange: string, _allowedSelectors: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): UniversalSwapAndBridge;
    connect(signer: Signer): UniversalSwapAndBridge__factory;
    static readonly bytecode = "0x604060c060405234620001745762001410908138038062000020816200018c565b9384398201606083820312620001745782516001600160a01b039290919083831683036200017457602094858101519485168503620001745760408101516001600160401b03918282116200017457019280601f850112156200017457835191821162000178576005938260051b9088806200009e8185016200018c565b80968152019282010192831162000174578801905b8282106200015257505050600195869560ff19956001875f5416175f5560805260a0525f955b62000116575b60405161125d9081620001b3823960805181818161011f0152610eb3015260a051818181610309015281816108c50152610e5a0152f35b81518610156200014c5786809663ffffffff60e01b8382881b86010151165f52818352845f2082888254161790550195620000d9565b620000df565b81516001600160e01b03198116810362000174578152908801908801620000b3565b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6040519190601f01601f191682016001600160401b03811183821017620001785760405256fe60806040526004361015610011575f80fd5b5f3560e01c80638021fef7146100da57806385f168eb1461005f578063ac9650d81461005a578063b50e44b8146100555763c51e5eb914610050575f80fd5b61035a565b6102bf565b610237565b346100d65760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d6576004357fffffffff0000000000000000000000000000000000000000000000000000000081168091036100d6575f526001602052602060ff60405f2054166040519015158152f35b5f80fd5b346100d6575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d65773ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001660805260206080f35b5f9103126100d657565b5f5b8381106101635750505f910152565b8181015183820152602001610154565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f6020936101af81518092818752878088019101610152565b0116010190565b6020808201906020835283518092526040830192602060408460051b8301019501935f915b8483106101eb5750505050505090565b9091929394958480610227837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc086600196030187528a51610173565b98019301930191949392906101db565b346100d65760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d65767ffffffffffffffff6004358181116100d657366023820112156100d65780600401359182116100d6573660248360051b830101116100d6576102bb9160246102af92016106c4565b604051918291826101b6565b0390f35b346100d6575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d657602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b73ffffffffffffffffffffffffffffffffffffffff8116036100d657565b90816101409103126100d65790565b346100d65760c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d6576004356103958161032d565b602435906103a28261032d565b67ffffffffffffffff916044358381116100d657366023820112156100d65780600401358481116100d65736602482840101116100d65760a4359485116100d6576103f461040695369060040161034b565b9360843593602460643594019161078b565b005b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b67ffffffffffffffff811161044957604052565b610408565b6040810190811067ffffffffffffffff82111761044957604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761044957604052565b67ffffffffffffffff81116104495760051b60200190565b906104cd826104ab565b6104da604051918261046a565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe061050882946104ab565b01905f5b82811061051857505050565b80606060208093850101520161050c565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1813603018212156100d6570180359067ffffffffffffffff82116100d6576020019181360383136100d657565b908210156105c2576105be9160051b810190610556565b9091565b610529565b908092918237015f815290565b67ffffffffffffffff811161044957601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b3d15610638573d9061061f826105d4565b9161062d604051938461046a565b82523d5f602084013e565b606090565b6020818303126100d65780519067ffffffffffffffff82116100d6570181601f820112156100d6578051610670816105d4565b9261067e604051948561046a565b818452602082840101116100d65761069c9160208085019101610152565b90565b90602061069c928181520190610173565b80518210156105c25760209160051b010190565b9190916106d0836104c3565b925f5b8181106106df57505050565b5f806106ec8385876105a7565b604093916106fe8551809381936105c7565b0390305af49061070c61060e565b911561073357509060019161072182886106b0565b5261072c81876106b0565b50016106d3565b9060448151106100d6576107876107586004928381015160248091830101910161063d565b92519283927f08c379a0000000000000000000000000000000000000000000000000000000008452830161069f565b0390fd5b9395929491909460ff5f5416156109d1576107c77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff005f54165f55565b61081561081161080a6107da8486610a2f565b7fffffffff00000000000000000000000000000000000000000000000000000000165f52600160205260405f2090565b5460ff1690565b1590565b6109a75761082587303388610ad3565b6040517f70a082310000000000000000000000000000000000000000000000000000000080825230600483015273ffffffffffffffffffffffffffffffffffffffff98919260209182856024818c8f165afa948515610981575f95610986575b506040519081523060048201529982908b9060249082908d165afa948515610981576109119a89935f97610941575b505061090c925f928380936108eb887f00000000000000000000000000000000000000000000000000000000000000008096610b7c565b6108fa604051809481936105c7565b03925af161090661060e565b90610a8d565b610d70565b61093f60017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff005f5416175f55565b565b5f8094918194995061090c96938161096d92903d1061097a575b610965818361046a565b810190610a73565b98935050928194506108b4565b503d61095b565b610a82565b839195506109a090823d841161097a57610965818361046a565b9490610885565b60046040517f42868c9b000000000000000000000000000000000000000000000000000000008152fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152fd5b7fffffffff000000000000000000000000000000000000000000000000000000009035818116939260048110610a6457505050565b60040360031b82901b16169150565b908160209103126100d6575190565b6040513d5f823e3d90fd5b15610a955750565b610787906040519182917f08c379a0000000000000000000000000000000000000000000000000000000008352602060048401526024830190610173565b9290604051927f23b872dd00000000000000000000000000000000000000000000000000000000602085015273ffffffffffffffffffffffffffffffffffffffff809216602485015216604483015260648201526064815260a081019181831067ffffffffffffffff8411176104495761093f9260405261103c565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b60449192602073ffffffffffffffffffffffffffffffffffffffff604051948580927fdd62ed3e000000000000000000000000000000000000000000000000000000008252306004830152808916602483015286165afa928315610981575f93610c58575b508201809211610c53576040517f095ea7b300000000000000000000000000000000000000000000000000000000602082015273ffffffffffffffffffffffffffffffffffffffff93909316602484015260448084019290925290825261093f9190610c4e60648361046a565b61103c565b610b4f565b610c7291935060203d60201161097a57610965818361046a565b915f610be1565b91908203918211610c5357565b3561069c8161032d565b3563ffffffff811681036100d65790565b601f82602094937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe093818652868601375f8582860101520116010190565b9895909461069c9d9b9792602095610d629a959c976101809d8d73ffffffffffffffffffffffffffffffffffffffff998a8096818096168452169101521660408d01521660608b015260808a015260a089015260c08801521660e086015263ffffffff8092166101008601521661012084015261014083019063ffffffff169052565b816101608201520191610ca1565b604080517f70a082310000000000000000000000000000000000000000000000000000000080825230600483015296989773ffffffffffffffffffffffffffffffffffffffff808a1698939796909560209390929184826024818e5afa801561098157610de4925f9161101f575b50610c79565b968710610ff65787519384523060048501528516928281602481875afa8015610981578592610e19925f92610fd75750610c79565b03610fae5792610eda92878695937f646284e396b68ff4b4f34e0aa97bcdb9c100f5b44a20da5c475f627039853841848d9a9996610e568c610c86565b8b517f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020810197909752604087018990529b0135606086018190529a1693608090a47f0000000000000000000000000000000000000000000000000000000000000000168097610b7c565b610ee5828701610c86565b91610ef260608801610c86565b93610efc88610c86565b97610f0960a08201610c86565b610f1560c08301610c90565b90610f2260e08401610c90565b92610f306101008201610c90565b94610f3f610120830183610556565b9890978d3b156100d657519d8e9c8d9c8d957f7b93923200000000000000000000000000000000000000000000000000000000875260800135956004019c610f869d610cdf565b03815a5f948591f1801561098157610f9b5750565b80610fa861093f92610435565b80610148565b600486517fd6cf42f0000000000000000000000000000000000000000000000000000000008152fd5b610fef919250853d871161097a57610965818361046a565b905f610dde565b600488517f0492ff87000000000000000000000000000000000000000000000000000000008152fd5b6110369150863d881161097a57610965818361046a565b5f610dde565b6040516110a69173ffffffffffffffffffffffffffffffffffffffff166110628261044e565b5f806020958685527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656487860152868151910182855af16110a061060e565b91611163565b8051828115918215611143575b50509050156110bf5750565b608490604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152fd5b83809293500103126100d65781015180151581036100d65780825f6110b3565b919290156111de5750815115611177575090565b3b156111805790565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b8251909150156111f15750805190602001fd5b610787906040519182917f08c379a00000000000000000000000000000000000000000000000000000000083526004830161069f56fea26469706673582212204d4365585bb0048fa3ca9ce8f76540b63f2995ad02d13b72a2a62607dc6ec31e64736f6c63430008170033";
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
            readonly internalType: "contract IERC20";
            readonly name: "swapToken";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "acrossInputToken";
            readonly type: "address";
        }, {
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
    static createInterface(): UniversalSwapAndBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UniversalSwapAndBridge;
}
export {};
