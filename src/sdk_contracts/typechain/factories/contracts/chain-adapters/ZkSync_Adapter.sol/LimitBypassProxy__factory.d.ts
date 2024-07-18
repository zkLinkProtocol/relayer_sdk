import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LimitBypassProxy, LimitBypassProxyInterface } from "../../../../contracts/chain-adapters/ZkSync_Adapter.sol/LimitBypassProxy";
declare type LimitBypassProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LimitBypassProxy__factory extends ContractFactory {
    constructor(...args: LimitBypassProxyConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<LimitBypassProxy>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): LimitBypassProxy;
    connect(signer: Signer): LimitBypassProxy__factory;
    static readonly bytecode = "0x6080806040523461001657610a67908161001b8239f35b5f80fdfe608060409080825260049081361015610016575f80fd5b5f3560e01c9081637c19f005146107f857508063b473318e14610718578063bb3e04b5146106cc578063e8b99b1b146102c75763eb67241914610057575f80fd5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc9160e0833601126102305761008b610842565b60246044359467ffffffffffffffff95868111610230573660238201121561023057808601359287841161023057368185840101116102305760a4358881116102305736602382011215610230578088013595898711610230578660051b93368486850101116102305760c4359673ffffffffffffffffffffffffffffffffffffffff9a8b8916809903610230578b99928d959261016d928d9b96989d519c8d997feb672419000000000000000000000000000000000000000000000000000000008b5216908901528c358d89015260e060448901528c60e4890192016108d3565b96606435606487015260843560848701528588030160a48601528187526020998a9687808a01918a010195828401995f947fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbd81360301915b878710610245578b8b8f8282808f8f60c48301520381347332400084c286cf3e17e7b677ea9583e60a0003245af191821561023b575f92610208575b5051908152f35b9091508281813d8311610234575b6102208183610865565b8101031261023057519083610201565b5f80fd5b503d610216565b50513d5f823e3d90fd5b898194979a9396999c507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09295989b50030186528a358481121561023057830190604488830135920191868111610230578036038313610230578f916102af9083926001956108d3565b9c01960197019390928c98959a97928e9a97946101c5565b5060c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610230576102fa610842565b91602480359373ffffffffffffffffffffffffffffffffffffffff91828616809603610230576044803560a43591858316809303610230578651987fdd62ed3e000000000000000000000000000000000000000000000000000000008a5230898b01527357891966931eb4bb6fb81430e6ce0a03aabde0639485818c015260209a8b818581865afa9081156106c2575f91610695575b5084810180911161066a5789518c8101917f095ea7b3000000000000000000000000000000000000000000000000000000008352888483015285820152848152608081019167ffffffffffffffff918084108385111761063f5760c0810184811084821117610613578d528e84527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460a0820152515f9182919082885af1903d15610605573d9081116105da5761048892918e918d5190610478847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160183610865565b81525f81933d92013e5b85610911565b80518c81159182156105ba575b505090501561053a579160c49593918b989795938a519b8c998a987fe8b99b1b000000000000000000000000000000000000000000000000000000008a5216908801528601528401526064356064840152608435608484015260a483015234905af191821561023b575f9261050b575051908152f35b9091508281813d8311610533575b6105238183610865565b810103126102305751905f610201565b503d610519565b897f5361666545524332303a204552433230206f7065726174696f6e20646964206e84602a6084948f8e51957f08c379a00000000000000000000000000000000000000000000000000000000087528601528401528201527f6f742073756363656564000000000000000000000000000000000000000000006064820152fd5b8380929350010312610230578b0151801515810361023057808c5f610495565b8360418e7f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b509061048891606090610482565b508460418f7f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b8460418f7f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b5060118a7f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b90508b81813d83116106bb575b6106ac8183610865565b8101031261023057515f610390565b503d6106a2565b8a513d5f823e3d90fd5b8234610230575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261023057602090517357891966931eb4bb6fb81430e6ce0a03aabde0638152f35b5090346102305760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610230578051917fb473318e000000000000000000000000000000000000000000000000000000008352803590830152602435602483015260443560448301526020826064817332400084c286cf3e17e7b677ea9583e60a0003245afa9081156107ef575f916107ba575b6020925051908152f35b90506020823d6020116107e7575b816107d560209383610865565b810103126102305760209151906107b0565b3d91506107c8565b513d5f823e3d90fd5b34610230575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261023057807332400084c286cf3e17e7b677ea9583e60a00032460209252f35b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361023057565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176108a657604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b601f82602094937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe093818652868601375f8582860101520116010190565b9192901561098c5750815115610925575090565b3b1561092e5790565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b82519091501561099f5750805190602001fd5b604051907f08c379a00000000000000000000000000000000000000000000000000000000082528160208060048301528251928360248401525f5b848110610a1a575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f835f604480968601015201168101030190fd5b8181018301518682016044015285935082016109da56fea2646970667358221220184e2633f053d1954c060e4a2e68f05d1eab464536bd7284b49304d2b41bfd5c64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_l2Receiver";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_l1Token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_l2TxGasLimit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_l2TxGasPerPubdataByte";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_refundRecipient";
            readonly type: "address";
        }];
        readonly name: "deposit";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_l1GasPrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_l2GasLimit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_l2GasPerPubdataByteLimit";
            readonly type: "uint256";
        }];
        readonly name: "l2TransactionBaseCost";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_contractL2";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_l2Value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_calldata";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_l2GasLimit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_l2GasPerPubdataByteLimit";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "_factoryDeps";
            readonly type: "bytes[]";
        }, {
            readonly internalType: "address";
            readonly name: "_refundRecipient";
            readonly type: "address";
        }];
        readonly name: "requestL2Transaction";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "canonicalTxHash";
            readonly type: "bytes32";
        }];
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
        readonly name: "zkSync";
        readonly outputs: readonly [{
            readonly internalType: "contract ZkSyncInterface";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): LimitBypassProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LimitBypassProxy;
}
export {};
