import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { SpokePool, SpokePoolInterface } from "../../contracts/SpokePool";
export declare class SpokePool__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ClaimedMerkleLeaf";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DepositsArePaused";
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
        readonly name: "FillsArePaused";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidChainId";
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
        readonly name: "InvalidHubPool";
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
        readonly name: "InvalidRelayerFeePct";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidSlowFillRequest";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MaxTransferSizeExceeded";
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
        readonly name: "NotEOA";
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
            readonly name: "previousAdmin";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "AdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "beacon";
            readonly type: "address";
        }];
        readonly name: "BeaconUpgraded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "rootBundleId";
            readonly type: "uint256";
        }];
        readonly name: "EmergencyDeleteRootBundle";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "originToken";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "enabled";
            readonly type: "bool";
        }];
        readonly name: "EnabledDepositRoute";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountToReturn";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "refundAmounts";
            readonly type: "uint256[]";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "rootBundleId";
            readonly type: "uint32";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "leafId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "l2TokenAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "refundAddresses";
            readonly type: "address[]";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "caller";
            readonly type: "address";
        }];
        readonly name: "ExecutedRelayerRefundRoot";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "totalFilledAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fillAmount";
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
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "int64";
            readonly name: "relayerFeePct";
            readonly type: "int64";
        }, {
            readonly indexed: false;
            readonly internalType: "int64";
            readonly name: "realizedLpFeePct";
            readonly type: "int64";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "depositId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "destinationToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "relayer";
            readonly type: "address";
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
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "message";
                readonly type: "bytes";
            }, {
                readonly internalType: "int64";
                readonly name: "relayerFeePct";
                readonly type: "int64";
            }, {
                readonly internalType: "bool";
                readonly name: "isSlowRelay";
                readonly type: "bool";
            }, {
                readonly internalType: "int256";
                readonly name: "payoutAdjustmentPct";
                readonly type: "int256";
            }];
            readonly indexed: false;
            readonly internalType: "struct SpokePool.RelayExecutionInfo";
            readonly name: "updatableRelayData";
            readonly type: "tuple";
        }];
        readonly name: "FilledRelay";
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
            readonly name: "nonce";
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
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "originChainId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "int64";
            readonly name: "relayerFeePct";
            readonly type: "int64";
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
            readonly internalType: "address";
            readonly name: "originToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "depositor";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "FundsDeposited";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isPaused";
            readonly type: "bool";
        }];
        readonly name: "PausedDeposits";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isPaused";
            readonly type: "bool";
        }];
        readonly name: "PausedFills";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "rootBundleId";
            readonly type: "uint32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "relayerRefundRoot";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "slowRelayRoot";
            readonly type: "bytes32";
        }];
        readonly name: "RelayedRootBundle";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "int64";
            readonly name: "newRelayerFeePct";
            readonly type: "int64";
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
        readonly name: "RequestedSpeedUpDeposit";
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
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newHubPool";
            readonly type: "address";
        }];
        readonly name: "SetHubPool";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "SetXDomainAdmin";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountToReturn";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "leafId";
            readonly type: "uint32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "l2TokenAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "caller";
            readonly type: "address";
        }];
        readonly name: "TokensBridged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
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
            readonly name: "nonce";
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
        readonly inputs: readonly [];
        readonly name: "EMPTY_RELAYER";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "EMPTY_REPAYMENT_CHAIN_ID";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INFINITE_FILL_DEADLINE";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "MAX_TRANSFER_SIZE";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "UPDATE_V3_DEPOSIT_DETAILS_HASH";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_initialDepositId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "_crossDomainAdmin";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_hubPool";
            readonly type: "address";
        }];
        readonly name: "__SpokePool_init";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
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
        readonly inputs: readonly [];
        readonly name: "crossDomainAdmin";
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
            readonly name: "";
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
            readonly name: "exclusivityDeadlineOffset";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "depositExclusive";
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
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "depositFor";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "depositQuoteTimeBuffer";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
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
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "enabledDepositRoutes";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
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
        readonly inputs: readonly [];
        readonly name: "fillDeadlineBuffer";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "fillStatuses";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
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
                readonly name: "nonce";
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
                readonly name: "nonce";
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
            readonly name: "_l2TxGasLimit";
            readonly type: "uint256";
        }];
        readonly name: "testFillv3Relay";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
        readonly inputs: readonly [];
        readonly name: "getCurrentTime";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "hubPool";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "data";
            readonly type: "bytes[]";
        }];
        readonly name: "multicall";
        readonly outputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "results";
            readonly type: "bytes[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "address";
            readonly type: "address";
        }];
        readonly name: "nonce";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
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
        readonly inputs: readonly [];
        readonly name: "pausedDeposits";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pausedFills";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
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
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "rootBundles";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "slowRelayRoot";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "relayerRefundRoot";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
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
            readonly name: "enabled";
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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "data";
            readonly type: "bytes[]";
        }];
        readonly name: "tryMulticall";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bool";
                readonly name: "success";
                readonly type: "bool";
            }, {
                readonly internalType: "bytes";
                readonly name: "returnData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct MultiCallerUpgradeable.Result[]";
            readonly name: "results";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }];
        readonly name: "upgradeTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "wrappedNativeToken";
        readonly outputs: readonly [{
            readonly internalType: "contract WETH9Interface";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): SpokePoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SpokePool;
}
