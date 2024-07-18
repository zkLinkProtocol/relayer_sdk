import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Mock_Adapter, Mock_AdapterInterface } from "../../../../contracts/chain-adapters/Mock_Adapter.sol/Mock_Adapter";
declare type Mock_AdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Mock_Adapter__factory extends ContractFactory {
    constructor(...args: Mock_AdapterConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<Mock_Adapter>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Mock_Adapter;
    connect(signer: Signer): Mock_Adapter__factory;
    static readonly bytecode = "0x60a0806040523461007a576103c08181016001600160401b0381118382101761006657829161062a833903905ff0801561005b576080526040516105ab908161007f8239608051818181608c0152818161013e01526102a30152f35b6040513d5f823e3d90fd5b634e487b7160e01b5f52604160045260245ffd5b5f80fdfe6080604081815260049182361015610015575f80fd5b5f925f3560e01c91826352c8c75c1461023257508163e6eb8ade146100b4575063e78cea9214610043575f80fd5b346100b057817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b0576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b5080fd5b9050817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261022e576100e76104d3565b90602435928467ffffffffffffffff938486116100b057366023870112156100b057858401359485116100b057602486019560248636920101116100b05773ffffffffffffffffffffffffffffffffffffffff90817f00000000000000000000000000000000000000000000000000000000000000001690813b1561022a57839185519384927f297d04640000000000000000000000000000000000000000000000000000000084521680978301528560248301528183816101ae8c8c6044840191610537565b03925af1801561022057610208575b50506101fc7f6db0d57de6d386d33cb7c8767e3ee48f4459c2dfdf017a906db2e90f8ab23a599482519485948552606060208601526060850191610537565b9033908301520390a180f35b610211906104f6565b61021c57845f6101bd565b8480fd5b83513d84823e3d90fd5b8380fd5b8280fd5b84918460807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261042e576102676104d3565b9060243573ffffffffffffffffffffffffffffffffffffffff9485821680920361042e57604435936064359587871680970361042e57878216977f000000000000000000000000000000000000000000000000000000000000000016927f095ea7b30000000000000000000000000000000000000000000000000000000081526020818061031b8a888784016020909392919373ffffffffffffffffffffffffffffffffffffffff60408201951681520152565b03815f8d5af180156104c957610432575b50823b1561042e57610393925f928388938851968795869485937fd411325b00000000000000000000000000000000000000000000000000000000855284016020909392919373ffffffffffffffffffffffffffffffffffffffff60408201951681520152565b03925af18015610424576103e4575b508151948552602085015283015260608201523360808201527f88a75b734dbf3ce2b74c9db7b20501df9c53e1daa2f8810f14d62c53e4d727409060a090a180f35b7f88a75b734dbf3ce2b74c9db7b20501df9c53e1daa2f8810f14d62c53e4d7274095939196509161041760a095936104f6565b5f969193955091936103a2565b83513d5f823e3d90fd5b5f80fd5b60203d6020116104c2575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f820116820182811067ffffffffffffffff82111761049657602091839189528101031261042e57518015150361042e578961032c565b6041847f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b503d61043d565b86513d5f823e3d90fd5b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361042e57565b67ffffffffffffffff811161050a57604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b601f82602094937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe093818652868601375f858286010152011601019056fea26469706673582212206227f9bb65ecc0f895c61ee0f272a0023f348490fc8b2e8af20a43d6974d650864736f6c6343000817003360808060405234610016576103a5908161001b8239f35b5f80fdfe60806040908082526004361015610014575f80fd5b5f3560e01c908163297d04641461025557508063d411325b146100a35763fc7e286d1461003f575f80fd5b3461009f5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261009f5760209073ffffffffffffffffffffffffffffffffffffffff61008e61034c565b165f525f8252805f20549051908152f35b5f80fd5b503461009f57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261009f576100da61034c565b9073ffffffffffffffffffffffffffffffffffffffff60243592168151927f23b872dd00000000000000000000000000000000000000000000000000000000845233600485015230602485015280604485015260209384816064815f875af1801561024b576101b6575b50815f525f8452825f20938454828101809111610189577f1da67e78d7a059d567d755dcffcfeefb8bc6967dbed9f631c088b729098a612e95558351928352820152a1005b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b843d8611610244575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f820116820182811067ffffffffffffffff821117610217578691839187528101031261009f57518015150361009f575f610144565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b503d6101bf565b84513d5f823e3d90fd5b90503461009f57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261009f5761028d61034c565b916024359267ffffffffffffffff9182851161009f573660238601121561009f57846004013592831161009f57366024848701011161009f57601f838060247f5bd2d0850f0cb81f5796e2b5d3a09cb16e35c4d616a6ae0189d2b93ec13bce2b986060977fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09673ffffffffffffffffffffffffffffffffffffffff8b991689528060208a015288015201868601375f85828601015201168101030190a1005b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361009f5756fea2646970667358221220d31581b3be0ed7b9743ea37ed57db079d4290b135f13adb028d20295df0bfbe364736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "MessageRelayed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "caller";
            readonly type: "address";
        }];
        readonly name: "RelayMessageCalled";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "l1Token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "l2Token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "caller";
            readonly type: "address";
        }];
        readonly name: "RelayTokensCalled";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "l1Token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "l2Token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "TokensRelayed";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "bridge";
        readonly outputs: readonly [{
            readonly internalType: "contract Mock_Bridge";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "relayMessage";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "l1Token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "l2Token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "relayTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): Mock_AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Mock_Adapter;
}
export {};
