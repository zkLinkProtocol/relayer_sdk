import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BondToken, BondTokenInterface } from "../../../contracts/BondToken.sol/BondToken";
declare type BondTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BondToken__factory extends ContractFactory {
    constructor(...args: BondTokenConstructorParams);
    deploy(_hubPool: string, overrides?: Overrides & {
        from?: string;
    }): Promise<BondToken>;
    getDeployTransaction(_hubPool: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): BondToken;
    connect(signer: Signer): BondToken__factory;
    static readonly bytecode = "0x60a0346200015b57601f620011f038819003918201601f19168301916001600160401b038311848410176200015f578084926020946040528339810103126200015b57516001600160a01b0380821682036200015b576200006b620000655f5462000173565b620001ae565b601a6c2bb930b83832b21022ba3432b960991b015f55620000986200009260015462000173565b62000201565b6008630ae8aa8960e31b016001556002805460ff19166012179055600580546001600160a01b03198116339081179092559091167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a362000100620000655f5462000173565b60227020b1b937b9b9902137b732102a37b5b2b760791b015f556200012b6200009260015462000173565b60066210509560ea1b01600155608052604051610f9790816200025982396080518181816106df0152610b810152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b90600182811c92168015620001a3575b60208310146200018f57565b634e487b7160e01b5f52602260045260245ffd5b91607f169162000183565b601f8111620001ba5750565b5f8052601f0160051c7f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563908101905b818110620001f5575050565b5f8155600101620001e9565b601f81116200020d5750565b60015f81905290601f0160051c7fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6908101905b8181106200024d57505050565b5f815582016200024056fe60806040908082526004908136101561002e575b505050361561002657610024610e9b565b005b610024610e9b565b5f3560e01c90816306fdde031461097257508063095ea7b3146108d757806318160ddd1461089f578063181774971461083857806323b872dd146107e95780632e1a7d4d14610742578063313ce56714610703578063597517bb1461069557806370a0823114610633578063715018a6146105975780638da5cb5b1461054557806395d89b41146103ed578063a9059cbb1461039d578063d0e30db01461036c578063dd62ed3e146102f8578063e9ed9b641461022f5763f2fde38b146100f55780610013565b3461022b5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022b5761012c610b1e565b90610135610ee2565b73ffffffffffffffffffffffffffffffffffffffff8092169283156101a8575050600554827fffffffffffffffffffffffff0000000000000000000000000000000000000000821617600555167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3005b90602060849251917f08c379a0000000000000000000000000000000000000000000000000000000008352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152fd5b5f80fd5b823461022b57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022b57610266610b1e565b9060243580151580910361022b5773ffffffffffffffffffffffffffffffffffffffff7f4b2ff56cb8140854564224bc2ac25e8d8af40e193e614c06198454b2c580d961936102b3610ee2565b1690815f526006602052825f207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0081541660ff831617905582519182526020820152a1005b50903461022b57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022b57602091610333610b1e565b61033b610b41565b9173ffffffffffffffffffffffffffffffffffffffff8092165f528452825f2091165f528252805f20549051908152f35b5f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022b57610024610e9b565b823461022b57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022b576020906103e46103da610b1e565b6024359033610b64565b90519015158152f35b50903461022b575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022b578051905f9260018054908160011c9160018116801561053b575b602094858510821461050f57508387529081156104d15750600114610477575b50505061046982610473940383610a4c565b5191829182610aba565b0390f35b60015f9081529295507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b8284106104be5750505082610473946104699282010194610457565b80548685018801529286019281016104a2565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016868501525050151560051b830101925061046982610473610457565b6022907f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b92607f1692610437565b823461022b575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022b5760209073ffffffffffffffffffffffffffffffffffffffff600554169051908152f35b3461022b575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022b576105cd610ee2565b5f73ffffffffffffffffffffffffffffffffffffffff6005547fffffffffffffffffffffffff00000000000000000000000000000000000000008116600555167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b823461022b5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022b5760209073ffffffffffffffffffffffffffffffffffffffff610683610b1e565b165f5260038252805f20549051908152f35b823461022b575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022b576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b823461022b575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022b5760209060ff600254169051908152f35b503461022b5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022b573590335f526003602052805f20805483811061022b578361079291610e54565b9055815f81156107e0575b5f80809381933390f1156107d757519081527f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b6560203392a2005b513d5f823e3d90fd5b506108fc61079d565b823461022b5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022b576020906103e4610827610b1e565b61082f610b41565b60443591610b64565b823461022b5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022b5760209073ffffffffffffffffffffffffffffffffffffffff610888610b1e565b165f526006825260ff815f20541690519015158152f35b823461022b575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022b5751478152602090f35b50903461022b57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022b57602091610912610b1e565b9060243590335f52845273ffffffffffffffffffffffffffffffffffffffff835f20921691825f52845280835f205582519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925843392a35160018152f35b9050823461022b575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022b575f925f5460018160011c91600181168015610a42575b602094858510821461050f57508387529081156104d157506001146109ea5750505061046982610473940383610a4c565b5f8080529295507f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b828410610a2f5750505082610473946104699282010194610457565b8054868501880152928601928101610a13565b92607f16926109b9565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610a8d57604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6020808252825181830181905293925f5b858110610b0a575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f845f6040809697860101520116010190565b818101830151848201604001528201610acb565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361022b57565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361022b57565b73ffffffffffffffffffffffffffffffffffffffff9182169291907f00000000000000000000000000000000000000000000000000000000000000008216848114610cc6575b501690815f5260206003815260409180835f20541061022b573384141580610c8d575b610c2c575b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92845f5260038352805f20610c09838254610e54565b9055855f5260038352805f20610c20838254610e8e565b905551908152a3600190565b835f5260048252825f20335f52825280835f20541061022b577fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92845f5260048352805f20335f528352805f20610c84838254610e54565b90559250610bd2565b5060048252825f20335f5282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff835f20541415610bcd565b82821690815f52600660205260409160ff835f205416918215610d47575b5050610baa57606490517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f5472616e73666572206e6f74207065726d6974746564000000000000000000006044820152fd5b600491925060e0908451928380927f4144fd610000000000000000000000000000000000000000000000000000000082525afa908115610e4a579085915f91610d9a575b50608001511614155f80610ce4565b91505060e0813d60e011610e42575b81610db660e09383610a4c565b8101031261022b5782519060e0820182811067ffffffffffffffff821117610a8d57845280518252602081015160208301528381015184830152606081015160608301526080810151868116810361022b57608083015260a08101519060ff8216820361022b5760c09160a0840152015163ffffffff8116810361022b5760c082015284906080610d8b565b3d9150610da9565b83513d5f823e3d90fd5b91908203918211610e6157565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b91908201809211610e6157565b335f52600360205260405f20610eb2348254610e8e565b90556040513481527fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c60203392a2565b73ffffffffffffffffffffffffffffffffffffffff600554163303610f0357565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fdfea2646970667358221220c958ca7a0956e8e262ad5ed71a8fdfe32d6ed98d804edf48d7d25189d031d38264736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ExtendedHubPoolInterface";
            readonly name: "_hubPool";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "src";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "guy";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "dst";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "Deposit";
        readonly type: "event";
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
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "proposer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "enabled";
            readonly type: "bool";
        }];
        readonly name: "ProposerModified";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "src";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "dst";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "src";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "Withdrawal";
        readonly type: "event";
    }, {
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [];
        readonly name: "HUB_POOL";
        readonly outputs: readonly [{
            readonly internalType: "contract ExtendedHubPoolInterface";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "allowance";
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
            readonly name: "guy";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "proposers";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
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
            readonly name: "proposer";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "enabled";
            readonly type: "bool";
        }];
        readonly name: "setProposer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
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
            readonly name: "dst";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "src";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "dst";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amt";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
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
            readonly internalType: "uint256";
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): BondTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BondToken;
}
export {};
