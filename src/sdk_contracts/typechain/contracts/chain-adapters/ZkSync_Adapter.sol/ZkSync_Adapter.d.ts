import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface ZkSync_AdapterInterface extends utils.Interface {
    functions: {
        "L1_GAS_TO_L2_GAS_PER_PUB_DATA_LIMIT()": FunctionFragment;
        "L2_GAS_LIMIT()": FunctionFragment;
        "getL1CallValue()": FunctionFragment;
        "l1Weth()": FunctionFragment;
        "l2RefundAddress()": FunctionFragment;
        "relayMessage(address,bytes)": FunctionFragment;
        "relayTokens(address,address,uint256,address)": FunctionFragment;
        "zkErc20Bridge()": FunctionFragment;
        "zkSyncEthBridge()": FunctionFragment;
        "zkSyncMessageBridge()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "L1_GAS_TO_L2_GAS_PER_PUB_DATA_LIMIT" | "L2_GAS_LIMIT" | "getL1CallValue" | "l1Weth" | "l2RefundAddress" | "relayMessage" | "relayTokens" | "zkErc20Bridge" | "zkSyncEthBridge" | "zkSyncMessageBridge"): FunctionFragment;
    encodeFunctionData(functionFragment: "L1_GAS_TO_L2_GAS_PER_PUB_DATA_LIMIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "L2_GAS_LIMIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "getL1CallValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "l1Weth", values?: undefined): string;
    encodeFunctionData(functionFragment: "l2RefundAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "relayMessage", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "relayTokens", values: [string, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "zkErc20Bridge", values?: undefined): string;
    encodeFunctionData(functionFragment: "zkSyncEthBridge", values?: undefined): string;
    encodeFunctionData(functionFragment: "zkSyncMessageBridge", values?: undefined): string;
    decodeFunctionResult(functionFragment: "L1_GAS_TO_L2_GAS_PER_PUB_DATA_LIMIT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "L2_GAS_LIMIT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getL1CallValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l1Weth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2RefundAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "zkErc20Bridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "zkSyncEthBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "zkSyncMessageBridge", data: BytesLike): Result;
    events: {
        "MessageRelayed(address,bytes)": EventFragment;
        "TokensRelayed(address,address,uint256,address)": EventFragment;
        "ZkSyncMessageRelayed(bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "MessageRelayed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensRelayed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ZkSyncMessageRelayed"): EventFragment;
}
export interface MessageRelayedEventObject {
    target: string;
    message: string;
}
export declare type MessageRelayedEvent = TypedEvent<[
    string,
    string
], MessageRelayedEventObject>;
export declare type MessageRelayedEventFilter = TypedEventFilter<MessageRelayedEvent>;
export interface TokensRelayedEventObject {
    l1Token: string;
    l2Token: string;
    amount: BigNumber;
    to: string;
}
export declare type TokensRelayedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], TokensRelayedEventObject>;
export declare type TokensRelayedEventFilter = TypedEventFilter<TokensRelayedEvent>;
export interface ZkSyncMessageRelayedEventObject {
    canonicalTxHash: string;
}
export declare type ZkSyncMessageRelayedEvent = TypedEvent<[
    string
], ZkSyncMessageRelayedEventObject>;
export declare type ZkSyncMessageRelayedEventFilter = TypedEventFilter<ZkSyncMessageRelayedEvent>;
export interface ZkSync_Adapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ZkSync_AdapterInterface;
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
        L1_GAS_TO_L2_GAS_PER_PUB_DATA_LIMIT(overrides?: CallOverrides): Promise<[BigNumber]>;
        L2_GAS_LIMIT(overrides?: CallOverrides): Promise<[BigNumber]>;
        getL1CallValue(overrides?: CallOverrides): Promise<[BigNumber]>;
        l1Weth(overrides?: CallOverrides): Promise<[string]>;
        l2RefundAddress(overrides?: CallOverrides): Promise<[string]>;
        relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        zkErc20Bridge(overrides?: CallOverrides): Promise<[string]>;
        zkSyncEthBridge(overrides?: CallOverrides): Promise<[string]>;
        zkSyncMessageBridge(overrides?: CallOverrides): Promise<[string]>;
    };
    L1_GAS_TO_L2_GAS_PER_PUB_DATA_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
    L2_GAS_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
    getL1CallValue(overrides?: CallOverrides): Promise<BigNumber>;
    l1Weth(overrides?: CallOverrides): Promise<string>;
    l2RefundAddress(overrides?: CallOverrides): Promise<string>;
    relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    zkErc20Bridge(overrides?: CallOverrides): Promise<string>;
    zkSyncEthBridge(overrides?: CallOverrides): Promise<string>;
    zkSyncMessageBridge(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        L1_GAS_TO_L2_GAS_PER_PUB_DATA_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        L2_GAS_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        getL1CallValue(overrides?: CallOverrides): Promise<BigNumber>;
        l1Weth(overrides?: CallOverrides): Promise<string>;
        l2RefundAddress(overrides?: CallOverrides): Promise<string>;
        relayMessage(target: string, message: BytesLike, overrides?: CallOverrides): Promise<void>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: CallOverrides): Promise<void>;
        zkErc20Bridge(overrides?: CallOverrides): Promise<string>;
        zkSyncEthBridge(overrides?: CallOverrides): Promise<string>;
        zkSyncMessageBridge(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "MessageRelayed(address,bytes)"(target?: null, message?: null): MessageRelayedEventFilter;
        MessageRelayed(target?: null, message?: null): MessageRelayedEventFilter;
        "TokensRelayed(address,address,uint256,address)"(l1Token?: null, l2Token?: null, amount?: null, to?: null): TokensRelayedEventFilter;
        TokensRelayed(l1Token?: null, l2Token?: null, amount?: null, to?: null): TokensRelayedEventFilter;
        "ZkSyncMessageRelayed(bytes32)"(canonicalTxHash?: null): ZkSyncMessageRelayedEventFilter;
        ZkSyncMessageRelayed(canonicalTxHash?: null): ZkSyncMessageRelayedEventFilter;
    };
    estimateGas: {
        L1_GAS_TO_L2_GAS_PER_PUB_DATA_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        L2_GAS_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        getL1CallValue(overrides?: CallOverrides): Promise<BigNumber>;
        l1Weth(overrides?: CallOverrides): Promise<BigNumber>;
        l2RefundAddress(overrides?: CallOverrides): Promise<BigNumber>;
        relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        zkErc20Bridge(overrides?: CallOverrides): Promise<BigNumber>;
        zkSyncEthBridge(overrides?: CallOverrides): Promise<BigNumber>;
        zkSyncMessageBridge(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        L1_GAS_TO_L2_GAS_PER_PUB_DATA_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        L2_GAS_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getL1CallValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l1Weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l2RefundAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        zkErc20Bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        zkSyncEthBridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        zkSyncMessageBridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
