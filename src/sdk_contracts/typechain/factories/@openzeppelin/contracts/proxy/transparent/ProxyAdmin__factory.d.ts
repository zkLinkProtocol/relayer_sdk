import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ProxyAdmin, ProxyAdminInterface } from "../../../../../@openzeppelin/contracts/proxy/transparent/ProxyAdmin";
declare type ProxyAdminConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ProxyAdmin__factory extends ContractFactory {
    constructor(...args: ProxyAdminConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<ProxyAdmin>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): ProxyAdmin;
    connect(signer: Signer): ProxyAdmin__factory;
    static readonly bytecode = "0x6080806040523461005a575f8054336001600160a01b0319821681178355916001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a3610905908161005f8239f35b5f80fdfe60806040818152600480361015610014575f80fd5b5f925f3560e01c908163204e1c7a1461065857508063715018a6146105be5780637eff275e146104f65780638da5cb5b146104a55780639623609d1461032c5783816399a88ec41461025c57508063f2fde38b146101265763f3b7dead1461007a575f80fd5b346101225760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012257828073ffffffffffffffffffffffffffffffffffffffff92836100ca6106f4565b168551907ff851a4400000000000000000000000000000000000000000000000000000000082525afa926100fc6107f6565b931561011f5750610117836020808096518301019101610825565b169051908152f35b80fd5b8280fd5b50346101225760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101225761015e6106f4565b90610167610851565b73ffffffffffffffffffffffffffffffffffffffff8092169283156101d95750505f54827fffffffffffffffffffffffff00000000000000000000000000000000000000008216175f55167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a380f35b90602060849251917f08c379a0000000000000000000000000000000000000000000000000000000008352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152fd5b9290503461032857807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610328576102956106f4565b61029d610717565b906102a6610851565b73ffffffffffffffffffffffffffffffffffffffff809116803b1561032457859283602492865197889586947f3659cfe600000000000000000000000000000000000000000000000000000000865216908401525af190811561031b575061030b5750f35b6103149061073a565b61011f5780f35b513d84823e3d90fd5b8580fd5b5050fd5b50829060607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104a1576103616106f4565b9261036a610717565b9160443567ffffffffffffffff811161049d573660238201121561049d578082013591610396836107bc565b926103a38551948561077b565b80845260209236602483830101116104995781889260246020930183880137850101526103ce610851565b73ffffffffffffffffffffffffffffffffffffffff80971696873b15610495578451957f4f1ef2860000000000000000000000000000000000000000000000000000000087521690850152826024850152815191826044860152855b83811061048157505050828495816064817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f878b85819a860101520116810103019134905af190811561031b575061030b5750f35b81810183015186820160640152820161042a565b8680fd5b8780fd5b8480fd5b5080fd5b5050346104a157817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104a15773ffffffffffffffffffffffffffffffffffffffff60209254169051908152f35b5090346105ba57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126105ba5761052e6106f4565b610536610717565b9061053f610851565b73ffffffffffffffffffffffffffffffffffffffff809116803b156105ba575f9283602492865197889586947f8f28397000000000000000000000000000000000000000000000000000000000865216908401525af19081156105b157506105a5575080f35b6105af915061073a565b005b513d5f823e3d90fd5b5f80fd5b346105ba575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126105ba576105f4610851565b5f73ffffffffffffffffffffffffffffffffffffffff81547fffffffffffffffffffffffff000000000000000000000000000000000000000081168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b8383346105ba5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126105ba575f809173ffffffffffffffffffffffffffffffffffffffff94856106ab6106f4565b167f5c60da1b0000000000000000000000000000000000000000000000000000000082525afa916106da6107f6565b92156105ba57610117836020808096518301019101610825565b6004359073ffffffffffffffffffffffffffffffffffffffff821682036105ba57565b6024359073ffffffffffffffffffffffffffffffffffffffff821682036105ba57565b67ffffffffffffffff811161074e57604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761074e57604052565b67ffffffffffffffff811161074e57601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b3d15610820573d90610807826107bc565b91610815604051938461077b565b82523d5f602084013e565b606090565b908160209103126105ba575173ffffffffffffffffffffffffffffffffffffffff811681036105ba5790565b73ffffffffffffffffffffffffffffffffffffffff5f5416330361087157565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fdfea26469706673582212202077b1385587e754ad4b8b28a834208d3fe4be4487d70f17c6e1416a184a190b64736f6c63430008170033";
    static readonly abi: readonly [{
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
        readonly inputs: readonly [{
            readonly internalType: "contract ITransparentUpgradeableProxy";
            readonly name: "proxy";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "changeProxyAdmin";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ITransparentUpgradeableProxy";
            readonly name: "proxy";
            readonly type: "address";
        }];
        readonly name: "getProxyAdmin";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ITransparentUpgradeableProxy";
            readonly name: "proxy";
            readonly type: "address";
        }];
        readonly name: "getProxyImplementation";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
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
            readonly internalType: "contract ITransparentUpgradeableProxy";
            readonly name: "proxy";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "upgrade";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ITransparentUpgradeableProxy";
            readonly name: "proxy";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "upgradeAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): ProxyAdminInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ProxyAdmin;
}
export {};
