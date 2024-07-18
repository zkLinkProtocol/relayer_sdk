import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface IL1ERC20GatewayInterface extends utils.Interface {
    functions: {
        "depositERC20(address,uint256,uint256)": FunctionFragment;
        "depositERC20(address,address,uint256,uint256)": FunctionFragment;
        "depositERC20AndCall(address,address,uint256,bytes,uint256)": FunctionFragment;
        "finalizeWithdrawERC20(address,address,address,address,uint256,bytes)": FunctionFragment;
        "getL2ERC20Address(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "depositERC20(address,uint256,uint256)" | "depositERC20(address,address,uint256,uint256)" | "depositERC20AndCall" | "finalizeWithdrawERC20" | "getL2ERC20Address"): FunctionFragment;
    encodeFunctionData(functionFragment: "depositERC20(address,uint256,uint256)", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "depositERC20(address,address,uint256,uint256)", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "depositERC20AndCall", values: [string, string, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "finalizeWithdrawERC20", values: [string, string, string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "getL2ERC20Address", values: [string]): string;
    decodeFunctionResult(functionFragment: "depositERC20(address,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositERC20(address,address,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositERC20AndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeWithdrawERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getL2ERC20Address", data: BytesLike): Result;
    events: {
        "DepositERC20(address,address,address,address,uint256,bytes)": EventFragment;
        "FinalizeWithdrawERC20(address,address,address,address,uint256,bytes)": EventFragment;
        "RefundERC20(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DepositERC20"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FinalizeWithdrawERC20"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RefundERC20"): EventFragment;
}
export interface DepositERC20EventObject {
    l1Token: string;
    l2Token: string;
    from: string;
    to: string;
    amount: BigNumber;
    data: string;
}
export declare type DepositERC20Event = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    string
], DepositERC20EventObject>;
export declare type DepositERC20EventFilter = TypedEventFilter<DepositERC20Event>;
export interface FinalizeWithdrawERC20EventObject {
    l1Token: string;
    l2Token: string;
    from: string;
    to: string;
    amount: BigNumber;
    data: string;
}
export declare type FinalizeWithdrawERC20Event = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    string
], FinalizeWithdrawERC20EventObject>;
export declare type FinalizeWithdrawERC20EventFilter = TypedEventFilter<FinalizeWithdrawERC20Event>;
export interface RefundERC20EventObject {
    token: string;
    recipient: string;
    amount: BigNumber;
}
export declare type RefundERC20Event = TypedEvent<[
    string,
    string,
    BigNumber
], RefundERC20EventObject>;
export declare type RefundERC20EventFilter = TypedEventFilter<RefundERC20Event>;
export interface IL1ERC20Gateway extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IL1ERC20GatewayInterface;
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
        "depositERC20(address,uint256,uint256)"(_token: string, _amount: BigNumberish, _gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "depositERC20(address,address,uint256,uint256)"(_token: string, _to: string, _amount: BigNumberish, _gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositERC20AndCall(_token: string, _to: string, _amount: BigNumberish, _data: BytesLike, _gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        finalizeWithdrawERC20(_l1Token: string, _l2Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getL2ERC20Address(_l1Token: string, overrides?: CallOverrides): Promise<[string]>;
    };
    "depositERC20(address,uint256,uint256)"(_token: string, _amount: BigNumberish, _gasLimit: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "depositERC20(address,address,uint256,uint256)"(_token: string, _to: string, _amount: BigNumberish, _gasLimit: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositERC20AndCall(_token: string, _to: string, _amount: BigNumberish, _data: BytesLike, _gasLimit: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    finalizeWithdrawERC20(_l1Token: string, _l2Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getL2ERC20Address(_l1Token: string, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        "depositERC20(address,uint256,uint256)"(_token: string, _amount: BigNumberish, _gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "depositERC20(address,address,uint256,uint256)"(_token: string, _to: string, _amount: BigNumberish, _gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        depositERC20AndCall(_token: string, _to: string, _amount: BigNumberish, _data: BytesLike, _gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        finalizeWithdrawERC20(_l1Token: string, _l2Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        getL2ERC20Address(_l1Token: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "DepositERC20(address,address,address,address,uint256,bytes)"(l1Token?: string | null, l2Token?: string | null, from?: string | null, to?: null, amount?: null, data?: null): DepositERC20EventFilter;
        DepositERC20(l1Token?: string | null, l2Token?: string | null, from?: string | null, to?: null, amount?: null, data?: null): DepositERC20EventFilter;
        "FinalizeWithdrawERC20(address,address,address,address,uint256,bytes)"(l1Token?: string | null, l2Token?: string | null, from?: string | null, to?: null, amount?: null, data?: null): FinalizeWithdrawERC20EventFilter;
        FinalizeWithdrawERC20(l1Token?: string | null, l2Token?: string | null, from?: string | null, to?: null, amount?: null, data?: null): FinalizeWithdrawERC20EventFilter;
        "RefundERC20(address,address,uint256)"(token?: string | null, recipient?: string | null, amount?: null): RefundERC20EventFilter;
        RefundERC20(token?: string | null, recipient?: string | null, amount?: null): RefundERC20EventFilter;
    };
    estimateGas: {
        "depositERC20(address,uint256,uint256)"(_token: string, _amount: BigNumberish, _gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "depositERC20(address,address,uint256,uint256)"(_token: string, _to: string, _amount: BigNumberish, _gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositERC20AndCall(_token: string, _to: string, _amount: BigNumberish, _data: BytesLike, _gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        finalizeWithdrawERC20(_l1Token: string, _l2Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        getL2ERC20Address(_l1Token: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        "depositERC20(address,uint256,uint256)"(_token: string, _amount: BigNumberish, _gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "depositERC20(address,address,uint256,uint256)"(_token: string, _to: string, _amount: BigNumberish, _gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositERC20AndCall(_token: string, _to: string, _amount: BigNumberish, _data: BytesLike, _gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        finalizeWithdrawERC20(_l1Token: string, _l2Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getL2ERC20Address(_l1Token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
