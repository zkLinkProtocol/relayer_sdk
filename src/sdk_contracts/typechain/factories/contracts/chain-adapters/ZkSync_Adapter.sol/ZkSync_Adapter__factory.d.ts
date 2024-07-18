import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ZkSync_Adapter, ZkSync_AdapterInterface } from "../../../../contracts/chain-adapters/ZkSync_Adapter.sol/ZkSync_Adapter";
declare type ZkSync_AdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ZkSync_Adapter__factory extends ContractFactory {
    constructor(...args: ZkSync_AdapterConstructorParams);
    deploy(_l1Weth: string, _l2RefundAddress: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ZkSync_Adapter>;
    getDeployTransaction(_l1Weth: string, _l2RefundAddress: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): ZkSync_Adapter;
    connect(signer: Signer): ZkSync_Adapter__factory;
    static readonly bytecode = "0x60c0346100a157601f61103638819003918201601f19168301916001600160401b038311848410176100a55780849260409485528339810103126100a15780516001600160a01b039182821682036100a1576020015191821682036100a15760a052608052604051610f7c90816100ba82396080518181816101b6015281816103730152818161057b015261088f015260a0518181816104890152610ab20152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe604060808152600480361015610013575f80fd5b5f915f3560e01c806308f1ed1514610ad6578063146bf4b114610a6857806352c8c75c1461040e5780635e743ef7146103d25780636c9075b7146103975780638446ec8114610328578063bb3e04b5146102d7578063c9f5a053146102d2578063cdc2b148146102d25763e6eb8ade1461008b575f80fd5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc81813601126102ce576100bd610b17565b916024359367ffffffffffffffff85116102ca57366023860112156102ca5784810135946100ea86610bf4565b956100f784519788610b86565b8087526020958836602484860101116102c7578783610193946024839701838d01378a0101528789610127610e06565b926101b3610133610d0d565b9989519a8b97889687967feb67241900000000000000000000000000000000000000000000000000000000885273ffffffffffffffffffffffffffffffffffffffff809716809d890152602488015260e0604488015260e4870190610d30565b91621e8480606487015261032060848701528583030160a4860152610d8c565b907f00000000000000000000000000000000000000000000000000000000000000001660c483015203917332400084c286cf3e17e7b677ea9583e60a0003245af19283156102bd57869361026a575b507f82e577407245f8e8c446b39602dae3fffacbc21172a51c88525e050063929b2f947f9e6c52944e331ba6270e7fe4cea2a4086bae8f7a27e1cdba07f416806f5d0ac49161025f84519283928352858884015285830190610d30565b0390a151908152a180f35b9092508381813d83116102b6575b6102828183610b86565b810103126102b25751917f82e577407245f8e8c446b39602dae3fffacbc21172a51c88525e050063929b2f610202565b5f80fd5b503d610278565b82513d88823e3d90fd5b80fd5b8580fd5b8380fd5b610b3a565b83823461032457817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261032457602090517357891966931eb4bb6fb81430e6ce0a03aabde0638152f35b5080fd5b83823461032457817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610324576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b83823461032457817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261032457602090516103208152f35b83823461032457817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103245760209051621e84808152f35b509060807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102b257610442610b17565b91602480359273ffffffffffffffffffffffffffffffffffffffff918285168095036102b2576044803592606435948086168096036102b257610483610e06565b988116987f000000000000000000000000000000000000000000000000000000000000000082168a81036106f457803b156102b2575f8091878b51809481937f2e1a7d4d0000000000000000000000000000000000000000000000000000000083528c8a8401525af180156106ea57610695575b50859492602094926105788a8e60e06105118b8e98610cd3565b9761051a610d0d565b93519b8c9a8b998a997feb672419000000000000000000000000000000000000000000000000000000008b528a015288015286015260e4850152621e84806064850152610320608485015261010060a4850152610104840190610d8c565b907f00000000000000000000000000000000000000000000000000000000000000001660c483015203917332400084c286cf3e17e7b677ea9583e60a0003245af190811561068b578791610631575b507f82e577407245f8e8c446b39602dae3fffacbc21172a51c88525e050063929b2f9560209594937fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b93608093965b865193845288840152858301526060820152a151908152a180f35b9050602094939294813d602011610683575b8161065060209383610b86565b810103126102b25751929391927f82e577407245f8e8c446b39602dae3fffacbc21172a51c88525e050063929b2f6105c7565b3d9150610643565b84513d89823e3d90fd5b90919293949596979a5067ffffffffffffffff81116106bf578a525f9996959493929190856104f7565b856041857f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b89513d5f823e3d90fd5b509093928751947fdd62ed3e00000000000000000000000000000000000000000000000000000000865230848701527357891966931eb4bb6fb81430e6ce0a03aabde063918286880152868c818360209a8b935afa8015610a5e5789905f90610a2d575b6107629250610cd3565b8a5190888201907f095ea7b3000000000000000000000000000000000000000000000000000000008252858984015283830152828252608082019167ffffffffffffffff81841081851117610a025760c0820190811184821017610a02578f905f8f939461082896958e8394875287527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460a0820152519082855af1903d156109f9573d61081b61081282610bf4565b94519485610b86565b83523d5f8d85013e610e76565b80518881159182156109d9575b5050905015610959579260c492879592898b968f8e519a8b998a987fe8b99b1b000000000000000000000000000000000000000000000000000000008a52890152870152850152621e8480606485015261032060848501527f00000000000000000000000000000000000000000000000000000000000000001660a48401525af191821561094f575f92610918575b50507f82e577407245f8e8c446b39602dae3fffacbc21172a51c88525e050063929b2f9560209594937fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b9360809396610616565b9080925081969594963d8311610948575b6109338183610b86565b810103126102b25751929391928560206108c4565b503d610929565b85513d5f823e3d90fd5b847f5361666545524332303a204552433230206f7065726174696f6e20646964206e608492602a898b8f51957f08c379a00000000000000000000000000000000000000000000000000000000087528601528401528201527f6f742073756363656564000000000000000000000000000000000000000000006064820152fd5b83809293500103126102b25787015180151581036102b25780885f610835565b60609250610e76565b8960418a7f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b50508781813d8311610a57575b610a448183610b86565b810103126102b257886107629151610758565b503d610a3a565b8b513d5f823e3d90fd5b50346102b2575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102b2576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346102b2575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102b257602090610b10610c2e565b9051908152f35b6004359073ffffffffffffffffffffffffffffffffffffffff821682036102b257565b346102b2575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102b25760206040517332400084c286cf3e17e7b677ea9583e60a0003248152f35b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610bc757604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b67ffffffffffffffff8111610bc757601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b6040517fb473318e0000000000000000000000000000000000000000000000000000000081523a6004820152621e8480602482015261032060448201526020816064817332400084c286cf3e17e7b677ea9583e60a0003245afa908115610cc8575f91610c99575090565b90506020813d602011610cc0575b81610cb460209383610b86565b810103126102b2575190565b3d9150610ca7565b6040513d5f823e3d90fd5b91908201809211610ce057565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b6040516020810181811067ffffffffffffffff821117610bc7576040525f815290565b91908251928382525f5b848110610d785750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f845f6020809697860101520116010190565b602081830181015184830182015201610d3a565b90808251908181526020809101926020808460051b8301019501935f915b848310610dba5750505050505090565b9091929394958480610df6837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe086600196030187528a51610d30565b9801930193019194939290610daa565b610e0e610c2e565b90814710610e1857565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f496e73756666696369656e74204554482062616c616e636500000000000000006044820152fd5b91929015610ef15750815115610e8a575090565b3b15610e935790565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b825190915015610f045750805190602001fd5b610f42906040519182917f08c379a0000000000000000000000000000000000000000000000000000000008352602060048401526024830190610d30565b0390fdfea264697066735822122008f22f24687004d502fb6977b3f64d4f669e1d07a3c885142ba89c43b37593ae64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract WETH9Interface";
            readonly name: "_l1Weth";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_l2RefundAddress";
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
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "canonicalTxHash";
            readonly type: "bytes32";
        }];
        readonly name: "ZkSyncMessageRelayed";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "L1_GAS_TO_L2_GAS_PER_PUB_DATA_LIMIT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L2_GAS_LIMIT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getL1CallValue";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
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
        readonly name: "l2RefundAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
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
        readonly name: "zkErc20Bridge";
        readonly outputs: readonly [{
            readonly internalType: "contract ZkBridgeLike";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "zkSyncEthBridge";
        readonly outputs: readonly [{
            readonly internalType: "contract ZkSyncInterface";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "zkSyncMessageBridge";
        readonly outputs: readonly [{
            readonly internalType: "contract ZkSyncInterface";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ZkSync_AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ZkSync_Adapter;
}
export {};
