import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PermissionSplitterProxy, PermissionSplitterProxyInterface } from "../../contracts/PermissionSplitterProxy";
declare type PermissionSplitterProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PermissionSplitterProxy__factory extends ContractFactory {
    constructor(...args: PermissionSplitterProxyConstructorParams);
    deploy(_target: string, overrides?: Overrides & {
        from?: string;
    }): Promise<PermissionSplitterProxy>;
    getDeployTransaction(_target: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): PermissionSplitterProxy;
    connect(signer: Signer): PermissionSplitterProxy__factory;
    static readonly bytecode = "0x60806040818152346200038c5781620016c3803803809162000022828562000390565b83396020938491810103126200038c57516001600160a01b03811692908390036200038c575f80525f8152815f20335f52815260ff825f2054161562000343575b5f80525f8152815f20335f52815260ff825f20541615620000c45750600280546001600160a01b0319168317905551907f814250a3b8c79fcbe2ead2c131c952a278491c8f4322a79fe84b5040a810373e5f80a26112d99081620003ea8239f35b8151916001600160401b03336060850182811186821017620002e9578352602a85528385019183368437855115620002d5576030835385519160019260011015620002d5576078602188015360295b838111620002fd575062000237575f845191608083019083821090821117620002e957855260428252858201926060368537825115620002d55760308453825160011015620002d557607860218401536041905b80821162000279575050620002375792620002046048620001f4979462000229946044989785519a8b93620001ca8b86019a7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008c525180926037880190620003b4565b8401917001034b99036b4b9b9b4b733903937b6329607d1b603784015251809386840190620003b4565b0103602881018952018762000390565b5194859362461bcd60e51b8552600485015251809281602486015285850190620003b4565b601f01601f19168101030190fd5b60648585519062461bcd60e51b825280600483015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b9091600f81166010811015620002d5576f181899199a1a9b1b9c1cb0b131b232b360811b901a620002ab8486620003d7565b5360041c918015620002c1575f19019062000167565b634e487b7160e01b5f52601160045260245ffd5b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52604160045260245ffd5b90600f81166010811015620002d5576f181899199a1a9b1b9c1cb0b131b232b360811b901a6200032e838a620003d7565b5360041c908015620002c1575f190162000113565b5f80525f8152815f20335f528152815f20600160ff1982541617905533335f7f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a462000063565b5f80fd5b601f909101601f19168101906001600160401b03821190821017620002e957604052565b5f5b838110620003c65750505f910152565b8181015183820152602001620003b6565b908151811015620002d557016020019056fe60806040526004361015610018575b36610faf57610faf565b5f3560e01c806301ffc9a7146100d75780631dbcb538146100d2578063248a9ca3146100cd5780632f2ff15d146100c857806336568abe146100c357806377da6060146100be57806382127da1146100b957806391d14854146100b4578063a217fddf146100af578063ac9650d8146100aa578063d4b83992146100a55763d547741f0361000e57610865565b610814565b61078c565b61066f565b6105f6565b610587565b6104ee565b610408565b6102df565b610295565b6101ed565b61010f565b600435907fffffffff000000000000000000000000000000000000000000000000000000008216820361010b57565b5f80fd5b3461010b5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010b5760207fffffffff000000000000000000000000000000000000000000000000000000006101696100dc565b167f7965db0b0000000000000000000000000000000000000000000000000000000081149081156101a0575b506040519015158152f35b7f01ffc9a7000000000000000000000000000000000000000000000000000000009150145f610195565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361010b57565b3461010b5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010b5760043573ffffffffffffffffffffffffffffffffffffffff811680910361010b57610245610c06565b807fffffffffffffffffffffffff000000000000000000000000000000000000000060025416176002557f814250a3b8c79fcbe2ead2c131c952a278491c8f4322a79fe84b5040a810373e5f80a2005b3461010b5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010b576004355f525f6020526020600160405f200154604051908152f35b3461010b5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010b576004356103196101ca565b90805f525f602052610331600160405f200154610da7565b805f525f60205260ff6103658360405f209073ffffffffffffffffffffffffffffffffffffffff165f5260205260405f2090565b54161561036e57005b805f525f6020526103a08260405f209073ffffffffffffffffffffffffffffffffffffffff165f5260205260405f2090565b60017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082541617905573ffffffffffffffffffffffffffffffffffffffff339216907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d5f80a4005b3461010b5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010b5761043f6101ca565b3373ffffffffffffffffffffffffffffffffffffffff82160361046a5761046890600435610e75565b005b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152fd5b3461010b5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010b576105256100dc565b7fffffffff0000000000000000000000000000000000000000000000000000000060243591610552610c06565b16805f5260016020528160405f20557f9aecde1887c209ac367c4ded12201517685403a74b8924f233cc372ccb5f71a55f80a3005b3461010b5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010b577fffffffff000000000000000000000000000000000000000000000000000000006105df6100dc565b165f526001602052602060405f2054604051908152f35b3461010b5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010b57602060ff6106636106346101ca565b6004355f525f845260405f209073ffffffffffffffffffffffffffffffffffffffff165f5260205260405f2090565b54166040519015158152f35b3461010b575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010b5760206040515f8152f35b5f5b8381106106b85750505f910152565b81810151838201526020016106a9565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f602093610704815180928187528780880191016106a7565b0116010190565b6020808201906020835283518092526040830192602060408460051b8301019501935f915b8483106107405750505050505090565b909192939495848061077c837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc086600196030187528a516106c8565b9801930193019194939290610730565b3461010b5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010b5767ffffffffffffffff60043581811161010b573660238201121561010b57806004013591821161010b573660248360051b8301011161010b576108109160246108049201610b3f565b6040519182918261070b565b0390f35b3461010b575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010b57602073ffffffffffffffffffffffffffffffffffffffff60025416604051908152f35b3461010b5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010b576104686004356108a26101ca565b90805f525f6020526108ba600160405f200154610da7565b610e75565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761092d57604052565b6108bf565b67ffffffffffffffff811161092d5760051b60200190565b9061095482610932565b61096160405191826108ec565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe061098f8294610932565b01905f5b82811061099f57505050565b806060602080938501015201610993565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b9190811015610a3d5760051b810135907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18136030182121561010b57019081359167ffffffffffffffff831161010b57602001823603811361010b579190565b6109b0565b908092918237015f815290565b67ffffffffffffffff811161092d57601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b3d15610ab3573d90610a9a82610a4f565b91610aa860405193846108ec565b82523d5f602084013e565b606090565b60208183031261010b5780519067ffffffffffffffff821161010b570181601f8201121561010b578051610aeb81610a4f565b92610af960405194856108ec565b8184526020828401011161010b57610b1791602080850191016106a7565b90565b906020610b179281815201906106c8565b8051821015610a3d5760209160051b010190565b919091610b4b8361094a565b925f5b818110610b5a57505050565b5f80610b678385876109dd565b60409391610b79855180938193610a42565b0390305af490610b87610a89565b9115610bae575090600191610b9c8288610b2b565b52610ba78187610b2b565b5001610b4e565b90604481511061010b57610c02610bd360049283810151602480918301019101610ab8565b92519283927f08c379a00000000000000000000000000000000000000000000000000000000084528301610b1a565b0390fd5b335f9081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff1615610c3e57565b610c4733611206565b5f90610c516110ef565b916030610c5d8461111b565b536078610c6984611128565b5360415b60018111610d5957610c026048610d2785610cfb88610c8c88156111a1565b6040519485937f416363657373436f6e74726f6c3a206163636f756e74200000000000000000006020860152610ccc8151809260206037890191016106a7565b84017f206973206d697373696e6720726f6c6520000000000000000000000000000000603782015201906110b9565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081018352826108ec565b6040519182917f08c379a000000000000000000000000000000000000000000000000000000000835260048301610b1a565b90600f8116906010821015610a3d577f3031323334353637383961626364656600000000000000000000000000000000610da2921a610d988487611138565b5360041c91611149565b610c6d565b805f525f60205260ff610ddb3360405f209073ffffffffffffffffffffffffffffffffffffffff165f5260205260405f2090565b541615610de55750565b610dee33611206565b610df66110ef565b916030610e028461111b565b536078610e0e84611128565b5360415b60018111610e3157610c026048610d2785610cfb88610c8c88156111a1565b90600f8116906010821015610a3d577f3031323334353637383961626364656600000000000000000000000000000000610e70921a610d988487611138565b610e12565b805f525f60205260ff610ea98360405f209073ffffffffffffffffffffffffffffffffffffffff165f5260205260405f2090565b5416610eb3575050565b805f525f602052610ee58260405f209073ffffffffffffffffffffffffffffffffffffffff165f5260205260405f2090565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00815416905573ffffffffffffffffffffffffffffffffffffffff339216907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b5f80a4565b15610f5157565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4e6f7420616c6c6f77656420746f2063616c6c000000000000000000000000006044820152fd5b6004361015611088575f5b335f9081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff1690811561101a575b610ffc82610f4a565b60025473ffffffffffffffffffffffffffffffffffffffff166110d0565b7fffffffff000000000000000000000000000000000000000000000000000000009150165f52600160205260405f20545f525f602052610ffc60ff6110803360405f209073ffffffffffffffffffffffffffffffffffffffff165f5260205260405f2090565b541690610ff3565b3660041161010b577fffffffff000000000000000000000000000000000000000000000000000000005f3516610fba565b906110cc602092828151948592016106a7565b0190565b5f80913682803781369134905af13d5f803e156110eb573d5ff35b3d5ffd5b604051906080820182811067ffffffffffffffff82111761092d57604052604282526060366020840137565b805115610a3d5760200190565b805160011015610a3d5760210190565b908151811015610a3d570160200190565b8015611174577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b156111a857565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b604051906060820182811067ffffffffffffffff82111761092d57604052602a82526040366020840137603061123b8361111b565b53607861124783611128565b536029905b6001821161125f57610b179150156111a1565b600f8116906010821015610a3d577f303132333435363738396162636465660000000000000000000000000000000061129d921a610d988486611138565b9061124c56fea26469706673582212202a4be3aa06267423d23f098d4bb3e98302b69e9ca8c68537c1f34b14658795ae64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_target";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "previousAdminRole";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "newAdminRole";
            readonly type: "bytes32";
        }];
        readonly name: "RoleAdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes4";
            readonly name: "selector";
            readonly type: "bytes4";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }];
        readonly name: "RoleForSelectorSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleGranted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleRevoked";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newTarget";
            readonly type: "address";
        }];
        readonly name: "TargetUpdated";
        readonly type: "event";
    }, {
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [];
        readonly name: "DEFAULT_ADMIN_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "selector";
            readonly type: "bytes4";
        }, {
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }];
        readonly name: "__setRoleForSelector";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_target";
            readonly type: "address";
        }];
        readonly name: "__setTarget";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }];
        readonly name: "getRoleAdmin";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "grantRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "hasRole";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
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
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "renounceRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "revokeRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly name: "roleForSelector";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "target";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): PermissionSplitterProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PermissionSplitterProxy;
}
export {};
