import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare type SignedOrderStruct = {
    order: BytesLike;
    sig: BytesLike;
};
export declare type SignedOrderStructOutput = [string, string] & {
    order: string;
    sig: string;
};
export interface Permit2DepositorInterface extends utils.Interface {
    functions: {
        "PERMIT2()": FunctionFragment;
        "QUOTE_BEFORE_DEADLINE()": FunctionFragment;
        "SPOKE_POOL()": FunctionFragment;
        "permit2Deposit((bytes,bytes),address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "PERMIT2" | "QUOTE_BEFORE_DEADLINE" | "SPOKE_POOL" | "permit2Deposit"): FunctionFragment;
    encodeFunctionData(functionFragment: "PERMIT2", values?: undefined): string;
    encodeFunctionData(functionFragment: "QUOTE_BEFORE_DEADLINE", values?: undefined): string;
    encodeFunctionData(functionFragment: "SPOKE_POOL", values?: undefined): string;
    encodeFunctionData(functionFragment: "permit2Deposit", values: [SignedOrderStruct, string]): string;
    decodeFunctionResult(functionFragment: "PERMIT2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "QUOTE_BEFORE_DEADLINE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SPOKE_POOL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit2Deposit", data: BytesLike): Result;
    events: {};
}
export interface Permit2Depositor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Permit2DepositorInterface;
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
        PERMIT2(overrides?: CallOverrides): Promise<[string]>;
        QUOTE_BEFORE_DEADLINE(overrides?: CallOverrides): Promise<[BigNumber]>;
        SPOKE_POOL(overrides?: CallOverrides): Promise<[string]>;
        permit2Deposit(signedOrder: SignedOrderStruct, destinationChainFillerAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    PERMIT2(overrides?: CallOverrides): Promise<string>;
    QUOTE_BEFORE_DEADLINE(overrides?: CallOverrides): Promise<BigNumber>;
    SPOKE_POOL(overrides?: CallOverrides): Promise<string>;
    permit2Deposit(signedOrder: SignedOrderStruct, destinationChainFillerAddress: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        PERMIT2(overrides?: CallOverrides): Promise<string>;
        QUOTE_BEFORE_DEADLINE(overrides?: CallOverrides): Promise<BigNumber>;
        SPOKE_POOL(overrides?: CallOverrides): Promise<string>;
        permit2Deposit(signedOrder: SignedOrderStruct, destinationChainFillerAddress: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        PERMIT2(overrides?: CallOverrides): Promise<BigNumber>;
        QUOTE_BEFORE_DEADLINE(overrides?: CallOverrides): Promise<BigNumber>;
        SPOKE_POOL(overrides?: CallOverrides): Promise<BigNumber>;
        permit2Deposit(signedOrder: SignedOrderStruct, destinationChainFillerAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        PERMIT2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        QUOTE_BEFORE_DEADLINE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SPOKE_POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit2Deposit(signedOrder: SignedOrderStruct, destinationChainFillerAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
