import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface AcrossConfigStoreInterface extends utils.Interface {
    functions: {
        "globalConfig(bytes32)": FunctionFragment;
        "l1TokenConfig(address)": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateGlobalConfig(bytes32,string)": FunctionFragment;
        "updateTokenConfig(address,string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "globalConfig" | "l1TokenConfig" | "multicall" | "owner" | "renounceOwnership" | "transferOwnership" | "updateGlobalConfig" | "updateTokenConfig"): FunctionFragment;
    encodeFunctionData(functionFragment: "globalConfig", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "l1TokenConfig", values: [string]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "updateGlobalConfig", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "updateTokenConfig", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "globalConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l1TokenConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGlobalConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTokenConfig", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
        "UpdatedGlobalConfig(bytes32,string)": EventFragment;
        "UpdatedTokenConfig(address,string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdatedGlobalConfig"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdatedTokenConfig"): EventFragment;
}
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface UpdatedGlobalConfigEventObject {
    key: string;
    value: string;
}
export declare type UpdatedGlobalConfigEvent = TypedEvent<[
    string,
    string
], UpdatedGlobalConfigEventObject>;
export declare type UpdatedGlobalConfigEventFilter = TypedEventFilter<UpdatedGlobalConfigEvent>;
export interface UpdatedTokenConfigEventObject {
    key: string;
    value: string;
}
export declare type UpdatedTokenConfigEvent = TypedEvent<[
    string,
    string
], UpdatedTokenConfigEventObject>;
export declare type UpdatedTokenConfigEventFilter = TypedEventFilter<UpdatedTokenConfigEvent>;
export interface AcrossConfigStore extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AcrossConfigStoreInterface;
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
        globalConfig(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        l1TokenConfig(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        updateGlobalConfig(key: BytesLike, value: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        updateTokenConfig(l1Token: string, value: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    globalConfig(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
    l1TokenConfig(arg0: string, overrides?: CallOverrides): Promise<string>;
    multicall(data: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    updateGlobalConfig(key: BytesLike, value: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    updateTokenConfig(l1Token: string, value: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        globalConfig(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
        l1TokenConfig(arg0: string, overrides?: CallOverrides): Promise<string>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        updateGlobalConfig(key: BytesLike, value: string, overrides?: CallOverrides): Promise<void>;
        updateTokenConfig(l1Token: string, value: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "UpdatedGlobalConfig(bytes32,string)"(key?: BytesLike | null, value?: null): UpdatedGlobalConfigEventFilter;
        UpdatedGlobalConfig(key?: BytesLike | null, value?: null): UpdatedGlobalConfigEventFilter;
        "UpdatedTokenConfig(address,string)"(key?: string | null, value?: null): UpdatedTokenConfigEventFilter;
        UpdatedTokenConfig(key?: string | null, value?: null): UpdatedTokenConfigEventFilter;
    };
    estimateGas: {
        globalConfig(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        l1TokenConfig(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        updateGlobalConfig(key: BytesLike, value: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        updateTokenConfig(l1Token: string, value: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        globalConfig(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l1TokenConfig(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        updateGlobalConfig(key: BytesLike, value: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        updateTokenConfig(l1Token: string, value: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
