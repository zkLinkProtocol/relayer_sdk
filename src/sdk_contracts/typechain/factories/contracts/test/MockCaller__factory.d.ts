import { Signer, ContractFactory, BytesLike, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockCaller, MockCallerInterface, SpokePoolInterface } from "../../../contracts/test/MockCaller";
declare type MockCallerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockCaller__factory extends ContractFactory {
    constructor(...args: MockCallerConstructorParams);
    deploy(_spokePool: string, rootBundleId: BigNumberish, relayerRefundLeaf: SpokePoolInterface.RelayerRefundLeafStruct, proof: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<MockCaller>;
    getDeployTransaction(_spokePool: string, rootBundleId: BigNumberish, relayerRefundLeaf: SpokePoolInterface.RelayerRefundLeafStruct, proof: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): MockCaller;
    connect(signer: Signer): MockCaller__factory;
    static readonly bytecode = "0x6080604090808252346103445761045d803803809161001e82856103c4565b833981019060808183031261034457610036816103e7565b906020916100458383016103fb565b828601516001600160401b0394919291908581116103445784019560c0878203126103445787519460c08601868110888211176102db578952875186528288015190838701918252898901518881116103445789019883601f8b011215610344578951996100b28b61040c565b9a6100bf8d519c8d6103c4565b808c5286808d019160051b830101918683116103445787809101915b8383106103b457505050508a8801998a526100f8606082016103fb565b966060890197885261010c608083016103e7565b9160808a0192835260a0810151908b821161034457019285601f8501121561034457838d945161014761013e8261040c565b965196876103c4565b808652888087019160051b830101918883116103445789809101915b83831061039c575050505060a08a019384526060810151908b821161034457019785601f8a011215610344578c958951996101a96101a08c61040c565b985198896103c4565b8a88528888019089829c60051b8201019283116103445789809101915b83831061038c575050506001600160a01b039889169a9050308b14610348578a3b15610344578d51631b3d555960e01b815263ffffffff93841660048201526060602482015290516064820152945160848601529a5160c060a486015280516101248601819052949b8c99986101448b01979690959493928901905f5b81811061032d575050905190911660c48a01525051821660e48801525186840360631901610104880152805180855293850193908501915f905b82821061031057505050508482036003190160448601525180825290820192915f5b8281106102f9575050505091815f81819503925af180156102ef576102cc575b8251603990816104248239f35b81116102db5781525f806102bf565b634e487b7160e01b5f52604160045260245ffd5b83513d5f823e3d90fd5b83518552889550938101939281019260010161029f565b8351811686528b985094860194928601926001919091019061027d565b82518a528f9c50988a0198918a0191600101610243565b5f80fd5b8d5162461bcd60e51b815260048101899052601660248201527f73706f6b65506f6f6c206e6f742065787465726e616c000000000000000000006044820152606490fd5b82518152918101918a91016101c6565b81906103a7846103e7565b8152019101908990610163565b82518152918101918891016100db565b601f909101601f19168101906001600160401b038211908210176102db57604052565b51906001600160a01b038216820361034457565b519063ffffffff8216820361034457565b6001600160401b0381116102db5760051b6020019056fe5f80fdfea2646970667358221220bce24272842a8dc01fe7cc7afdc7f9a988c79e8f74d476adc7c94f7e4e46268c64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_spokePool";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "rootBundleId";
            readonly type: "uint32";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amountToReturn";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "chainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "refundAmounts";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint32";
                readonly name: "leafId";
                readonly type: "uint32";
            }, {
                readonly internalType: "address";
                readonly name: "l2TokenAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address[]";
                readonly name: "refundAddresses";
                readonly type: "address[]";
            }];
            readonly internalType: "struct SpokePoolInterface.RelayerRefundLeaf";
            readonly name: "relayerRefundLeaf";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "proof";
            readonly type: "bytes32[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }];
    static createInterface(): MockCallerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockCaller;
}
export {};
