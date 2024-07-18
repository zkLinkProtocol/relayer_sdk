import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PolygonERC20Mock, PolygonERC20MockInterface } from "../../../../contracts/test/PolygonMocks.sol/PolygonERC20Mock";
declare type PolygonERC20MockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PolygonERC20Mock__factory extends ContractFactory {
    constructor(...args: PolygonERC20MockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<PolygonERC20Mock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): PolygonERC20Mock;
    connect(signer: Signer): PolygonERC20Mock__factory;
    static readonly bytecode = "0x6080346200031e576040906001600160401b0390808301828111828210176200030a578352600a8152602091690546573742045524332360b41b83830152835192848401848110838211176200030a57855260049384815263151154d560e21b82820152835190838211620002f7576003928354926001968785811c95168015620002ec575b83861014620002d9578190601f9586811162000286575b50839086831160011462000223575f9262000217575b50505f1982871b1c191690871b1784555b8151948511620002045786548681811c91168015620001f9575b82821014620001e6578381116200019e575b50809285116001146200013457509383949184925f9562000128575b50501b925f19911b1c19161790555b51610d2d9081620003238239f35b015193505f806200010b565b92919084601f198116885f52855f20955f905b8983831062000183575050501062000169575b50505050811b0190556200011a565b01519060f8845f19921b161c191690555f8080806200015a565b85870151895590970196948501948893509081019062000147565b875f52815f208480880160051c820192848910620001dc575b0160051c019087905b828110620001d0575050620000ef565b5f8155018790620001c0565b92508192620001b7565b602288634e487b7160e01b5f525260245ffd5b90607f1690620000dd565b604187634e487b7160e01b5f525260245ffd5b015190505f80620000b2565b90899350601f19831691885f52855f20925f5b878282106200026f575050841162000257575b505050811b018455620000c3565b01515f1983891b60f8161c191690555f808062000249565b8385015186558d9790950194938401930162000236565b909150865f52835f208680850160051c820192868610620002cf575b918b91869594930160051c01915b828110620002c05750506200009c565b5f81558594508b9101620002b0565b92508192620002a2565b602289634e487b7160e01b5f525260245ffd5b94607f169462000085565b604186634e487b7160e01b5f525260245ffd5b634e487b7160e01b5f52604160045260245ffd5b5f80fdfe6080604090808252600480361015610015575f80fd5b5f3560e01c91826306fdde031461078b57508163095ea7b31461074457816318160ddd1461070857816323b872dd146105da5781632e1a7d4d146105a9578163313ce5671461057057816339509351146104c757816370a082311461046657816395d89b411461026d578163a457c2d71461016a57508063a9059cbb1461011c5763dd62ed3e146100a4575f80fd5b3461011857807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610118576020906100dd610932565b6100e5610955565b9073ffffffffffffffffffffffffffffffffffffffff8091165f5260018452825f2091165f528252805f20549051908152f35b5f80fd5b503461011857807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011857602090610163610159610932565b6024359033610ae9565b5160018152f35b90503461011857817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610118576101a2610932565b9060243590335f526001602052835f2073ffffffffffffffffffffffffffffffffffffffff84165f52602052835f2054908282106101ea576020856101638585038733610978565b60849060208651917f08c379a0000000000000000000000000000000000000000000000000000000008352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152fd5b905034610118575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101185781515f928254936001948060011c6001821696871561045c575b602092838310891461043057869798838897985290815f146103d5575060011461035a575b50505003601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019267ffffffffffffffff84118385101761032e575082918261032a9252826108ce565b0390f35b6041907f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b5f888152929493507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b8284106103bf57505050907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe092601f928201019181936102dc565b8054888501870152879450928501928101610384565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016848701525050151560051b830101905081601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe06102dc565b6022887f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b90607f16906102b7565b82346101185760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101185760209073ffffffffffffffffffffffffffffffffffffffff6104b6610932565b165f525f8252805f20549051908152f35b823461011857807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610118576104fe610932565b335f526001602052815f2073ffffffffffffffffffffffffffffffffffffffff82165f52602052815f205492602435840180941161054457506020926101639133610978565b6011907f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b8234610118575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610118576020905160128152f35b346101185760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011857005b9050346101185760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011857610613610932565b61061b610955565b906044359273ffffffffffffffffffffffffffffffffffffffff82165f526001602052845f20335f52602052845f2054907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610682575b602086610163878787610ae9565b8482106106ab57509183916106a06020969561016395033383610978565b919394819350610674565b60649060208751917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b8234610118575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610118576020906002549051908152f35b823461011857807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011857602090610163610781610932565b6024359033610978565b90915034610118575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610118575f92600354936001948060011c600182169687156108c4575b602092838310891461043057869798838897985290815f146103d557506001146108475750505003601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019267ffffffffffffffff84118385101761032e575082918261032a9252826108ce565b60035f908152929493507fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b8284106108ae57505050907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe092601f928201019181936102dc565b8054888501870152879450928501928101610873565b90607f16906107d5565b6020808252825181830181905293925f5b85811061091e575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f845f6040809697860101520116010190565b8181018301518482016040015282016108df565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361011857565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361011857565b73ffffffffffffffffffffffffffffffffffffffff809116918215610a6657169182156109e25760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591835f526001825260405f20855f5282528060405f2055604051908152a3565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152fd5b60846040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152fd5b73ffffffffffffffffffffffffffffffffffffffff809116918215610c735716918215610bef57815f525f60205260405f2054818110610b6b57817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92602092855f525f84520360405f2055845f5260405f20818154019055604051908152a3565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152fd5b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152fd5b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152fdfea26469706673582212202b844e6064ad0fa8b3ffa667a173526f0190f198bb2f41a691cdc185c0b0ca2664736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
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
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
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
            readonly name: "account";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
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
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
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
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
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
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
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
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): PolygonERC20MockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PolygonERC20Mock;
}
export {};
