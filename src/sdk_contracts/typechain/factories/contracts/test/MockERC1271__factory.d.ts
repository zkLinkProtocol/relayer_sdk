import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockERC1271, MockERC1271Interface } from "../../../contracts/test/MockERC1271";
declare type MockERC1271ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockERC1271__factory extends ContractFactory {
    constructor(...args: MockERC1271ConstructorParams);
    deploy(originalOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<MockERC1271>;
    getDeployTransaction(originalOwner: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): MockERC1271;
    connect(signer: Signer): MockERC1271__factory;
    static readonly bytecode = "0x60803461011a57601f61088838819003918201601f19168301916001600160401b0383118484101761011e5780849260209460405283398101031261011a57516001600160a01b038082169081830361011a5761005b33610132565b33905f5416036100d657156100825761007390610132565b60405161070f90816101798239f35b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b5f80546001600160a01b039283166001600160a01b03198216811783559216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a356fe6080604081815260049182361015610015575f80fd5b5f3560e01c9081631626ba7e1461026f57508063715018a6146101d55780638da5cb5b146101845763f2fde38b1461004b575f80fd5b346101805760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101805781359173ffffffffffffffffffffffffffffffffffffffff91828416809403610180576100a56103fc565b83156100fd5750505f54827fffffffffffffffffffffffff00000000000000000000000000000000000000008216175f55167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3005b90602060849251917f08c379a0000000000000000000000000000000000000000000000000000000008352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152fd5b5f80fd5b5034610180575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101805760209073ffffffffffffffffffffffffffffffffffffffff5f54169051908152f35b34610180575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101805761020b6103fc565b5f73ffffffffffffffffffffffffffffffffffffffff81547fffffffffffffffffffffffff000000000000000000000000000000000000000081168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b90503461018057817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101805760243567ffffffffffffffff9182821161018057366023830112156101805781850135928084116103d0577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f8701160116820190828210908211176103d05784528281523660248484010111610180576020945f868561033b966024610333970183870137840101523561047a565b9190916104af565b73ffffffffffffffffffffffffffffffffffffffff805f54169116145f146103a8577fffffffff000000000000000000000000000000000000000000000000000000007f1626ba7e00000000000000000000000000000000000000000000000000000000915b5191168152f35b7fffffffff000000000000000000000000000000000000000000000000000000005f916103a1565b6041867f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b73ffffffffffffffffffffffffffffffffffffffff5f5416330361041c57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b9060418151145f146104a6576104a291602082015190606060408401519301515f1a90610646565b9091565b50505f90600290565b600581101561061957806104c05750565b600181036105265760646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152fd5b6002810361058c5760646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152fd5b60031461059557565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a084116106ce576020935f9360ff60809460405194855216868401526040830152606082015282805260015afa156106c3575f5173ffffffffffffffffffffffffffffffffffffffff8116156106bb57905f90565b505f90600190565b6040513d5f823e3d90fd5b505050505f9060039056fea2646970667358221220199661f92bac0da69d79339cbce98bc7f2a754d8ab237020f59d5ddd0dfedf5d64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "originalOwner";
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
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "hash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "isValidSignature";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "magicValue";
            readonly type: "bytes4";
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
    }];
    static createInterface(): MockERC1271Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockERC1271;
}
export {};
