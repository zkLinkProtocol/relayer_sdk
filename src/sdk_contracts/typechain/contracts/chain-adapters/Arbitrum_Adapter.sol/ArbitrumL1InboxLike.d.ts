import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface ArbitrumL1InboxLikeInterface extends utils.Interface {
    functions: {
        "createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)": FunctionFragment;
        "unsafeCreateRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createRetryableTicket" | "unsafeCreateRetryableTicket"): FunctionFragment;
    encodeFunctionData(functionFragment: "createRetryableTicket", values: [
        string,
        BigNumberish,
        BigNumberish,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "unsafeCreateRetryableTicket", values: [
        string,
        BigNumberish,
        BigNumberish,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "createRetryableTicket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unsafeCreateRetryableTicket", data: BytesLike): Result;
    events: {};
}
export interface ArbitrumL1InboxLike extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ArbitrumL1InboxLikeInterface;
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
        createRetryableTicket(to: string, l2CallValue: BigNumberish, maxSubmissionCost: BigNumberish, excessFeeRefundAddress: string, callValueRefundAddress: string, gasLimit: BigNumberish, maxFeePerGas: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        unsafeCreateRetryableTicket(to: string, l2CallValue: BigNumberish, maxSubmissionCost: BigNumberish, excessFeeRefundAddress: string, callValueRefundAddress: string, gasLimit: BigNumberish, maxFeePerGas: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    createRetryableTicket(to: string, l2CallValue: BigNumberish, maxSubmissionCost: BigNumberish, excessFeeRefundAddress: string, callValueRefundAddress: string, gasLimit: BigNumberish, maxFeePerGas: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    unsafeCreateRetryableTicket(to: string, l2CallValue: BigNumberish, maxSubmissionCost: BigNumberish, excessFeeRefundAddress: string, callValueRefundAddress: string, gasLimit: BigNumberish, maxFeePerGas: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        createRetryableTicket(to: string, l2CallValue: BigNumberish, maxSubmissionCost: BigNumberish, excessFeeRefundAddress: string, callValueRefundAddress: string, gasLimit: BigNumberish, maxFeePerGas: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        unsafeCreateRetryableTicket(to: string, l2CallValue: BigNumberish, maxSubmissionCost: BigNumberish, excessFeeRefundAddress: string, callValueRefundAddress: string, gasLimit: BigNumberish, maxFeePerGas: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        createRetryableTicket(to: string, l2CallValue: BigNumberish, maxSubmissionCost: BigNumberish, excessFeeRefundAddress: string, callValueRefundAddress: string, gasLimit: BigNumberish, maxFeePerGas: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        unsafeCreateRetryableTicket(to: string, l2CallValue: BigNumberish, maxSubmissionCost: BigNumberish, excessFeeRefundAddress: string, callValueRefundAddress: string, gasLimit: BigNumberish, maxFeePerGas: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        createRetryableTicket(to: string, l2CallValue: BigNumberish, maxSubmissionCost: BigNumberish, excessFeeRefundAddress: string, callValueRefundAddress: string, gasLimit: BigNumberish, maxFeePerGas: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        unsafeCreateRetryableTicket(to: string, l2CallValue: BigNumberish, maxSubmissionCost: BigNumberish, excessFeeRefundAddress: string, callValueRefundAddress: string, gasLimit: BigNumberish, maxFeePerGas: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
