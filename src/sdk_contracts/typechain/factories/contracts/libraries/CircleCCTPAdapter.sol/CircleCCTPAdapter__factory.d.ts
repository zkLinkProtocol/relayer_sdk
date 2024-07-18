import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { CircleCCTPAdapter, CircleCCTPAdapterInterface } from "../../../../contracts/libraries/CircleCCTPAdapter.sol/CircleCCTPAdapter";
export declare class CircleCCTPAdapter__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "cctpTokenMessenger";
        readonly outputs: readonly [{
            readonly internalType: "contract ITokenMessenger";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "recipientCircleDomainId";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "usdcToken";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): CircleCCTPAdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CircleCCTPAdapter;
}
