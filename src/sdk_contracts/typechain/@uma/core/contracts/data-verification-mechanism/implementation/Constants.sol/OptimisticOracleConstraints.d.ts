import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../../../common";
export interface OptimisticOracleConstraintsInterface extends utils.Interface {
    functions: {
        "ancillaryBytesLimit()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ancillaryBytesLimit"): FunctionFragment;
    encodeFunctionData(functionFragment: "ancillaryBytesLimit", values?: undefined): string;
    decodeFunctionResult(functionFragment: "ancillaryBytesLimit", data: BytesLike): Result;
    events: {};
}
export interface OptimisticOracleConstraints extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OptimisticOracleConstraintsInterface;
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
        ancillaryBytesLimit(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    ancillaryBytesLimit(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        ancillaryBytesLimit(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        ancillaryBytesLimit(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        ancillaryBytesLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
