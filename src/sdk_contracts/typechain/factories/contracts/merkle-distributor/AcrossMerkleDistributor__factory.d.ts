import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AcrossMerkleDistributor, AcrossMerkleDistributorInterface } from "../../../contracts/merkle-distributor/AcrossMerkleDistributor";
declare type AcrossMerkleDistributorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossMerkleDistributor__factory extends ContractFactory {
    constructor(...args: AcrossMerkleDistributorConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<AcrossMerkleDistributor>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): AcrossMerkleDistributor;
    connect(signer: Signer): AcrossMerkleDistributor__factory;
    static readonly bytecode = "0x6080806040523461005a575f8054336001600160a01b0319821681178355916001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a361196d908161005f8239f35b5f80fdfe60406080815260049081361015610014575f80fd5b5f3560e01c80634f51215114610f945780636be6517914610d3f57806370b53aee14610cda578063715018a614610c40578063743817a014610b80578063761b429714610b2257806388f038a2146109bc578063891b0d71146108755780638da5cb5b146108245780639f5a967214610753578063a198496c146106b1578063d45118681461033e578063d6ef7af0146102ab578063e2e441a31461026f578063f2fde38b146101395763f364c90c146100cc575f80fd5b3461013557807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101355761012c60209260243590355f52600360205260405f208160081c5f52602052600160ff60405f205492161b8091161490565b90519015158152f35b5f80fd5b5090346101355760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013557610172611077565b9061017b6113fe565b73ffffffffffffffffffffffffffffffffffffffff8092169283156101ec5750505f54827fffffffffffffffffffffffff00000000000000000000000000000000000000008216175f55167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3005b90602060849251917f08c379a0000000000000000000000000000000000000000000000000000000008352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152fd5b5034610135575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610135576020906002549051908152f35b50903461013557817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610135573573ffffffffffffffffffffffffffffffffffffffff81169182820361013557610312602435809361030b6113fe565b33906116aa565b519081527ffb0872526787ac1be379aa37eaa9913b47d6d50c3f5fe5ec67ffe4282493670e60203392a3005b5090346101355760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013557803560249283359073ffffffffffffffffffffffffffffffffffffffff93848316809303610135576064359467ffffffffffffffff938487116101355736602388011215610135578683013590858211610135573689838a0101116101355788976103d86113fe565b6002549060018201808311610686576002555f906103f5856113c4565b9461040289519687611036565b8086528060209c8d93018388013785010152805f5260018952855f2092604435845588600185015560036002850194847fffffffffffffffffffffffff0000000000000000000000000000000000000000875416178655019080519089821161065b578190610471845461118a565b8d601f8211610621575b50508c90601f8311600114610582575f92610577575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c19161790555b7f521fe5bce65ac6af752c1083ec77facc5b6c13f40693e96eeca3747726fee9ad8680518a8152338c820152a35416937f23b872dd00000000000000000000000000000000000000000000000000000000835196870152338787015230604487015260648601526064855260a08501928584109084111761054c575061054a94505261170c565b005b604186917f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b015190505f80610491565b5f8581528e8120937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016908f5b82821061060a5750509084600195949392106105d3575b505050811b0190556104c3565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c191690555f80806105c6565b60018596829396860151815501950193018f6105af565b61064a91865f52815f2090601f860160051c8201928610610651575b601f0160051c01906113ae565b5f8d61047b565b909150819061063d565b8c6041897f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b8a6011887f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b50346101355760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013557813567ffffffffffffffff81116101355761054a92610702913691016110b2565b60206002606083019373ffffffffffffffffffffffffffffffffffffffff918291610731838851163314611349565b61073a8661147c565b85515f52600185525f20015416935116910151916116aa565b5090346101355760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101355760207f8fea52000ecb40f2262c672496dfadccc9d6290439bac487e084de8c57682d669135926107b26113fe565b835f52600182526003815f205f81555f60018201555f6002820155016107d8815461118a565b90816107e8575b505051338152a2005b81601f5f93116001146107ff5750555b5f806107df565b90808391825261081d601f878420940160051c8401600185016113ae565b55556107f8565b5034610135575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101355760209073ffffffffffffffffffffffffffffffffffffffff5f54169051908152f35b503461013557602091827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013557355f5260019060018352805f2090815491600181015491600373ffffffffffffffffffffffffffffffffffffffff600284015416920192815193875f978254926108f08461118a565b808952936001811690811561097b575060011461093e575b5050505061091c8461093a96970385611036565b815196879687528601528401526080606084015260808301906111db565b0390f35b5f90815282812092995092915b8284106109685750505084019095019461091c8761093a86610908565b80548885018b015292890192810161094b565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016848a015250505090151560051b850101955061091c8761093a86610908565b509034610135576020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013557813567ffffffffffffffff811161013557610a0c90369084016110b2565b91335f5280825260ff845f20541615610ac75750610a298261147c565b81515f52600181527fcfb930b6b49765485460cb1c6853ec3437a78b18d8c9a25b9fed2eea3b6756a973ffffffffffffffffffffffffffffffffffffffff91826002865f20015416610a828286019182519033906116aa565b610ac28551946001888260608a015116980151935194875f52526002885f2001541696519283923396846040919493926060820195825260208201520152565b0390a4005b6064918451917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601560248201527f756e77686974656c697374656420636c61696d657200000000000000000000006044820152fd5b50346101355760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013557602091355f526001825273ffffffffffffffffffffffffffffffffffffffff6002825f200154169051908152f35b50903461013557817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013557610bb8611077565b91602435928315158094036101355773ffffffffffffffffffffffffffffffffffffffff90610be56113fe565b1691825f526020525f207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0081541660ff84161790557fbaa2323ab54d3ecd5bd63d3c3cfc23d7ef896edcbc927b7b7867407f32a3ba295f80a3005b34610135575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013557610c766113fe565b5f73ffffffffffffffffffffffffffffffffffffffff81547fffffffffffffffffffffffff000000000000000000000000000000000000000081168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b50346101355760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101355760209173ffffffffffffffffffffffffffffffffffffffff610d2a611077565b165f52825260ff815f20541690519015158152f35b509034610135576020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101355781359267ffffffffffffffff9283851161013557366023860112156101355760249481810135610da08161109a565b95610dad85519788611036565b81875260248688019260051b840101923684116101355760248101925b848410610f6e57505050505083515f5b818110610f365750505f918451945f5b868110610df357005b610dfd8183611308565b5194610e088661147c565b868601518101809111610f0b57809560019081840190818511610ee05780515f52828a5273ffffffffffffffffffffffffffffffffffffffff918b83600281818c5f200154169687938514948515610ebc575b8515610e95575b5050505050610e78575b50505050600101610dea565b610e899498506060015116906116aa565b5f936001858080610e6c565b610ea49192939495508b611308565b51515f528d52895f20015416141583835f8080610e62565b80955083808d610ecf6060948592611308565b510151169188015116141594610e5b565b8b6011897f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b886011867f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b600190610f683373ffffffffffffffffffffffffffffffffffffffff6060610f5e858c611308565b5101511614611349565b01610dda565b8335838111610135578891610f8983928d36918701016110b2565b815201930192610dca565b50346101355760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101355781359167ffffffffffffffff831161013557610fe861012c916020943691016110b2565b611237565b6080810190811067ffffffffffffffff82111761100957604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761100957604052565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361013557565b67ffffffffffffffff81116110095760051b60200190565b919060a0838203126101355760405167ffffffffffffffff9360a082018581118382101761100957604052819481358352602091828101358385015260408101356040850152606081013573ffffffffffffffffffffffffffffffffffffffff81168103610135576060850152608081013591821161013557019280601f850112156101355783356111438161109a565b946111516040519687611036565b818652838087019260051b820101928311610135578301905b82821061117b575050505060800152565b8135815290830190830161116a565b90600182811c921680156111d1575b60208310146111a457565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b91607f1691611199565b91908251928382525f5b8481106112235750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f845f6020809697860101520116010190565b6020818301810151848301820152016111e5565b6060810151906020916020820151906040916040840151604051917fffffffffffffffffffffffffffffffffffffffff000000000000000000000000602084019460601b168452603483015260548201526054815261129581610fed565b51902092608083015192515f526001918291600160205260405f205495945f945b6112c4575b50505050501490565b80518510156113035784956112da859683611308565b5190818110156112f5575f52825283835f205b9601946112b6565b905f52825283835f206112ed565b6112bb565b805182101561131c5760209160051b010190565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b1561135057565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f696e76616c696420636c61696d657200000000000000000000000000000000006044820152fd5b8181106113b9575050565b5f81556001016113ae565b67ffffffffffffffff811161100957601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b73ffffffffffffffffffffffffffffffffffffffff5f5416330361141e57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b61148581611237565b1561164c5780516040916114c0838201928351905f52600360205260405f208160081c5f52602052600160ff60405f205492161b8091161490565b6115c9578051825190600160ff8360081c93835f5260209460038652885f20815f528652885f2054945f5260038652885f20905f528552161b17845f20558082019081519183515f52600182526001865f200192835490810390811161159c577f18bdb6adb84039f917775d1fb8e7b7e7737ad5915d12eef0e4654b85e18d07b493556115976060600186519673ffffffffffffffffffffffffffffffffffffffff9283910151169751935194875f52526002885f2001541696519283923396846040919493926060820195825260208201520152565b0390a4565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b608483517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f4163636f756e742068617320616c726561647920636c61696d656420666f722060448201527f746869732077696e646f770000000000000000000000000000000000000000006064820152fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f496e636f7272656374206d65726b6c652070726f6f66000000000000000000006044820152fd5b61170a9273ffffffffffffffffffffffffffffffffffffffff604051937fa9059cbb00000000000000000000000000000000000000000000000000000000602086015216602484015260448301526044825261170582610fed565b61170c565b565b73ffffffffffffffffffffffffffffffffffffffff16604051604081019181831067ffffffffffffffff841117611009576117a6926040525f806020958685527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656487860152868151910182855af13d15611863573d9161178b836113c4565b926117996040519485611036565b83523d5f8785013e611867565b8051828115918215611843575b50509050156117bf5750565b608490604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152fd5b83809293500103126101355781015180151581036101355780825f6117b3565b6060915b919290156118e2575081511561187b575090565b3b156118845790565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b8251909150156118f55750805190602001fd5b611933906040519182917f08c379a00000000000000000000000000000000000000000000000000000000083526020600484015260248301906111db565b0390fdfea264697066735822122006274a113b30dd91c918673f804567b71ffba5e56123fb6a3b7f15ec9bdfede364736f6c63430008170033";
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
        readonly name: "ClaimFor";
        readonly type: "event";
    }, {
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
            readonly name: "claimer";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "bool";
            readonly name: "whitelist";
            readonly type: "bool";
        }];
        readonly name: "WhitelistedClaimer";
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
            readonly internalType: "struct MerkleDistributorInterface.Claim";
            readonly name: "_claim";
            readonly type: "tuple";
        }];
        readonly name: "claimFor";
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
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "whitelist";
            readonly type: "bool";
        }];
        readonly name: "whitelistClaimer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "whitelistedClaimers";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
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
    static createInterface(): AcrossMerkleDistributorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossMerkleDistributor;
}
export {};
