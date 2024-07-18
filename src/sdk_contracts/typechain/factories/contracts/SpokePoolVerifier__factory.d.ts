import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SpokePoolVerifier, SpokePoolVerifierInterface } from "../../contracts/SpokePoolVerifier";
declare type SpokePoolVerifierConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SpokePoolVerifier__factory extends ContractFactory {
    constructor(...args: SpokePoolVerifierConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<SpokePoolVerifier>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): SpokePoolVerifier;
    connect(signer: Signer): SpokePoolVerifier__factory;
    static readonly bytecode = "0x6080806040523461001657610413908161001c8239f35b600080fdfe600436101561000d57600080fd5b6000803560e01c63e0db3fcf1461002357600080fd5b6101207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103da5760043573ffffffffffffffffffffffffffffffffffffffff80821682036103d6576024359181831683036103d25760443582811681036103ce5760a435908160070b82036103ca5760c43563ffffffff811681036103c65760e4359267ffffffffffffffff84116103c257366023850112156103c25783600401359367ffffffffffffffff8511610395577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f88011601166080016080811067ffffffffffffffff82111761036857908991604052856080523660248783010111610364576020958691819060240160a0376080010152606435803403610306578686163b156102a8578686163b156102a4579163ffffffff918798969493888b9997956040519b8c9a7f541f4f14000000000000000000000000000000000000000000000000000000008c523360048d01521660248b01521660448901526064880152608435608488015260070b60a48701521660c485015261012060e48501526080519081610124860152855b828110610286575050908391827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f6101449389858286010152610104803590850152011681010301923491165af1801561027b57610239575080f35b67ffffffffffffffff811161024e5760405280f35b6024827f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b6040513d84823e3d90fd5b818101608081015191890161014401919091528896508795506101db565b8880fd5b606485604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601b60248201527f73706f6b65506f6f6c206973206e6f74206120636f6e747261637400000000006044820152fd5b606485604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601360248201527f6d73672e76616c756520213d20616d6f756e74000000000000000000000000006044820152fd5b5080fd5b60248a7f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b6024897f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b8780fd5b8680fd5b8580fd5b8480fd5b8380fd5b8280fd5b80fdfea26469706673582212202ba84cb926daaac0469927186acb0d3aacca1940b1633bb06886d19224be553a64736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract SpokePoolInterface";
            readonly name: "spokePool";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "originToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "int64";
            readonly name: "relayerFeePct";
            readonly type: "int64";
        }, {
            readonly internalType: "uint32";
            readonly name: "quoteTimestamp";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxCount";
            readonly type: "uint256";
        }];
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): SpokePoolVerifierInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SpokePoolVerifier;
}
export {};
