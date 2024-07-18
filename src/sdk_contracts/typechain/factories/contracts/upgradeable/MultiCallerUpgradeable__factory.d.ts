import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MultiCallerUpgradeable, MultiCallerUpgradeableInterface } from "../../../contracts/upgradeable/MultiCallerUpgradeable";
declare type MultiCallerUpgradeableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MultiCallerUpgradeable__factory extends ContractFactory {
    constructor(...args: MultiCallerUpgradeableConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<MultiCallerUpgradeable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): MultiCallerUpgradeable;
    connect(signer: Signer): MultiCallerUpgradeable__factory;
    static readonly bytecode = "0x608080604052346100165761069b908161001b8239f35b5f80fdfe604060806040526004361015610013575f80fd5b5f3560e01c908163437b911614610038575063ac9650d814610033575f80fd5b610304565b3461011a576100463661011e565b9061005861005383610476565b610432565b928284527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe061008684610476565b015f5b8181106100fa5750505f5b8381106100ad57604051806100a987826101ed565b0390f35b806100f46100bd600193886104bb565b515f806100cb858a8a6104d4565b906100da895180938193610534565b0390305af4906100e861057b565b60208201529015159052565b01610094565b60209061010561040d565b5f815282606081830152828901015201610089565b5f80fd5b9060207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc83011261011a5760043567ffffffffffffffff9283821161011a578060238301121561011a57816004013593841161011a5760248460051b8301011161011a576024019190565b5f5b83811061019a5750505f910152565b818101518382015260200161018b565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f6020936101e681518092818752878088019101610189565b0116010190565b6020808201908083528351809252604092604081018260408560051b8401019601945f925b858410610223575050505050505090565b909192939495968580610272837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0866001960301885286838d51805115158452015191818582015201906101aa565b990194019401929594939190610212565b6020808201906020835283518092526040830192602060408460051b8301019501935f915b8483106102b85750505050505090565b90919293949584806102f4837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc086600196030187528a516101aa565b98019301930191949392906102a8565b3461011a576103123661011e565b9061031c826105a0565b915f5b81811061033457604051806100a98682610283565b5f806103418385876104d4565b60409391610353855180938193610534565b0390305af49061036161057b565b911561038857509060019161037682876104bb565b5261038181866104bb565b500161031f565b90604481511061011a576103dc6103ad600492838101516024809183010191016105fc565b92519283927f08c379a00000000000000000000000000000000000000000000000000000000084528301610654565b0390fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051906040820182811067ffffffffffffffff82111761042d57604052565b6103e0565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f604051930116820182811067ffffffffffffffff82111761042d57604052565b67ffffffffffffffff811161042d5760051b60200190565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b80518210156104cf5760209160051b010190565b61048e565b91908110156104cf5760051b810135907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18136030182121561011a57019081359167ffffffffffffffff831161011a57602001823603811361011a579190565b908092918237015f815290565b67ffffffffffffffff811161042d57601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b3d1561059b573d9061058f61005383610541565b9182523d5f602084013e565b606090565b906105ad61005383610476565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe06105db8294610476565b01905f5b8281106105eb57505050565b8060606020809385010152016105df565b60208183031261011a5780519067ffffffffffffffff821161011a570181601f8201121561011a57805161063261005382610541565b928184526020828401011161011a576106519160208085019101610189565b90565b9060206106519281815201906101aa56fea26469706673582212200d41a1995c5e10331f353c6c5c2ba8f37ed6d8c598a9e54eeb704c1b2caa58ae64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "data";
            readonly type: "bytes[]";
        }];
        readonly name: "multicall";
        readonly outputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "results";
            readonly type: "bytes[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "data";
            readonly type: "bytes[]";
        }];
        readonly name: "tryMulticall";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bool";
                readonly name: "success";
                readonly type: "bool";
            }, {
                readonly internalType: "bytes";
                readonly name: "returnData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct MultiCallerUpgradeable.Result[]";
            readonly name: "results";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): MultiCallerUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MultiCallerUpgradeable;
}
export {};
