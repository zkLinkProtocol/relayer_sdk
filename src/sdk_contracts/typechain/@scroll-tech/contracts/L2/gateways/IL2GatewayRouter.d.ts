import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface IL2GatewayRouterInterface extends utils.Interface {
    functions: {
        "finalizeDepositERC20(address,address,address,address,uint256,bytes)": FunctionFragment;
        "finalizeDepositETH(address,address,uint256,bytes)": FunctionFragment;
        "getL1ERC20Address(address)": FunctionFragment;
        "getL2ERC20Address(address)": FunctionFragment;
        "withdrawERC20(address,uint256,uint256)": FunctionFragment;
        "withdrawERC20(address,address,uint256,uint256)": FunctionFragment;
        "withdrawERC20AndCall(address,address,uint256,bytes,uint256)": FunctionFragment;
        "withdrawETH(address,uint256,uint256)": FunctionFragment;
        "withdrawETH(uint256,uint256)": FunctionFragment;
        "withdrawETHAndCall(address,uint256,bytes,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "finalizeDepositERC20" | "finalizeDepositETH" | "getL1ERC20Address" | "getL2ERC20Address" | "withdrawERC20(address,uint256,uint256)" | "withdrawERC20(address,address,uint256,uint256)" | "withdrawERC20AndCall" | "withdrawETH(address,uint256,uint256)" | "withdrawETH(uint256,uint256)" | "withdrawETHAndCall"): FunctionFragment;
    encodeFunctionData(functionFragment: "finalizeDepositERC20", values: [string, string, string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "finalizeDepositETH", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "getL1ERC20Address", values: [string]): string;
    encodeFunctionData(functionFragment: "getL2ERC20Address", values: [string]): string;
    encodeFunctionData(functionFragment: "withdrawERC20(address,uint256,uint256)", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawERC20(address,address,uint256,uint256)", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawERC20AndCall", values: [string, string, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawETH(address,uint256,uint256)", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawETH(uint256,uint256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawETHAndCall", values: [string, BigNumberish, BytesLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "finalizeDepositERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeDepositETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getL1ERC20Address", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getL2ERC20Address", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawERC20(address,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawERC20(address,address,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawERC20AndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawETH(address,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawETH(uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawETHAndCall", data: BytesLike): Result;
    events: {
        "FinalizeDepositERC20(address,address,address,address,uint256,bytes)": EventFragment;
        "FinalizeDepositETH(address,address,uint256,bytes)": EventFragment;
        "SetDefaultERC20Gateway(address)": EventFragment;
        "SetERC20Gateway(address,address)": EventFragment;
        "SetETHGateway(address)": EventFragment;
        "WithdrawERC20(address,address,address,address,uint256,bytes)": EventFragment;
        "WithdrawETH(address,address,uint256,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "FinalizeDepositERC20"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FinalizeDepositETH"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetDefaultERC20Gateway"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetERC20Gateway"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetETHGateway"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawERC20"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawETH"): EventFragment;
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
export interface SetDefaultERC20GatewayEventObject {
    defaultERC20Gateway: string;
}
export declare type SetDefaultERC20GatewayEvent = TypedEvent<[
    string
], SetDefaultERC20GatewayEventObject>;
export declare type SetDefaultERC20GatewayEventFilter = TypedEventFilter<SetDefaultERC20GatewayEvent>;
export interface SetERC20GatewayEventObject {
    token: string;
    gateway: string;
}
export declare type SetERC20GatewayEvent = TypedEvent<[
    string,
    string
], SetERC20GatewayEventObject>;
export declare type SetERC20GatewayEventFilter = TypedEventFilter<SetERC20GatewayEvent>;
export interface SetETHGatewayEventObject {
    ethGateway: string;
}
export declare type SetETHGatewayEvent = TypedEvent<[string], SetETHGatewayEventObject>;
export declare type SetETHGatewayEventFilter = TypedEventFilter<SetETHGatewayEvent>;
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
export interface IL2GatewayRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IL2GatewayRouterInterface;
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
        finalizeDepositETH(_from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
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
    finalizeDepositERC20(l1Token: string, l2Token: string, from: string, to: string, amount: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    finalizeDepositETH(_from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
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
        finalizeDepositERC20(l1Token: string, l2Token: string, from: string, to: string, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        finalizeDepositETH(_from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        getL1ERC20Address(l2Token: string, overrides?: CallOverrides): Promise<string>;
        getL2ERC20Address(l1Token: string, overrides?: CallOverrides): Promise<string>;
        "withdrawERC20(address,uint256,uint256)"(token: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "withdrawERC20(address,address,uint256,uint256)"(token: string, to: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        withdrawERC20AndCall(token: string, to: string, amount: BigNumberish, data: BytesLike, gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "withdrawETH(address,uint256,uint256)"(to: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "withdrawETH(uint256,uint256)"(amount: BigNumberish, gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        withdrawETHAndCall(to: string, amount: BigNumberish, data: BytesLike, gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "FinalizeDepositERC20(address,address,address,address,uint256,bytes)"(l1Token?: string | null, l2Token?: string | null, from?: string | null, to?: null, amount?: null, data?: null): FinalizeDepositERC20EventFilter;
        FinalizeDepositERC20(l1Token?: string | null, l2Token?: string | null, from?: string | null, to?: null, amount?: null, data?: null): FinalizeDepositERC20EventFilter;
        "FinalizeDepositETH(address,address,uint256,bytes)"(from?: string | null, to?: string | null, amount?: null, data?: null): FinalizeDepositETHEventFilter;
        FinalizeDepositETH(from?: string | null, to?: string | null, amount?: null, data?: null): FinalizeDepositETHEventFilter;
        "SetDefaultERC20Gateway(address)"(defaultERC20Gateway?: string | null): SetDefaultERC20GatewayEventFilter;
        SetDefaultERC20Gateway(defaultERC20Gateway?: string | null): SetDefaultERC20GatewayEventFilter;
        "SetERC20Gateway(address,address)"(token?: string | null, gateway?: string | null): SetERC20GatewayEventFilter;
        SetERC20Gateway(token?: string | null, gateway?: string | null): SetERC20GatewayEventFilter;
        "SetETHGateway(address)"(ethGateway?: string | null): SetETHGatewayEventFilter;
        SetETHGateway(ethGateway?: string | null): SetETHGatewayEventFilter;
        "WithdrawERC20(address,address,address,address,uint256,bytes)"(l1Token?: string | null, l2Token?: string | null, from?: string | null, to?: null, amount?: null, data?: null): WithdrawERC20EventFilter;
        WithdrawERC20(l1Token?: string | null, l2Token?: string | null, from?: string | null, to?: null, amount?: null, data?: null): WithdrawERC20EventFilter;
        "WithdrawETH(address,address,uint256,bytes)"(from?: string | null, to?: string | null, amount?: null, data?: null): WithdrawETHEventFilter;
        WithdrawETH(from?: string | null, to?: string | null, amount?: null, data?: null): WithdrawETHEventFilter;
    };
    estimateGas: {
        finalizeDepositERC20(l1Token: string, l2Token: string, from: string, to: string, amount: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        finalizeDepositETH(_from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
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
        finalizeDepositERC20(l1Token: string, l2Token: string, from: string, to: string, amount: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        finalizeDepositETH(_from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
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
