import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MerkleDistributor, MerkleDistributorInterface } from "../../../../../../@uma/core/contracts/merkle-distributor/implementation/MerkleDistributor";
declare type MerkleDistributorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MerkleDistributor__factory extends ContractFactory {
    constructor(...args: MerkleDistributorConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<MerkleDistributor>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): MerkleDistributor;
    connect(signer: Signer): MerkleDistributor__factory;
    static readonly bytecode = "0x6080806040523461005a575f8054336001600160a01b0319821681178355916001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a36115d6908161005f8239f35b5f80fdfe60406080815260049081361015610014575f80fd5b5f3560e01c80634f51215114610c965780636be6517914610a86578063715018a6146109ec578063761b42971461098e578063891b0d71146108475780638da5cb5b146107f65780639f5a967214610725578063a198496c14610690578063d45118681461031d578063d6ef7af01461028a578063e2e441a31461024e578063f2fde38b146101185763f364c90c146100ab575f80fd5b3461011457807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101145761010b60209260243590355f52600360205260405f208160081c5f52602052600160ff60405f205492161b8091161490565b90519015158152f35b5f80fd5b50346101145760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101145781359173ffffffffffffffffffffffffffffffffffffffff91828416809403610114576101736112f7565b83156101cb5750505f54827fffffffffffffffffffffffff00000000000000000000000000000000000000008216175f55167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3005b90602060849251917f08c379a0000000000000000000000000000000000000000000000000000000008352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152fd5b5034610114575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610114576020906002549051908152f35b50903461011457817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610114573573ffffffffffffffffffffffffffffffffffffffff811691828203610114576102f160243580936102ea6112f7565b3390611295565b519081527ffb0872526787ac1be379aa37eaa9913b47d6d50c3f5fe5ec67ffe4282493670e60203392a3005b5090346101145760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011457803560249283359073ffffffffffffffffffffffffffffffffffffffff93848316809303610114576064359467ffffffffffffffff938487116101145736602388011215610114578683013590858211610114573689838a0101116101145788976103b76112f7565b6002549060018201808311610665576002555f906103d48561103e565b946103e189519687610d38565b8086528060209c8d93018388013785010152805f5260018952855f2092604435845588600185015560036002850194847fffffffffffffffffffffffff0000000000000000000000000000000000000000875416178655019080519089821161063a5781906104508454610e69565b8d601f8211610600575b50508c90601f8311600114610561575f92610556575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c19161790555b7f521fe5bce65ac6af752c1083ec77facc5b6c13f40693e96eeca3747726fee9ad8680518a8152338c820152a35416937f23b872dd00000000000000000000000000000000000000000000000000000000835196870152338787015230604487015260648601526064855260a08501928584109084111761052b5750610529945052611375565b005b604186917f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b015190505f80610470565b5f8581528e8120937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016908f5b8282106105e95750509084600195949392106105b2575b505050811b0190556104a2565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c191690555f80806105a5565b60018596829396860151815501950193018f61058e565b61062991865f52815f2090601f860160051c8201928610610630575b601f0160051c0190611028565b5f8d61045a565b909150819061061c565b8c6041897f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b8a6011887f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b50346101145760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101145781359067ffffffffffffffff82116101145760206106e661052994600294369101610d91565b916106f083611078565b82515f526001825273ffffffffffffffffffffffffffffffffffffffff9384915f200154169260608301511691015191611295565b5090346101145760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101145760207f8fea52000ecb40f2262c672496dfadccc9d6290439bac487e084de8c57682d669135926107846112f7565b835f52600182526003815f205f81555f60018201555f6002820155016107aa8154610e69565b90816107ba575b505051338152a2005b81601f5f93116001146107d15750555b5f806107b1565b9080839182526107ef601f878420940160051c840160018501611028565b55556107ca565b5034610114575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101145760209073ffffffffffffffffffffffffffffffffffffffff5f54169051908152f35b503461011457602091827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011457355f5260019060018352805f2090815491600181015491600373ffffffffffffffffffffffffffffffffffffffff600284015416920192815193875f978254926108c284610e69565b808952936001811690811561094d5750600114610910575b505050506108ee8461090c96970385610d38565b81519687968752860152840152608060608401526080830190610eba565b0390f35b5f90815282812092995092915b82841061093a575050508401909501946108ee8761090c866108da565b80548885018b015292890192810161091d565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016848a015250505090151560051b85010195506108ee8761090c866108da565b50346101145760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011457602091355f526001825273ffffffffffffffffffffffffffffffffffffffff6002825f200154169051908152f35b34610114575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011457610a226112f7565b5f73ffffffffffffffffffffffffffffffffffffffff81547fffffffffffffffffffffffff000000000000000000000000000000000000000081168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b509034610114576020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101145781359267ffffffffffffffff9283851161011457366023860112156101145760249481810135610ae781610d79565b95610af485519788610d38565b81875260248688019260051b840101923684116101145760248101925b848410610c705750505050505f918451945f5b868110610b2d57005b610b378183610fe7565b5194610b4286611078565b868601518101809111610c4557809560019081840190818511610c1a5780515f52828a5273ffffffffffffffffffffffffffffffffffffffff918b83600281818c5f200154169687938514948515610bf6575b8515610bcf575b5050505050610bb2575b50505050600101610b24565b610bc3949850606001511690611295565b5f936001858080610ba6565b610bde9192939495508b610fe7565b51515f528d52895f20015416141583835f8080610b9c565b80955083808d610c096060948592610fe7565b510151169188015116141594610b95565b8b6011897f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b886011867f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b8335838111610114578891610c8b83928d3691870101610d91565b815201930192610b11565b50346101145760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101145781359167ffffffffffffffff831161011457610cea61010b91602094369101610d91565b610f16565b6080810190811067ffffffffffffffff821117610d0b57604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610d0b57604052565b67ffffffffffffffff8111610d0b5760051b60200190565b919060a0838203126101145760405167ffffffffffffffff9360a0820185811183821017610d0b57604052819481358352602091828101358385015260408101356040850152606081013573ffffffffffffffffffffffffffffffffffffffff81168103610114576060850152608081013591821161011457019280601f85011215610114578335610e2281610d79565b94610e306040519687610d38565b818652838087019260051b820101928311610114578301905b828210610e5a575050505060800152565b81358152908301908301610e49565b90600182811c92168015610eb0575b6020831014610e8357565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b91607f1691610e78565b91908251928382525f5b848110610f025750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f845f6020809697860101520116010190565b602081830181015184830182015201610ec4565b6060810151906020916020820151906040916040840151604051917fffffffffffffffffffffffffffffffffffffffff000000000000000000000000602084019460601b1684526034830152605482015260548152610f7481610cef565b51902092608083015192515f526001918291600160205260405f205495945f945b610fa3575b50505050501490565b8051851015610fe2578495610fb9859683610fe7565b519081811015610fd4575f52825283835f205b960194610f95565b905f52825283835f20610fcc565b610f9a565b8051821015610ffb5760209160051b010190565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b818110611033575050565b5f8155600101611028565b67ffffffffffffffff8111610d0b57601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b61108181610f16565b156112375780516040916110bc838201928351905f52600360205260405f208160081c5f52602052600160ff60405f205492161b8091161490565b6111b457805192825193600160ff8660081c96835f5260209760038952855f20815f528952855f2054945f5260038952855f20905f528852161b17815f20558382019081519183515f52600186526001825f2001928354908103908111611187576060935583519373ffffffffffffffffffffffffffffffffffffffff9384910151169451905192845f52600187526002835f200154169582519485528401528201527f18bdb6adb84039f917775d1fb8e7b7e7737ad5915d12eef0e4654b85e18d07b460603392a4565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b608483517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f4163636f756e742068617320616c726561647920636c61696d656420666f722060448201527f746869732077696e646f770000000000000000000000000000000000000000006064820152fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f496e636f7272656374206d65726b6c652070726f6f66000000000000000000006044820152fd5b6112f59273ffffffffffffffffffffffffffffffffffffffff604051937fa9059cbb0000000000000000000000000000000000000000000000000000000060208601521660248401526044830152604482526112f082610cef565b611375565b565b73ffffffffffffffffffffffffffffffffffffffff5f5416330361131757565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b73ffffffffffffffffffffffffffffffffffffffff16604051604081019181831067ffffffffffffffff841117610d0b5761140f926040525f806020958685527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656487860152868151910182855af13d156114cc573d916113f48361103e565b926114026040519485610d38565b83523d5f8785013e6114d0565b80518281159182156114ac575b50509050156114285750565b608490604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152fd5b83809293500103126101145781015180151581036101145780825f61141c565b6060915b9192901561154b57508151156114e4575090565b3b156114ed5790565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b82519091501561155e5750805190602001fd5b61159c906040519182917f08c379a0000000000000000000000000000000000000000000000000000000008352602060048401526024830190610eba565b0390fdfea2646970667358221220a3c33c2d312950965372be5ecd6b06fe3c4119c54f35beee84373354eb7d9e4d64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "caller";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "windowIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "accountIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "rewardToken";
            readonly type: "address";
        }];
        readonly name: "Claimed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "windowIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "rewardsDeposited";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "rewardToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "CreatedWindow";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "windowIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "DeleteWindow";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "currency";
            readonly type: "address";
        }];
        readonly name: "WithdrawRewards";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "windowIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "accountIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "account";
                readonly type: "address";
            }, {
                readonly internalType: "bytes32[]";
                readonly name: "merkleProof";
                readonly type: "bytes32[]";
            }];
            readonly internalType: "struct MerkleDistributorInterface.Claim";
            readonly name: "_claim";
            readonly type: "tuple";
        }];
        readonly name: "claim";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "windowIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "accountIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "account";
                readonly type: "address";
            }, {
                readonly internalType: "bytes32[]";
                readonly name: "merkleProof";
                readonly type: "bytes32[]";
            }];
            readonly internalType: "struct MerkleDistributorInterface.Claim[]";
            readonly name: "claims";
            readonly type: "tuple[]";
        }];
        readonly name: "claimMulti";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "windowIndex";
            readonly type: "uint256";
        }];
        readonly name: "deleteWindow";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "windowIndex";
            readonly type: "uint256";
        }];
        readonly name: "getRewardTokenForWindow";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "windowIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "accountIndex";
            readonly type: "uint256";
        }];
        readonly name: "isClaimed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "merkleWindows";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "merkleRoot";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "remainingAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "rewardToken";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "ipfsHash";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "nextCreatedIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "rewardsToDeposit";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "rewardToken";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "merkleRoot";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "ipfsHash";
            readonly type: "string";
        }];
        readonly name: "setWindow";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "windowIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "accountIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "account";
                readonly type: "address";
            }, {
                readonly internalType: "bytes32[]";
                readonly name: "merkleProof";
                readonly type: "bytes32[]";
            }];
            readonly internalType: "struct MerkleDistributorInterface.Claim";
            readonly name: "_claim";
            readonly type: "tuple";
        }];
        readonly name: "verifyClaim";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "valid";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "rewardCurrency";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "withdrawRewards";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): MerkleDistributorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MerkleDistributor;
}
export {};
