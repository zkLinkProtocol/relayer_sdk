import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PolygonTokenBridger, PolygonTokenBridgerInterface } from "../../../contracts/PolygonTokenBridger.sol/PolygonTokenBridger";
declare type PolygonTokenBridgerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PolygonTokenBridger__factory extends ContractFactory {
    constructor(...args: PolygonTokenBridgerConstructorParams);
    deploy(_destination: string, _l1PolygonRegistry: string, _l1Weth: string, _l2WrappedMatic: string, _l1ChainId: BigNumberish, _l2ChainId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<PolygonTokenBridger>;
    getDeployTransaction(_destination: string, _l1PolygonRegistry: string, _l1Weth: string, _l2WrappedMatic: string, _l1ChainId: BigNumberish, _l2ChainId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): PolygonTokenBridger;
    connect(signer: Signer): PolygonTokenBridger__factory;
    static readonly bytecode = "0x6101403461011957601f61101e38819003918201601f19168301916001600160401b0383118484101761011d5780849260c0946040528339810103126101195761004881610131565b60208201516001600160a01b03808216820361011957604084015190811681036101195761007860608501610131565b9160a0608086015195015193600160ff195f5416175f5560805260a05260c05260e05261010091825261012090815260405190610ed8928361014684396080518381816103ff015261095a015260a051838181610548015261067c015260c05183818161079501526108c5015260e05183818161029601526106eb0152518281816104e2015281816107ef015261089d01525181818160cb015261017d0152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b03821682036101195756fe6040608081526004908136101561001f575b5050361561001d575f80fd5b005b5f915f3560e01c9081630a79309b1461081257816312622e5b146107b9578163146bf4b11461074a57816315b550d61461070f57816344516d86146106a057816368f3824814610631578382637ffae6881461042357508163b269681d146103b4578163d0679d34146100f2575063d6ae3cd50361001157346100ee57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ee57602090517f00000000000000000000000000000000000000000000000000000000000000008152f35b5080fd5b839150346100ee57827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ee5780359273ffffffffffffffffffffffffffffffffffffffff908185168095036103b0576024610150610ba7565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0093845f54165f556101a17f0000000000000000000000000000000000000000000000000000000000000000610c11565b8251967f23b872dd0000000000000000000000000000000000000000000000000000000060208901523383890152306044890152823560648901526064885260a0880188811067ffffffffffffffff82111761038557879861020891869998995282610c77565b8351947f70a0823100000000000000000000000000000000000000000000000000000000865230838701526020868581855afa95861561037b578796610340575b50813b156103325784517f2e1a7d4d0000000000000000000000000000000000000000000000000000000096878252848201528781868183875af180156103365790889161031e575b50507f000000000000000000000000000000000000000000000000000000000000000016146102c9575b846001875f5416175f5580f35b4791479461101093843b1561031a5787948651978895869485528401525af190811561031157506102fd575b8080806102bc565b61030690610a8f565b6100ee5781836102f5565b513d84823e3d90fd5b8780fd5b61032790610a8f565b61033257868a610292565b8680fd5b86513d8a823e3d90fd5b965094506020863d602011610373575b8161035d60209383610ad0565b8101031261036f578795519489610249565b5f80fd5b3d9150610350565b85513d89823e3d90fd5b836041847f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b8380fd5b5050346100ee57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ee576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b915091346100ee57602090817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261062d5783359367ffffffffffffffff85116103b057366023860112156103b0578481013561048181610b11565b9561048e84519788610ad0565b81875236602483830101116105f3578186926024879301838a0137870101526104b5610ba7565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0094855f54165f556105067f0000000000000000000000000000000000000000000000000000000000000000610c11565b73ffffffffffffffffffffffffffffffffffffffff83517fb6864976000000000000000000000000000000000000000000000000000000008152858185818a867f0000000000000000000000000000000000000000000000000000000000000000165af190811561037b5787916105f7575b5016803b156105f3576105c1948680948651978895869485937f7c5264b40000000000000000000000000000000000000000000000000000000085528401526024830190610b4b565b03925af190811561031157506105df575b506001825f5416175f5580f35b6105e890610a8f565b6100ee57815f6105d2565b8580fd5b90508581813d8311610626575b61060e8183610ad0565b8101031261033257518181168103610332575f610578565b503d610604565b8280fd5b5050346100ee57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ee576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b5050346100ee57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ee576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b5050346100ee57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ee57602090516110108152f35b5050346100ee57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ee576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b5050346100ee57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ee57602090517f00000000000000000000000000000000000000000000000000000000000000008152f35b90503461036f57602090817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261036f5780359073ffffffffffffffffffffffffffffffffffffffff9384831680840361036f57610870610ba7565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0095865f54165f556108c17f0000000000000000000000000000000000000000000000000000000000000000610c11565b85817f00000000000000000000000000000000000000000000000000000000000000001692838114610a1d575b602493508451938480927f70a0823100000000000000000000000000000000000000000000000000000000825230898301525afa918215610a135788926109e4575b507fa9059cbb000000000000000000000000000000000000000000000000000000008351968701527f0000000000000000000000000000000000000000000000000000000000000000166024860152604485015260448452608084019184831067ffffffffffffffff8411176109b8575052600192916109af91610c77565b5f5416175f5580f35b6041907f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b9091508581813d8311610a0c575b6109fc8183610ad0565b8101031261036f5751905f610930565b503d6109f2565b83513d8a823e3d90fd5b9192479150803b1561036f575f90868651809481937fd0e30db00000000000000000000000000000000000000000000000000000000083525af18015610a8557610a6b575b508582916108ee565b602492919850610a7a90610a8f565b855f98919250610a62565b84513d5f823e3d90fd5b67ffffffffffffffff8111610aa357604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610aa357604052565b67ffffffffffffffff8111610aa357601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b91908251928382525f5b848110610b935750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f845f6020809697860101520116010190565b602081830181015184830182015201610b55565b60ff5f541615610bb357565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152fd5b4603610c1957565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f43616e6e6f742072756e206d6574686f64206f6e207468697320636861696e006044820152fd5b73ffffffffffffffffffffffffffffffffffffffff16604051604081019181831067ffffffffffffffff841117610aa357610d11926040525f806020958685527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656487860152868151910182855af13d15610dce573d91610cf683610b11565b92610d046040519485610ad0565b83523d5f8785013e610dd2565b8051828115918215610dae575b5050905015610d2a5750565b608490604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152fd5b838092935001031261036f57810151801515810361036f5780825f610d1e565b6060915b91929015610e4d5750815115610de6575090565b3b15610def5790565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b825190915015610e605750805190602001fd5b610e9e906040519182917f08c379a0000000000000000000000000000000000000000000000000000000008352602060048401526024830190610b4b565b0390fdfea264697066735822122096ec439c00c9c6c7721a7203b4795ad664200345e2dbbd5a98818511f047c6cd64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_destination";
            readonly type: "address";
        }, {
            readonly internalType: "contract PolygonRegistry";
            readonly name: "_l1PolygonRegistry";
            readonly type: "address";
        }, {
            readonly internalType: "contract WETH9Interface";
            readonly name: "_l1Weth";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_l2WrappedMatic";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_l1ChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_l2ChainId";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "MATIC";
        readonly outputs: readonly [{
            readonly internalType: "contract MaticToken";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "callExit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "destination";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "l1ChainId";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "l1PolygonRegistry";
        readonly outputs: readonly [{
            readonly internalType: "contract PolygonRegistry";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "l1Weth";
        readonly outputs: readonly [{
            readonly internalType: "contract WETH9Interface";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "l2ChainId";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "l2WrappedMatic";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "retrieve";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract PolygonIERC20Upgradeable";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "send";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): PolygonTokenBridgerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PolygonTokenBridger;
}
export {};
