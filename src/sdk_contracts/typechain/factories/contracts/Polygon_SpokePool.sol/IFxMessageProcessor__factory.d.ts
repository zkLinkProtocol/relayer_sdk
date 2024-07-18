import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFxMessageProcessor, IFxMessageProcessorInterface } from "../../../contracts/Polygon_SpokePool.sol/IFxMessageProcessor";
export declare class IFxMessageProcessor__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "stateId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "rootMessageSender";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "processMessageFromRoot";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IFxMessageProcessorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFxMessageProcessor;
}
