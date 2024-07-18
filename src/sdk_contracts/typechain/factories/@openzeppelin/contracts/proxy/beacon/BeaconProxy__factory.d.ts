import { Signer, ContractFactory, PayableOverrides, BytesLike } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BeaconProxy, BeaconProxyInterface } from "../../../../../@openzeppelin/contracts/proxy/beacon/BeaconProxy";
declare type BeaconProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BeaconProxy__factory extends ContractFactory {
    constructor(...args: BeaconProxyConstructorParams);
    deploy(beacon: string, data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<BeaconProxy>;
    getDeployTransaction(beacon: string, data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): BeaconProxy;
    connect(signer: Signer): BeaconProxy__factory;
    static readonly bytecode = "0x608060409080825261072f80380380916100198285610342565b833981019082818303126102385761003081610365565b6020828101516001600160401b039391929184821161023857019084601f830112156102385781519161006283610379565b9261006f88519485610342565b8084528484019685828401011161023857868561008c9301610394565b803b156102f0578551635c60da1b60e01b80825292916001600160a01b0316908481600481855afa9081156102e6575f916102b1575b503b15610254577fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5080546001600160a01b03191682179055865192817f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e5f80a282511580159061024d575b610140575b87516102c690816104698239f35b6004848693819382525afa918215610243575f92610208575b5085519360608501908111858210176101f4578652602784527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c83850152660819985a5b195960ca1b84870152516101de945f918291845af4903d156101eb573d6101c381610379565b906101d088519283610342565b81525f81943d92013e6103b5565b505f808080808080610132565b606092506103b5565b634e487b7160e01b5f52604160045260245ffd5b9091508281813d831161023c575b6102208183610342565b810103126102385761023190610365565b905f610159565b5f80fd5b503d610216565b86513d5f823e3d90fd5b505f61012d565b865162461bcd60e51b815260048101859052603060248201527f455243313936373a20626561636f6e20696d706c656d656e746174696f6e206960448201526f1cc81b9bdd08184818dbdb9d1c9858dd60821b6064820152608490fd5b90508481813d83116102df575b6102c88183610342565b81010312610238576102d990610365565b5f6100c2565b503d6102be565b88513d5f823e3d90fd5b855162461bcd60e51b815260048101849052602560248201527f455243313936373a206e657720626561636f6e206973206e6f74206120636f6e6044820152641d1c9858dd60da1b6064820152608490fd5b601f909101601f19168101906001600160401b038211908210176101f457604052565b51906001600160a01b038216820361023857565b6001600160401b0381116101f457601f01601f191660200190565b5f5b8381106103a55750505f910152565b8181015183820152602001610396565b9192901561041757508151156103c9575090565b3b156103d25790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b82519091501561042a5750805190602001fd5b6044604051809262461bcd60e51b82526020600483015261045a8151809281602486015260208686019101610394565b601f01601f19168101030190fdfe6080806040523661011c5760208160048173ffffffffffffffffffffffffffffffffffffffff7fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5054167f5c60da1b0000000000000000000000000000000000000000000000000000000082525afa908115610111575f91610081575b50610273565b905060203d60201161010a575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f82011682019180831067ffffffffffffffff8411176100dd576100d792604052016101f6565b5f61007b565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b503d61008e565b6040513d5f823e3d90fd5b6004602073ffffffffffffffffffffffffffffffffffffffff7fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d505416604051928380927f5c60da1b0000000000000000000000000000000000000000000000000000000082525afa908115610111575f916101975750610273565b602091503d82116101ee575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011681019181831067ffffffffffffffff8411176100dd576100d792604052810190610247565b3d91506101a3565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8060209101126102435760805173ffffffffffffffffffffffffffffffffffffffff811681036102435790565b5f80fd5b90816020910312610243575173ffffffffffffffffffffffffffffffffffffffff811681036102435790565b5f8091368280378136915af43d5f803e1561028c573d5ff35b3d5ffdfea2646970667358221220b4f1db7eabc093e990966c683bfcbe202c14ae535c7b924878180eafd9fbb72564736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "beacon";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly stateMutability: "payable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "previousAdmin";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "AdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "beacon";
            readonly type: "address";
        }];
        readonly name: "BeaconUpgraded";
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
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): BeaconProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BeaconProxy;
}
export {};
