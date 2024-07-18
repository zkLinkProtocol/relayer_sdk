import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface Optimism_AdapterInterface extends utils.Interface {
    functions: {
        "DAI()": FunctionFragment;
        "DAI_OPTIMISM_BRIDGE()": FunctionFragment;
        "L1_STANDARD_BRIDGE()": FunctionFragment;
        "L1_WETH()": FunctionFragment;
        "L2_GAS_LIMIT()": FunctionFragment;
        "MESSENGER()": FunctionFragment;
        "SNX()": FunctionFragment;
        "SNX_OPTIMISM_BRIDGE()": FunctionFragment;
        "cctpTokenMessenger()": FunctionFragment;
        "recipientCircleDomainId()": FunctionFragment;
        "relayMessage(address,bytes)": FunctionFragment;
        "relayTokens(address,address,uint256,address)": FunctionFragment;
        "usdcToken()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DAI" | "DAI_OPTIMISM_BRIDGE" | "L1_STANDARD_BRIDGE" | "L1_WETH" | "L2_GAS_LIMIT" | "MESSENGER" | "SNX" | "SNX_OPTIMISM_BRIDGE" | "cctpTokenMessenger" | "recipientCircleDomainId" | "relayMessage" | "relayTokens" | "usdcToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "DAI", values?: undefined): string;
    encodeFunctionData(functionFragment: "DAI_OPTIMISM_BRIDGE", values?: undefined): string;
    encodeFunctionData(functionFragment: "L1_STANDARD_BRIDGE", values?: undefined): string;
    encodeFunctionData(functionFragment: "L1_WETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "L2_GAS_LIMIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "MESSENGER", values?: undefined): string;
    encodeFunctionData(functionFragment: "SNX", values?: undefined): string;
    encodeFunctionData(functionFragment: "SNX_OPTIMISM_BRIDGE", values?: undefined): string;
    encodeFunctionData(functionFragment: "cctpTokenMessenger", values?: undefined): string;
    encodeFunctionData(functionFragment: "recipientCircleDomainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "relayMessage", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "relayTokens", values: [string, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "usdcToken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DAI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DAI_OPTIMISM_BRIDGE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "L1_STANDARD_BRIDGE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "L1_WETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "L2_GAS_LIMIT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MESSENGER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SNX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SNX_OPTIMISM_BRIDGE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cctpTokenMessenger", data: BytesLike): Result;
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
export interface Optimism_Adapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Optimism_AdapterInterface;
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
        DAI(overrides?: CallOverrides): Promise<[string]>;
        DAI_OPTIMISM_BRIDGE(overrides?: CallOverrides): Promise<[string]>;
        L1_STANDARD_BRIDGE(overrides?: CallOverrides): Promise<[string]>;
        L1_WETH(overrides?: CallOverrides): Promise<[string]>;
        L2_GAS_LIMIT(overrides?: CallOverrides): Promise<[number]>;
        MESSENGER(overrides?: CallOverrides): Promise<[string]>;
        SNX(overrides?: CallOverrides): Promise<[string]>;
        SNX_OPTIMISM_BRIDGE(overrides?: CallOverrides): Promise<[string]>;
        cctpTokenMessenger(overrides?: CallOverrides): Promise<[string]>;
        recipientCircleDomainId(overrides?: CallOverrides): Promise<[number]>;
        relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        usdcToken(overrides?: CallOverrides): Promise<[string]>;
    };
    DAI(overrides?: CallOverrides): Promise<string>;
    DAI_OPTIMISM_BRIDGE(overrides?: CallOverrides): Promise<string>;
    L1_STANDARD_BRIDGE(overrides?: CallOverrides): Promise<string>;
    L1_WETH(overrides?: CallOverrides): Promise<string>;
    L2_GAS_LIMIT(overrides?: CallOverrides): Promise<number>;
    MESSENGER(overrides?: CallOverrides): Promise<string>;
    SNX(overrides?: CallOverrides): Promise<string>;
    SNX_OPTIMISM_BRIDGE(overrides?: CallOverrides): Promise<string>;
    cctpTokenMessenger(overrides?: CallOverrides): Promise<string>;
    recipientCircleDomainId(overrides?: CallOverrides): Promise<number>;
    relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    usdcToken(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        DAI(overrides?: CallOverrides): Promise<string>;
        DAI_OPTIMISM_BRIDGE(overrides?: CallOverrides): Promise<string>;
        L1_STANDARD_BRIDGE(overrides?: CallOverrides): Promise<string>;
        L1_WETH(overrides?: CallOverrides): Promise<string>;
        L2_GAS_LIMIT(overrides?: CallOverrides): Promise<number>;
        MESSENGER(overrides?: CallOverrides): Promise<string>;
        SNX(overrides?: CallOverrides): Promise<string>;
        SNX_OPTIMISM_BRIDGE(overrides?: CallOverrides): Promise<string>;
        cctpTokenMessenger(overrides?: CallOverrides): Promise<string>;
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
        DAI(overrides?: CallOverrides): Promise<BigNumber>;
        DAI_OPTIMISM_BRIDGE(overrides?: CallOverrides): Promise<BigNumber>;
        L1_STANDARD_BRIDGE(overrides?: CallOverrides): Promise<BigNumber>;
        L1_WETH(overrides?: CallOverrides): Promise<BigNumber>;
        L2_GAS_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        MESSENGER(overrides?: CallOverrides): Promise<BigNumber>;
        SNX(overrides?: CallOverrides): Promise<BigNumber>;
        SNX_OPTIMISM_BRIDGE(overrides?: CallOverrides): Promise<BigNumber>;
        cctpTokenMessenger(overrides?: CallOverrides): Promise<BigNumber>;
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
        DAI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DAI_OPTIMISM_BRIDGE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        L1_STANDARD_BRIDGE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        L1_WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        L2_GAS_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MESSENGER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SNX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SNX_OPTIMISM_BRIDGE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cctpTokenMessenger(overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
