import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface Mock_BridgeInterface extends utils.Interface {
    functions: {
        "bridgeMessage(address,bytes)": FunctionFragment;
        "bridgeTokens(address,uint256)": FunctionFragment;
        "deposits(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "bridgeMessage" | "bridgeTokens" | "deposits"): FunctionFragment;
    encodeFunctionData(functionFragment: "bridgeMessage", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "bridgeTokens", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "deposits", values: [string]): string;
    decodeFunctionResult(functionFragment: "bridgeMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridgeTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposits", data: BytesLike): Result;
    events: {
        "BridgedMessage(address,bytes)": EventFragment;
        "BridgedTokens(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BridgedMessage"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BridgedTokens"): EventFragment;
}
export interface BridgedMessageEventObject {
    target: string;
    message: string;
}
export declare type BridgedMessageEvent = TypedEvent<[
    string,
    string
], BridgedMessageEventObject>;
export declare type BridgedMessageEventFilter = TypedEventFilter<BridgedMessageEvent>;
export interface BridgedTokensEventObject {
    token: string;
    amount: BigNumber;
}
export declare type BridgedTokensEvent = TypedEvent<[
    string,
    BigNumber
], BridgedTokensEventObject>;
export declare type BridgedTokensEventFilter = TypedEventFilter<BridgedTokensEvent>;
export interface Mock_Bridge extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Mock_BridgeInterface;
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
        bridgeMessage(target: string, message: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        bridgeTokens(token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        deposits(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    bridgeMessage(target: string, message: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    bridgeTokens(token: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    deposits(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        bridgeMessage(target: string, message: BytesLike, overrides?: CallOverrides): Promise<void>;
        bridgeTokens(token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        deposits(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "BridgedMessage(address,bytes)"(target?: null, message?: null): BridgedMessageEventFilter;
        BridgedMessage(target?: null, message?: null): BridgedMessageEventFilter;
        "BridgedTokens(address,uint256)"(token?: null, amount?: null): BridgedTokensEventFilter;
        BridgedTokens(token?: null, amount?: null): BridgedTokensEventFilter;
    };
    estimateGas: {
        bridgeMessage(target: string, message: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        bridgeTokens(token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        deposits(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        bridgeMessage(target: string, message: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        bridgeTokens(token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        deposits(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
