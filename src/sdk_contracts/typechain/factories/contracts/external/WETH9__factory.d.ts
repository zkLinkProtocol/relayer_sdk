import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WETH9, WETH9Interface } from "../../../contracts/external/WETH9";
declare type WETH9ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class WETH9__factory extends ContractFactory {
    constructor(...args: WETH9ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<WETH9>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): WETH9;
    connect(signer: Signer): WETH9__factory;
    static readonly bytecode = "0x60806040523461010e576100135f54610112565b601f81116100c7575b507f577261707065642045746865720000000000000000000000000000000000001a5f556001805461004d90610112565b601f8111610080575b6008630ae8aa8960e31b016001556002805460ff191660121790556040516109f3908161014b8239f35b60015f52601f0160051c7fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6908101905b8181106100bd5750610056565b5f815582016100b0565b5f8052601f0160051c7f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563908101905b818110610103575061001c565b5f81556001016100f6565b5f80fd5b90600182811c92168015610140575b602083101461012c57565b634e487b7160e01b5f52602260045260245ffd5b91607f169161012156fe608060408181526004918236101561002d575b505050361561002557610023610976565b005b610023610976565b5f3560e01c90816306fdde031461060e57508063095ea7b31461057457806318160ddd1461053c57806323b872dd146104ed5780632e1a7d4d14610445578063313ce5671461040657806370a08231146103a457806395d89b41146101a9578063a9059cbb14610159578063d0e30db0146101285763dd62ed3e146100b25780610012565b3461012457807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610124576020916100eb6107b2565b6100f36107d5565b9173ffffffffffffffffffffffffffffffffffffffff8092165f528452825f2091165f528252805f20549051908152f35b5f80fd5b5f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012457610023610976565b503461012457807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610124576020906101a06101966107b2565b602435903361083f565b90519015158152f35b509034610124575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101245781515f926001936001548060011c6001821696871561039a575b602092838310891461036e57869798838897985290815f146103135750600114610296575b50505003601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019267ffffffffffffffff84118385101761026a575082918261026692528261074e565b0390f35b6041907f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b60015f908152929493507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b8284106102fd57505050907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe092601f92820101918193610218565b80548885018701528794509285019281016102c2565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016848701525050151560051b830101905081601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0610218565b6022887f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b90607f16906101f3565b50346101245760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101245760209073ffffffffffffffffffffffffffffffffffffffff6103f46107b2565b165f5260038252805f20549051908152f35b5034610124575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101245760209060ff600254169051908152f35b5090346101245760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610124573590335f526003602052805f2080548381106101245783610496916107f8565b9055815f81156104e4575b5f80809381933390f1156104db57519081527f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b6560203392a2005b513d5f823e3d90fd5b506108fc6104a1565b50346101245760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610124576020906101a061052b6107b2565b6105336107d5565b6044359161083f565b5034610124575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101245751478152602090f35b503461012457807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610124576020916105ae6107b2565b9060243590335f52845273ffffffffffffffffffffffffffffffffffffffff835f20921691825f52845280835f205582519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925843392a35160018152f35b83915034610124575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610124575f925f54936001948060011c60018216968715610744575b602092838310891461036e57869798838897985290815f1461031357506001146106c95750505003601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019267ffffffffffffffff84118385101761026a575082918261026692528261074e565b5f808052929493507f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b82841061072e57505050907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe092601f92820101918193610218565b80548885018701528794509285019281016106f3565b90607f1690610657565b6020808252825181830181905293925f5b85811061079e575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f845f6040809697860101520116010190565b81810183015184820160400152820161075f565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361012457565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361012457565b9190820391821161080557565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b9190820180921161080557565b919073ffffffffffffffffffffffffffffffffffffffff80931691825f526020906003825260409481865f20541061012457338514158061093d575b6108dc575b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef93855f5260038452865f206108b78482546107f8565b90551694855f5260038352805f206108d0838254610832565b905551908152a3600190565b845f5260048352855f20335f52835281865f205410610124577fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef93855f5260048452865f20335f528452865f206109348482546107f8565b90559350610880565b5060048352855f20335f5283527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff865f2054141561087b565b335f52600360205260405f2061098d348254610832565b90556040513481527fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c60203392a256fea2646970667358221220cd1c1146c73e5c5bf3defe4b36c96938801490c04d4ec2248f8e33cc2e98986864736f6c63430008170033";
    static readonly abi: readonly [{
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
            readonly name: "wad";
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
    static createInterface(): WETH9Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): WETH9;
}
export {};
