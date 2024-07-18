import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Polygon_Adapter, Polygon_AdapterInterface } from "../../../../contracts/chain-adapters/Polygon_Adapter.sol/Polygon_Adapter";
declare type Polygon_AdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Polygon_Adapter__factory extends ContractFactory {
    constructor(...args: Polygon_AdapterConstructorParams);
    deploy(_rootChainManager: string, _fxStateSender: string, _depositManager: string, _erc20Predicate: string, _l1Matic: string, _l1Weth: string, _l1Usdc: string, _cctpTokenMessenger: string, overrides?: Overrides & {
        from?: string;
    }): Promise<Polygon_Adapter>;
    getDeployTransaction(_rootChainManager: string, _fxStateSender: string, _depositManager: string, _erc20Predicate: string, _l1Matic: string, _l1Weth: string, _l1Usdc: string, _cctpTokenMessenger: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Polygon_Adapter;
    connect(signer: Signer): Polygon_Adapter__factory;
    static readonly bytecode = "0x6101a034620001a757620016c038819003601f8101601f191683016001600160401b03811184821017620001ab5783928291604052833961010092839181010312620001a7578051906001600160a01b038083168303620001a7576020820151928184168403620001a7576040830151938285168503620001a7576200008860608501620001bf565b916200009760808601620001bf565b9360a0860151958187168703620001a75760c0810151908282168203620001a75760e001519182168203620001a75760a05260c052600760805260e0528552610120938452610140908152610160918252610180928352604051936114eb9586620001d587396080518681816104570152610835015260a0518681816106fe01528181610dfe0152610f5f015260c0518681816103f8015281816106cf0152818161073a015281816107a3015261093b015260e051868181610389015281816105a90152610c7b01525185818161015301526101fe015251848181610b000152610e8501525183818160e10152610c2901525182818161031a0152610aaa0152518181816105070152610ef30152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b0382168203620001a75756fe6080806040526004361015610012575f80fd5b5f905f3560e01c90816311eac85514610f17575080631efd482a14610ea957806337a9c98314610e3b57806352c8c75c1461047b5780636e4009831461041c5780639748cf7c146103ad578063aeeeae9b1461033e578063c55e9e36146102cf578063e6eb8ade14610177578063f5ebf4c4146101085763fd5f2d8314610097575f80fd5b3461010557807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010557602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b80fd5b503461010557807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010557602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b5060407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610105576101aa610f83565b60243567ffffffffffffffff918282116102bc57366023830112156102bc5781600401359283116102bc57602482019160248436920101116102bc578373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016803b156102cb578160405180927fb47204770000000000000000000000000000000000000000000000000000000082528183816102608b8b8b600485016110a0565b03925af180156102c0576102a8575b50506102a27f9e6c52944e331ba6270e7fe4cea2a4086bae8f7a27e1cdba07f416806f5d0ac493604051938493846110a0565b0390a180f35b6102b190610fa6565b6102bc57835f61026f565b8380fd5b6040513d84823e3d90fd5b5080fd5b503461010557807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010557602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b503461010557807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010557602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b503461010557807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010557602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b503461010557807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010557602060405163ffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b5060807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610a28576104ae610f83565b60243573ffffffffffffffffffffffffffffffffffffffff81168103610a28576064359073ffffffffffffffffffffffffffffffffffffffff82168203610a28578373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168073ffffffffffffffffffffffffffffffffffffffff8616145f146106b657803b156102cb578180916024604051809481937f2e1a7d4d00000000000000000000000000000000000000000000000000000000835260443560048401525af180156102c0576106a2575b5073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016803b156102cb5781602491604051928380927f4faa8a2600000000000000000000000000000000000000000000000000000000825273ffffffffffffffffffffffffffffffffffffffff89166004830152604435905af180156102c05761068a575b50509173ffffffffffffffffffffffffffffffffffffffff608092817fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b955b81604051951685521660208401526044356040840152166060820152a180f35b61069690949294610fa6565b6102bc5791835f61062b565b6106ab90610fa6565b6102bc57835f610591565b505073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016151580610de6575b15610a93577f000000000000000000000000000000000000000000000000000000000000000061076060443573ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001683611101565b6040517fcb75c11c00000000000000000000000000000000000000000000000000000000815260208160048173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa908115610a34578691610a3f575b50602073ffffffffffffffffffffffffffffffffffffffff916024604051809481937fa56ec6320000000000000000000000000000000000000000000000000000000083528188166004840152165afa908115610a345786916109fe575b50907f000000000000000000000000000000000000000000000000000000000000000063ffffffff1690604435805b6108a957505050509173ffffffffffffffffffffffffffffffffffffffff608092817fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b9561066a565b838111156109f857835b6040517f6fd3504e00000000000000000000000000000000000000000000000000000000815281600482015284602482015273ffffffffffffffffffffffffffffffffffffffff8816604482015273ffffffffffffffffffffffffffffffffffffffff841660648201526020816084818d73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165af180156109ed576109a5575b5081039081116109785780610860565b6024887f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b6020813d6020116109e5575b816109be60209383611003565b810103126109e1575167ffffffffffffffff8116036109dd575f610968565b8880fd5b8980fd5b3d91506109b1565b6040513d8c823e3d90fd5b806108b3565b90506020813d602011610a2c575b81610a1960209383611003565b81010312610a2857515f610831565b5f80fd5b3d9150610a0c565b6040513d88823e3d90fd5b90506020813d602011610a8b575b81610a5a60209383611003565b81010312610a87575173ffffffffffffffffffffffffffffffffffffffff81168103610a875760206107d3565b8580fd5b3d9150610a4d565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416145f14610c21578373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016610b436044358273ffffffffffffffffffffffffffffffffffffffff8816611101565b803b156102cb578180916064604051809481937f8b9e4f9300000000000000000000000000000000000000000000000000000000835273ffffffffffffffffffffffffffffffffffffffff8b16600484015273ffffffffffffffffffffffffffffffffffffffff8a16602484015260443560448401525af180156102c057610c09575b50509173ffffffffffffffffffffffffffffffffffffffff608092817fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b9561066a565b610c1590949294610fa6565b6102bc5791835f610bc6565b610c646044357f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff8616611101565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001660405190604435602083015260208252610cb482610fe7565b803b15610a2857610d385f929183926040519485809481937fe3dec8fb00000000000000000000000000000000000000000000000000000000835273ffffffffffffffffffffffffffffffffffffffff8b16600484015273ffffffffffffffffffffffffffffffffffffffff8c166024840152606060448401526064830190611044565b03925af18015610ddb57610d89575b509173ffffffffffffffffffffffffffffffffffffffff608092817fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b9561066a565b7fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b93919450608092610dcf73ffffffffffffffffffffffffffffffffffffffff92610fa6565b5f959294509250610d47565b6040513d5f823e3d90fd5b5073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416146106f7565b34610a28575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610a2857602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b34610a28575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610a2857602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b34610a28575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610a285760209073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b6004359073ffffffffffffffffffffffffffffffffffffffff82168203610a2857565b67ffffffffffffffff8111610fba57604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6040810190811067ffffffffffffffff821117610fba57604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610fba57604052565b91908251928382525f5b84811061108c5750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f845f6020809697860101520116010190565b60208183018101518483018201520161104e565b9183606094601f9273ffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09516865260406020870152816040870152868601375f8582860101520116010190565b73ffffffffffffffffffffffffffffffffffffffff8091166040918251907fdd62ed3e000000000000000000000000000000000000000000000000000000008252306004830152602494169182858301526020958683604481855afa9283156113db575f936113ac575b50820180921161138057835191868301937f095ea7b300000000000000000000000000000000000000000000000000000000855286840152604483015260448252608082019267ffffffffffffffff9280851084861117611354575f9182918688526111d687610fe7565b8987527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460a0820152519082855af1903d15611345573d928311611319579061125c93929185519261124f897fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160185611003565b83523d5f8985013e6113e5565b80518481159182156112f9575b505090501561127757505050565b60849291602a9151927f08c379a000000000000000000000000000000000000000000000000000000000845260048401528201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152fd5b8380929350010312610a28578301518015158103610a285780845f611269565b857f4e487b71000000000000000000000000000000000000000000000000000000005f5260416004525ffd5b9061125c9392506060916113e5565b867f4e487b71000000000000000000000000000000000000000000000000000000005f5260416004525ffd5b847f4e487b71000000000000000000000000000000000000000000000000000000005f5260116004525ffd5b9092508681813d83116113d4575b6113c48183611003565b81010312610a285751915f61116b565b503d6113ba565b85513d5f823e3d90fd5b9192901561146057508151156113f9575090565b3b156114025790565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b8251909150156114735750805190602001fd5b6114b1906040519182917f08c379a0000000000000000000000000000000000000000000000000000000008352602060048401526024830190611044565b0390fdfea2646970667358221220824287d84993b4025a7a7374803d01730abe1b4026221ff4f3e261774a92c80864736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IRootChainManager";
            readonly name: "_rootChainManager";
            readonly type: "address";
        }, {
            readonly internalType: "contract IFxStateSender";
            readonly name: "_fxStateSender";
            readonly type: "address";
        }, {
            readonly internalType: "contract DepositManager";
            readonly name: "_depositManager";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_erc20Predicate";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_l1Matic";
            readonly type: "address";
        }, {
            readonly internalType: "contract WETH9Interface";
            readonly name: "_l1Weth";
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
        readonly name: "DEPOSIT_MANAGER";
        readonly outputs: readonly [{
            readonly internalType: "contract DepositManager";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ERC20_PREDICATE";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "FX_STATE_SENDER";
        readonly outputs: readonly [{
            readonly internalType: "contract IFxStateSender";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L1_MATIC";
        readonly outputs: readonly [{
            readonly internalType: "address";
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
        readonly name: "ROOT_CHAIN_MANAGER";
        readonly outputs: readonly [{
            readonly internalType: "contract IRootChainManager";
            readonly name: "";
            readonly type: "address";
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
    static createInterface(): Polygon_AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Polygon_Adapter;
}
export {};
