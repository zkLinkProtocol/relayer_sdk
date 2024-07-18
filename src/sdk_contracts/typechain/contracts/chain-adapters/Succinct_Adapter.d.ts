import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface Succinct_AdapterInterface extends utils.Interface {
    functions: {
        "destinationChainId()": FunctionFragment;
        "relayMessage(address,bytes)": FunctionFragment;
        "relayTokens(address,address,uint256,address)": FunctionFragment;
        "succinctSourceAmb()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "destinationChainId" | "relayMessage" | "relayTokens" | "succinctSourceAmb"): FunctionFragment;
    encodeFunctionData(functionFragment: "destinationChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "relayMessage", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "relayTokens", values: [string, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "succinctSourceAmb", values?: undefined): string;
    decodeFunctionResult(functionFragment: "destinationChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "succinctSourceAmb", data: BytesLike): Result;
    events: {
        "MessageRelayed(address,bytes)": EventFragment;
        "SuccinctMessageRelayed(bytes32,uint16,address,bytes)": EventFragment;
        "TokensRelayed(address,address,uint256,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "MessageRelayed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SuccinctMessageRelayed"): EventFragment;
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
export interface SuccinctMessageRelayedEventObject {
    messageRoot: string;
    destinationChainId: number;
    target: string;
    message: string;
}
export declare type SuccinctMessageRelayedEvent = TypedEvent<[
    string,
    number,
    string,
    string
], SuccinctMessageRelayedEventObject>;
export declare type SuccinctMessageRelayedEventFilter = TypedEventFilter<SuccinctMessageRelayedEvent>;
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
export interface Succinct_Adapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Succinct_AdapterInterface;
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
        destinationChainId(overrides?: CallOverrides): Promise<[number]>;
        relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        relayTokens(arg0: string, arg1: string, arg2: BigNumberish, arg3: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        succinctSourceAmb(overrides?: CallOverrides): Promise<[string]>;
    };
    destinationChainId(overrides?: CallOverrides): Promise<number>;
    relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    relayTokens(arg0: string, arg1: string, arg2: BigNumberish, arg3: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    succinctSourceAmb(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        destinationChainId(overrides?: CallOverrides): Promise<number>;
        relayMessage(target: string, message: BytesLike, overrides?: CallOverrides): Promise<void>;
        relayTokens(arg0: string, arg1: string, arg2: BigNumberish, arg3: string, overrides?: CallOverrides): Promise<void>;
        succinctSourceAmb(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "MessageRelayed(address,bytes)"(target?: null, message?: null): MessageRelayedEventFilter;
        MessageRelayed(target?: null, message?: null): MessageRelayedEventFilter;
        "SuccinctMessageRelayed(bytes32,uint16,address,bytes)"(messageRoot?: null, destinationChainId?: null, target?: null, message?: null): SuccinctMessageRelayedEventFilter;
        SuccinctMessageRelayed(messageRoot?: null, destinationChainId?: null, target?: null, message?: null): SuccinctMessageRelayedEventFilter;
        "TokensRelayed(address,address,uint256,address)"(l1Token?: null, l2Token?: null, amount?: null, to?: null): TokensRelayedEventFilter;
        TokensRelayed(l1Token?: null, l2Token?: null, amount?: null, to?: null): TokensRelayedEventFilter;
    };
    estimateGas: {
        destinationChainId(overrides?: CallOverrides): Promise<BigNumber>;
        relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        relayTokens(arg0: string, arg1: string, arg2: BigNumberish, arg3: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        succinctSourceAmb(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        destinationChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        relayMessage(target: string, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        relayTokens(arg0: string, arg1: string, arg2: BigNumberish, arg3: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        succinctSourceAmb(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
