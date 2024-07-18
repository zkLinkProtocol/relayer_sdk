import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ArbitrumL1ERC20GatewayLike, ArbitrumL1ERC20GatewayLikeInterface } from "../../../../contracts/chain-adapters/Arbitrum_Adapter.sol/ArbitrumL1ERC20GatewayLike";
export declare class ArbitrumL1ERC20GatewayLike__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }];
        readonly name: "getGateway";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_l1Token";
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
            readonly name: "_maxGas";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_gasPriceBid";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "outboundTransfer";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_l1Token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_refundTo";
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
            readonly name: "_maxGas";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_gasPriceBid";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "outboundTransferCustomRefund";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): ArbitrumL1ERC20GatewayLikeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ArbitrumL1ERC20GatewayLike;
}
