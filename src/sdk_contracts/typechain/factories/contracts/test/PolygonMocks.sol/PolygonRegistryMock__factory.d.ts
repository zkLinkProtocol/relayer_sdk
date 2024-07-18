import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PolygonRegistryMock, PolygonRegistryMockInterface } from "../../../../contracts/test/PolygonMocks.sol/PolygonRegistryMock";
declare type PolygonRegistryMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PolygonRegistryMock__factory extends ContractFactory {
    constructor(...args: PolygonRegistryMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<PolygonRegistryMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): PolygonRegistryMock;
    connect(signer: Signer): PolygonRegistryMock__factory;
    static readonly bytecode = "0x60808060405234601457609190816100198239f35b5f80fdfe60808060405260043610156011575f80fd5b5f3560e01c63b6864976146023575f80fd5b346057575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112605757805f60209252f35b5f80fdfea2646970667358221220ec43593a676383dabcda804eae7e93343051606638e85dc062cdb907f0e0fe2f64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "erc20Predicate";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "predicate";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): PolygonRegistryMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PolygonRegistryMock;
}
export {};
