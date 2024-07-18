import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MulticallHandler, MulticallHandlerInterface } from "../../../contracts/handlers/MulticallHandler";
declare type MulticallHandlerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MulticallHandler__factory extends ContractFactory {
    constructor(...args: MulticallHandlerConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<MulticallHandler>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): MulticallHandler;
    connect(signer: Signer): MulticallHandler__factory;
    static readonly bytecode = "0x6080806040523461001a5760015f55610e52908161001f8239f35b5f80fdfe60406080815260048036101561001e575b5050361561001c575f80fd5b005b5f3560e01c9081633a5be8cb14610333578163a58d50d3146100b5575063ef8738d31461004b5780610010565b346100b1577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b157610080610425565b60243573ffffffffffffffffffffffffffffffffffffffff811681036100b15761001c916100ac610d1d565b6109c8565b5f80fd5b9050346100b157602091827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b15767ffffffffffffffff9082358281116100b157366023820112156100b157808401359460249161011787610552565b9461012485519687610491565b878652828601908460059960051b840101923684116100b157858101925b848410610296575050505050610156610d1d565b8351955f5b87811061016457005b855181101561026b578281831b870101518381019081515115158061024b575b61020c575f91818873ffffffffffffffffffffffffffffffffffffffff859451169101519151918783519301915af16101bb61069c565b50156101c95760010161015b565b8661020887878781519586957fe462c44000000000000000000000000000000000000000000000000000000000875286015284015260448301906105ef565b0390fd5b86517fe237730c000000000000000000000000000000000000000000000000000000008152808a0184905280870188905280610208604482018b6105ef565b5073ffffffffffffffffffffffffffffffffffffffff8151163b15610184565b836032887f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b83358381116100b157820160607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc82360301126100b1578851916102d983610448565b8882013573ffffffffffffffffffffffffffffffffffffffff811681036100b15783526044820135928584116100b157606489949361031e86958d369184010161050c565b8584015201358b820152815201930192610142565b9050346100b15760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b15761036c610425565b60443573ffffffffffffffffffffffffffffffffffffffff8116036100b15760643567ffffffffffffffff81116100b1576103aa903690840161050c565b9160025f54146103c8576103c2838360025f556106cb565b60015f55005b60649060208551917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152fd5b6004359073ffffffffffffffffffffffffffffffffffffffff821682036100b157565b6060810190811067ffffffffffffffff82111761046457604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761046457604052565b67ffffffffffffffff811161046457601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b81601f820112156100b157803590610523826104d2565b926105316040519485610491565b828452602083830101116100b157815f926020809301838601378301015290565b67ffffffffffffffff81116104645760051b60200190565b519073ffffffffffffffffffffffffffffffffffffffff821682036100b157565b5f5b83811061059c5750505f910152565b818101518382015260200161058d565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f6020936105e88151809281875287808801910161058b565b0116010190565b908082519081815260208091019281808460051b8301019501935f915b84831061061c5750505050505090565b9091929394958480827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08560019503018652895190610682606073ffffffffffffffffffffffffffffffffffffffff8451168352848401519080868501528301906105ac565b91604080910151910152980193019301919493929061060c565b3d156106c6573d906106ad826104d2565b916106bb6040519384610491565b82523d5f602084013e565b606090565b81516020908301928184019382828203126100b1578282015167ffffffffffffffff928382116100b157019060409182818303126100b15782519183830183811086821117610464578452858201518581116100b15782019088603f830112156100b1578682015161073c81610552565b9961074987519b8c610491565b818b5286898c019260051b850101938185116100b157908188809695949301925b8584106108fc57505050505050610784918884520161056a565b938082019385855273ffffffffffffffffffffffffffffffffffffffff80961615610887575061083f96505f808351855161081f816107f3878201947fa58d50d300000000000000000000000000000000000000000000000000000000865288602484015260448301906105ef565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282610491565b519082305af161082d61069c565b5015610841575b5050505116906109c8565b565b7f5296f22c5d0413b66d0bf45c479c4e2ca5b278634bdbd028b48e49502105f96691519061087c8686511694519282849384528301906105ef565b0390a25f8080610834565b94509250509250303b156100b1576108d4935f91845195869283927fa58d50d3000000000000000000000000000000000000000000000000000000008452600484015260248301906105ef565b038183305af180156108f2576108e957505050565b82116104645752565b82513d5f823e3d90fd5b9091928094959650518a81116100b15782019060607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe083880301126100b15789519061094782610448565b6109528b840161056a565b825260608301518c81116100b15783019185605f840112156100b157828c01518c94610989610980836104d2565b96519687610491565b81865287606083870101116100b1578f956109ae60809388976060898501910161058b565b8584015201518c820152815201930191908895949361076a565b73ffffffffffffffffffffffffffffffffffffffff91908216908115610c0b57604051927f70a082310000000000000000000000000000000000000000000000000000000084523060048501526020918285602481875afa948515610c00575f95610bd1575b5084610a3c575b5050505050565b1690604051818101907fa9059cbb00000000000000000000000000000000000000000000000000000000825283602482015285604482015260448152608081019067ffffffffffffffff818310818411176104645760c0820190811183821017610464576040528382527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460a082015251610ae8925f91829182895af1610ae161069c565b9086610d50565b8051828115918215610bb1575b5050905015610b2d57507f74d3741ef03417659087d2ec6af11dade8713f9b7f592569d60cf1ea0c9a44555f80a45f80808080610a35565b608490604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152fd5b83809293500103126100b15781015180151581036100b15780825f610af5565b9094508281813d8311610bf9575b610be98183610491565b810103126100b15751935f610a2e565b503d610bdf565b6040513d5f823e3d90fd5b9147915081610c1957505050565b814710610cbf575f92839283928392165af1610c3361069c565b5015610c3b57565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152fd5b303303610d2657565b60046040517f29c3b7ee000000000000000000000000000000000000000000000000000000008152fd5b91929015610dcb5750815115610d64575090565b3b15610d6d5790565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b825190915015610dde5750805190602001fd5b610208906040519182917f08c379a00000000000000000000000000000000000000000000000000000000083526020600484015260248301906105ac56fea26469706673582212202fb03d4abc0e41d90d06110fa0e9bb317ad8e97803af8f6d601b7f05c9afff0a64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "target";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }];
            readonly internalType: "struct MulticallHandler.Call[]";
            readonly name: "calls";
            readonly type: "tuple[]";
        }];
        readonly name: "CallReverted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "target";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }];
            readonly internalType: "struct MulticallHandler.Call[]";
            readonly name: "calls";
            readonly type: "tuple[]";
        }];
        readonly name: "InvalidCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotSelf";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "target";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }];
            readonly indexed: false;
            readonly internalType: "struct MulticallHandler.Call[]";
            readonly name: "calls";
            readonly type: "tuple[]";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "fallbackRecipient";
            readonly type: "address";
        }];
        readonly name: "CallsFailed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "DrainedTokens";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "target";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }];
            readonly internalType: "struct MulticallHandler.Call[]";
            readonly name: "calls";
            readonly type: "tuple[]";
        }];
        readonly name: "attemptCalls";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "destination";
            readonly type: "address";
        }];
        readonly name: "drainLeftoverTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "handleV3AcrossMessage";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): MulticallHandlerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MulticallHandler;
}
export {};
