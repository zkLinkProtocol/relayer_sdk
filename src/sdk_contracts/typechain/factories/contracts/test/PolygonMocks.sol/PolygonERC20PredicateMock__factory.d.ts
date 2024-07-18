import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PolygonERC20PredicateMock, PolygonERC20PredicateMockInterface } from "../../../../contracts/test/PolygonMocks.sol/PolygonERC20PredicateMock";
declare type PolygonERC20PredicateMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PolygonERC20PredicateMock__factory extends ContractFactory {
    constructor(...args: PolygonERC20PredicateMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<PolygonERC20PredicateMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): PolygonERC20PredicateMock;
    connect(signer: Signer): PolygonERC20PredicateMock__factory;
    static readonly bytecode = "0x608080604052346100155760b7908161001a8239f35b5f80fdfe6004361015600b575f80fd5b5f3560e01c637c5264b414601d575f80fd5b34607d5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112607d5760043567ffffffffffffffff808211607d5736602383011215607d578160040135908111607d5736910160240111607d57005b5f80fdfea2646970667358221220af72d81ef10fac5db1251a05ca744f0b374e799664d43f54fcbaffb2a534abd864736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "startExitWithBurntTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): PolygonERC20PredicateMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PolygonERC20PredicateMock;
}
export {};
