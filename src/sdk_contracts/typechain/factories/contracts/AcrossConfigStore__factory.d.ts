import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AcrossConfigStore, AcrossConfigStoreInterface } from "../../contracts/AcrossConfigStore";
declare type AcrossConfigStoreConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossConfigStore__factory extends ContractFactory {
    constructor(...args: AcrossConfigStoreConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<AcrossConfigStore>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): AcrossConfigStore;
    connect(signer: Signer): AcrossConfigStore__factory;
    static readonly bytecode = "0x6080806040523461005a575f8054336001600160a01b0319821681178355916001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a3610efd908161005f8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c806350fbbd0114610094578063715018a61461008f5780638098b8751461008a5780638da5cb5b146100855780639fdd403a14610080578063ac9650d81461007b578063e5e818ae146100765763f2fde38b14610071575f80fd5b610845565b610649565b6105c5565b6104e8565b610498565b6103fc565b610328565b346101075760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101075773ffffffffffffffffffffffffffffffffffffffff6100e061010b565b165f5260016020526101036100f760405f206101f2565b60405191829182610317565b0390f35b5f80fd5b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361010757565b90600182811c92168015610175575b602083101461014857565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b91607f169161013d565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176101ed57604052565b61017f565b60405190815f82546102038161012e565b908184526020946001916001811690815f146102725750600114610234575b505050610231925003826101ac565b90565b5f90815285812095935091905b81831061025a57505061023193508201015f8080610222565b85548784018501529485019486945091830191610241565b9150506102319593507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152151560051b8201015f8080610222565b5f5b8381106102c45750505f910152565b81810151838201526020016102b5565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f602093610310815180928187528780880191016102b3565b0116010190565b9060206102319281815201906102d4565b34610107575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101075761035e610e49565b5f73ffffffffffffffffffffffffffffffffffffffff81547fffffffffffffffffffffffff000000000000000000000000000000000000000081168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b67ffffffffffffffff81116101ed57601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b346101075760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101075761043361010b565b6024359067ffffffffffffffff8211610107573660238301121561010757816004013590610460826103c2565b9161046e60405193846101ac565b8083523660248286010111610107576020815f92602461049697018387013784010152610977565b005b34610107575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010757602073ffffffffffffffffffffffffffffffffffffffff5f5416604051908152f35b346101075760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610107576004355f52600260205261010361053060405f206101f2565b6040519182916020835260208301906102d4565b6020808201906020835283518092526040830192602060408460051b8301019501935f915b8483106105795750505050505090565b90919293949584806105b5837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc086600196030187528a516102d4565b9801930193019194939290610569565b346101075760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101075767ffffffffffffffff6004358181116101075736602382011215610107578060040135918211610107573660248360051b830101116101075761010391602461063d9201610d3d565b60405191829182610544565b346101075760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101075767ffffffffffffffff6004356024803583811161010757366023820112156101075780600401359384116101075736828583010111610107576106b9610e49565b825f526020600260205260405f20906106dc866106d6845461012e565b84610b2f565b5f90601f8711600114610773575094610761916107518280877f84c11a81ce8e8060e814e03c4606fe325e7a24ecc22ef7001254e27de3762f49999a5f92610766575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c19161790565b90555b6040519384930183610e04565b0390a2005b880101359050875f61071f565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe087166107a4845f5260205f2090565b925f905b82821061082b575050916107619391887f84c11a81ce8e8060e814e03c4606fe325e7a24ecc22ef7001254e27de3762f49989994106107f1575b5050600182811b019055610754565b867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88660031b161c1991870101351690555f806107e2565b80600185968a8395978b01013581550195019301906107a8565b346101075760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101075761087c61010b565b610884610e49565b73ffffffffffffffffffffffffffffffffffffffff8091169081156108f3575f54827fffffffffffffffffffffffff00000000000000000000000000000000000000008216175f55167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3005b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152fd5b73ffffffffffffffffffffffffffffffffffffffff90610995610e49565b1690815f526001602090600160205260405f209183519167ffffffffffffffff83116101ed576109cf836109c9865461012e565b86610b2f565b602091601f8411600114610a6157505091610a43827f2170feb790d9bf809ba50947096322ec651593149b6f78e673e51c1c67cfe3fd9593610a51955f91610a56575b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c19161790565b905560405191829182610317565b0390a2565b90508401515f610a12565b91907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0841690610a94865f5260205f2090565b935f915b838310610b185750505092610a519492600192827f2170feb790d9bf809ba50947096322ec651593149b6f78e673e51c1c67cfe3fd989610610ae1575b5050811b0190556100f7565b8501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c191690555f80610ad5565b888501518655948501949381019391810191610a98565b601f8211610b3c57505050565b5f5260205f20906020601f840160051c83019310610b74575b601f0160051c01905b818110610b69575050565b5f8155600101610b5e565b9091508190610b55565b67ffffffffffffffff81116101ed5760051b60200190565b90610ba082610b7e565b610bad60405191826101ac565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0610bdb8294610b7e565b01905f5b828110610beb57505050565b806060602080938501015201610bdf565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b9190811015610c895760051b810135907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18136030182121561010757019081359167ffffffffffffffff8311610107576020018236038113610107579190565b610bfc565b908092918237015f815290565b3d15610cc5573d90610cac826103c2565b91610cba60405193846101ac565b82523d5f602084013e565b606090565b6020818303126101075780519067ffffffffffffffff8211610107570181601f82011215610107578051610cfd816103c2565b92610d0b60405194856101ac565b818452602082840101116101075761023191602080850191016102b3565b8051821015610c895760209160051b010190565b919091610d4983610b96565b925f5b818110610d5857505050565b5f80610d65838587610c29565b60409391610d77855180938193610c8e565b0390305af490610d85610c9b565b9115610dac575090600191610d9a8288610d29565b52610da58187610d29565b5001610d4c565b90604481511061010757610e00610dd160049283810151602480918301019101610cca565b92519283927f08c379a00000000000000000000000000000000000000000000000000000000084528301610317565b0390fd5b90601f836040947fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09360208652816020870152868601375f8582860101520116010190565b73ffffffffffffffffffffffffffffffffffffffff5f54163303610e6957565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fdfea264697066735822122067832191a4e87fb75c7c06a5e748b6e0415055420a6e648f6273569f6e533d3f64736f6c63430008170033";
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
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "key";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "value";
            readonly type: "string";
        }];
        readonly name: "UpdatedGlobalConfig";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "key";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "value";
            readonly type: "string";
        }];
        readonly name: "UpdatedTokenConfig";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "globalConfig";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "l1TokenConfig";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
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
            readonly internalType: "bytes32";
            readonly name: "key";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "value";
            readonly type: "string";
        }];
        readonly name: "updateGlobalConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "l1Token";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "value";
            readonly type: "string";
        }];
        readonly name: "updateTokenConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): AcrossConfigStoreInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossConfigStore;
}
export {};
