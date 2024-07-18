import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MerkleLibTest, MerkleLibTestInterface } from "../../../contracts/test/MerkleLibTest";
declare type MerkleLibTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MerkleLibTest__factory extends ContractFactory {
    constructor(...args: MerkleLibTestConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<MerkleLibTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): MerkleLibTest;
    connect(signer: Signer): MerkleLibTest__factory;
    static readonly bytecode = "0x6080806040523461001657610fa1908161001b8239f35b5f80fdfe6080806040526004361015610012575f80fd5b5f3560e01c9081630228e57d14610a115750806348d7ac71146109c457806350897f62146109895780639e34070f14610935578063bfa2b1631461061e578063c87b9c38146103bd578063d53c02d51461016e578063e7aa0bd71461011d578063ec0cfe3b146100d55763ee25560b1461008a575f80fd5b346100d15760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d1576004355f525f602052602060405f2054604051908152f35b5f80fd5b346100d15760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d15761010c610d82565b600160ff815492161b176001555f80f35b346100d15760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d1576004358060081c5f525f60205260405f2090600160ff835492161b1790555f80f35b346100d1577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc6060813601126100d1576024359067ffffffffffffffff908183116100d15760e09083360301126100d1576040519060e0820182811082821117610390576040528260040135825260248301358181116100d1576101f89060043691860101610c28565b6020830190815260448401358281116100d15761021b9060043691870101610d22565b6040840190815260648501358381116100d15761023e9060043691880101610d22565b926060850193845260808501906084870135825260a48701359660ff881688036100d15760a0870197885260c4810135908282116100d15760046102859236920101610cba565b9060c087019182526044359081116100d1576102a5903690600401610d22565b96604051958695602087019860208a52516040880152516060870160e0905261012087016102d291610e14565b94517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0958688820301608089015261030991610eec565b905190858782030160a088015261031f91610eec565b925160c08601525160ff1660e085015251918382030161010084015261034491610e47565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0810182526103749082610bcf565b51902060043561038392610f1f565b6040519015158152602090f35b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b346100d1577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc6060813601126100d15767ffffffffffffffff906024358281116100d15760408282360301126100d15760405160408101818110858211176103905782600401358581116100d157830190610140809583360301126100d15761018093848401828110888211176103905760405261045d60048401610c99565b825261046b60248401610c99565b606085015261047c60448401610c99565b6080850152606483013560a0850152608483013560c085015260a483013560e08501526104ab60c48401610e06565b9061010091828601526104c060e48501610e06565b9361012094858701526104d66101048201610c88565b88870152610124810135908982116100d15760046104f79236920101610d92565b926101609384870152855260246020860191013581526044359788116100d1576105d46106149763ffffffff956106079561053860209c3690600401610d22565b996040519889978e89019b8f8d5251936040808b015273ffffffffffffffffffffffffffffffffffffffff8086511660808c0152602081908701511660a08c015260408601511660c08b0152606085015160e08b01526080850151828b015260a0850151868b015260c085015160070b878b015260e085015160070b908a015283015116908701520151906101a08501526101c0840190610e90565b90516060830152037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282610bcf565b5190209060043590610f1f565b6040519015158152f35b346100d1577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc6060813601126100d15767ffffffffffffffff602435116100d157606081602435360301126100d1576040519081606081011067ffffffffffffffff60608401111761039057602435600401359067ffffffffffffffff82116100d157610180908260243501360301126100d1576101e0820160608301811067ffffffffffffffff821117610390576040526106e06004826024350101610c99565b60608301526106f460248281350101610c99565b60808301526107096044826024350101610c99565b60a083015261071e6064826024350101610c99565b60c08301526107336084826024350101610c99565b60e0830152602435810160a481013561010084015260c481013561012084015260e481013561014084015261076b9061010401610c88565b610160830152610782610124826024350101610c88565b610180830152610799610144826024350101610c88565b6101a083015267ffffffffffffffff61016482602435010135116100d1576107d09036906024350161016481013501600401610d92565b6101c0820152606081018152602480350135602082015260446024350135604082015260443567ffffffffffffffff81116100d157602091610819610614923690600401610d22565b906109256040518092868083015260406108e8610160835160608487015273ffffffffffffffffffffffffffffffffffffffff8082511660a0880152808c8301511660c088015280858301511660e08801528060608301511661010088015260808201511661012087015260a081015161014087015260c08101518287015260e081015161018087015261010081015163ffffffff8091166101a088015280610120830151166101c0880152610140820151166101e08701520151610180610200860152610220850190610e90565b9188810151606085015201516080830152037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282610bcf565b8381519101209060043590610f1f565b346100d15760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d15760206004358060081c5f525f8252600160ff60405f205492161b806040519216148152f35b346100d1575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d1576020600154604051908152f35b346100d15760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d15760206109fd610d82565b600160ff815492161b806040519216148152f35b346100d1577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc6060813601126100d1576024359167ffffffffffffffff918284116100d15760c09084360301126100d15760c0810181811083821117610390576040528260040135815260208101906024840135825260448401358381116100d157610aa39060043691870101610c28565b9160408201928352610ab760648601610c88565b9360608301948552610acb60848701610c99565b956080840196875260a4810135908282116100d1576004610aef9236920101610cba565b9260a081019384526044359182116100d157610ba7610614966020989573ffffffffffffffffffffffffffffffffffffffff8a9763ffffffff610b68610b3c610607993690600401610d22565b9b6040519a8b998d8b019d8e525160408b01525160608a01525160c060808a0152610100890190610e14565b94511660a0870152511660c0850152517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08483030160e0850152610e47565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081018352825b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761039057604052565b67ffffffffffffffff81116103905760051b60200190565b9080601f830112156100d1576020908235610c4281610c10565b93610c506040519586610bcf565b81855260208086019260051b8201019283116100d157602001905b828210610c79575050505090565b81358152908301908301610c6b565b359063ffffffff821682036100d157565b359073ffffffffffffffffffffffffffffffffffffffff821682036100d157565b9080601f830112156100d1576020908235610cd481610c10565b93610ce26040519586610bcf565b81855260208086019260051b8201019283116100d157602001905b828210610d0b575050505090565b838091610d1784610c99565b815201910190610cfd565b9080601f830112156100d1576020908235610d3c81610c10565b93610d4a6040519586610bcf565b81855260208086019260051b8201019283116100d157602001905b828210610d73575050505090565b81358152908301908301610d65565b6004359060ff821682036100d157565b81601f820112156100d15780359067ffffffffffffffff82116103905760405192610de560207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601160185610bcf565b828452602083830101116100d157815f926020809301838601378301015290565b35908160070b82036100d157565b9081518082526020808093019301915f5b828110610e33575050505090565b835185529381019392810192600101610e25565b9081518082526020808093019301915f5b828110610e66575050505090565b835173ffffffffffffffffffffffffffffffffffffffff1685529381019392810192600101610e58565b91908251928382525f5b848110610ed85750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f845f6020809697860101520116010190565b602081830181015184830182015201610e9a565b9081518082526020808093019301915f5b828110610f0b575050505090565b835185529381019392810192600101610efd565b9091905f915b8151831015610f64576020808460051b84010151918281105f14610f55575f5252600160405f205b920191610f25565b915f5252600160405f20610f4d565b915050149056fea2646970667358221220a5f9bb7b51b3abe5ab20b017260f216f4d2b4566fa460de70bbf598f7027b07264736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "claimedBitMap";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "claimedBitMap1D";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
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
            readonly internalType: "uint8";
            readonly name: "index";
            readonly type: "uint8";
        }];
        readonly name: "isClaimed1D";
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
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "setClaimed";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "index";
            readonly type: "uint8";
        }];
        readonly name: "setClaimed1D";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "root";
            readonly type: "bytes32";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "chainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "bundleLpFees";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "int256[]";
                readonly name: "netSendAmounts";
                readonly type: "int256[]";
            }, {
                readonly internalType: "int256[]";
                readonly name: "runningBalances";
                readonly type: "int256[]";
            }, {
                readonly internalType: "uint256";
                readonly name: "groupIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint8";
                readonly name: "leafId";
                readonly type: "uint8";
            }, {
                readonly internalType: "address[]";
                readonly name: "l1Tokens";
                readonly type: "address[]";
            }];
            readonly internalType: "struct HubPoolInterface.PoolRebalanceLeaf";
            readonly name: "rebalance";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "proof";
            readonly type: "bytes32[]";
        }];
        readonly name: "verifyPoolRebalance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "root";
            readonly type: "bytes32";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amountToReturn";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "chainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "refundAmounts";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint32";
                readonly name: "leafId";
                readonly type: "uint32";
            }, {
                readonly internalType: "address";
                readonly name: "l2TokenAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address[]";
                readonly name: "refundAddresses";
                readonly type: "address[]";
            }];
            readonly internalType: "struct SpokePoolInterface.RelayerRefundLeaf";
            readonly name: "refund";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "proof";
            readonly type: "bytes32[]";
        }];
        readonly name: "verifyRelayerRefund";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "root";
            readonly type: "bytes32";
        }, {
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "depositor";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "recipient";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "destinationToken";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "originChainId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "destinationChainId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "int64";
                    readonly name: "realizedLpFeePct";
                    readonly type: "int64";
                }, {
                    readonly internalType: "int64";
                    readonly name: "relayerFeePct";
                    readonly type: "int64";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "depositId";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "message";
                    readonly type: "bytes";
                }];
                readonly internalType: "struct MockV2SpokePoolInterface.RelayData";
                readonly name: "relayData";
                readonly type: "tuple";
            }, {
                readonly internalType: "int256";
                readonly name: "payoutAdjustmentPct";
                readonly type: "int256";
            }];
            readonly internalType: "struct MockV2SpokePoolInterface.SlowFill";
            readonly name: "slowFill";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "proof";
            readonly type: "bytes32[]";
        }];
        readonly name: "verifySlowRelayFulfillment";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "root";
            readonly type: "bytes32";
        }, {
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "depositor";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "recipient";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "exclusiveRelayer";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "inputToken";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "outputToken";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "inputAmount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "outputAmount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "originChainId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "depositId";
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
                readonly internalType: "struct V3SpokePoolInterface.V3RelayData";
                readonly name: "relayData";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "chainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "updatedOutputAmount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct V3SpokePoolInterface.V3SlowFill";
            readonly name: "slowFill";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "proof";
            readonly type: "bytes32[]";
        }];
        readonly name: "verifyV3SlowRelayFulfillment";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): MerkleLibTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MerkleLibTest;
}
export {};
