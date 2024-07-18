import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface IL2ETHGatewayInterface extends utils.Interface {
    functions: {
        "finalizeDepositETH(address,address,uint256,bytes)": FunctionFragment;
        "withdrawETH(address,uint256,uint256)": FunctionFragment;
        "withdrawETH(uint256,uint256)": FunctionFragment;
        "withdrawETHAndCall(address,uint256,bytes,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "finalizeDepositETH" | "withdrawETH(address,uint256,uint256)" | "withdrawETH(uint256,uint256)" | "withdrawETHAndCall"): FunctionFragment;
    encodeFunctionData(functionFragment: "finalizeDepositETH", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "withdrawETH(address,uint256,uint256)", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawETH(uint256,uint256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawETHAndCall", values: [string, BigNumberish, BytesLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "finalizeDepositETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawETH(address,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawETH(uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawETHAndCall", data: BytesLike): Result;
    events: {
        "FinalizeDepositETH(address,address,uint256,bytes)": EventFragment;
        "WithdrawETH(address,address,uint256,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "FinalizeDepositETH"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawETH"): EventFragment;
}
export interface FinalizeDepositETHEventObject {
    from: string;
    to: string;
    amount: BigNumber;
    data: string;
}
export declare type FinalizeDepositETHEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], FinalizeDepositETHEventObject>;
export declare type FinalizeDepositETHEventFilter = TypedEventFilter<FinalizeDepositETHEvent>;
export interface WithdrawETHEventObject {
    from: string;
    to: string;
    amount: BigNumber;
    data: string;
}
export declare type WithdrawETHEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], WithdrawETHEventObject>;
export declare type WithdrawETHEventFilter = TypedEventFilter<WithdrawETHEvent>;
export interface IL2ETHGateway extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IL2ETHGatewayInterface;
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
        finalizeDepositETH(_from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "withdrawETH(address,uint256,uint256)"(to: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "withdrawETH(uint256,uint256)"(amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdrawETHAndCall(to: string, amount: BigNumberish, data: BytesLike, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    finalizeDepositETH(_from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "withdrawETH(address,uint256,uint256)"(to: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "withdrawETH(uint256,uint256)"(amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdrawETHAndCall(to: string, amount: BigNumberish, data: BytesLike, gasLimit: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        finalizeDepositETH(_from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        "withdrawETH(address,uint256,uint256)"(to: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "withdrawETH(uint256,uint256)"(amount: BigNumberish, gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        withdrawETHAndCall(to: string, amount: BigNumberish, data: BytesLike, gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "FinalizeDepositETH(address,address,uint256,bytes)"(from?: string | null, to?: string | null, amount?: null, data?: null): FinalizeDepositETHEventFilter;
        FinalizeDepositETH(from?: string | null, to?: string | null, amount?: null, data?: null): FinalizeDepositETHEventFilter;
        "WithdrawETH(address,address,uint256,bytes)"(from?: string | null, to?: string | null, amount?: null, data?: null): WithdrawETHEventFilter;
        WithdrawETH(from?: string | null, to?: string | null, amount?: null, data?: null): WithdrawETHEventFilter;
    };
    estimateGas: {
        finalizeDepositETH(_from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "withdrawETH(address,uint256,uint256)"(to: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "withdrawETH(uint256,uint256)"(amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdrawETHAndCall(to: string, amount: BigNumberish, data: BytesLike, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        finalizeDepositETH(_from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "withdrawETH(address,uint256,uint256)"(to: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "withdrawETH(uint256,uint256)"(amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdrawETHAndCall(to: string, amount: BigNumberish, data: BytesLike, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
