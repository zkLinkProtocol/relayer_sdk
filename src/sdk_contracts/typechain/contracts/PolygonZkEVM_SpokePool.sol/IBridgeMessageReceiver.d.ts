import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface IBridgeMessageReceiverInterface extends utils.Interface {
    functions: {
        "onMessageReceived(address,uint32,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "onMessageReceived"): FunctionFragment;
    encodeFunctionData(functionFragment: "onMessageReceived", values: [string, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "onMessageReceived", data: BytesLike): Result;
    events: {};
}
export interface IBridgeMessageReceiver extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IBridgeMessageReceiverInterface;
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
        onMessageReceived(originAddress: string, originNetwork: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    onMessageReceived(originAddress: string, originNetwork: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        onMessageReceived(originAddress: string, originNetwork: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        onMessageReceived(originAddress: string, originNetwork: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        onMessageReceived(originAddress: string, originNetwork: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
