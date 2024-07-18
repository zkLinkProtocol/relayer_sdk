import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { V3SpokePoolInterface, V3SpokePoolInterfaceInterface } from "../../../contracts/interfaces/V3SpokePoolInterface";
export declare class V3SpokePoolInterface__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ClaimedMerkleLeaf";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DisabledRoute";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExpiredFillDeadline";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidChainId";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidExclusiveRelayer";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidExclusivityDeadline";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidFillDeadline";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMerkleLeaf";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMerkleProof";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidPayoutAdjustmentPct";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidQuoteTimestamp";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidSlowFillRequest";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MsgValueDoesNotMatchInputAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSlowFillsInExclusivityWindow";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotExclusiveRelayer";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "RelayFilled";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "inputToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "outputToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "inputAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "outputAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "repaymentChainId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "originChainId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "depositId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "fillDeadline";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "exclusivityDeadline";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "exclusiveRelayer";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "relayer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "depositor";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "updatedRecipient";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "updatedMessage";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint256";
                readonly name: "updatedOutputAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "enum V3SpokePoolInterface.FillType";
                readonly name: "fillType";
                readonly type: "uint8";
            }];
            readonly indexed: false;
            readonly internalType: "struct V3SpokePoolInterface.V3RelayExecutionEventInfo";
            readonly name: "relayExecutionInfo";
            readonly type: "tuple";
        }];
        readonly name: "FilledV3Relay";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "updatedOutputAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "depositId";
            readonly type: "uint32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "depositor";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "updatedRecipient";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "updatedMessage";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "depositorSignature";
            readonly type: "bytes";
        }];
        readonly name: "RequestedSpeedUpV3Deposit";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "inputToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "outputToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "inputAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "outputAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "originChainId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "depositId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "fillDeadline";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "exclusivityDeadline";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "exclusiveRelayer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "depositor";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "RequestedV3SlowFill";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "inputToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "outputToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "inputAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "outputAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "depositId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "quoteTimestamp";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "fillDeadline";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "exclusivityDeadline";
            readonly type: "uint32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "depositor";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "exclusiveRelayer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "V3FundsDeposited";
        readonly type: "event";
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
            readonly name: "inputToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "outputToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "inputAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "outputAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "exclusiveRelayer";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "quoteTimestamp";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "fillDeadline";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "exclusivityDeadline";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "depositV3";
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
            readonly name: "inputToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "outputToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "inputAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "outputAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "exclusiveRelayer";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "fillDeadlineOffset";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "exclusivityDeadline";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "depositV3Now";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "depositor";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "recipient";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "exclusiveRelayer";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "inputToken";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "outputToken";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "inputAmount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "outputAmount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "originChainId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "depositId";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "fillDeadline";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "exclusivityDeadline";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "message";
                    readonly type: "bytes";
                }];
                readonly internalType: "struct V3SpokePoolInterface.V3RelayData";
                readonly name: "relayData";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "chainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "updatedOutputAmount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct V3SpokePoolInterface.V3SlowFill";
            readonly name: "slowFillLeaf";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint32";
            readonly name: "rootBundleId";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "proof";
            readonly type: "bytes32[]";
        }];
        readonly name: "executeV3SlowRelayLeaf";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "depositor";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "exclusiveRelayer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "inputToken";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "outputToken";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "inputAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "outputAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "originChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "depositId";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes";
                readonly name: "message";
                readonly type: "bytes";
            }];
            readonly internalType: "struct V3SpokePoolInterface.V3RelayData";
            readonly name: "relayData";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "repaymentChainId";
            readonly type: "uint256";
        }];
        readonly name: "fillV3Relay";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "depositor";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "exclusiveRelayer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "inputToken";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "outputToken";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "inputAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "outputAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "originChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "depositId";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes";
                readonly name: "message";
                readonly type: "bytes";
            }];
            readonly internalType: "struct V3SpokePoolInterface.V3RelayData";
            readonly name: "relayData";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "repaymentChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "updatedOutputAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "updatedRecipient";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "updatedMessage";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "depositorSignature";
            readonly type: "bytes";
        }];
        readonly name: "fillV3RelayWithUpdatedDeposit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "depositor";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "exclusiveRelayer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "inputToken";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "outputToken";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "inputAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "outputAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "originChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "depositId";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes";
                readonly name: "message";
                readonly type: "bytes";
            }];
            readonly internalType: "struct V3SpokePoolInterface.V3RelayData";
            readonly name: "relayData";
            readonly type: "tuple";
        }];
        readonly name: "requestV3SlowFill";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "depositor";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "depositId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "updatedOutputAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "updatedRecipient";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "updatedMessage";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "depositorSignature";
            readonly type: "bytes";
        }];
        readonly name: "speedUpV3Deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): V3SpokePoolInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): V3SpokePoolInterface;
}
