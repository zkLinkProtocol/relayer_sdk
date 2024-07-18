import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface Arbitrum_RescueAdapterInterface extends utils.Interface {
    functions: {
        "aliasedL2HubPoolAddress()": FunctionFragment;
        "getL1CallValue()": FunctionFragment;
        "l1Inbox()": FunctionFragment;
        "l2GasLimit()": FunctionFragment;
        "l2GasPrice()": FunctionFragment;
        "l2MaxSubmissionCost()": FunctionFragment;
        "l2RefundL2Address()": FunctionFragment;
        "relayMessage(address,bytes)": FunctionFragment;
        "relayTokens(address,address,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "aliasedL2HubPoolAddress" | "getL1CallValue" | "l1Inbox" | "l2GasLimit" | "l2GasPrice" | "l2MaxSubmissionCost" | "l2RefundL2Address" | "relayMessage" | "relayTokens"): FunctionFragment;
    encodeFunctionData(functionFragment: "aliasedL2HubPoolAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "getL1CallValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "l1Inbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "l2GasLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "l2GasPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "l2MaxSubmissionCost", values?: undefined): string;
    encodeFunctionData(functionFragment: "l2RefundL2Address", values?: undefined): string;
    encodeFunctionData(functionFragment: "relayMessage", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "relayTokens", values: [string, string, BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "aliasedL2HubPoolAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getL1CallValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l1Inbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2GasLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2GasPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2MaxSubmissionCost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2RefundL2Address", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayTokens", data: BytesLike): Result;
    events: {
        "MessageRelayed(address,bytes)": EventFragment;
        "TokensRelayed(address,address,uint256,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "MessageRelayed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensRelayed"): EventFragment;
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
export interface Arbitrum_RescueAdapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Arbitrum_RescueAdapterInterface;
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
        aliasedL2HubPoolAddress(overrides?: CallOverrides): Promise<[string]>;
        getL1CallValue(overrides?: CallOverrides): Promise<[BigNumber]>;
        l1Inbox(overrides?: CallOverrides): Promise<[string]>;
        l2GasLimit(overrides?: CallOverrides): Promise<[number]>;
        l2GasPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
        l2MaxSubmissionCost(overrides?: CallOverrides): Promise<[BigNumber]>;
        l2RefundL2Address(overrides?: CallOverrides): Promise<[string]>;
        relayMessage(arg0: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        relayTokens(arg0: string, arg1: string, arg2: BigNumberish, arg3: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    aliasedL2HubPoolAddress(overrides?: CallOverrides): Promise<string>;
    getL1CallValue(overrides?: CallOverrides): Promise<BigNumber>;
    l1Inbox(overrides?: CallOverrides): Promise<string>;
    l2GasLimit(overrides?: CallOverrides): Promise<number>;
    l2GasPrice(overrides?: CallOverrides): Promise<BigNumber>;
    l2MaxSubmissionCost(overrides?: CallOverrides): Promise<BigNumber>;
    l2RefundL2Address(overrides?: CallOverrides): Promise<string>;
    relayMessage(arg0: string, message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    relayTokens(arg0: string, arg1: string, arg2: BigNumberish, arg3: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        aliasedL2HubPoolAddress(overrides?: CallOverrides): Promise<string>;
        getL1CallValue(overrides?: CallOverrides): Promise<BigNumber>;
        l1Inbox(overrides?: CallOverrides): Promise<string>;
        l2GasLimit(overrides?: CallOverrides): Promise<number>;
        l2GasPrice(overrides?: CallOverrides): Promise<BigNumber>;
        l2MaxSubmissionCost(overrides?: CallOverrides): Promise<BigNumber>;
        l2RefundL2Address(overrides?: CallOverrides): Promise<string>;
        relayMessage(arg0: string, message: BytesLike, overrides?: CallOverrides): Promise<void>;
        relayTokens(arg0: string, arg1: string, arg2: BigNumberish, arg3: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "MessageRelayed(address,bytes)"(target?: null, message?: null): MessageRelayedEventFilter;
        MessageRelayed(target?: null, message?: null): MessageRelayedEventFilter;
        "TokensRelayed(address,address,uint256,address)"(l1Token?: null, l2Token?: null, amount?: null, to?: null): TokensRelayedEventFilter;
        TokensRelayed(l1Token?: null, l2Token?: null, amount?: null, to?: null): TokensRelayedEventFilter;
    };
    estimateGas: {
        aliasedL2HubPoolAddress(overrides?: CallOverrides): Promise<BigNumber>;
        getL1CallValue(overrides?: CallOverrides): Promise<BigNumber>;
        l1Inbox(overrides?: CallOverrides): Promise<BigNumber>;
        l2GasLimit(overrides?: CallOverrides): Promise<BigNumber>;
        l2GasPrice(overrides?: CallOverrides): Promise<BigNumber>;
        l2MaxSubmissionCost(overrides?: CallOverrides): Promise<BigNumber>;
        l2RefundL2Address(overrides?: CallOverrides): Promise<BigNumber>;
        relayMessage(arg0: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        relayTokens(arg0: string, arg1: string, arg2: BigNumberish, arg3: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        aliasedL2HubPoolAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getL1CallValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l1Inbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l2GasLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l2GasPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l2MaxSubmissionCost(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l2RefundL2Address(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        relayMessage(arg0: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        relayTokens(arg0: string, arg1: string, arg2: BigNumberish, arg3: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
