import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface IL1ETHGatewayInterface extends utils.Interface {
    functions: {
        "depositETH(uint256,uint256)": FunctionFragment;
        "depositETH(address,uint256,uint256)": FunctionFragment;
        "depositETHAndCall(address,uint256,bytes,uint256)": FunctionFragment;
        "finalizeWithdrawETH(address,address,uint256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "depositETH(uint256,uint256)" | "depositETH(address,uint256,uint256)" | "depositETHAndCall" | "finalizeWithdrawETH"): FunctionFragment;
    encodeFunctionData(functionFragment: "depositETH(uint256,uint256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "depositETH(address,uint256,uint256)", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "depositETHAndCall", values: [string, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "finalizeWithdrawETH", values: [string, string, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "depositETH(uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositETH(address,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositETHAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeWithdrawETH", data: BytesLike): Result;
    events: {
        "DepositETH(address,address,uint256,bytes)": EventFragment;
        "FinalizeWithdrawETH(address,address,uint256,bytes)": EventFragment;
        "RefundETH(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DepositETH"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FinalizeWithdrawETH"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RefundETH"): EventFragment;
}
export interface DepositETHEventObject {
    from: string;
    to: string;
    amount: BigNumber;
    data: string;
}
export declare type DepositETHEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], DepositETHEventObject>;
export declare type DepositETHEventFilter = TypedEventFilter<DepositETHEvent>;
export interface FinalizeWithdrawETHEventObject {
    from: string;
    to: string;
    amount: BigNumber;
    data: string;
}
export declare type FinalizeWithdrawETHEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], FinalizeWithdrawETHEventObject>;
export declare type FinalizeWithdrawETHEventFilter = TypedEventFilter<FinalizeWithdrawETHEvent>;
export interface RefundETHEventObject {
    recipient: string;
    amount: BigNumber;
}
export declare type RefundETHEvent = TypedEvent<[
    string,
    BigNumber
], RefundETHEventObject>;
export declare type RefundETHEventFilter = TypedEventFilter<RefundETHEvent>;
export interface IL1ETHGateway extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IL1ETHGatewayInterface;
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
        "depositETH(uint256,uint256)"(amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "depositETH(address,uint256,uint256)"(to: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositETHAndCall(to: string, amount: BigNumberish, data: BytesLike, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        finalizeWithdrawETH(from: string, to: string, amount: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    "depositETH(uint256,uint256)"(amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "depositETH(address,uint256,uint256)"(to: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositETHAndCall(to: string, amount: BigNumberish, data: BytesLike, gasLimit: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    finalizeWithdrawETH(from: string, to: string, amount: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        "depositETH(uint256,uint256)"(amount: BigNumberish, gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "depositETH(address,uint256,uint256)"(to: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        depositETHAndCall(to: string, amount: BigNumberish, data: BytesLike, gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        finalizeWithdrawETH(from: string, to: string, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "DepositETH(address,address,uint256,bytes)"(from?: string | null, to?: string | null, amount?: null, data?: null): DepositETHEventFilter;
        DepositETH(from?: string | null, to?: string | null, amount?: null, data?: null): DepositETHEventFilter;
        "FinalizeWithdrawETH(address,address,uint256,bytes)"(from?: string | null, to?: string | null, amount?: null, data?: null): FinalizeWithdrawETHEventFilter;
        FinalizeWithdrawETH(from?: string | null, to?: string | null, amount?: null, data?: null): FinalizeWithdrawETHEventFilter;
        "RefundETH(address,uint256)"(recipient?: string | null, amount?: null): RefundETHEventFilter;
        RefundETH(recipient?: string | null, amount?: null): RefundETHEventFilter;
    };
    estimateGas: {
        "depositETH(uint256,uint256)"(amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "depositETH(address,uint256,uint256)"(to: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositETHAndCall(to: string, amount: BigNumberish, data: BytesLike, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        finalizeWithdrawETH(from: string, to: string, amount: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        "depositETH(uint256,uint256)"(amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "depositETH(address,uint256,uint256)"(to: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositETHAndCall(to: string, amount: BigNumberish, data: BytesLike, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        finalizeWithdrawETH(from: string, to: string, amount: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
