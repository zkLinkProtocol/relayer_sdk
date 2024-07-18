import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../../common";
export interface FinderInterfaceInterface extends utils.Interface {
    functions: {
        "changeImplementationAddress(bytes32,address)": FunctionFragment;
        "getImplementationAddress(bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "changeImplementationAddress" | "getImplementationAddress"): FunctionFragment;
    encodeFunctionData(functionFragment: "changeImplementationAddress", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "getImplementationAddress", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "changeImplementationAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getImplementationAddress", data: BytesLike): Result;
    events: {};
}
export interface FinderInterface extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FinderInterfaceInterface;
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
        changeImplementationAddress(interfaceName: BytesLike, implementationAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getImplementationAddress(interfaceName: BytesLike, overrides?: CallOverrides): Promise<[string]>;
    };
    changeImplementationAddress(interfaceName: BytesLike, implementationAddress: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getImplementationAddress(interfaceName: BytesLike, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        changeImplementationAddress(interfaceName: BytesLike, implementationAddress: string, overrides?: CallOverrides): Promise<void>;
        getImplementationAddress(interfaceName: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        changeImplementationAddress(interfaceName: BytesLike, implementationAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getImplementationAddress(interfaceName: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        changeImplementationAddress(interfaceName: BytesLike, implementationAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getImplementationAddress(interfaceName: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
