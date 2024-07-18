import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface CircleDomainIdsInterface extends utils.Interface {
    functions: {
        "Arbitrum()": FunctionFragment;
        "Base()": FunctionFragment;
        "Ethereum()": FunctionFragment;
        "Optimism()": FunctionFragment;
        "Polygon()": FunctionFragment;
        "UNINTIALIZED()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "Arbitrum" | "Base" | "Ethereum" | "Optimism" | "Polygon" | "UNINTIALIZED"): FunctionFragment;
    encodeFunctionData(functionFragment: "Arbitrum", values?: undefined): string;
    encodeFunctionData(functionFragment: "Base", values?: undefined): string;
    encodeFunctionData(functionFragment: "Ethereum", values?: undefined): string;
    encodeFunctionData(functionFragment: "Optimism", values?: undefined): string;
    encodeFunctionData(functionFragment: "Polygon", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNINTIALIZED", values?: undefined): string;
    decodeFunctionResult(functionFragment: "Arbitrum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "Base", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "Ethereum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "Optimism", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "Polygon", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNINTIALIZED", data: BytesLike): Result;
    events: {};
}
export interface CircleDomainIds extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CircleDomainIdsInterface;
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
        Arbitrum(overrides?: CallOverrides): Promise<[number]>;
        Base(overrides?: CallOverrides): Promise<[number]>;
        Ethereum(overrides?: CallOverrides): Promise<[number]>;
        Optimism(overrides?: CallOverrides): Promise<[number]>;
        Polygon(overrides?: CallOverrides): Promise<[number]>;
        UNINTIALIZED(overrides?: CallOverrides): Promise<[number]>;
    };
    Arbitrum(overrides?: CallOverrides): Promise<number>;
    Base(overrides?: CallOverrides): Promise<number>;
    Ethereum(overrides?: CallOverrides): Promise<number>;
    Optimism(overrides?: CallOverrides): Promise<number>;
    Polygon(overrides?: CallOverrides): Promise<number>;
    UNINTIALIZED(overrides?: CallOverrides): Promise<number>;
    callStatic: {
        Arbitrum(overrides?: CallOverrides): Promise<number>;
        Base(overrides?: CallOverrides): Promise<number>;
        Ethereum(overrides?: CallOverrides): Promise<number>;
        Optimism(overrides?: CallOverrides): Promise<number>;
        Polygon(overrides?: CallOverrides): Promise<number>;
        UNINTIALIZED(overrides?: CallOverrides): Promise<number>;
    };
    filters: {};
    estimateGas: {
        Arbitrum(overrides?: CallOverrides): Promise<BigNumber>;
        Base(overrides?: CallOverrides): Promise<BigNumber>;
        Ethereum(overrides?: CallOverrides): Promise<BigNumber>;
        Optimism(overrides?: CallOverrides): Promise<BigNumber>;
        Polygon(overrides?: CallOverrides): Promise<BigNumber>;
        UNINTIALIZED(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        Arbitrum(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        Base(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        Ethereum(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        Optimism(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        Polygon(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UNINTIALIZED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
