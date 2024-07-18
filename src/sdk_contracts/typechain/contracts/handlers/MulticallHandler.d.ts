import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace MulticallHandler {
    type CallStruct = {
        target: string;
        callData: BytesLike;
        value: BigNumberish;
    };
    type CallStructOutput = [string, string, BigNumber] & {
        target: string;
        callData: string;
        value: BigNumber;
    };
}
export interface MulticallHandlerInterface extends utils.Interface {
    functions: {
        "attemptCalls((address,bytes,uint256)[])": FunctionFragment;
        "drainLeftoverTokens(address,address)": FunctionFragment;
        "handleV3AcrossMessage(address,uint256,address,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "attemptCalls" | "drainLeftoverTokens" | "handleV3AcrossMessage"): FunctionFragment;
    encodeFunctionData(functionFragment: "attemptCalls", values: [MulticallHandler.CallStruct[]]): string;
    encodeFunctionData(functionFragment: "drainLeftoverTokens", values: [string, string]): string;
    encodeFunctionData(functionFragment: "handleV3AcrossMessage", values: [string, BigNumberish, string, BytesLike]): string;
    decodeFunctionResult(functionFragment: "attemptCalls", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "drainLeftoverTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handleV3AcrossMessage", data: BytesLike): Result;
    events: {
        "CallsFailed(tuple[],address)": EventFragment;
        "DrainedTokens(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CallsFailed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DrainedTokens"): EventFragment;
}
export interface CallsFailedEventObject {
    calls: MulticallHandler.CallStructOutput[];
    fallbackRecipient: string;
}
export declare type CallsFailedEvent = TypedEvent<[
    MulticallHandler.CallStructOutput[],
    string
], CallsFailedEventObject>;
export declare type CallsFailedEventFilter = TypedEventFilter<CallsFailedEvent>;
export interface DrainedTokensEventObject {
    recipient: string;
    token: string;
    amount: BigNumber;
}
export declare type DrainedTokensEvent = TypedEvent<[
    string,
    string,
    BigNumber
], DrainedTokensEventObject>;
export declare type DrainedTokensEventFilter = TypedEventFilter<DrainedTokensEvent>;
export interface MulticallHandler extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MulticallHandlerInterface;
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
        attemptCalls(calls: MulticallHandler.CallStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        drainLeftoverTokens(token: string, destination: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        handleV3AcrossMessage(token: string, arg1: BigNumberish, arg2: string, message: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    attemptCalls(calls: MulticallHandler.CallStruct[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    drainLeftoverTokens(token: string, destination: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    handleV3AcrossMessage(token: string, arg1: BigNumberish, arg2: string, message: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        attemptCalls(calls: MulticallHandler.CallStruct[], overrides?: CallOverrides): Promise<void>;
        drainLeftoverTokens(token: string, destination: string, overrides?: CallOverrides): Promise<void>;
        handleV3AcrossMessage(token: string, arg1: BigNumberish, arg2: string, message: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CallsFailed(tuple[],address)"(calls?: null, fallbackRecipient?: string | null): CallsFailedEventFilter;
        CallsFailed(calls?: null, fallbackRecipient?: string | null): CallsFailedEventFilter;
        "DrainedTokens(address,address,uint256)"(recipient?: string | null, token?: string | null, amount?: BigNumberish | null): DrainedTokensEventFilter;
        DrainedTokens(recipient?: string | null, token?: string | null, amount?: BigNumberish | null): DrainedTokensEventFilter;
    };
    estimateGas: {
        attemptCalls(calls: MulticallHandler.CallStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        drainLeftoverTokens(token: string, destination: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        handleV3AcrossMessage(token: string, arg1: BigNumberish, arg2: string, message: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        attemptCalls(calls: MulticallHandler.CallStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        drainLeftoverTokens(token: string, destination: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        handleV3AcrossMessage(token: string, arg1: BigNumberish, arg2: string, message: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
