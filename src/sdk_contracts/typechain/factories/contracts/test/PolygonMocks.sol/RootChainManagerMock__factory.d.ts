import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RootChainManagerMock, RootChainManagerMockInterface } from "../../../../contracts/test/PolygonMocks.sol/RootChainManagerMock";
declare type RootChainManagerMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RootChainManagerMock__factory extends ContractFactory {
    constructor(...args: RootChainManagerMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<RootChainManagerMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): RootChainManagerMock;
    connect(signer: Signer): RootChainManagerMock__factory;
    static readonly bytecode = "0x608080604052346100165761014e908161001b8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c80634faa8a26146100c15763e3dec8fb1461002f575f80fd5b346100bd5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100bd576100666100f5565b5060243573ffffffffffffffffffffffffffffffffffffffff8116036100bd5760443567ffffffffffffffff8082116100bd57366023830112156100bd5781600401359081116100bd57369101602401116100bd57005b5f80fd5b60207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100bd576100f36100f5565b005b6004359073ffffffffffffffffffffffffffffffffffffffff821682036100bd5756fea264697066735822122069f6b9aef7b51317c370d8f8306fe67df7a6d3008c1ff238b588db50100ab7f764736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "depositEtherFor";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "rootToken";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "depositData";
            readonly type: "bytes";
        }];
        readonly name: "depositFor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): RootChainManagerMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RootChainManagerMock;
}
export {};
