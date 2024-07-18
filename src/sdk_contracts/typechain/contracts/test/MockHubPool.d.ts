import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface MockHubPoolInterface extends utils.Interface {
    functions: {
        "adapter()": FunctionFragment;
        "arbitraryMessage(address,bytes)": FunctionFragment;
        "balanceOf(address,address)": FunctionFragment;
        "changeAdapter(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "relayTokens(address,address,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "adapter" | "arbitraryMessage" | "balanceOf" | "changeAdapter" | "owner" | "relayTokens"): FunctionFragment;
    encodeFunctionData(functionFragment: "adapter", values?: undefined): string;
    encodeFunctionData(functionFragment: "arbitraryMessage", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string, string]): string;
    encodeFunctionData(functionFragment: "changeAdapter", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "relayTokens", values: [string, string, BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "adapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "arbitraryMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeAdapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayTokens", data: BytesLike): Result;
    events: {
        "AdapterChanged(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdapterChanged"): EventFragment;
}
export interface AdapterChangedEventObject {
    oldAdapter: string;
    newAdapter: string;
}
export declare type AdapterChangedEvent = TypedEvent<[
    string,
    string
], AdapterChangedEventObject>;
export declare type AdapterChangedEventFilter = TypedEventFilter<AdapterChangedEvent>;
export interface MockHubPool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockHubPoolInterface;
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
        adapter(overrides?: CallOverrides): Promise<[string]>;
        arbitraryMessage(target: string, l2CallData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        balanceOf(l2Token: string, user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        changeAdapter(_adapter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    adapter(overrides?: CallOverrides): Promise<string>;
    arbitraryMessage(target: string, l2CallData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    balanceOf(l2Token: string, user: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    changeAdapter(_adapter: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        adapter(overrides?: CallOverrides): Promise<string>;
        arbitraryMessage(target: string, l2CallData: BytesLike, overrides?: CallOverrides): Promise<void>;
        balanceOf(l2Token: string, user: string, overrides?: CallOverrides): Promise<void>;
        changeAdapter(_adapter: string, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AdapterChanged(address,address)"(oldAdapter?: string | null, newAdapter?: string | null): AdapterChangedEventFilter;
        AdapterChanged(oldAdapter?: string | null, newAdapter?: string | null): AdapterChangedEventFilter;
    };
    estimateGas: {
        adapter(overrides?: CallOverrides): Promise<BigNumber>;
        arbitraryMessage(target: string, l2CallData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        balanceOf(l2Token: string, user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        changeAdapter(_adapter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        adapter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        arbitraryMessage(target: string, l2CallData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        balanceOf(l2Token: string, user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        changeAdapter(_adapter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        relayTokens(l1Token: string, l2Token: string, amount: BigNumberish, to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
