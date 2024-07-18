import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFxStateSender, IFxStateSenderInterface } from "../../../../contracts/chain-adapters/Polygon_Adapter.sol/IFxStateSender";
export declare class IFxStateSender__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "sendMessageToChild";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IFxStateSenderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFxStateSender;
}
