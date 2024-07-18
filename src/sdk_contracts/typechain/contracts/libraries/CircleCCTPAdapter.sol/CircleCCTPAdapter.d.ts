import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface CircleCCTPAdapterInterface extends utils.Interface {
    functions: {
        "cctpTokenMessenger()": FunctionFragment;
        "recipientCircleDomainId()": FunctionFragment;
        "usdcToken()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "cctpTokenMessenger" | "recipientCircleDomainId" | "usdcToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "cctpTokenMessenger", values?: undefined): string;
    encodeFunctionData(functionFragment: "recipientCircleDomainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "usdcToken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "cctpTokenMessenger", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recipientCircleDomainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "usdcToken", data: BytesLike): Result;
    events: {};
}
export interface CircleCCTPAdapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CircleCCTPAdapterInterface;
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
        cctpTokenMessenger(overrides?: CallOverrides): Promise<[string]>;
        recipientCircleDomainId(overrides?: CallOverrides): Promise<[number]>;
        usdcToken(overrides?: CallOverrides): Promise<[string]>;
    };
    cctpTokenMessenger(overrides?: CallOverrides): Promise<string>;
    recipientCircleDomainId(overrides?: CallOverrides): Promise<number>;
    usdcToken(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        cctpTokenMessenger(overrides?: CallOverrides): Promise<string>;
        recipientCircleDomainId(overrides?: CallOverrides): Promise<number>;
        usdcToken(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        cctpTokenMessenger(overrides?: CallOverrides): Promise<BigNumber>;
        recipientCircleDomainId(overrides?: CallOverrides): Promise<BigNumber>;
        usdcToken(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        cctpTokenMessenger(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recipientCircleDomainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        usdcToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
