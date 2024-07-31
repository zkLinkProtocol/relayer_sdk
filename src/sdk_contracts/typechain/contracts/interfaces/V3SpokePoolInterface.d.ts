import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace V3SpokePoolInterface {
    type V3RelayExecutionEventInfoStruct = {
        updatedRecipient: string;
        updatedMessage: BytesLike;
        updatedOutputAmount: BigNumberish;
        fillType: BigNumberish;
    };
    type V3RelayExecutionEventInfoStructOutput = [
        string,
        string,
        BigNumber,
        number
    ] & {
        updatedRecipient: string;
        updatedMessage: string;
        updatedOutputAmount: BigNumber;
        fillType: number;
    };
    type V3RelayDataStruct = {
        depositor: string;
        recipient: string;
        exclusiveRelayer: string;
        inputToken: string;
        outputToken: string;
        inputAmount: BigNumberish;
        outputAmount: BigNumberish;
        originChainId: BigNumberish;
        depositId: BigNumberish;
        fillDeadline: BigNumberish;
        exclusivityDeadline: BigNumberish;
        message: BytesLike;
    };
    type V3RelayDataStructOutput = [
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        number,
        number,
        string
    ] & {
        depositor: string;
        recipient: string;
        exclusiveRelayer: string;
        inputToken: string;
        outputToken: string;
        inputAmount: BigNumber;
        outputAmount: BigNumber;
        originChainId: BigNumber;
        depositId: number;
        fillDeadline: number;
        exclusivityDeadline: number;
        message: string;
    };
    type V3SlowFillStruct = {
        relayData: V3SpokePoolInterface.V3RelayDataStruct;
        chainId: BigNumberish;
        updatedOutputAmount: BigNumberish;
    };
    type V3SlowFillStructOutput = [
        V3SpokePoolInterface.V3RelayDataStructOutput,
        BigNumber,
        BigNumber
    ] & {
        relayData: V3SpokePoolInterface.V3RelayDataStructOutput;
        chainId: BigNumber;
        updatedOutputAmount: BigNumber;
    };
}
export interface V3SpokePoolInterfaceInterface extends utils.Interface {
    functions: {
        "depositV3(address,address,address,address,uint256,uint256,uint256,address,uint32,uint32,uint32,bytes)": FunctionFragment;
        "depositV3Now(address,address,address,address,uint256,uint256,uint256,address,uint32,uint32,bytes)": FunctionFragment;
        "executeV3SlowRelayLeaf(((address,address,address,address,address,uint256,uint256,uint256,uint32,uint32,uint32,bytes),uint256,uint256),uint32,bytes32[])": FunctionFragment;
        "fillV3Relay((address,address,address,address,address,uint256,uint256,uint256,uint32,uint32,uint32,bytes),uint256)": FunctionFragment;
        "testFillv3Relay((address,address,address,address,address,uint256,uint256,uint256,uint32,uint32,uint32,bytes),uint256,uint256)": FunctionFragment;
        "fillV3RelayWithUpdatedDeposit((address,address,address,address,address,uint256,uint256,uint256,uint32,uint32,uint32,bytes),uint256,uint256,address,bytes,bytes)": FunctionFragment;
        "requestV3SlowFill((address,address,address,address,address,uint256,uint256,uint256,uint32,uint32,uint32,bytes))": FunctionFragment;
        "speedUpV3Deposit(address,uint32,uint256,address,bytes,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "depositV3" | "depositV3Now" | "executeV3SlowRelayLeaf" | "fillV3Relay" | "fillV3RelayWithUpdatedDeposit" | "requestV3SlowFill" | "speedUpV3Deposit"): FunctionFragment;
    encodeFunctionData(functionFragment: "depositV3", values: [
        string,
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "depositV3Now", values: [
        string,
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "executeV3SlowRelayLeaf", values: [V3SpokePoolInterface.V3SlowFillStruct, BigNumberish, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "fillV3Relay", values: [V3SpokePoolInterface.V3RelayDataStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: "testFillv3Relay", values: [V3SpokePoolInterface.V3RelayDataStruct, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "fillV3RelayWithUpdatedDeposit", values: [
        V3SpokePoolInterface.V3RelayDataStruct,
        BigNumberish,
        BigNumberish,
        string,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "requestV3SlowFill", values: [V3SpokePoolInterface.V3RelayDataStruct]): string;
    encodeFunctionData(functionFragment: "speedUpV3Deposit", values: [string, BigNumberish, BigNumberish, string, BytesLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "depositV3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositV3Now", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeV3SlowRelayLeaf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fillV3Relay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testFillv3Relay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fillV3RelayWithUpdatedDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestV3SlowFill", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "speedUpV3Deposit", data: BytesLike): Result;
    events: {
        "FilledV3Relay(address,address,uint256,uint256,uint256,uint256,uint32,uint32,uint32,address,address,address,address,bytes,tuple)": EventFragment;
        "RequestedSpeedUpV3Deposit(uint256,uint32,address,address,bytes,bytes)": EventFragment;
        "RequestedV3SlowFill(address,address,uint256,uint256,uint256,uint32,uint32,uint32,address,address,address,bytes)": EventFragment;
        "V3FundsDeposited(address,address,uint256,uint256,uint256,uint32,uint32,uint32,uint32,address,address,address,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "FilledV3Relay"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RequestedSpeedUpV3Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RequestedV3SlowFill"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "V3FundsDeposited"): EventFragment;
}
export interface FilledV3RelayEventObject {
    inputToken: string;
    outputToken: string;
    inputAmount: BigNumber;
    outputAmount: BigNumber;
    repaymentChainId: BigNumber;
    originChainId: BigNumber;
    depositId: number;
    fillDeadline: number;
    exclusivityDeadline: number;
    exclusiveRelayer: string;
    relayer: string;
    depositor: string;
    recipient: string;
    message: string;
    relayExecutionInfo: V3SpokePoolInterface.V3RelayExecutionEventInfoStructOutput;
}
export declare type FilledV3RelayEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    number,
    number,
    string,
    string,
    string,
    string,
    string,
    V3SpokePoolInterface.V3RelayExecutionEventInfoStructOutput
], FilledV3RelayEventObject>;
export declare type FilledV3RelayEventFilter = TypedEventFilter<FilledV3RelayEvent>;
export interface RequestedSpeedUpV3DepositEventObject {
    updatedOutputAmount: BigNumber;
    depositId: number;
    depositor: string;
    updatedRecipient: string;
    updatedMessage: string;
    depositorSignature: string;
}
export declare type RequestedSpeedUpV3DepositEvent = TypedEvent<[
    BigNumber,
    number,
    string,
    string,
    string,
    string
], RequestedSpeedUpV3DepositEventObject>;
export declare type RequestedSpeedUpV3DepositEventFilter = TypedEventFilter<RequestedSpeedUpV3DepositEvent>;
export interface RequestedV3SlowFillEventObject {
    inputToken: string;
    outputToken: string;
    inputAmount: BigNumber;
    outputAmount: BigNumber;
    originChainId: BigNumber;
    depositId: number;
    fillDeadline: number;
    exclusivityDeadline: number;
    exclusiveRelayer: string;
    depositor: string;
    recipient: string;
    message: string;
}
export declare type RequestedV3SlowFillEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    number,
    number,
    string,
    string,
    string,
    string
], RequestedV3SlowFillEventObject>;
export declare type RequestedV3SlowFillEventFilter = TypedEventFilter<RequestedV3SlowFillEvent>;
export interface V3FundsDepositedEventObject {
    inputToken: string;
    outputToken: string;
    inputAmount: BigNumber;
    outputAmount: BigNumber;
    destinationChainId: BigNumber;
    depositId: number;
    quoteTimestamp: number;
    fillDeadline: number;
    exclusivityDeadline: number;
    depositor: string;
    recipient: string;
    exclusiveRelayer: string;
    message: string;
}
export declare type V3FundsDepositedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    number,
    number,
    number,
    string,
    string,
    string,
    string
], V3FundsDepositedEventObject>;
export declare type V3FundsDepositedEventFilter = TypedEventFilter<V3FundsDepositedEvent>;
export interface V3SpokePoolInterface extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: V3SpokePoolInterfaceInterface;
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
        depositV3(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, quoteTimestamp: BigNumberish, fillDeadline: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositV3Now(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, fillDeadlineOffset: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        executeV3SlowRelayLeaf(slowFillLeaf: V3SpokePoolInterface.V3SlowFillStruct, rootBundleId: BigNumberish, proof: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        fillV3Relay(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        testFillv3Relay(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, _l2TxGasLimit: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        fillV3RelayWithUpdatedDeposit(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        requestV3SlowFill(relayData: V3SpokePoolInterface.V3RelayDataStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        speedUpV3Deposit(depositor: string, depositId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    depositV3(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, quoteTimestamp: BigNumberish, fillDeadline: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositV3Now(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, fillDeadlineOffset: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    executeV3SlowRelayLeaf(slowFillLeaf: V3SpokePoolInterface.V3SlowFillStruct, rootBundleId: BigNumberish, proof: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    fillV3Relay(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    testFillv3Relay(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, _l2TxGasLimit: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    fillV3RelayWithUpdatedDeposit(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    requestV3SlowFill(relayData: V3SpokePoolInterface.V3RelayDataStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    speedUpV3Deposit(depositor: string, depositId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        depositV3(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, quoteTimestamp: BigNumberish, fillDeadline: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: CallOverrides): Promise<void>;
        depositV3Now(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, fillDeadlineOffset: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: CallOverrides): Promise<void>;
        executeV3SlowRelayLeaf(slowFillLeaf: V3SpokePoolInterface.V3SlowFillStruct, rootBundleId: BigNumberish, proof: BytesLike[], overrides?: CallOverrides): Promise<void>;
        fillV3Relay(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        testFillv3Relay(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, _l2TxGasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        fillV3RelayWithUpdatedDeposit(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: CallOverrides): Promise<void>;
        requestV3SlowFill(relayData: V3SpokePoolInterface.V3RelayDataStruct, overrides?: CallOverrides): Promise<void>;
        speedUpV3Deposit(depositor: string, depositId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "FilledV3Relay(address,address,uint256,uint256,uint256,uint256,uint32,uint32,uint32,address,address,address,address,bytes,tuple)"(inputToken?: null, outputToken?: null, inputAmount?: null, outputAmount?: null, repaymentChainId?: null, originChainId?: BigNumberish | null, depositId?: BigNumberish | null, fillDeadline?: null, exclusivityDeadline?: null, exclusiveRelayer?: null, relayer?: string | null, depositor?: null, recipient?: null, message?: null, relayExecutionInfo?: null): FilledV3RelayEventFilter;
        FilledV3Relay(inputToken?: null, outputToken?: null, inputAmount?: null, outputAmount?: null, repaymentChainId?: null, originChainId?: BigNumberish | null, depositId?: BigNumberish | null, fillDeadline?: null, exclusivityDeadline?: null, exclusiveRelayer?: null, relayer?: string | null, depositor?: null, recipient?: null, message?: null, relayExecutionInfo?: null): FilledV3RelayEventFilter;
        "RequestedSpeedUpV3Deposit(uint256,uint32,address,address,bytes,bytes)"(updatedOutputAmount?: null, depositId?: BigNumberish | null, depositor?: string | null, updatedRecipient?: null, updatedMessage?: null, depositorSignature?: null): RequestedSpeedUpV3DepositEventFilter;
        RequestedSpeedUpV3Deposit(updatedOutputAmount?: null, depositId?: BigNumberish | null, depositor?: string | null, updatedRecipient?: null, updatedMessage?: null, depositorSignature?: null): RequestedSpeedUpV3DepositEventFilter;
        "RequestedV3SlowFill(address,address,uint256,uint256,uint256,uint32,uint32,uint32,address,address,address,bytes)"(inputToken?: null, outputToken?: null, inputAmount?: null, outputAmount?: null, originChainId?: BigNumberish | null, depositId?: BigNumberish | null, fillDeadline?: null, exclusivityDeadline?: null, exclusiveRelayer?: null, depositor?: null, recipient?: null, message?: null): RequestedV3SlowFillEventFilter;
        RequestedV3SlowFill(inputToken?: null, outputToken?: null, inputAmount?: null, outputAmount?: null, originChainId?: BigNumberish | null, depositId?: BigNumberish | null, fillDeadline?: null, exclusivityDeadline?: null, exclusiveRelayer?: null, depositor?: null, recipient?: null, message?: null): RequestedV3SlowFillEventFilter;
        "V3FundsDeposited(address,address,uint256,uint256,uint256,uint32,uint32,uint32,uint32,address,address,address,bytes)"(inputToken?: null, outputToken?: null, inputAmount?: null, outputAmount?: null, destinationChainId?: BigNumberish | null, depositId?: BigNumberish | null, quoteTimestamp?: null, fillDeadline?: null, exclusivityDeadline?: null, depositor?: string | null, recipient?: null, exclusiveRelayer?: null, message?: null): V3FundsDepositedEventFilter;
        V3FundsDeposited(inputToken?: null, outputToken?: null, inputAmount?: null, outputAmount?: null, destinationChainId?: BigNumberish | null, depositId?: BigNumberish | null, quoteTimestamp?: null, fillDeadline?: null, exclusivityDeadline?: null, depositor?: string | null, recipient?: null, exclusiveRelayer?: null, message?: null): V3FundsDepositedEventFilter;
    };
    estimateGas: {
        depositV3(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, quoteTimestamp: BigNumberish, fillDeadline: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositV3Now(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, fillDeadlineOffset: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        executeV3SlowRelayLeaf(slowFillLeaf: V3SpokePoolInterface.V3SlowFillStruct, rootBundleId: BigNumberish, proof: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        fillV3Relay(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        testFillv3Relay(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, _l2TxGasLimit: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        fillV3RelayWithUpdatedDeposit(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        requestV3SlowFill(relayData: V3SpokePoolInterface.V3RelayDataStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        speedUpV3Deposit(depositor: string, depositId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        depositV3(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, quoteTimestamp: BigNumberish, fillDeadline: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositV3Now(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, fillDeadlineOffset: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        executeV3SlowRelayLeaf(slowFillLeaf: V3SpokePoolInterface.V3SlowFillStruct, rootBundleId: BigNumberish, proof: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        fillV3Relay(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        testFillv3Relay(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, _l2TxGasLimit: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        fillV3RelayWithUpdatedDeposit(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        requestV3SlowFill(relayData: V3SpokePoolInterface.V3RelayDataStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        speedUpV3Deposit(depositor: string, depositId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
