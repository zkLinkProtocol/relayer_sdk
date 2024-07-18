import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface Mock_AdapterInterface extends utils.Interface {
    functions: {
        "bridge()": FunctionFragment;
        "relayMessage(address,bytes)": FunctionFragment;
        "relayTokens(address,address,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "bridge" | "relayMessage" | "relayTokens"): FunctionFragment;
    encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
    encodeFunctionData(functionFragment: "relayMessage", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "relayTokens", values: [string, string, BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayTokens", data: BytesLike): Result;
    events: {
        "MessageRelayed(address,bytes)": EventFragment;
        "RelayMessageCalled(address,bytes,address)": EventFragment;
        "RelayTokensCalled(address,address,uint256,address,address)": EventFragment;
        "TokensRelayed(address,address,uint256,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "MessageRelayed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RelayMessageCalled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RelayTokensCalled"): EventFragment;
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
export interface RelayMessageCalledEventObject {
    target: string;
    message: string;
    caller: string;
}
export declare type RelayMessageCalledEvent = TypedEvent<[
    string,
    string,
    string
], RelayMessageCalledEventObject>;
export declare type RelayMessageCalledEventFilter = TypedEventFilter<RelayMessageCalledEvent>;
export interface RelayTokensCalledEventObject {
    l1Token: string;
    l2Token: string;
    amount: BigNumber;
    to: string;
    caller: string;
}
export declare type RelayTokensCalledEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string,
    string
], RelayTokensCalledEventObject>;
export declare type RelayTokensCalledEventFilter = TypedEventFilter<RelayTokensCalledEvent>;
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
export interface Mock_Adapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Mock_AdapterInterface;
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
        bridge(overrides?: CallOverrides): Promise<[string]>;
        relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    bridge(overrides?: CallOverrides): Promise<string>;
    relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        bridge(overrides?: CallOverrides): Promise<string>;
        relayMessage(target: string, message: BytesLike, overrides?: CallOverrides): Promise<void>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "MessageRelayed(address,bytes)"(target?: null, message?: null): MessageRelayedEventFilter;
        MessageRelayed(target?: null, message?: null): MessageRelayedEventFilter;
        "RelayMessageCalled(address,bytes,address)"(target?: null, message?: null, caller?: null): RelayMessageCalledEventFilter;
        RelayMessageCalled(target?: null, message?: null, caller?: null): RelayMessageCalledEventFilter;
        "RelayTokensCalled(address,address,uint256,address,address)"(l1Token?: null, l2Token?: null, amount?: null, to?: null, caller?: null): RelayTokensCalledEventFilter;
        RelayTokensCalled(l1Token?: null, l2Token?: null, amount?: null, to?: null, caller?: null): RelayTokensCalledEventFilter;
        "TokensRelayed(address,address,uint256,address)"(l1Token?: null, l2Token?: null, amount?: null, to?: null): TokensRelayedEventFilter;
        TokensRelayed(l1Token?: null, l2Token?: null, amount?: null, to?: null): TokensRelayedEventFilter;
    };
    estimateGas: {
        bridge(overrides?: CallOverrides): Promise<BigNumber>;
        relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
