import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../../common";
export interface AddressWhitelistInterfaceInterface extends utils.Interface {
    functions: {
        "addToWhitelist(address)": FunctionFragment;
        "getWhitelist()": FunctionFragment;
        "isOnWhitelist(address)": FunctionFragment;
        "removeFromWhitelist(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addToWhitelist" | "getWhitelist" | "isOnWhitelist" | "removeFromWhitelist"): FunctionFragment;
    encodeFunctionData(functionFragment: "addToWhitelist", values: [string]): string;
    encodeFunctionData(functionFragment: "getWhitelist", values?: undefined): string;
    encodeFunctionData(functionFragment: "isOnWhitelist", values: [string]): string;
    encodeFunctionData(functionFragment: "removeFromWhitelist", values: [string]): string;
    decodeFunctionResult(functionFragment: "addToWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOnWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeFromWhitelist", data: BytesLike): Result;
    events: {};
}
export interface AddressWhitelistInterface extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AddressWhitelistInterfaceInterface;
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
        addToWhitelist(newElement: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getWhitelist(overrides?: CallOverrides): Promise<[string[]]>;
        isOnWhitelist(newElement: string, overrides?: CallOverrides): Promise<[boolean]>;
        removeFromWhitelist(newElement: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    addToWhitelist(newElement: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getWhitelist(overrides?: CallOverrides): Promise<string[]>;
    isOnWhitelist(newElement: string, overrides?: CallOverrides): Promise<boolean>;
    removeFromWhitelist(newElement: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        addToWhitelist(newElement: string, overrides?: CallOverrides): Promise<void>;
        getWhitelist(overrides?: CallOverrides): Promise<string[]>;
        isOnWhitelist(newElement: string, overrides?: CallOverrides): Promise<boolean>;
        removeFromWhitelist(newElement: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        addToWhitelist(newElement: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getWhitelist(overrides?: CallOverrides): Promise<BigNumber>;
        isOnWhitelist(newElement: string, overrides?: CallOverrides): Promise<BigNumber>;
        removeFromWhitelist(newElement: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addToWhitelist(newElement: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getWhitelist(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOnWhitelist(newElement: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeFromWhitelist(newElement: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
