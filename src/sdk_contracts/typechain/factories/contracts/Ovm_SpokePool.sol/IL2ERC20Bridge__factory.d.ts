import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IL2ERC20Bridge, IL2ERC20BridgeInterface } from "../../../contracts/Ovm_SpokePool.sol/IL2ERC20Bridge";
export declare class IL2ERC20Bridge__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_localToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_remoteToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minGasLimit";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_extraData";
            readonly type: "bytes";
        }];
        readonly name: "bridgeERC20To";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_l2Token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32";
            readonly name: "_minGasLimit";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "_extraData";
            readonly type: "bytes";
        }];
        readonly name: "withdrawTo";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IL2ERC20BridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IL2ERC20Bridge;
}
