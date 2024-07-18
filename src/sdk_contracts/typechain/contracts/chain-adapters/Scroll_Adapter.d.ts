import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface Scroll_AdapterInterface extends utils.Interface {
    functions: {
        "L1_GATEWAY_ROUTER()": FunctionFragment;
        "L1_SCROLL_MESSENGER()": FunctionFragment;
        "L2_GAS_PRICE_ORACLE()": FunctionFragment;
        "L2_MESSAGE_RELAY_GAS_LIMIT()": FunctionFragment;
        "L2_TOKEN_RELAY_GAS_LIMIT()": FunctionFragment;
        "relayMessage(address,bytes)": FunctionFragment;
        "relayTokens(address,address,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "L1_GATEWAY_ROUTER" | "L1_SCROLL_MESSENGER" | "L2_GAS_PRICE_ORACLE" | "L2_MESSAGE_RELAY_GAS_LIMIT" | "L2_TOKEN_RELAY_GAS_LIMIT" | "relayMessage" | "relayTokens"): FunctionFragment;
    encodeFunctionData(functionFragment: "L1_GATEWAY_ROUTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "L1_SCROLL_MESSENGER", values?: undefined): string;
    encodeFunctionData(functionFragment: "L2_GAS_PRICE_ORACLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "L2_MESSAGE_RELAY_GAS_LIMIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "L2_TOKEN_RELAY_GAS_LIMIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "relayMessage", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "relayTokens", values: [string, string, BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "L1_GATEWAY_ROUTER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "L1_SCROLL_MESSENGER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "L2_GAS_PRICE_ORACLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "L2_MESSAGE_RELAY_GAS_LIMIT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "L2_TOKEN_RELAY_GAS_LIMIT", data: BytesLike): Result;
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
export interface Scroll_Adapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Scroll_AdapterInterface;
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
        L1_GATEWAY_ROUTER(overrides?: CallOverrides): Promise<[string]>;
        L1_SCROLL_MESSENGER(overrides?: CallOverrides): Promise<[string]>;
        L2_GAS_PRICE_ORACLE(overrides?: CallOverrides): Promise<[string]>;
        L2_MESSAGE_RELAY_GAS_LIMIT(overrides?: CallOverrides): Promise<[number]>;
        L2_TOKEN_RELAY_GAS_LIMIT(overrides?: CallOverrides): Promise<[number]>;
        relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    L1_GATEWAY_ROUTER(overrides?: CallOverrides): Promise<string>;
    L1_SCROLL_MESSENGER(overrides?: CallOverrides): Promise<string>;
    L2_GAS_PRICE_ORACLE(overrides?: CallOverrides): Promise<string>;
    L2_MESSAGE_RELAY_GAS_LIMIT(overrides?: CallOverrides): Promise<number>;
    L2_TOKEN_RELAY_GAS_LIMIT(overrides?: CallOverrides): Promise<number>;
    relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        L1_GATEWAY_ROUTER(overrides?: CallOverrides): Promise<string>;
        L1_SCROLL_MESSENGER(overrides?: CallOverrides): Promise<string>;
        L2_GAS_PRICE_ORACLE(overrides?: CallOverrides): Promise<string>;
        L2_MESSAGE_RELAY_GAS_LIMIT(overrides?: CallOverrides): Promise<number>;
        L2_TOKEN_RELAY_GAS_LIMIT(overrides?: CallOverrides): Promise<number>;
        relayMessage(target: string, message: BytesLike, overrides?: CallOverrides): Promise<void>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "MessageRelayed(address,bytes)"(target?: null, message?: null): MessageRelayedEventFilter;
        MessageRelayed(target?: null, message?: null): MessageRelayedEventFilter;
        "TokensRelayed(address,address,uint256,address)"(l1Token?: null, l2Token?: null, amount?: null, to?: null): TokensRelayedEventFilter;
        TokensRelayed(l1Token?: null, l2Token?: null, amount?: null, to?: null): TokensRelayedEventFilter;
    };
    estimateGas: {
        L1_GATEWAY_ROUTER(overrides?: CallOverrides): Promise<BigNumber>;
        L1_SCROLL_MESSENGER(overrides?: CallOverrides): Promise<BigNumber>;
        L2_GAS_PRICE_ORACLE(overrides?: CallOverrides): Promise<BigNumber>;
        L2_MESSAGE_RELAY_GAS_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        L2_TOKEN_RELAY_GAS_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        L1_GATEWAY_ROUTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        L1_SCROLL_MESSENGER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        L2_GAS_PRICE_ORACLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        L2_MESSAGE_RELAY_GAS_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        L2_TOKEN_RELAY_GAS_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
