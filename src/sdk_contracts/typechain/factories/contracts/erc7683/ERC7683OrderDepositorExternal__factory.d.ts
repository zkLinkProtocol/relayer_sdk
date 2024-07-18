import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC7683OrderDepositorExternal, ERC7683OrderDepositorExternalInterface } from "../../../contracts/erc7683/ERC7683OrderDepositorExternal";
declare type ERC7683OrderDepositorExternalConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC7683OrderDepositorExternal__factory extends ContractFactory {
    constructor(...args: ERC7683OrderDepositorExternalConstructorParams);
    deploy(_spokePool: string, _permit2: string, _quoteBeforeDeadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ERC7683OrderDepositorExternal>;
    getDeployTransaction(_spokePool: string, _permit2: string, _quoteBeforeDeadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): ERC7683OrderDepositorExternal;
    connect(signer: Signer): ERC7683OrderDepositorExternal__factory;
    static readonly bytecode = "0x60e0346100c957601f611d7738819003918201601f19168301916001600160401b038311848410176100cd578084926060946040528339810103126100c9578051906001600160a01b039081831683036100c957602081015191821682036100c957604001519060805260a05260c052604051611c9590816100e28239608051818181610abd01528181610bec0152611268015260a051818181609c0152610cc2015260c051818181610d7501528181610dff01528181610ecf01528181610f8501526111fa0152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe60806040526004361015610011575f80fd5b5f803560e01c806329cb924d1461128c5780636afdd8501461121e5780638021fef7146111b0578063962fc2a3146106535780639a3589891461053e578063bf6d01d3146100c25763d881b11214610067575f80fd5b346100bf57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100bf5760206040517f00000000000000000000000000000000000000000000000000000000000000008152f35b80fd5b50346100bf5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100bf5767ffffffffffffffff60043581811161053a57610113903690600401611484565b9060243590811161053a5761012c90369060040161143e565b606061010060405161013d81611303565b85815285602082015285604082015285838201528560808201528560a08201528260c08201528260e0820152015273ffffffffffffffffffffffffffffffffffffffff82511630036105105763ffffffff60608301511646036104e6576101a9839160c0840151611634565b906040516101b6816112d3565b60018152835b602081106104bd575073ffffffffffffffffffffffffffffffffffffffff8251166020830151604051916101ef836112d3565b825260208201526101ff8261179a565b526102098161179a565b506102126117d4565b9173ffffffffffffffffffffffffffffffffffffffff604082015116606082015173ffffffffffffffffffffffffffffffffffffffff60a08401511663ffffffff608085015116916040519361026785611320565b84526020840152604083015260608201526102818461179a565b5261028b8361179a565b5063ffffffff6102996117d4565b9473ffffffffffffffffffffffffffffffffffffffff6020818551169401519151166102c44661182b565b91604051946102d286611320565b8552602085015260408401521660608201526102ed8461179a565b526102f78361179a565b5073ffffffffffffffffffffffffffffffffffffffff6020860151169460408101519063ffffffff60608201511663ffffffff60a0816080850151169301511692604051986103458a611303565b308a5260208a015260408901526060880152608087015260a086015260c085015260e084015261010083015260405180926020825273ffffffffffffffffffffffffffffffffffffffff815116602083015273ffffffffffffffffffffffffffffffffffffffff60208201511660408301526040810151606083015263ffffffff606082015116608083015263ffffffff60808201511660a083015263ffffffff60a08201511660c083015260c08101516101208060e0850152815180610140860152602061016086019301955b81811061047357505061046f93945061010061045e60e0850151937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0948589830301848a015261158e565b93015191858403019085015261158e565b0390f35b91939594509160206040826104ab60019489516020809173ffffffffffffffffffffffffffffffffffffffff81511684520151910152565b01950191019186949295939195610413565b6020906040969596516104cf816112d3565b8781528783820152828285010152019493946101bc565b60046040517f5f87bc00000000000000000000000000000000000000000000000000000000008152fd5b60046040517f70e02d13000000000000000000000000000000000000000000000000000000008152fd5b8280fd5b50346100bf5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100bf5767ffffffffffffffff9060043582811161064f5761059090369060040161143e565b906024359283116100bf57506105ad6105b392369060040161143e565b90611634565b906040519182916040835261064373ffffffffffffffffffffffffffffffffffffffff9182815116604086015260208101516060860152826040820151166080860152606081015160a086015260e060808201519163ffffffff80931660c08801528460a0820151168288015260c08101519261010093168388015201519061012086015261014085019061154b565b91511660208301520390f35b5080fd5b503461117f5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261117f5760043567ffffffffffffffff811161117f576106a3903690600401611484565b60243567ffffffffffffffff811161117f576106c390369060040161143e565b9060443567ffffffffffffffff811161117f576106e490369060040161143e565b73ffffffffffffffffffffffffffffffffffffffff82511630036105105763ffffffff60608301511646036104e6576107219060c0830151611634565b9273ffffffffffffffffffffffffffffffffffffffff82511660208301516040519161074c836112d3565b82526020820152604084015163ffffffff608086015116906040519283606081011067ffffffffffffffff6060860111176111835760608401604052835260208301526040820152602083015191604051926107a7846112d3565b308452602084015273ffffffffffffffffffffffffffffffffffffffff602086015116916107d36118c0565b6020815191012073ffffffffffffffffffffffffffffffffffffffff865116602087015173ffffffffffffffffffffffffffffffffffffffff604089015116606089015163ffffffff60808b0151169073ffffffffffffffffffffffffffffffffffffffff60a08c0151169263ffffffff60c08d0151169460e08d015160208151910120966040519860208a015260408901526060880152608087015260a086015260c085015260e0840152610100830152610120908183015281528061014081011067ffffffffffffffff61014083011117611183576101408101604052602081519101206108c1611a4f565b6108c96118c0565b61090760206040518093826108e7818401978881519384920161152a565b82016108fb8251809386808501910161152a565b01038084520182611391565b5190209073ffffffffffffffffffffffffffffffffffffffff8851169073ffffffffffffffffffffffffffffffffffffffff60208a01511689604081015163ffffffff6060830151169063ffffffff60a0816080860151169401511693604051966020880198895260408801526060870152608086015260a085015260c084015260e083015261010082015261010081526109a181611303565b5190206109ac6118c0565b926109b5611a4f565b9360405180606081011067ffffffffffffffff60608301111761118357610aa69181606060389301604052602e815260208101907f546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c7582527f696e7432353620616d6f756e74290000000000000000000000000000000000006040820152610a97604051998a947f43726f7373436861696e4f72646572207769746e6573732900000000000000006020870152610a748151809260208a8a01910161152a565b8501610a898251809360208a8501910161152a565b01915180938684019061152a565b01036018810187520185611391565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163b1561117f57610ba1604094610bd2935f97610b8388519a8b998a997f137c29fe000000000000000000000000000000000000000000000000000000008b52610b4a60048c0182516020809173ffffffffffffffffffffffffffffffffffffffff81511684520151910152565b60208181015160448d015291015160648b0152815173ffffffffffffffffffffffffffffffffffffffff1660848b0152015160a4890152565b60c487015260e486015261014061010486015261014485019061154b565b907ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc8483030161012485015261154b565b03818373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165af1801561117457611161575b5073ffffffffffffffffffffffffffffffffffffffff60208301511673ffffffffffffffffffffffffffffffffffffffff60a0830151169073ffffffffffffffffffffffffffffffffffffffff8351169373ffffffffffffffffffffffffffffffffffffffff6040850151169360208101519660608201519273ffffffffffffffffffffffffffffffffffffffff63ffffffff60808501511692511663ffffffff6080830151167f000000000000000000000000000000000000000000000000000000000000000081039081116111345760a0610cfa63ffffffff9261182b565b9301511692610d084261182b565b63ffffffff8060c0880151169116019463ffffffff86116111075760e00151958c604460208d604051928380927fdd62ed3e00000000000000000000000000000000000000000000000000000000825230600483015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001660248301525afa9182156110fb57916110c9575b508c8101811161109c578c8e8d8180610ea2956040519560208701917f095ea7b300000000000000000000000000000000000000000000000000000000835273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016602489015201604487015260448652610e3786611320565b60405195610e44876112d3565b602087527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65646020880152519082855af1903d15611093573d610e8581611404565b90610e936040519283611391565b8152809360203d92013e611b8f565b805190811591821561106c575b505015610fe8578c9b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163b15610fe4578c9a6040519c8d9b8c9b7f7b939232000000000000000000000000000000000000000000000000000000008d5260048d015260248c015260448b015260648a0152608489015260a488015260c487015260e486015263ffffffff1661010485015261012484015263ffffffff16610144830152610164820161018090526101848201610f809161154b565b0381837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff165af18015610fd957610fc95750f35b610fd2906112ef565b6100bf5780f35b6040513d84823e3d90fd5b8c80fd5b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152fd5b819250906020918101031261108f5760200151801515810361108f575f80610eaf565b8d80fd5b60609250611b8f565b60248e7f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b90506020813d6020116110f3575b816110e460209383611391565b8101031261108f57515f610da9565b3d91506110d7565b604051903d90823e3d90fd5b60248d7f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b60248c7f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b61116c9194506112ef565b5f925f610c19565b6040513d5f823e3d90fd5b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b3461117f575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261117f57602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b3461117f575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261117f57602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b3461117f575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261117f5760206112c54261182b565b63ffffffff60405191168152f35b6040810190811067ffffffffffffffff82111761118357604052565b67ffffffffffffffff811161118357604052565b610120810190811067ffffffffffffffff82111761118357604052565b6080810190811067ffffffffffffffff82111761118357604052565b610100810190811067ffffffffffffffff82111761118357604052565b6020810190811067ffffffffffffffff82111761118357604052565b60e0810190811067ffffffffffffffff82111761118357604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761118357604052565b359073ffffffffffffffffffffffffffffffffffffffff8216820361117f57565b359063ffffffff8216820361117f57565b67ffffffffffffffff811161118357601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b81601f8201121561117f5780359061145582611404565b926114636040519485611391565b8284526020838301011161117f57815f926020809301838601378301015290565b91909160e08184031261117f576040519067ffffffffffffffff9060e08301828111848210176111835760405282946114bc826113d2565b84526114ca602083016113d2565b6020850152604082013560408501526114e5606083016113f3565b60608501526114f6608083016113f3565b608085015261150760a083016113f3565b60a085015260c082013592831161117f5760c092611525920161143e565b910152565b5f5b83811061153b5750505f910152565b818101518382015260200161152c565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f6020936115878151809281875287808801910161152a565b0116010190565b9081518082526020808093019301915f5b8281106115ad575050505090565b8351805173ffffffffffffffffffffffffffffffffffffffff908116875281840151878501526040808301519091169087015260609081015163ffffffff16908601526080909401939281019260010161159f565b519073ffffffffffffffffffffffffffffffffffffffff8216820361117f57565b519063ffffffff8216820361117f57565b919091604080516116448161133c565b5f8152606060e06020925f848201525f858201525f838201525f60808201525f60a08201525f60c082015201525f825161167d81611359565b52825183019281840190828186031261117f578281015167ffffffffffffffff9182821161117f57018095610100968791031261117f578451956116c08761133c565b6116cb858301611602565b875285820151858801526116e160608301611602565b86880152608082015160608801526116fb60a08301611623565b608088015261170c60c08301611602565b60a088015261171d60e08301611623565b60c088015281015191821161117f570181603f8201121561117f578281015161174581611404565b9261175286519485611391565b81845285828401011161117f5761176e9185858501910161152a565b60e0840152808580518101031261117f5761179491519461178e86611359565b01611602565b83529190565b8051156117a75760200190565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b604090604051916117e4836112d3565b6001835282915f5b6020808210156118235783516020929161180582611320565b5f82525f818301525f868301525f60608301528288010152016117ec565b505091925050565b63ffffffff9081811161183c571690565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201527f32206269747300000000000000000000000000000000000000000000000000006064820152fd5b6040517f4163726f73734f7264657244617461280000000000000000000000000000000060208201527f6164647265737320696e707574546f6b656e2c0000000000000000000000000060308201527f75696e7432353620696e707574416d6f756e742c00000000000000000000000060438201527f61646472657373206f7574707574546f6b656e2c00000000000000000000000060578201527f75696e74323536206f7574707574416d6f756e742c0000000000000000000000606b8201527f75696e7433322064657374696e6174696f6e436861696e49642c00000000000060808201527f6164647265737320726563697069656e742c0000000000000000000000000000609a8201527f75696e743332206578636c75736976697479446561646c696e654f666673657460ac8201527f2c0000000000000000000000000000000000000000000000000000000000000060cc8201527f6279746573206d6573736167652900000000000000000000000000000000000060cd82015260bb8152611a4c81611375565b90565b6040517f43726f7373436861696e4f72646572280000000000000000000000000000000060208201527f6164647265737320736574746c656d656e74436f6e74726163742c000000000060308201527f6164647265737320737761707065722c00000000000000000000000000000000604b8201527f75696e74323536206e6f6e63652c000000000000000000000000000000000000605b8201527f75696e743332206f726967696e436861696e49642c000000000000000000000060698201527f75696e74333220696e697469617465446561646c696e652c0000000000000000607e8201527f75696e7433322066696c6c446561646c696e652c00000000000000000000000060968201527f4163726f73734f7264657244617461206f72646572446174612900000000000060aa82015260a48152611a4c81611375565b91929015611c0a5750815115611ba3575090565b3b15611bac5790565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b825190915015611c1d5750805190602001fd5b611c5b906040519182917f08c379a000000000000000000000000000000000000000000000000000000000835260206004840152602483019061154b565b0390fdfea264697066735822122042fe6cdb1f47358187d37fede9474e7015b740b6c3e081a366886df648dea2be64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract V3SpokePoolInterface";
            readonly name: "_spokePool";
            readonly type: "address";
        }, {
            readonly internalType: "contract IPermit2";
            readonly name: "_permit2";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_quoteBeforeDeadline";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongChainId";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongSettlementContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "PERMIT2";
        readonly outputs: readonly [{
            readonly internalType: "contract IPermit2";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "QUOTE_BEFORE_DEADLINE";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
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
            readonly internalType: "bytes";
            readonly name: "orderData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "fillerData";
            readonly type: "bytes";
        }];
        readonly name: "decode";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "inputToken";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "inputAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "outputToken";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "outputAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "destinationChainId";
                readonly type: "uint32";
            }, {
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "exclusivityDeadlineOffset";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes";
                readonly name: "message";
                readonly type: "bytes";
            }];
            readonly internalType: "struct AcrossOrderData";
            readonly name: "";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "exclusiveRelayer";
                readonly type: "address";
            }];
            readonly internalType: "struct AcrossFillerData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getCurrentTime";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "settlementContract";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "swapper";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "originChainId";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "initiateDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes";
                readonly name: "orderData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct CrossChainOrder";
            readonly name: "order";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "fillerData";
            readonly type: "bytes";
        }];
        readonly name: "initiate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "settlementContract";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "swapper";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "originChainId";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "initiateDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes";
                readonly name: "orderData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct CrossChainOrder";
            readonly name: "order";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "fillerData";
            readonly type: "bytes";
        }];
        readonly name: "resolve";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "settlementContract";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "swapper";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "originChainId";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "initiateDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Input[]";
                readonly name: "swapperInputs";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "recipient";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "chainId";
                    readonly type: "uint32";
                }];
                readonly internalType: "struct Output[]";
                readonly name: "swapperOutputs";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "recipient";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "chainId";
                    readonly type: "uint32";
                }];
                readonly internalType: "struct Output[]";
                readonly name: "fillerOutputs";
                readonly type: "tuple[]";
            }];
            readonly internalType: "struct ResolvedCrossChainOrder";
            readonly name: "resolvedOrder";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ERC7683OrderDepositorExternalInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC7683OrderDepositorExternal;
}
export {};
