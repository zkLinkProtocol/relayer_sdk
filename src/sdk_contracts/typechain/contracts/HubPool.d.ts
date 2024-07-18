import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface HubPoolInterface extends utils.Interface {
    functions: {
        "addLiquidity(address,uint256)": FunctionFragment;
        "bondAmount()": FunctionFragment;
        "bondToken()": FunctionFragment;
        "claimProtocolFeesCaptured(address)": FunctionFragment;
        "crossChainContracts(uint256)": FunctionFragment;
        "disableL1TokenForLiquidityProvision(address)": FunctionFragment;
        "disputeRootBundle()": FunctionFragment;
        "emergencyDeleteProposal()": FunctionFragment;
        "enableL1TokenForLiquidityProvision(address)": FunctionFragment;
        "exchangeRateCurrent(address)": FunctionFragment;
        "executeRootBundle(uint256,uint256,uint256[],int256[],int256[],uint8,address[],bytes32[])": FunctionFragment;
        "finder()": FunctionFragment;
        "getCurrentTime()": FunctionFragment;
        "haircutReserves(address,int256)": FunctionFragment;
        "identifier()": FunctionFragment;
        "liquidityUtilizationCurrent(address)": FunctionFragment;
        "liquidityUtilizationPostRelay(address,uint256)": FunctionFragment;
        "liveness()": FunctionFragment;
        "loadEthForL2Calls()": FunctionFragment;
        "lpFeeRatePerSecond()": FunctionFragment;
        "lpTokenFactory()": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "owner()": FunctionFragment;
        "paused()": FunctionFragment;
        "poolRebalanceRoute(uint256,address)": FunctionFragment;
        "pooledTokens(address)": FunctionFragment;
        "proposeRootBundle(uint256[],uint8,bytes32,bytes32,bytes32)": FunctionFragment;
        "protocolFeeCaptureAddress()": FunctionFragment;
        "protocolFeeCapturePct()": FunctionFragment;
        "relaySpokePoolAdminFunction(uint256,bytes)": FunctionFragment;
        "removeLiquidity(address,uint256,bool)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "rootBundleProposal()": FunctionFragment;
        "setBond(address,uint256)": FunctionFragment;
        "setCrossChainContracts(uint256,address,address)": FunctionFragment;
        "setCurrentTime(uint256)": FunctionFragment;
        "setDepositRoute(uint256,uint256,address,bool)": FunctionFragment;
        "setIdentifier(bytes32)": FunctionFragment;
        "setLiveness(uint32)": FunctionFragment;
        "setPaused(bool)": FunctionFragment;
        "setPoolRebalanceRoute(uint256,address,address)": FunctionFragment;
        "setProtocolFeeCapture(address,uint256)": FunctionFragment;
        "sync(address)": FunctionFragment;
        "timerAddress()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unclaimedAccumulatedProtocolFees(address)": FunctionFragment;
        "weth()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addLiquidity" | "bondAmount" | "bondToken" | "claimProtocolFeesCaptured" | "crossChainContracts" | "disableL1TokenForLiquidityProvision" | "disputeRootBundle" | "emergencyDeleteProposal" | "enableL1TokenForLiquidityProvision" | "exchangeRateCurrent" | "executeRootBundle" | "finder" | "getCurrentTime" | "haircutReserves" | "identifier" | "liquidityUtilizationCurrent" | "liquidityUtilizationPostRelay" | "liveness" | "loadEthForL2Calls" | "lpFeeRatePerSecond" | "lpTokenFactory" | "multicall" | "owner" | "paused" | "poolRebalanceRoute" | "pooledTokens" | "proposeRootBundle" | "protocolFeeCaptureAddress" | "protocolFeeCapturePct" | "relaySpokePoolAdminFunction" | "removeLiquidity" | "renounceOwnership" | "rootBundleProposal" | "setBond" | "setCrossChainContracts" | "setCurrentTime" | "setDepositRoute" | "setIdentifier" | "setLiveness" | "setPaused" | "setPoolRebalanceRoute" | "setProtocolFeeCapture" | "sync" | "timerAddress" | "transferOwnership" | "unclaimedAccumulatedProtocolFees" | "weth"): FunctionFragment;
    encodeFunctionData(functionFragment: "addLiquidity", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "bondAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "bondToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimProtocolFeesCaptured", values: [string]): string;
    encodeFunctionData(functionFragment: "crossChainContracts", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "disableL1TokenForLiquidityProvision", values: [string]): string;
    encodeFunctionData(functionFragment: "disputeRootBundle", values?: undefined): string;
    encodeFunctionData(functionFragment: "emergencyDeleteProposal", values?: undefined): string;
    encodeFunctionData(functionFragment: "enableL1TokenForLiquidityProvision", values: [string]): string;
    encodeFunctionData(functionFragment: "exchangeRateCurrent", values: [string]): string;
    encodeFunctionData(functionFragment: "executeRootBundle", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish[],
        BigNumberish[],
        BigNumberish[],
        BigNumberish,
        string[],
        BytesLike[]
    ]): string;
    encodeFunctionData(functionFragment: "finder", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "haircutReserves", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "identifier", values?: undefined): string;
    encodeFunctionData(functionFragment: "liquidityUtilizationCurrent", values: [string]): string;
    encodeFunctionData(functionFragment: "liquidityUtilizationPostRelay", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "liveness", values?: undefined): string;
    encodeFunctionData(functionFragment: "loadEthForL2Calls", values?: undefined): string;
    encodeFunctionData(functionFragment: "lpFeeRatePerSecond", values?: undefined): string;
    encodeFunctionData(functionFragment: "lpTokenFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolRebalanceRoute", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "pooledTokens", values: [string]): string;
    encodeFunctionData(functionFragment: "proposeRootBundle", values: [BigNumberish[], BigNumberish, BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "protocolFeeCaptureAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolFeeCapturePct", values?: undefined): string;
    encodeFunctionData(functionFragment: "relaySpokePoolAdminFunction", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "removeLiquidity", values: [string, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "rootBundleProposal", values?: undefined): string;
    encodeFunctionData(functionFragment: "setBond", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setCrossChainContracts", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "setCurrentTime", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setDepositRoute", values: [BigNumberish, BigNumberish, string, boolean]): string;
    encodeFunctionData(functionFragment: "setIdentifier", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "setLiveness", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPaused", values: [boolean]): string;
    encodeFunctionData(functionFragment: "setPoolRebalanceRoute", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "setProtocolFeeCapture", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sync", values: [string]): string;
    encodeFunctionData(functionFragment: "timerAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "unclaimedAccumulatedProtocolFees", values: [string]): string;
    encodeFunctionData(functionFragment: "weth", values?: undefined): string;
    decodeFunctionResult(functionFragment: "addLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bondAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bondToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimProtocolFeesCaptured", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "crossChainContracts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableL1TokenForLiquidityProvision", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputeRootBundle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyDeleteProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enableL1TokenForLiquidityProvision", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeRateCurrent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeRootBundle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "haircutReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "identifier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidityUtilizationCurrent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidityUtilizationPostRelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liveness", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "loadEthForL2Calls", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lpFeeRatePerSecond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lpTokenFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolRebalanceRoute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pooledTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposeRootBundle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolFeeCaptureAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolFeeCapturePct", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relaySpokePoolAdminFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rootBundleProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCrossChainContracts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCurrentTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDepositRoute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setIdentifier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLiveness", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPoolRebalanceRoute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProtocolFeeCapture", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sync", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timerAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unclaimedAccumulatedProtocolFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
    events: {
        "BondSet(address,uint256)": EventFragment;
        "CrossChainContractsSet(uint256,address,address)": EventFragment;
        "EmergencyRootBundleDeleted(bytes32,bytes32,bytes32,address)": EventFragment;
        "IdentifierSet(bytes32)": EventFragment;
        "L1TokenEnabledForLiquidityProvision(address,address)": EventFragment;
        "L2TokenDisabledForLiquidityProvision(address,address)": EventFragment;
        "LiquidityAdded(address,uint256,uint256,address)": EventFragment;
        "LiquidityRemoved(address,uint256,uint256,address)": EventFragment;
        "LivenessSet(uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Paused(bool)": EventFragment;
        "ProposeRootBundle(uint32,uint8,uint256[],bytes32,bytes32,bytes32,address)": EventFragment;
        "ProtocolFeeCaptureSet(address,uint256)": EventFragment;
        "ProtocolFeesCapturedClaimed(address,uint256)": EventFragment;
        "RootBundleCanceled(address,uint256)": EventFragment;
        "RootBundleDisputed(address,uint256)": EventFragment;
        "RootBundleExecuted(uint256,uint256,uint256,address[],uint256[],int256[],int256[],address)": EventFragment;
        "SetEnableDepositRoute(uint256,uint256,address,bool)": EventFragment;
        "SetPoolRebalanceRoute(uint256,address,address)": EventFragment;
        "SpokePoolAdminFunctionTriggered(uint256,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BondSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CrossChainContractsSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EmergencyRootBundleDeleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IdentifierSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "L1TokenEnabledForLiquidityProvision"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "L2TokenDisabledForLiquidityProvision"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidityAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidityRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LivenessSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposeRootBundle"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProtocolFeeCaptureSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProtocolFeesCapturedClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RootBundleCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RootBundleDisputed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RootBundleExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetEnableDepositRoute"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPoolRebalanceRoute"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SpokePoolAdminFunctionTriggered"): EventFragment;
}
export interface BondSetEventObject {
    newBondToken: string;
    newBondAmount: BigNumber;
}
export declare type BondSetEvent = TypedEvent<[string, BigNumber], BondSetEventObject>;
export declare type BondSetEventFilter = TypedEventFilter<BondSetEvent>;
export interface CrossChainContractsSetEventObject {
    l2ChainId: BigNumber;
    adapter: string;
    spokePool: string;
}
export declare type CrossChainContractsSetEvent = TypedEvent<[
    BigNumber,
    string,
    string
], CrossChainContractsSetEventObject>;
export declare type CrossChainContractsSetEventFilter = TypedEventFilter<CrossChainContractsSetEvent>;
export interface EmergencyRootBundleDeletedEventObject {
    poolRebalanceRoot: string;
    relayerRefundRoot: string;
    slowRelayRoot: string;
    proposer: string;
}
export declare type EmergencyRootBundleDeletedEvent = TypedEvent<[
    string,
    string,
    string,
    string
], EmergencyRootBundleDeletedEventObject>;
export declare type EmergencyRootBundleDeletedEventFilter = TypedEventFilter<EmergencyRootBundleDeletedEvent>;
export interface IdentifierSetEventObject {
    newIdentifier: string;
}
export declare type IdentifierSetEvent = TypedEvent<[string], IdentifierSetEventObject>;
export declare type IdentifierSetEventFilter = TypedEventFilter<IdentifierSetEvent>;
export interface L1TokenEnabledForLiquidityProvisionEventObject {
    l1Token: string;
    lpToken: string;
}
export declare type L1TokenEnabledForLiquidityProvisionEvent = TypedEvent<[
    string,
    string
], L1TokenEnabledForLiquidityProvisionEventObject>;
export declare type L1TokenEnabledForLiquidityProvisionEventFilter = TypedEventFilter<L1TokenEnabledForLiquidityProvisionEvent>;
export interface L2TokenDisabledForLiquidityProvisionEventObject {
    l1Token: string;
    lpToken: string;
}
export declare type L2TokenDisabledForLiquidityProvisionEvent = TypedEvent<[
    string,
    string
], L2TokenDisabledForLiquidityProvisionEventObject>;
export declare type L2TokenDisabledForLiquidityProvisionEventFilter = TypedEventFilter<L2TokenDisabledForLiquidityProvisionEvent>;
export interface LiquidityAddedEventObject {
    l1Token: string;
    amount: BigNumber;
    lpTokensMinted: BigNumber;
    liquidityProvider: string;
}
export declare type LiquidityAddedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    string
], LiquidityAddedEventObject>;
export declare type LiquidityAddedEventFilter = TypedEventFilter<LiquidityAddedEvent>;
export interface LiquidityRemovedEventObject {
    l1Token: string;
    amount: BigNumber;
    lpTokensBurnt: BigNumber;
    liquidityProvider: string;
}
export declare type LiquidityRemovedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    string
], LiquidityRemovedEventObject>;
export declare type LiquidityRemovedEventFilter = TypedEventFilter<LiquidityRemovedEvent>;
export interface LivenessSetEventObject {
    newLiveness: BigNumber;
}
export declare type LivenessSetEvent = TypedEvent<[BigNumber], LivenessSetEventObject>;
export declare type LivenessSetEventFilter = TypedEventFilter<LivenessSetEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface PausedEventObject {
    isPaused: boolean;
}
export declare type PausedEvent = TypedEvent<[boolean], PausedEventObject>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export interface ProposeRootBundleEventObject {
    challengePeriodEndTimestamp: number;
    poolRebalanceLeafCount: number;
    bundleEvaluationBlockNumbers: BigNumber[];
    poolRebalanceRoot: string;
    relayerRefundRoot: string;
    slowRelayRoot: string;
    proposer: string;
}
export declare type ProposeRootBundleEvent = TypedEvent<[
    number,
    number,
    BigNumber[],
    string,
    string,
    string,
    string
], ProposeRootBundleEventObject>;
export declare type ProposeRootBundleEventFilter = TypedEventFilter<ProposeRootBundleEvent>;
export interface ProtocolFeeCaptureSetEventObject {
    newProtocolFeeCaptureAddress: string;
    newProtocolFeeCapturePct: BigNumber;
}
export declare type ProtocolFeeCaptureSetEvent = TypedEvent<[
    string,
    BigNumber
], ProtocolFeeCaptureSetEventObject>;
export declare type ProtocolFeeCaptureSetEventFilter = TypedEventFilter<ProtocolFeeCaptureSetEvent>;
export interface ProtocolFeesCapturedClaimedEventObject {
    l1Token: string;
    accumulatedFees: BigNumber;
}
export declare type ProtocolFeesCapturedClaimedEvent = TypedEvent<[
    string,
    BigNumber
], ProtocolFeesCapturedClaimedEventObject>;
export declare type ProtocolFeesCapturedClaimedEventFilter = TypedEventFilter<ProtocolFeesCapturedClaimedEvent>;
export interface RootBundleCanceledEventObject {
    disputer: string;
    requestTime: BigNumber;
}
export declare type RootBundleCanceledEvent = TypedEvent<[
    string,
    BigNumber
], RootBundleCanceledEventObject>;
export declare type RootBundleCanceledEventFilter = TypedEventFilter<RootBundleCanceledEvent>;
export interface RootBundleDisputedEventObject {
    disputer: string;
    requestTime: BigNumber;
}
export declare type RootBundleDisputedEvent = TypedEvent<[
    string,
    BigNumber
], RootBundleDisputedEventObject>;
export declare type RootBundleDisputedEventFilter = TypedEventFilter<RootBundleDisputedEvent>;
export interface RootBundleExecutedEventObject {
    groupIndex: BigNumber;
    leafId: BigNumber;
    chainId: BigNumber;
    l1Tokens: string[];
    bundleLpFees: BigNumber[];
    netSendAmounts: BigNumber[];
    runningBalances: BigNumber[];
    caller: string;
}
export declare type RootBundleExecutedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    string[],
    BigNumber[],
    BigNumber[],
    BigNumber[],
    string
], RootBundleExecutedEventObject>;
export declare type RootBundleExecutedEventFilter = TypedEventFilter<RootBundleExecutedEvent>;
export interface SetEnableDepositRouteEventObject {
    originChainId: BigNumber;
    destinationChainId: BigNumber;
    originToken: string;
    depositsEnabled: boolean;
}
export declare type SetEnableDepositRouteEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string,
    boolean
], SetEnableDepositRouteEventObject>;
export declare type SetEnableDepositRouteEventFilter = TypedEventFilter<SetEnableDepositRouteEvent>;
export interface SetPoolRebalanceRouteEventObject {
    destinationChainId: BigNumber;
    l1Token: string;
    destinationToken: string;
}
export declare type SetPoolRebalanceRouteEvent = TypedEvent<[
    BigNumber,
    string,
    string
], SetPoolRebalanceRouteEventObject>;
export declare type SetPoolRebalanceRouteEventFilter = TypedEventFilter<SetPoolRebalanceRouteEvent>;
export interface SpokePoolAdminFunctionTriggeredEventObject {
    chainId: BigNumber;
    message: string;
}
export declare type SpokePoolAdminFunctionTriggeredEvent = TypedEvent<[
    BigNumber,
    string
], SpokePoolAdminFunctionTriggeredEventObject>;
export declare type SpokePoolAdminFunctionTriggeredEventFilter = TypedEventFilter<SpokePoolAdminFunctionTriggeredEvent>;
export interface HubPool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: HubPoolInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        addLiquidity(l1Token: string, l1TokenAmount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        bondAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        bondToken(overrides?: CallOverrides): Promise<[string]>;
        claimProtocolFeesCaptured(l1Token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        crossChainContracts(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, string] & {
            adapter: string;
            spokePool: string;
        }>;
        disableL1TokenForLiquidityProvision(l1Token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        disputeRootBundle(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        emergencyDeleteProposal(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        enableL1TokenForLiquidityProvision(l1Token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        exchangeRateCurrent(l1Token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        executeRootBundle(chainId: BigNumberish, groupIndex: BigNumberish, bundleLpFees: BigNumberish[], netSendAmounts: BigNumberish[], runningBalances: BigNumberish[], leafId: BigNumberish, l1Tokens: string[], proof: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        finder(overrides?: CallOverrides): Promise<[string]>;
        getCurrentTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        haircutReserves(l1Token: string, haircutAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        identifier(overrides?: CallOverrides): Promise<[string]>;
        liquidityUtilizationCurrent(l1Token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        liquidityUtilizationPostRelay(l1Token: string, relayedAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        liveness(overrides?: CallOverrides): Promise<[number]>;
        loadEthForL2Calls(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        lpFeeRatePerSecond(overrides?: CallOverrides): Promise<[BigNumber]>;
        lpTokenFactory(overrides?: CallOverrides): Promise<[string]>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        poolRebalanceRoute(destinationChainId: BigNumberish, l1Token: string, overrides?: CallOverrides): Promise<[string] & {
            destinationToken: string;
        }>;
        pooledTokens(arg0: string, overrides?: CallOverrides): Promise<[
            string,
            boolean,
            number,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            lpToken: string;
            isEnabled: boolean;
            lastLpFeeUpdate: number;
            utilizedReserves: BigNumber;
            liquidReserves: BigNumber;
            undistributedLpFees: BigNumber;
        }>;
        proposeRootBundle(bundleEvaluationBlockNumbers: BigNumberish[], poolRebalanceLeafCount: BigNumberish, poolRebalanceRoot: BytesLike, relayerRefundRoot: BytesLike, slowRelayRoot: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        protocolFeeCaptureAddress(overrides?: CallOverrides): Promise<[string]>;
        protocolFeeCapturePct(overrides?: CallOverrides): Promise<[BigNumber]>;
        relaySpokePoolAdminFunction(chainId: BigNumberish, functionData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        removeLiquidity(l1Token: string, lpTokenAmount: BigNumberish, sendEth: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        rootBundleProposal(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            string,
            number,
            number
        ] & {
            poolRebalanceRoot: string;
            relayerRefundRoot: string;
            slowRelayRoot: string;
            claimedBitMap: BigNumber;
            proposer: string;
            unclaimedPoolRebalanceLeafCount: number;
            challengePeriodEndTimestamp: number;
        }>;
        setBond(newBondToken: string, newBondAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setCrossChainContracts(l2ChainId: BigNumberish, adapter: string, spokePool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setCurrentTime(time: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setDepositRoute(originChainId: BigNumberish, destinationChainId: BigNumberish, originToken: string, depositsEnabled: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setIdentifier(newIdentifier: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setLiveness(newLiveness: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setPaused(pause: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setPoolRebalanceRoute(destinationChainId: BigNumberish, l1Token: string, destinationToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setProtocolFeeCapture(newProtocolFeeCaptureAddress: string, newProtocolFeeCapturePct: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        sync(l1Token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        timerAddress(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        unclaimedAccumulatedProtocolFees(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        weth(overrides?: CallOverrides): Promise<[string]>;
    };
    addLiquidity(l1Token: string, l1TokenAmount: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    bondAmount(overrides?: CallOverrides): Promise<BigNumber>;
    bondToken(overrides?: CallOverrides): Promise<string>;
    claimProtocolFeesCaptured(l1Token: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    crossChainContracts(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, string] & {
        adapter: string;
        spokePool: string;
    }>;
    disableL1TokenForLiquidityProvision(l1Token: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    disputeRootBundle(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    emergencyDeleteProposal(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    enableL1TokenForLiquidityProvision(l1Token: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    exchangeRateCurrent(l1Token: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    executeRootBundle(chainId: BigNumberish, groupIndex: BigNumberish, bundleLpFees: BigNumberish[], netSendAmounts: BigNumberish[], runningBalances: BigNumberish[], leafId: BigNumberish, l1Tokens: string[], proof: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    finder(overrides?: CallOverrides): Promise<string>;
    getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;
    haircutReserves(l1Token: string, haircutAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    identifier(overrides?: CallOverrides): Promise<string>;
    liquidityUtilizationCurrent(l1Token: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    liquidityUtilizationPostRelay(l1Token: string, relayedAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    liveness(overrides?: CallOverrides): Promise<number>;
    loadEthForL2Calls(overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    lpFeeRatePerSecond(overrides?: CallOverrides): Promise<BigNumber>;
    lpTokenFactory(overrides?: CallOverrides): Promise<string>;
    multicall(data: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    poolRebalanceRoute(destinationChainId: BigNumberish, l1Token: string, overrides?: CallOverrides): Promise<string>;
    pooledTokens(arg0: string, overrides?: CallOverrides): Promise<[
        string,
        boolean,
        number,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        lpToken: string;
        isEnabled: boolean;
        lastLpFeeUpdate: number;
        utilizedReserves: BigNumber;
        liquidReserves: BigNumber;
        undistributedLpFees: BigNumber;
    }>;
    proposeRootBundle(bundleEvaluationBlockNumbers: BigNumberish[], poolRebalanceLeafCount: BigNumberish, poolRebalanceRoot: BytesLike, relayerRefundRoot: BytesLike, slowRelayRoot: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    protocolFeeCaptureAddress(overrides?: CallOverrides): Promise<string>;
    protocolFeeCapturePct(overrides?: CallOverrides): Promise<BigNumber>;
    relaySpokePoolAdminFunction(chainId: BigNumberish, functionData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    removeLiquidity(l1Token: string, lpTokenAmount: BigNumberish, sendEth: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    rootBundleProposal(overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        BigNumber,
        string,
        number,
        number
    ] & {
        poolRebalanceRoot: string;
        relayerRefundRoot: string;
        slowRelayRoot: string;
        claimedBitMap: BigNumber;
        proposer: string;
        unclaimedPoolRebalanceLeafCount: number;
        challengePeriodEndTimestamp: number;
    }>;
    setBond(newBondToken: string, newBondAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setCrossChainContracts(l2ChainId: BigNumberish, adapter: string, spokePool: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setCurrentTime(time: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setDepositRoute(originChainId: BigNumberish, destinationChainId: BigNumberish, originToken: string, depositsEnabled: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setIdentifier(newIdentifier: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setLiveness(newLiveness: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setPaused(pause: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setPoolRebalanceRoute(destinationChainId: BigNumberish, l1Token: string, destinationToken: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setProtocolFeeCapture(newProtocolFeeCaptureAddress: string, newProtocolFeeCapturePct: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    sync(l1Token: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    timerAddress(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    unclaimedAccumulatedProtocolFees(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    weth(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        addLiquidity(l1Token: string, l1TokenAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        bondAmount(overrides?: CallOverrides): Promise<BigNumber>;
        bondToken(overrides?: CallOverrides): Promise<string>;
        claimProtocolFeesCaptured(l1Token: string, overrides?: CallOverrides): Promise<void>;
        crossChainContracts(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, string] & {
            adapter: string;
            spokePool: string;
        }>;
        disableL1TokenForLiquidityProvision(l1Token: string, overrides?: CallOverrides): Promise<void>;
        disputeRootBundle(overrides?: CallOverrides): Promise<void>;
        emergencyDeleteProposal(overrides?: CallOverrides): Promise<void>;
        enableL1TokenForLiquidityProvision(l1Token: string, overrides?: CallOverrides): Promise<void>;
        exchangeRateCurrent(l1Token: string, overrides?: CallOverrides): Promise<BigNumber>;
        executeRootBundle(chainId: BigNumberish, groupIndex: BigNumberish, bundleLpFees: BigNumberish[], netSendAmounts: BigNumberish[], runningBalances: BigNumberish[], leafId: BigNumberish, l1Tokens: string[], proof: BytesLike[], overrides?: CallOverrides): Promise<void>;
        finder(overrides?: CallOverrides): Promise<string>;
        getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;
        haircutReserves(l1Token: string, haircutAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        identifier(overrides?: CallOverrides): Promise<string>;
        liquidityUtilizationCurrent(l1Token: string, overrides?: CallOverrides): Promise<BigNumber>;
        liquidityUtilizationPostRelay(l1Token: string, relayedAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        liveness(overrides?: CallOverrides): Promise<number>;
        loadEthForL2Calls(overrides?: CallOverrides): Promise<void>;
        lpFeeRatePerSecond(overrides?: CallOverrides): Promise<BigNumber>;
        lpTokenFactory(overrides?: CallOverrides): Promise<string>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        owner(overrides?: CallOverrides): Promise<string>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        poolRebalanceRoute(destinationChainId: BigNumberish, l1Token: string, overrides?: CallOverrides): Promise<string>;
        pooledTokens(arg0: string, overrides?: CallOverrides): Promise<[
            string,
            boolean,
            number,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            lpToken: string;
            isEnabled: boolean;
            lastLpFeeUpdate: number;
            utilizedReserves: BigNumber;
            liquidReserves: BigNumber;
            undistributedLpFees: BigNumber;
        }>;
        proposeRootBundle(bundleEvaluationBlockNumbers: BigNumberish[], poolRebalanceLeafCount: BigNumberish, poolRebalanceRoot: BytesLike, relayerRefundRoot: BytesLike, slowRelayRoot: BytesLike, overrides?: CallOverrides): Promise<void>;
        protocolFeeCaptureAddress(overrides?: CallOverrides): Promise<string>;
        protocolFeeCapturePct(overrides?: CallOverrides): Promise<BigNumber>;
        relaySpokePoolAdminFunction(chainId: BigNumberish, functionData: BytesLike, overrides?: CallOverrides): Promise<void>;
        removeLiquidity(l1Token: string, lpTokenAmount: BigNumberish, sendEth: boolean, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        rootBundleProposal(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            string,
            number,
            number
        ] & {
            poolRebalanceRoot: string;
            relayerRefundRoot: string;
            slowRelayRoot: string;
            claimedBitMap: BigNumber;
            proposer: string;
            unclaimedPoolRebalanceLeafCount: number;
            challengePeriodEndTimestamp: number;
        }>;
        setBond(newBondToken: string, newBondAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setCrossChainContracts(l2ChainId: BigNumberish, adapter: string, spokePool: string, overrides?: CallOverrides): Promise<void>;
        setCurrentTime(time: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setDepositRoute(originChainId: BigNumberish, destinationChainId: BigNumberish, originToken: string, depositsEnabled: boolean, overrides?: CallOverrides): Promise<void>;
        setIdentifier(newIdentifier: BytesLike, overrides?: CallOverrides): Promise<void>;
        setLiveness(newLiveness: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPaused(pause: boolean, overrides?: CallOverrides): Promise<void>;
        setPoolRebalanceRoute(destinationChainId: BigNumberish, l1Token: string, destinationToken: string, overrides?: CallOverrides): Promise<void>;
        setProtocolFeeCapture(newProtocolFeeCaptureAddress: string, newProtocolFeeCapturePct: BigNumberish, overrides?: CallOverrides): Promise<void>;
        sync(l1Token: string, overrides?: CallOverrides): Promise<void>;
        timerAddress(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        unclaimedAccumulatedProtocolFees(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        weth(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "BondSet(address,uint256)"(newBondToken?: string | null, newBondAmount?: null): BondSetEventFilter;
        BondSet(newBondToken?: string | null, newBondAmount?: null): BondSetEventFilter;
        "CrossChainContractsSet(uint256,address,address)"(l2ChainId?: null, adapter?: null, spokePool?: null): CrossChainContractsSetEventFilter;
        CrossChainContractsSet(l2ChainId?: null, adapter?: null, spokePool?: null): CrossChainContractsSetEventFilter;
        "EmergencyRootBundleDeleted(bytes32,bytes32,bytes32,address)"(poolRebalanceRoot?: BytesLike | null, relayerRefundRoot?: BytesLike | null, slowRelayRoot?: null, proposer?: string | null): EmergencyRootBundleDeletedEventFilter;
        EmergencyRootBundleDeleted(poolRebalanceRoot?: BytesLike | null, relayerRefundRoot?: BytesLike | null, slowRelayRoot?: null, proposer?: string | null): EmergencyRootBundleDeletedEventFilter;
        "IdentifierSet(bytes32)"(newIdentifier?: null): IdentifierSetEventFilter;
        IdentifierSet(newIdentifier?: null): IdentifierSetEventFilter;
        "L1TokenEnabledForLiquidityProvision(address,address)"(l1Token?: null, lpToken?: null): L1TokenEnabledForLiquidityProvisionEventFilter;
        L1TokenEnabledForLiquidityProvision(l1Token?: null, lpToken?: null): L1TokenEnabledForLiquidityProvisionEventFilter;
        "L2TokenDisabledForLiquidityProvision(address,address)"(l1Token?: null, lpToken?: null): L2TokenDisabledForLiquidityProvisionEventFilter;
        L2TokenDisabledForLiquidityProvision(l1Token?: null, lpToken?: null): L2TokenDisabledForLiquidityProvisionEventFilter;
        "LiquidityAdded(address,uint256,uint256,address)"(l1Token?: string | null, amount?: null, lpTokensMinted?: null, liquidityProvider?: string | null): LiquidityAddedEventFilter;
        LiquidityAdded(l1Token?: string | null, amount?: null, lpTokensMinted?: null, liquidityProvider?: string | null): LiquidityAddedEventFilter;
        "LiquidityRemoved(address,uint256,uint256,address)"(l1Token?: string | null, amount?: null, lpTokensBurnt?: null, liquidityProvider?: string | null): LiquidityRemovedEventFilter;
        LiquidityRemoved(l1Token?: string | null, amount?: null, lpTokensBurnt?: null, liquidityProvider?: string | null): LiquidityRemovedEventFilter;
        "LivenessSet(uint256)"(newLiveness?: null): LivenessSetEventFilter;
        LivenessSet(newLiveness?: null): LivenessSetEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "Paused(bool)"(isPaused?: boolean | null): PausedEventFilter;
        Paused(isPaused?: boolean | null): PausedEventFilter;
        "ProposeRootBundle(uint32,uint8,uint256[],bytes32,bytes32,bytes32,address)"(challengePeriodEndTimestamp?: null, poolRebalanceLeafCount?: null, bundleEvaluationBlockNumbers?: null, poolRebalanceRoot?: BytesLike | null, relayerRefundRoot?: BytesLike | null, slowRelayRoot?: null, proposer?: string | null): ProposeRootBundleEventFilter;
        ProposeRootBundle(challengePeriodEndTimestamp?: null, poolRebalanceLeafCount?: null, bundleEvaluationBlockNumbers?: null, poolRebalanceRoot?: BytesLike | null, relayerRefundRoot?: BytesLike | null, slowRelayRoot?: null, proposer?: string | null): ProposeRootBundleEventFilter;
        "ProtocolFeeCaptureSet(address,uint256)"(newProtocolFeeCaptureAddress?: string | null, newProtocolFeeCapturePct?: BigNumberish | null): ProtocolFeeCaptureSetEventFilter;
        ProtocolFeeCaptureSet(newProtocolFeeCaptureAddress?: string | null, newProtocolFeeCapturePct?: BigNumberish | null): ProtocolFeeCaptureSetEventFilter;
        "ProtocolFeesCapturedClaimed(address,uint256)"(l1Token?: string | null, accumulatedFees?: BigNumberish | null): ProtocolFeesCapturedClaimedEventFilter;
        ProtocolFeesCapturedClaimed(l1Token?: string | null, accumulatedFees?: BigNumberish | null): ProtocolFeesCapturedClaimedEventFilter;
        "RootBundleCanceled(address,uint256)"(disputer?: string | null, requestTime?: null): RootBundleCanceledEventFilter;
        RootBundleCanceled(disputer?: string | null, requestTime?: null): RootBundleCanceledEventFilter;
        "RootBundleDisputed(address,uint256)"(disputer?: string | null, requestTime?: null): RootBundleDisputedEventFilter;
        RootBundleDisputed(disputer?: string | null, requestTime?: null): RootBundleDisputedEventFilter;
        "RootBundleExecuted(uint256,uint256,uint256,address[],uint256[],int256[],int256[],address)"(groupIndex?: null, leafId?: BigNumberish | null, chainId?: BigNumberish | null, l1Tokens?: null, bundleLpFees?: null, netSendAmounts?: null, runningBalances?: null, caller?: string | null): RootBundleExecutedEventFilter;
        RootBundleExecuted(groupIndex?: null, leafId?: BigNumberish | null, chainId?: BigNumberish | null, l1Tokens?: null, bundleLpFees?: null, netSendAmounts?: null, runningBalances?: null, caller?: string | null): RootBundleExecutedEventFilter;
        "SetEnableDepositRoute(uint256,uint256,address,bool)"(originChainId?: BigNumberish | null, destinationChainId?: BigNumberish | null, originToken?: string | null, depositsEnabled?: null): SetEnableDepositRouteEventFilter;
        SetEnableDepositRoute(originChainId?: BigNumberish | null, destinationChainId?: BigNumberish | null, originToken?: string | null, depositsEnabled?: null): SetEnableDepositRouteEventFilter;
        "SetPoolRebalanceRoute(uint256,address,address)"(destinationChainId?: BigNumberish | null, l1Token?: string | null, destinationToken?: string | null): SetPoolRebalanceRouteEventFilter;
        SetPoolRebalanceRoute(destinationChainId?: BigNumberish | null, l1Token?: string | null, destinationToken?: string | null): SetPoolRebalanceRouteEventFilter;
        "SpokePoolAdminFunctionTriggered(uint256,bytes)"(chainId?: BigNumberish | null, message?: null): SpokePoolAdminFunctionTriggeredEventFilter;
        SpokePoolAdminFunctionTriggered(chainId?: BigNumberish | null, message?: null): SpokePoolAdminFunctionTriggeredEventFilter;
    };
    estimateGas: {
        addLiquidity(l1Token: string, l1TokenAmount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        bondAmount(overrides?: CallOverrides): Promise<BigNumber>;
        bondToken(overrides?: CallOverrides): Promise<BigNumber>;
        claimProtocolFeesCaptured(l1Token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        crossChainContracts(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        disableL1TokenForLiquidityProvision(l1Token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        disputeRootBundle(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        emergencyDeleteProposal(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        enableL1TokenForLiquidityProvision(l1Token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        exchangeRateCurrent(l1Token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        executeRootBundle(chainId: BigNumberish, groupIndex: BigNumberish, bundleLpFees: BigNumberish[], netSendAmounts: BigNumberish[], runningBalances: BigNumberish[], leafId: BigNumberish, l1Tokens: string[], proof: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        finder(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;
        haircutReserves(l1Token: string, haircutAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        identifier(overrides?: CallOverrides): Promise<BigNumber>;
        liquidityUtilizationCurrent(l1Token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        liquidityUtilizationPostRelay(l1Token: string, relayedAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        liveness(overrides?: CallOverrides): Promise<BigNumber>;
        loadEthForL2Calls(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        lpFeeRatePerSecond(overrides?: CallOverrides): Promise<BigNumber>;
        lpTokenFactory(overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        poolRebalanceRoute(destinationChainId: BigNumberish, l1Token: string, overrides?: CallOverrides): Promise<BigNumber>;
        pooledTokens(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        proposeRootBundle(bundleEvaluationBlockNumbers: BigNumberish[], poolRebalanceLeafCount: BigNumberish, poolRebalanceRoot: BytesLike, relayerRefundRoot: BytesLike, slowRelayRoot: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        protocolFeeCaptureAddress(overrides?: CallOverrides): Promise<BigNumber>;
        protocolFeeCapturePct(overrides?: CallOverrides): Promise<BigNumber>;
        relaySpokePoolAdminFunction(chainId: BigNumberish, functionData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        removeLiquidity(l1Token: string, lpTokenAmount: BigNumberish, sendEth: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        rootBundleProposal(overrides?: CallOverrides): Promise<BigNumber>;
        setBond(newBondToken: string, newBondAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setCrossChainContracts(l2ChainId: BigNumberish, adapter: string, spokePool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setCurrentTime(time: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setDepositRoute(originChainId: BigNumberish, destinationChainId: BigNumberish, originToken: string, depositsEnabled: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setIdentifier(newIdentifier: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setLiveness(newLiveness: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setPaused(pause: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setPoolRebalanceRoute(destinationChainId: BigNumberish, l1Token: string, destinationToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setProtocolFeeCapture(newProtocolFeeCaptureAddress: string, newProtocolFeeCapturePct: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        sync(l1Token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        timerAddress(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        unclaimedAccumulatedProtocolFees(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        weth(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addLiquidity(l1Token: string, l1TokenAmount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        bondAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bondToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimProtocolFeesCaptured(l1Token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        crossChainContracts(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        disableL1TokenForLiquidityProvision(l1Token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        disputeRootBundle(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        emergencyDeleteProposal(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        enableL1TokenForLiquidityProvision(l1Token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        exchangeRateCurrent(l1Token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        executeRootBundle(chainId: BigNumberish, groupIndex: BigNumberish, bundleLpFees: BigNumberish[], netSendAmounts: BigNumberish[], runningBalances: BigNumberish[], leafId: BigNumberish, l1Tokens: string[], proof: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        finder(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        haircutReserves(l1Token: string, haircutAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        identifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidityUtilizationCurrent(l1Token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        liquidityUtilizationPostRelay(l1Token: string, relayedAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        liveness(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        loadEthForL2Calls(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        lpFeeRatePerSecond(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lpTokenFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolRebalanceRoute(destinationChainId: BigNumberish, l1Token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pooledTokens(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposeRootBundle(bundleEvaluationBlockNumbers: BigNumberish[], poolRebalanceLeafCount: BigNumberish, poolRebalanceRoot: BytesLike, relayerRefundRoot: BytesLike, slowRelayRoot: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        protocolFeeCaptureAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protocolFeeCapturePct(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        relaySpokePoolAdminFunction(chainId: BigNumberish, functionData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        removeLiquidity(l1Token: string, lpTokenAmount: BigNumberish, sendEth: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        rootBundleProposal(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setBond(newBondToken: string, newBondAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setCrossChainContracts(l2ChainId: BigNumberish, adapter: string, spokePool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setCurrentTime(time: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setDepositRoute(originChainId: BigNumberish, destinationChainId: BigNumberish, originToken: string, depositsEnabled: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setIdentifier(newIdentifier: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setLiveness(newLiveness: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setPaused(pause: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setPoolRebalanceRoute(destinationChainId: BigNumberish, l1Token: string, destinationToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setProtocolFeeCapture(newProtocolFeeCaptureAddress: string, newProtocolFeeCapturePct: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        sync(l1Token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        timerAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        unclaimedAccumulatedProtocolFees(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
