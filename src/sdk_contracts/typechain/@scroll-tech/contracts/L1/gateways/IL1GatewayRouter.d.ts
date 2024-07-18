import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface IL1GatewayRouterInterface extends utils.Interface {
    functions: {
        "depositERC20(address,uint256,uint256)": FunctionFragment;
        "depositERC20(address,address,uint256,uint256)": FunctionFragment;
        "depositERC20AndCall(address,address,uint256,bytes,uint256)": FunctionFragment;
        "depositETH(uint256,uint256)": FunctionFragment;
        "depositETH(address,uint256,uint256)": FunctionFragment;
        "depositETHAndCall(address,uint256,bytes,uint256)": FunctionFragment;
        "finalizeWithdrawERC20(address,address,address,address,uint256,bytes)": FunctionFragment;
        "finalizeWithdrawETH(address,address,uint256,bytes)": FunctionFragment;
        "getERC20Gateway(address)": FunctionFragment;
        "getL2ERC20Address(address)": FunctionFragment;
        "requestERC20(address,address,uint256)": FunctionFragment;
        "setDefaultERC20Gateway(address)": FunctionFragment;
        "setERC20Gateway(address[],address[])": FunctionFragment;
        "setETHGateway(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "depositERC20(address,uint256,uint256)" | "depositERC20(address,address,uint256,uint256)" | "depositERC20AndCall" | "depositETH(uint256,uint256)" | "depositETH(address,uint256,uint256)" | "depositETHAndCall" | "finalizeWithdrawERC20" | "finalizeWithdrawETH" | "getERC20Gateway" | "getL2ERC20Address" | "requestERC20" | "setDefaultERC20Gateway" | "setERC20Gateway" | "setETHGateway"): FunctionFragment;
    encodeFunctionData(functionFragment: "depositERC20(address,uint256,uint256)", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "depositERC20(address,address,uint256,uint256)", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "depositERC20AndCall", values: [string, string, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "depositETH(uint256,uint256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "depositETH(address,uint256,uint256)", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "depositETHAndCall", values: [string, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "finalizeWithdrawERC20", values: [string, string, string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "finalizeWithdrawETH", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "getERC20Gateway", values: [string]): string;
    encodeFunctionData(functionFragment: "getL2ERC20Address", values: [string]): string;
    encodeFunctionData(functionFragment: "requestERC20", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setDefaultERC20Gateway", values: [string]): string;
    encodeFunctionData(functionFragment: "setERC20Gateway", values: [string[], string[]]): string;
    encodeFunctionData(functionFragment: "setETHGateway", values: [string]): string;
    decodeFunctionResult(functionFragment: "depositERC20(address,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositERC20(address,address,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositERC20AndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositETH(uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositETH(address,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositETHAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeWithdrawERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeWithdrawETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getERC20Gateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getL2ERC20Address", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDefaultERC20Gateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setERC20Gateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setETHGateway", data: BytesLike): Result;
    events: {
        "DepositERC20(address,address,address,address,uint256,bytes)": EventFragment;
        "DepositETH(address,address,uint256,bytes)": EventFragment;
        "FinalizeWithdrawERC20(address,address,address,address,uint256,bytes)": EventFragment;
        "FinalizeWithdrawETH(address,address,uint256,bytes)": EventFragment;
        "RefundERC20(address,address,uint256)": EventFragment;
        "RefundETH(address,uint256)": EventFragment;
        "SetDefaultERC20Gateway(address)": EventFragment;
        "SetERC20Gateway(address,address)": EventFragment;
        "SetETHGateway(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DepositERC20"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DepositETH"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FinalizeWithdrawERC20"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FinalizeWithdrawETH"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RefundERC20"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RefundETH"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetDefaultERC20Gateway"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetERC20Gateway"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetETHGateway"): EventFragment;
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
export interface RefundETHEventObject {
    recipient: string;
    amount: BigNumber;
}
export declare type RefundETHEvent = TypedEvent<[
    string,
    BigNumber
], RefundETHEventObject>;
export declare type RefundETHEventFilter = TypedEventFilter<RefundETHEvent>;
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
export interface IL1GatewayRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IL1GatewayRouterInterface;
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
        "depositETH(uint256,uint256)"(amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "depositETH(address,uint256,uint256)"(to: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositETHAndCall(to: string, amount: BigNumberish, data: BytesLike, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        finalizeWithdrawERC20(_l1Token: string, _l2Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        finalizeWithdrawETH(from: string, to: string, amount: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getERC20Gateway(_token: string, overrides?: CallOverrides): Promise<[string]>;
        getL2ERC20Address(_l1Token: string, overrides?: CallOverrides): Promise<[string]>;
        requestERC20(sender: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setDefaultERC20Gateway(_defaultERC20Gateway: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setERC20Gateway(_tokens: string[], _gateways: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setETHGateway(_ethGateway: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
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
    "depositETH(uint256,uint256)"(amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "depositETH(address,uint256,uint256)"(to: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositETHAndCall(to: string, amount: BigNumberish, data: BytesLike, gasLimit: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    finalizeWithdrawERC20(_l1Token: string, _l2Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    finalizeWithdrawETH(from: string, to: string, amount: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getERC20Gateway(_token: string, overrides?: CallOverrides): Promise<string>;
    getL2ERC20Address(_l1Token: string, overrides?: CallOverrides): Promise<string>;
    requestERC20(sender: string, token: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setDefaultERC20Gateway(_defaultERC20Gateway: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setERC20Gateway(_tokens: string[], _gateways: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setETHGateway(_ethGateway: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        "depositERC20(address,uint256,uint256)"(_token: string, _amount: BigNumberish, _gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "depositERC20(address,address,uint256,uint256)"(_token: string, _to: string, _amount: BigNumberish, _gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        depositERC20AndCall(_token: string, _to: string, _amount: BigNumberish, _data: BytesLike, _gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "depositETH(uint256,uint256)"(amount: BigNumberish, gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "depositETH(address,uint256,uint256)"(to: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        depositETHAndCall(to: string, amount: BigNumberish, data: BytesLike, gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        finalizeWithdrawERC20(_l1Token: string, _l2Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        finalizeWithdrawETH(from: string, to: string, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        getERC20Gateway(_token: string, overrides?: CallOverrides): Promise<string>;
        getL2ERC20Address(_l1Token: string, overrides?: CallOverrides): Promise<string>;
        requestERC20(sender: string, token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setDefaultERC20Gateway(_defaultERC20Gateway: string, overrides?: CallOverrides): Promise<void>;
        setERC20Gateway(_tokens: string[], _gateways: string[], overrides?: CallOverrides): Promise<void>;
        setETHGateway(_ethGateway: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "DepositERC20(address,address,address,address,uint256,bytes)"(l1Token?: string | null, l2Token?: string | null, from?: string | null, to?: null, amount?: null, data?: null): DepositERC20EventFilter;
        DepositERC20(l1Token?: string | null, l2Token?: string | null, from?: string | null, to?: null, amount?: null, data?: null): DepositERC20EventFilter;
        "DepositETH(address,address,uint256,bytes)"(from?: string | null, to?: string | null, amount?: null, data?: null): DepositETHEventFilter;
        DepositETH(from?: string | null, to?: string | null, amount?: null, data?: null): DepositETHEventFilter;
        "FinalizeWithdrawERC20(address,address,address,address,uint256,bytes)"(l1Token?: string | null, l2Token?: string | null, from?: string | null, to?: null, amount?: null, data?: null): FinalizeWithdrawERC20EventFilter;
        FinalizeWithdrawERC20(l1Token?: string | null, l2Token?: string | null, from?: string | null, to?: null, amount?: null, data?: null): FinalizeWithdrawERC20EventFilter;
        "FinalizeWithdrawETH(address,address,uint256,bytes)"(from?: string | null, to?: string | null, amount?: null, data?: null): FinalizeWithdrawETHEventFilter;
        FinalizeWithdrawETH(from?: string | null, to?: string | null, amount?: null, data?: null): FinalizeWithdrawETHEventFilter;
        "RefundERC20(address,address,uint256)"(token?: string | null, recipient?: string | null, amount?: null): RefundERC20EventFilter;
        RefundERC20(token?: string | null, recipient?: string | null, amount?: null): RefundERC20EventFilter;
        "RefundETH(address,uint256)"(recipient?: string | null, amount?: null): RefundETHEventFilter;
        RefundETH(recipient?: string | null, amount?: null): RefundETHEventFilter;
        "SetDefaultERC20Gateway(address)"(defaultERC20Gateway?: string | null): SetDefaultERC20GatewayEventFilter;
        SetDefaultERC20Gateway(defaultERC20Gateway?: string | null): SetDefaultERC20GatewayEventFilter;
        "SetERC20Gateway(address,address)"(token?: string | null, gateway?: string | null): SetERC20GatewayEventFilter;
        SetERC20Gateway(token?: string | null, gateway?: string | null): SetERC20GatewayEventFilter;
        "SetETHGateway(address)"(ethGateway?: string | null): SetETHGatewayEventFilter;
        SetETHGateway(ethGateway?: string | null): SetETHGatewayEventFilter;
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
        "depositETH(uint256,uint256)"(amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "depositETH(address,uint256,uint256)"(to: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositETHAndCall(to: string, amount: BigNumberish, data: BytesLike, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        finalizeWithdrawERC20(_l1Token: string, _l2Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        finalizeWithdrawETH(from: string, to: string, amount: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        getERC20Gateway(_token: string, overrides?: CallOverrides): Promise<BigNumber>;
        getL2ERC20Address(_l1Token: string, overrides?: CallOverrides): Promise<BigNumber>;
        requestERC20(sender: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setDefaultERC20Gateway(_defaultERC20Gateway: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setERC20Gateway(_tokens: string[], _gateways: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setETHGateway(_ethGateway: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
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
        "depositETH(uint256,uint256)"(amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "depositETH(address,uint256,uint256)"(to: string, amount: BigNumberish, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositETHAndCall(to: string, amount: BigNumberish, data: BytesLike, gasLimit: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        finalizeWithdrawERC20(_l1Token: string, _l2Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        finalizeWithdrawETH(from: string, to: string, amount: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getERC20Gateway(_token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getL2ERC20Address(_l1Token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requestERC20(sender: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setDefaultERC20Gateway(_defaultERC20Gateway: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setERC20Gateway(_tokens: string[], _gateways: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setETHGateway(_ethGateway: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
