import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface Arbitrum_AdapterInterface extends utils.Interface {
    functions: {
        "L1_DAI()": FunctionFragment;
        "L1_ERC20_GATEWAY_ROUTER()": FunctionFragment;
        "L1_INBOX()": FunctionFragment;
        "L2_CALL_VALUE()": FunctionFragment;
        "L2_GAS_PRICE()": FunctionFragment;
        "L2_MAX_SUBMISSION_COST()": FunctionFragment;
        "L2_REFUND_L2_ADDRESS()": FunctionFragment;
        "RELAY_MESSAGE_L2_GAS_LIMIT()": FunctionFragment;
        "RELAY_TOKENS_L2_GAS_LIMIT()": FunctionFragment;
        "cctpTokenMessenger()": FunctionFragment;
        "getL1CallValue(uint32)": FunctionFragment;
        "recipientCircleDomainId()": FunctionFragment;
        "relayMessage(address,bytes)": FunctionFragment;
        "relayTokens(address,address,uint256,address)": FunctionFragment;
        "usdcToken()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "L1_DAI" | "L1_ERC20_GATEWAY_ROUTER" | "L1_INBOX" | "L2_CALL_VALUE" | "L2_GAS_PRICE" | "L2_MAX_SUBMISSION_COST" | "L2_REFUND_L2_ADDRESS" | "RELAY_MESSAGE_L2_GAS_LIMIT" | "RELAY_TOKENS_L2_GAS_LIMIT" | "cctpTokenMessenger" | "getL1CallValue" | "recipientCircleDomainId" | "relayMessage" | "relayTokens" | "usdcToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "L1_DAI", values?: undefined): string;
    encodeFunctionData(functionFragment: "L1_ERC20_GATEWAY_ROUTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "L1_INBOX", values?: undefined): string;
    encodeFunctionData(functionFragment: "L2_CALL_VALUE", values?: undefined): string;
    encodeFunctionData(functionFragment: "L2_GAS_PRICE", values?: undefined): string;
    encodeFunctionData(functionFragment: "L2_MAX_SUBMISSION_COST", values?: undefined): string;
    encodeFunctionData(functionFragment: "L2_REFUND_L2_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "RELAY_MESSAGE_L2_GAS_LIMIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "RELAY_TOKENS_L2_GAS_LIMIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "cctpTokenMessenger", values?: undefined): string;
    encodeFunctionData(functionFragment: "getL1CallValue", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "recipientCircleDomainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "relayMessage", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "relayTokens", values: [string, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "usdcToken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "L1_DAI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "L1_ERC20_GATEWAY_ROUTER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "L1_INBOX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "L2_CALL_VALUE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "L2_GAS_PRICE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "L2_MAX_SUBMISSION_COST", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "L2_REFUND_L2_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RELAY_MESSAGE_L2_GAS_LIMIT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RELAY_TOKENS_L2_GAS_LIMIT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cctpTokenMessenger", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getL1CallValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recipientCircleDomainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "usdcToken", data: BytesLike): Result;
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
export interface Arbitrum_Adapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Arbitrum_AdapterInterface;
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
        L1_DAI(overrides?: CallOverrides): Promise<[string]>;
        L1_ERC20_GATEWAY_ROUTER(overrides?: CallOverrides): Promise<[string]>;
        L1_INBOX(overrides?: CallOverrides): Promise<[string]>;
        L2_CALL_VALUE(overrides?: CallOverrides): Promise<[BigNumber]>;
        L2_GAS_PRICE(overrides?: CallOverrides): Promise<[BigNumber]>;
        L2_MAX_SUBMISSION_COST(overrides?: CallOverrides): Promise<[BigNumber]>;
        L2_REFUND_L2_ADDRESS(overrides?: CallOverrides): Promise<[string]>;
        RELAY_MESSAGE_L2_GAS_LIMIT(overrides?: CallOverrides): Promise<[number]>;
        RELAY_TOKENS_L2_GAS_LIMIT(overrides?: CallOverrides): Promise<[number]>;
        cctpTokenMessenger(overrides?: CallOverrides): Promise<[string]>;
        getL1CallValue(l2GasLimit: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        recipientCircleDomainId(overrides?: CallOverrides): Promise<[number]>;
        relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        usdcToken(overrides?: CallOverrides): Promise<[string]>;
    };
    L1_DAI(overrides?: CallOverrides): Promise<string>;
    L1_ERC20_GATEWAY_ROUTER(overrides?: CallOverrides): Promise<string>;
    L1_INBOX(overrides?: CallOverrides): Promise<string>;
    L2_CALL_VALUE(overrides?: CallOverrides): Promise<BigNumber>;
    L2_GAS_PRICE(overrides?: CallOverrides): Promise<BigNumber>;
    L2_MAX_SUBMISSION_COST(overrides?: CallOverrides): Promise<BigNumber>;
    L2_REFUND_L2_ADDRESS(overrides?: CallOverrides): Promise<string>;
    RELAY_MESSAGE_L2_GAS_LIMIT(overrides?: CallOverrides): Promise<number>;
    RELAY_TOKENS_L2_GAS_LIMIT(overrides?: CallOverrides): Promise<number>;
    cctpTokenMessenger(overrides?: CallOverrides): Promise<string>;
    getL1CallValue(l2GasLimit: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    recipientCircleDomainId(overrides?: CallOverrides): Promise<number>;
    relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    usdcToken(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        L1_DAI(overrides?: CallOverrides): Promise<string>;
        L1_ERC20_GATEWAY_ROUTER(overrides?: CallOverrides): Promise<string>;
        L1_INBOX(overrides?: CallOverrides): Promise<string>;
        L2_CALL_VALUE(overrides?: CallOverrides): Promise<BigNumber>;
        L2_GAS_PRICE(overrides?: CallOverrides): Promise<BigNumber>;
        L2_MAX_SUBMISSION_COST(overrides?: CallOverrides): Promise<BigNumber>;
        L2_REFUND_L2_ADDRESS(overrides?: CallOverrides): Promise<string>;
        RELAY_MESSAGE_L2_GAS_LIMIT(overrides?: CallOverrides): Promise<number>;
        RELAY_TOKENS_L2_GAS_LIMIT(overrides?: CallOverrides): Promise<number>;
        cctpTokenMessenger(overrides?: CallOverrides): Promise<string>;
        getL1CallValue(l2GasLimit: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        recipientCircleDomainId(overrides?: CallOverrides): Promise<number>;
        relayMessage(target: string, message: BytesLike, overrides?: CallOverrides): Promise<void>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: CallOverrides): Promise<void>;
        usdcToken(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "MessageRelayed(address,bytes)"(target?: null, message?: null): MessageRelayedEventFilter;
        MessageRelayed(target?: null, message?: null): MessageRelayedEventFilter;
        "TokensRelayed(address,address,uint256,address)"(l1Token?: null, l2Token?: null, amount?: null, to?: null): TokensRelayedEventFilter;
        TokensRelayed(l1Token?: null, l2Token?: null, amount?: null, to?: null): TokensRelayedEventFilter;
    };
    estimateGas: {
        L1_DAI(overrides?: CallOverrides): Promise<BigNumber>;
        L1_ERC20_GATEWAY_ROUTER(overrides?: CallOverrides): Promise<BigNumber>;
        L1_INBOX(overrides?: CallOverrides): Promise<BigNumber>;
        L2_CALL_VALUE(overrides?: CallOverrides): Promise<BigNumber>;
        L2_GAS_PRICE(overrides?: CallOverrides): Promise<BigNumber>;
        L2_MAX_SUBMISSION_COST(overrides?: CallOverrides): Promise<BigNumber>;
        L2_REFUND_L2_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;
        RELAY_MESSAGE_L2_GAS_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        RELAY_TOKENS_L2_GAS_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        cctpTokenMessenger(overrides?: CallOverrides): Promise<BigNumber>;
        getL1CallValue(l2GasLimit: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        recipientCircleDomainId(overrides?: CallOverrides): Promise<BigNumber>;
        relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        usdcToken(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        L1_DAI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        L1_ERC20_GATEWAY_ROUTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        L1_INBOX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        L2_CALL_VALUE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        L2_GAS_PRICE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        L2_MAX_SUBMISSION_COST(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        L2_REFUND_L2_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        RELAY_MESSAGE_L2_GAS_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        RELAY_TOKENS_L2_GAS_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cctpTokenMessenger(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getL1CallValue(l2GasLimit: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recipientCircleDomainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        usdcToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
