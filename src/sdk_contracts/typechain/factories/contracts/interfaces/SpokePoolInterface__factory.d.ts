import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { SpokePoolInterface, SpokePoolInterfaceInterface } from "../../../contracts/interfaces/SpokePoolInterface";
export declare class SpokePoolInterface__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "DepositsArePaused";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "FillsArePaused";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidCrossDomainAdmin";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidDepositorSignature";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidHubPool";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidRelayerFeePct";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MaxTransferSizeExceeded";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotEOA";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "chainId";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "depositor";
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
        readonly name: "depositFor";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "rootBundleId";
            readonly type: "uint256";
        }];
        readonly name: "emergencyDeleteRootBundle";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
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
        readonly name: "executeRelayerRefundLeaf";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "pause";
            readonly type: "bool";
        }];
        readonly name: "pauseDeposits";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "pause";
            readonly type: "bool";
        }];
        readonly name: "pauseFills";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "relayerRefundRoot";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "slowRelayRoot";
            readonly type: "bytes32";
        }];
        readonly name: "relayRootBundle";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newCrossDomainAdmin";
            readonly type: "address";
        }];
        readonly name: "setCrossDomainAdmin";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "originToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "enable";
            readonly type: "bool";
        }];
        readonly name: "setEnableRoute";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newHubPool";
            readonly type: "address";
        }];
        readonly name: "setHubPool";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): SpokePoolInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SpokePoolInterface;
}
