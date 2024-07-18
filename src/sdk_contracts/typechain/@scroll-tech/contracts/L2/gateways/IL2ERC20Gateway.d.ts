import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface IL2ERC20GatewayInterface extends utils.Interface {
    functions: {
        "finalizeDepositERC20(address,address,address,address,uint256,bytes)": FunctionFragment;
        "getL1ERC20Address(address)": FunctionFragment;
        "getL2ERC20Address(address)": FunctionFragment;
        "withdrawERC20(address,uint256,uint256)": FunctionFragment;
        "withdrawERC20(address,address,uint256,uint256)": FunctionFragment;
        "withdrawERC20AndCall(address,address,uint256,bytes,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "finalizeDepositERC20" | "getL1ERC20Address" | "getL2ERC20Address" | "withdrawERC20(address,uint256,uint256)" | "withdrawERC20(address,address,uint256,uint256)" | "withdrawERC20AndCall"): FunctionFragment;
    encodeFunctionData(functionFragment: "finalizeDepositERC20", values: [string, string, string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "getL1ERC20Address", values: [string]): string;
    encodeFunctionData(functionFragment: "getL2ERC20Address", values: [string]): string;
    encodeFunctionData(functionFragment: "withdrawERC20(address,uint256,uint256)", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawERC20(address,address,uint256,uint256)", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawERC20AndCall", values: [string, string, BigNumberish, BytesLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "finalizeDepositERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getL1ERC20Address", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getL2ERC20Address", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawERC20(address,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawERC20(address,address,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawERC20AndCall", data: BytesLike): Result;
    events: {
        "FinalizeDepositERC20(address,address,address,address,uint256,bytes)": EventFragment;
        "WithdrawERC20(address,address,address,address,uint256,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "FinalizeDepositERC20"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawERC20"): EventFragment;
}
export interface FinalizeDepositERC20EventObject {
    l1Token: string;
    l2Token: string;
    from: string;
    to: string;
    amount: BigNumber;
    data: string;
}
export declare type FinalizeDepositERC20Event = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    string
], FinalizeDepositERC20EventObject>;
export declare type FinalizeDepositERC20EventFilter = TypedEventFilter<FinalizeDepositERC20Event>;
export interface WithdrawERC20EventObject {
    l1Token: string;
    l2Token: string;
    from: string;
    to: string;
    amount: BigNumber;
    data: string;
}
export declare type WithdrawERC20Event = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    string
], WithdrawERC20EventObject>;
export declare type WithdrawERC20EventFilter = TypedEventFilter<WithdrawERC20Event>;
export interface IL2ERC20Gateway extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IL2ERC20GatewayInterface;
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
        finalizeDepositERC20(l1Token: string, l2Token: string, from: string, to: string, amount: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getL1ERC20Address(l2Token: string, overrides?: CallOverrides): Promise<[string]>;
        getL2ERC20Address(l1Token: string, overrides?: CallOverrides): Promise<[string]>;
        "withdrawERC20(address,uint256,uint256)"(token: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "withdrawERC20(address,address,uint256,uint256)"(token: string, to: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdrawERC20AndCall(token: string, to: string, amount: BigNumberish, data: BytesLike, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    finalizeDepositERC20(l1Token: string, l2Token: string, from: string, to: string, amount: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getL1ERC20Address(l2Token: string, overrides?: CallOverrides): Promise<string>;
    getL2ERC20Address(l1Token: string, overrides?: CallOverrides): Promise<string>;
    "withdrawERC20(address,uint256,uint256)"(token: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "withdrawERC20(address,address,uint256,uint256)"(token: string, to: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdrawERC20AndCall(token: string, to: string, amount: BigNumberish, data: BytesLike, gasLimit: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        finalizeDepositERC20(l1Token: string, l2Token: string, from: string, to: string, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        getL1ERC20Address(l2Token: string, overrides?: CallOverrides): Promise<string>;
        getL2ERC20Address(l1Token: string, overrides?: CallOverrides): Promise<string>;
        "withdrawERC20(address,uint256,uint256)"(token: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "withdrawERC20(address,address,uint256,uint256)"(token: string, to: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        withdrawERC20AndCall(token: string, to: string, amount: BigNumberish, data: BytesLike, gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "FinalizeDepositERC20(address,address,address,address,uint256,bytes)"(l1Token?: string | null, l2Token?: string | null, from?: string | null, to?: null, amount?: null, data?: null): FinalizeDepositERC20EventFilter;
        FinalizeDepositERC20(l1Token?: string | null, l2Token?: string | null, from?: string | null, to?: null, amount?: null, data?: null): FinalizeDepositERC20EventFilter;
        "WithdrawERC20(address,address,address,address,uint256,bytes)"(l1Token?: string | null, l2Token?: string | null, from?: string | null, to?: null, amount?: null, data?: null): WithdrawERC20EventFilter;
        WithdrawERC20(l1Token?: string | null, l2Token?: string | null, from?: string | null, to?: null, amount?: null, data?: null): WithdrawERC20EventFilter;
    };
    estimateGas: {
        finalizeDepositERC20(l1Token: string, l2Token: string, from: string, to: string, amount: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        getL1ERC20Address(l2Token: string, overrides?: CallOverrides): Promise<BigNumber>;
        getL2ERC20Address(l1Token: string, overrides?: CallOverrides): Promise<BigNumber>;
        "withdrawERC20(address,uint256,uint256)"(token: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "withdrawERC20(address,address,uint256,uint256)"(token: string, to: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdrawERC20AndCall(token: string, to: string, amount: BigNumberish, data: BytesLike, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        finalizeDepositERC20(l1Token: string, l2Token: string, from: string, to: string, amount: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getL1ERC20Address(l2Token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getL2ERC20Address(l1Token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "withdrawERC20(address,uint256,uint256)"(token: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "withdrawERC20(address,address,uint256,uint256)"(token: string, to: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdrawERC20AndCall(token: string, to: string, amount: BigNumberish, data: BytesLike, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
