import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export declare namespace IL1ScrollMessenger {
    type L2MessageProofStruct = {
        batchIndex: BigNumberish;
        merkleProof: BytesLike;
    };
    type L2MessageProofStructOutput = [BigNumber, string] & {
        batchIndex: BigNumber;
        merkleProof: string;
    };
}
export interface IL1ScrollMessengerInterface extends utils.Interface {
    functions: {
        "dropMessage(address,address,uint256,uint256,bytes)": FunctionFragment;
        "relayMessageWithProof(address,address,uint256,uint256,bytes,(uint256,bytes))": FunctionFragment;
        "replayMessage(address,address,uint256,uint256,bytes,uint32,address)": FunctionFragment;
        "sendMessage(address,uint256,bytes,uint256,address)": FunctionFragment;
        "sendMessage(address,uint256,bytes,uint256)": FunctionFragment;
        "xDomainMessageSender()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "dropMessage" | "relayMessageWithProof" | "replayMessage" | "sendMessage(address,uint256,bytes,uint256,address)" | "sendMessage(address,uint256,bytes,uint256)" | "xDomainMessageSender"): FunctionFragment;
    encodeFunctionData(functionFragment: "dropMessage", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "relayMessageWithProof", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike,
        IL1ScrollMessenger.L2MessageProofStruct
    ]): string;
    encodeFunctionData(functionFragment: "replayMessage", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BigNumberish,
        string
    ]): string;
    encodeFunctionData(functionFragment: "sendMessage(address,uint256,bytes,uint256,address)", values: [string, BigNumberish, BytesLike, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "sendMessage(address,uint256,bytes,uint256)", values: [string, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "xDomainMessageSender", values?: undefined): string;
    decodeFunctionResult(functionFragment: "dropMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayMessageWithProof", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "replayMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendMessage(address,uint256,bytes,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendMessage(address,uint256,bytes,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "xDomainMessageSender", data: BytesLike): Result;
    events: {
        "FailedRelayedMessage(bytes32)": EventFragment;
        "RelayedMessage(bytes32)": EventFragment;
        "SentMessage(address,address,uint256,uint256,uint256,bytes)": EventFragment;
        "UpdateMaxReplayTimes(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "FailedRelayedMessage"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RelayedMessage"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SentMessage"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateMaxReplayTimes"): EventFragment;
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
export interface UpdateMaxReplayTimesEventObject {
    maxReplayTimes: BigNumber;
}
export declare type UpdateMaxReplayTimesEvent = TypedEvent<[
    BigNumber
], UpdateMaxReplayTimesEventObject>;
export declare type UpdateMaxReplayTimesEventFilter = TypedEventFilter<UpdateMaxReplayTimesEvent>;
export interface IL1ScrollMessenger extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IL1ScrollMessengerInterface;
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
        dropMessage(from: string, to: string, value: BigNumberish, messageNonce: BigNumberish, message: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        relayMessageWithProof(from: string, to: string, value: BigNumberish, nonce: BigNumberish, message: BytesLike, proof: IL1ScrollMessenger.L2MessageProofStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        replayMessage(from: string, to: string, value: BigNumberish, messageNonce: BigNumberish, message: BytesLike, newGasLimit: BigNumberish, refundAddress: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "sendMessage(address,uint256,bytes,uint256,address)"(target: string, value: BigNumberish, message: BytesLike, gasLimit: BigNumberish, refundAddress: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "sendMessage(address,uint256,bytes,uint256)"(target: string, value: BigNumberish, message: BytesLike, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        xDomainMessageSender(overrides?: CallOverrides): Promise<[string]>;
    };
    dropMessage(from: string, to: string, value: BigNumberish, messageNonce: BigNumberish, message: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    relayMessageWithProof(from: string, to: string, value: BigNumberish, nonce: BigNumberish, message: BytesLike, proof: IL1ScrollMessenger.L2MessageProofStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    replayMessage(from: string, to: string, value: BigNumberish, messageNonce: BigNumberish, message: BytesLike, newGasLimit: BigNumberish, refundAddress: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "sendMessage(address,uint256,bytes,uint256,address)"(target: string, value: BigNumberish, message: BytesLike, gasLimit: BigNumberish, refundAddress: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "sendMessage(address,uint256,bytes,uint256)"(target: string, value: BigNumberish, message: BytesLike, gasLimit: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    xDomainMessageSender(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        dropMessage(from: string, to: string, value: BigNumberish, messageNonce: BigNumberish, message: BytesLike, overrides?: CallOverrides): Promise<void>;
        relayMessageWithProof(from: string, to: string, value: BigNumberish, nonce: BigNumberish, message: BytesLike, proof: IL1ScrollMessenger.L2MessageProofStruct, overrides?: CallOverrides): Promise<void>;
        replayMessage(from: string, to: string, value: BigNumberish, messageNonce: BigNumberish, message: BytesLike, newGasLimit: BigNumberish, refundAddress: string, overrides?: CallOverrides): Promise<void>;
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
        "UpdateMaxReplayTimes(uint256)"(maxReplayTimes?: null): UpdateMaxReplayTimesEventFilter;
        UpdateMaxReplayTimes(maxReplayTimes?: null): UpdateMaxReplayTimesEventFilter;
    };
    estimateGas: {
        dropMessage(from: string, to: string, value: BigNumberish, messageNonce: BigNumberish, message: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        relayMessageWithProof(from: string, to: string, value: BigNumberish, nonce: BigNumberish, message: BytesLike, proof: IL1ScrollMessenger.L2MessageProofStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        replayMessage(from: string, to: string, value: BigNumberish, messageNonce: BigNumberish, message: BytesLike, newGasLimit: BigNumberish, refundAddress: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "sendMessage(address,uint256,bytes,uint256,address)"(target: string, value: BigNumberish, message: BytesLike, gasLimit: BigNumberish, refundAddress: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "sendMessage(address,uint256,bytes,uint256)"(target: string, value: BigNumberish, message: BytesLike, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        xDomainMessageSender(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        dropMessage(from: string, to: string, value: BigNumberish, messageNonce: BigNumberish, message: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        relayMessageWithProof(from: string, to: string, value: BigNumberish, nonce: BigNumberish, message: BytesLike, proof: IL1ScrollMessenger.L2MessageProofStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        replayMessage(from: string, to: string, value: BigNumberish, messageNonce: BigNumberish, message: BytesLike, newGasLimit: BigNumberish, refundAddress: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "sendMessage(address,uint256,bytes,uint256,address)"(target: string, value: BigNumberish, message: BytesLike, gasLimit: BigNumberish, refundAddress: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "sendMessage(address,uint256,bytes,uint256)"(target: string, value: BigNumberish, message: BytesLike, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        xDomainMessageSender(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
