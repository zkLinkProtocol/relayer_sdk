import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UpgradeableBeacon, UpgradeableBeaconInterface } from "../../../../../@openzeppelin/contracts/proxy/beacon/UpgradeableBeacon";
declare type UpgradeableBeaconConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UpgradeableBeacon__factory extends ContractFactory {
    constructor(...args: UpgradeableBeaconConstructorParams);
    deploy(implementation_: string, overrides?: Overrides & {
        from?: string;
    }): Promise<UpgradeableBeacon>;
    getDeployTransaction(implementation_: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): UpgradeableBeacon;
    connect(signer: Signer): UpgradeableBeacon__factory;
    static readonly bytecode = "0x60803461011757601f6105d938819003918201601f19168301916001600160401b0383118484101761011b5780849260209460405283398101031261011757516001600160a01b038082169190828203610117575f549160018060a01b03199233848216175f55604051923391167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a33b156100af575060015416176001556040516104a990816101308239f35b62461bcd60e51b815260206004820152603360248201527f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f60448201527f6e206973206e6f74206120636f6e7472616374000000000000000000000000006064820152608490fd5b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe60806040526004361015610011575f80fd5b5f3560e01c80633659cfe6146102c25780635c60da1b14610271578063715018a6146101d75780638da5cb5b146101875763f2fde38b14610050575f80fd5b346101835760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101835760043573ffffffffffffffffffffffffffffffffffffffff808216809203610183576100a96103f5565b81156100ff575f54827fffffffffffffffffffffffff00000000000000000000000000000000000000008216175f55167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3005b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152fd5b5f80fd5b34610183575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261018357602073ffffffffffffffffffffffffffffffffffffffff5f5416604051908152f35b34610183575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101835761020d6103f5565b5f73ffffffffffffffffffffffffffffffffffffffff81547fffffffffffffffffffffffff000000000000000000000000000000000000000081168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b34610183575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261018357602073ffffffffffffffffffffffffffffffffffffffff60015416604051908152f35b346101835760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101835760043573ffffffffffffffffffffffffffffffffffffffff8116908181036101835761031b6103f5565b3b1561037157807fffffffffffffffffffffffff000000000000000000000000000000000000000060015416176001557fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b5f80a2005b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603360248201527f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f60448201527f6e206973206e6f74206120636f6e7472616374000000000000000000000000006064820152fd5b73ffffffffffffffffffffffffffffffffffffffff5f5416330361041557565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fdfea2646970667358221220b4091c4a22a67bf97a813a6601b081f73b5456a2efb0a1f928c42e9bb9c7585e64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "implementation_";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
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
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "implementation";
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
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }];
        readonly name: "upgradeTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): UpgradeableBeaconInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UpgradeableBeacon;
}
export {};
