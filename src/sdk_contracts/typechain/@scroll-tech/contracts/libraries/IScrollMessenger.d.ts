import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface IScrollMessengerInterface extends utils.Interface {
    functions: {
        "sendMessage(address,uint256,bytes,uint256,address)": FunctionFragment;
        "sendMessage(address,uint256,bytes,uint256)": FunctionFragment;
        "xDomainMessageSender()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "sendMessage(address,uint256,bytes,uint256,address)" | "sendMessage(address,uint256,bytes,uint256)" | "xDomainMessageSender"): FunctionFragment;
    encodeFunctionData(functionFragment: "sendMessage(address,uint256,bytes,uint256,address)", values: [string, BigNumberish, BytesLike, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "sendMessage(address,uint256,bytes,uint256)", values: [string, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "xDomainMessageSender", values?: undefined): string;
    decodeFunctionResult(functionFragment: "sendMessage(address,uint256,bytes,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendMessage(address,uint256,bytes,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "xDomainMessageSender", data: BytesLike): Result;
    events: {
        "FailedRelayedMessage(bytes32)": EventFragment;
        "RelayedMessage(bytes32)": EventFragment;
        "SentMessage(address,address,uint256,uint256,uint256,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "FailedRelayedMessage"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RelayedMessage"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SentMessage"): EventFragment;
}
export interface FailedRelayedMessageEventObject {
    messageHash: string;
}
export declare type FailedRelayedMessageEvent = TypedEvent<[
    string
], FailedRelayedMessageEventObject>;
export declare type FailedRelayedMessageEventFilter = TypedEventFilter<FailedRelayedMessageEvent>;
export interface RelayedMessageEventObject {
    messageHash: string;
}
export declare type RelayedMessageEvent = TypedEvent<[
    string
], RelayedMessageEventObject>;
export declare type RelayedMessageEventFilter = TypedEventFilter<RelayedMessageEvent>;
export interface SentMessageEventObject {
    sender: string;
    target: string;
    value: BigNumber;
    messageNonce: BigNumber;
    gasLimit: BigNumber;
    message: string;
}
export declare type SentMessageEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string
], SentMessageEventObject>;
export declare type SentMessageEventFilter = TypedEventFilter<SentMessageEvent>;
export interface IScrollMessenger extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IScrollMessengerInterface;
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
        "sendMessage(address,uint256,bytes,uint256,address)"(target: string, value: BigNumberish, message: BytesLike, gasLimit: BigNumberish, refundAddress: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "sendMessage(address,uint256,bytes,uint256)"(target: string, value: BigNumberish, message: BytesLike, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        xDomainMessageSender(overrides?: CallOverrides): Promise<[string]>;
    };
    "sendMessage(address,uint256,bytes,uint256,address)"(target: string, value: BigNumberish, message: BytesLike, gasLimit: BigNumberish, refundAddress: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "sendMessage(address,uint256,bytes,uint256)"(target: string, value: BigNumberish, message: BytesLike, gasLimit: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    xDomainMessageSender(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        "sendMessage(address,uint256,bytes,uint256,address)"(target: string, value: BigNumberish, message: BytesLike, gasLimit: BigNumberish, refundAddress: string, overrides?: CallOverrides): Promise<void>;
        "sendMessage(address,uint256,bytes,uint256)"(target: string, value: BigNumberish, message: BytesLike, gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        xDomainMessageSender(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "FailedRelayedMessage(bytes32)"(messageHash?: BytesLike | null): FailedRelayedMessageEventFilter;
        FailedRelayedMessage(messageHash?: BytesLike | null): FailedRelayedMessageEventFilter;
        "RelayedMessage(bytes32)"(messageHash?: BytesLike | null): RelayedMessageEventFilter;
        RelayedMessage(messageHash?: BytesLike | null): RelayedMessageEventFilter;
        "SentMessage(address,address,uint256,uint256,uint256,bytes)"(sender?: string | null, target?: string | null, value?: null, messageNonce?: null, gasLimit?: null, message?: null): SentMessageEventFilter;
        SentMessage(sender?: string | null, target?: string | null, value?: null, messageNonce?: null, gasLimit?: null, message?: null): SentMessageEventFilter;
    };
    estimateGas: {
        "sendMessage(address,uint256,bytes,uint256,address)"(target: string, value: BigNumberish, message: BytesLike, gasLimit: BigNumberish, refundAddress: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "sendMessage(address,uint256,bytes,uint256)"(target: string, value: BigNumberish, message: BytesLike, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        xDomainMessageSender(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        "sendMessage(address,uint256,bytes,uint256,address)"(target: string, value: BigNumberish, message: BytesLike, gasLimit: BigNumberish, refundAddress: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "sendMessage(address,uint256,bytes,uint256)"(target: string, value: BigNumberish, message: BytesLike, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        xDomainMessageSender(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
