import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DepositManagerMock, DepositManagerMockInterface } from "../../../../contracts/test/PolygonMocks.sol/DepositManagerMock";
declare type DepositManagerMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DepositManagerMock__factory extends ContractFactory {
    constructor(...args: DepositManagerMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<DepositManagerMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): DepositManagerMock;
    connect(signer: Signer): DepositManagerMock__factory;
    static readonly bytecode = "0x608080604052346100155760af908161001a8239f35b5f80fdfe6004361015600b575f80fd5b5f3560e01c638b9e4f9314601d575f80fd5b3460755760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011260755773ffffffffffffffffffffffffffffffffffffffff6004358181160360755760243590811603607557005b5f80fdfea26469706673582212205c2e27408f7b30bc58abe96a898f9afd15b8480e1b760e64770ad38a947be2f664736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "depositERC20ForUser";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): DepositManagerMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DepositManagerMock;
}
export {};
