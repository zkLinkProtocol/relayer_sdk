import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../../common";
export declare namespace OptimisticOracleInterface {
    type RequestStruct = {
        proposer: string;
        disputer: string;
        currency: string;
        settled: boolean;
        refundOnDispute: boolean;
        proposedPrice: BigNumberish;
        resolvedPrice: BigNumberish;
        expirationTime: BigNumberish;
        reward: BigNumberish;
        finalFee: BigNumberish;
        bond: BigNumberish;
        customLiveness: BigNumberish;
    };
    type RequestStructOutput = [
        string,
        string,
        string,
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        proposer: string;
        disputer: string;
        currency: string;
        settled: boolean;
        refundOnDispute: boolean;
        proposedPrice: BigNumber;
        resolvedPrice: BigNumber;
        expirationTime: BigNumber;
        reward: BigNumber;
        finalFee: BigNumber;
        bond: BigNumber;
        customLiveness: BigNumber;
    };
}
export interface OptimisticOracleInterfaceInterface extends utils.Interface {
    functions: {
        "ancillaryBytesLimit()": FunctionFragment;
        "defaultLiveness()": FunctionFragment;
        "disputePrice(address,bytes32,uint256,bytes)": FunctionFragment;
        "disputePriceFor(address,address,bytes32,uint256,bytes)": FunctionFragment;
        "finder()": FunctionFragment;
        "getCurrentTime()": FunctionFragment;
        "getRequest(address,bytes32,uint256,bytes)": FunctionFragment;
        "getState(address,bytes32,uint256,bytes)": FunctionFragment;
        "hasPrice(address,bytes32,uint256,bytes)": FunctionFragment;
        "proposePrice(address,bytes32,uint256,bytes,int256)": FunctionFragment;
        "proposePriceFor(address,address,bytes32,uint256,bytes,int256)": FunctionFragment;
        "requestPrice(bytes32,uint256,bytes,address,uint256)": FunctionFragment;
        "requests(bytes32)": FunctionFragment;
        "setBond(bytes32,uint256,bytes,uint256)": FunctionFragment;
        "setCustomLiveness(bytes32,uint256,bytes,uint256)": FunctionFragment;
        "setRefundOnDispute(bytes32,uint256,bytes)": FunctionFragment;
        "settle(address,bytes32,uint256,bytes)": FunctionFragment;
        "settleAndGetPrice(bytes32,uint256,bytes)": FunctionFragment;
        "stampAncillaryData(bytes,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ancillaryBytesLimit" | "defaultLiveness" | "disputePrice" | "disputePriceFor" | "finder" | "getCurrentTime" | "getRequest" | "getState" | "hasPrice" | "proposePrice" | "proposePriceFor" | "requestPrice" | "requests" | "setBond" | "setCustomLiveness" | "setRefundOnDispute" | "settle" | "settleAndGetPrice" | "stampAncillaryData"): FunctionFragment;
    encodeFunctionData(functionFragment: "ancillaryBytesLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "defaultLiveness", values?: undefined): string;
    encodeFunctionData(functionFragment: "disputePrice", values: [string, BytesLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "disputePriceFor", values: [string, string, BytesLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "finder", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRequest", values: [string, BytesLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "getState", values: [string, BytesLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "hasPrice", values: [string, BytesLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "proposePrice", values: [string, BytesLike, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "proposePriceFor", values: [string, string, BytesLike, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "requestPrice", values: [BytesLike, BigNumberish, BytesLike, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "requests", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "setBond", values: [BytesLike, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setCustomLiveness", values: [BytesLike, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setRefundOnDispute", values: [BytesLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "settle", values: [string, BytesLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "settleAndGetPrice", values: [BytesLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "stampAncillaryData", values: [BytesLike, string]): string;
    decodeFunctionResult(functionFragment: "ancillaryBytesLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultLiveness", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputePrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputePriceFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRequest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposePrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposePriceFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requests", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCustomLiveness", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRefundOnDispute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settleAndGetPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stampAncillaryData", data: BytesLike): Result;
    events: {
        "DisputePrice(address,address,address,bytes32,uint256,bytes,int256)": EventFragment;
        "ProposePrice(address,address,bytes32,uint256,bytes,int256,uint256,address)": EventFragment;
        "RequestPrice(address,bytes32,uint256,bytes,address,uint256,uint256)": EventFragment;
        "Settle(address,address,address,bytes32,uint256,bytes,int256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DisputePrice"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposePrice"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RequestPrice"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Settle"): EventFragment;
}
export interface DisputePriceEventObject {
    requester: string;
    proposer: string;
    disputer: string;
    identifier: string;
    timestamp: BigNumber;
    ancillaryData: string;
    proposedPrice: BigNumber;
}
export declare type DisputePriceEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    string,
    BigNumber
], DisputePriceEventObject>;
export declare type DisputePriceEventFilter = TypedEventFilter<DisputePriceEvent>;
export interface ProposePriceEventObject {
    requester: string;
    proposer: string;
    identifier: string;
    timestamp: BigNumber;
    ancillaryData: string;
    proposedPrice: BigNumber;
    expirationTimestamp: BigNumber;
    currency: string;
}
export declare type ProposePriceEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    string
], ProposePriceEventObject>;
export declare type ProposePriceEventFilter = TypedEventFilter<ProposePriceEvent>;
export interface RequestPriceEventObject {
    requester: string;
    identifier: string;
    timestamp: BigNumber;
    ancillaryData: string;
    currency: string;
    reward: BigNumber;
    finalFee: BigNumber;
}
export declare type RequestPriceEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber
], RequestPriceEventObject>;
export declare type RequestPriceEventFilter = TypedEventFilter<RequestPriceEvent>;
export interface SettleEventObject {
    requester: string;
    proposer: string;
    disputer: string;
    identifier: string;
    timestamp: BigNumber;
    ancillaryData: string;
    price: BigNumber;
    payout: BigNumber;
}
export declare type SettleEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber
], SettleEventObject>;
export declare type SettleEventFilter = TypedEventFilter<SettleEvent>;
export interface OptimisticOracleInterface extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OptimisticOracleInterfaceInterface;
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
        defaultLiveness(overrides?: CallOverrides): Promise<[BigNumber]>;
        disputePrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        disputePriceFor(disputer: string, requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        finder(overrides?: CallOverrides): Promise<[string]>;
        getCurrentTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        getRequest(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: CallOverrides): Promise<[OptimisticOracleInterface.RequestStructOutput]>;
        getState(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: CallOverrides): Promise<[number]>;
        hasPrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        proposePrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, proposedPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        proposePriceFor(proposer: string, requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, proposedPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        requestPrice(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, currency: string, reward: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        requests(arg0: BytesLike, overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            boolean,
            boolean,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            proposer: string;
            disputer: string;
            currency: string;
            settled: boolean;
            refundOnDispute: boolean;
            proposedPrice: BigNumber;
            resolvedPrice: BigNumber;
            expirationTime: BigNumber;
            reward: BigNumber;
            finalFee: BigNumber;
            bond: BigNumber;
            customLiveness: BigNumber;
        }>;
        setBond(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, bond: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setCustomLiveness(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, customLiveness: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setRefundOnDispute(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        settle(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        settleAndGetPrice(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        stampAncillaryData(ancillaryData: BytesLike, requester: string, overrides?: CallOverrides): Promise<[string]>;
    };
    ancillaryBytesLimit(overrides?: CallOverrides): Promise<BigNumber>;
    defaultLiveness(overrides?: CallOverrides): Promise<BigNumber>;
    disputePrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    disputePriceFor(disputer: string, requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    finder(overrides?: CallOverrides): Promise<string>;
    getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;
    getRequest(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: CallOverrides): Promise<OptimisticOracleInterface.RequestStructOutput>;
    getState(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: CallOverrides): Promise<number>;
    hasPrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    proposePrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, proposedPrice: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    proposePriceFor(proposer: string, requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, proposedPrice: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    requestPrice(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, currency: string, reward: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    requests(arg0: BytesLike, overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        proposer: string;
        disputer: string;
        currency: string;
        settled: boolean;
        refundOnDispute: boolean;
        proposedPrice: BigNumber;
        resolvedPrice: BigNumber;
        expirationTime: BigNumber;
        reward: BigNumber;
        finalFee: BigNumber;
        bond: BigNumber;
        customLiveness: BigNumber;
    }>;
    setBond(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, bond: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setCustomLiveness(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, customLiveness: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setRefundOnDispute(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    settle(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    settleAndGetPrice(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    stampAncillaryData(ancillaryData: BytesLike, requester: string, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        ancillaryBytesLimit(overrides?: CallOverrides): Promise<BigNumber>;
        defaultLiveness(overrides?: CallOverrides): Promise<BigNumber>;
        disputePrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        disputePriceFor(disputer: string, requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        finder(overrides?: CallOverrides): Promise<string>;
        getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;
        getRequest(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: CallOverrides): Promise<OptimisticOracleInterface.RequestStructOutput>;
        getState(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: CallOverrides): Promise<number>;
        hasPrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        proposePrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, proposedPrice: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposePriceFor(proposer: string, requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, proposedPrice: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        requestPrice(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, currency: string, reward: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        requests(arg0: BytesLike, overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            boolean,
            boolean,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            proposer: string;
            disputer: string;
            currency: string;
            settled: boolean;
            refundOnDispute: boolean;
            proposedPrice: BigNumber;
            resolvedPrice: BigNumber;
            expirationTime: BigNumber;
            reward: BigNumber;
            finalFee: BigNumber;
            bond: BigNumber;
            customLiveness: BigNumber;
        }>;
        setBond(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, bond: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setCustomLiveness(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, customLiveness: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setRefundOnDispute(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: CallOverrides): Promise<void>;
        settle(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        settleAndGetPrice(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        stampAncillaryData(ancillaryData: BytesLike, requester: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "DisputePrice(address,address,address,bytes32,uint256,bytes,int256)"(requester?: string | null, proposer?: string | null, disputer?: string | null, identifier?: null, timestamp?: null, ancillaryData?: null, proposedPrice?: null): DisputePriceEventFilter;
        DisputePrice(requester?: string | null, proposer?: string | null, disputer?: string | null, identifier?: null, timestamp?: null, ancillaryData?: null, proposedPrice?: null): DisputePriceEventFilter;
        "ProposePrice(address,address,bytes32,uint256,bytes,int256,uint256,address)"(requester?: string | null, proposer?: string | null, identifier?: null, timestamp?: null, ancillaryData?: null, proposedPrice?: null, expirationTimestamp?: null, currency?: null): ProposePriceEventFilter;
        ProposePrice(requester?: string | null, proposer?: string | null, identifier?: null, timestamp?: null, ancillaryData?: null, proposedPrice?: null, expirationTimestamp?: null, currency?: null): ProposePriceEventFilter;
        "RequestPrice(address,bytes32,uint256,bytes,address,uint256,uint256)"(requester?: string | null, identifier?: null, timestamp?: null, ancillaryData?: null, currency?: null, reward?: null, finalFee?: null): RequestPriceEventFilter;
        RequestPrice(requester?: string | null, identifier?: null, timestamp?: null, ancillaryData?: null, currency?: null, reward?: null, finalFee?: null): RequestPriceEventFilter;
        "Settle(address,address,address,bytes32,uint256,bytes,int256,uint256)"(requester?: string | null, proposer?: string | null, disputer?: string | null, identifier?: null, timestamp?: null, ancillaryData?: null, price?: null, payout?: null): SettleEventFilter;
        Settle(requester?: string | null, proposer?: string | null, disputer?: string | null, identifier?: null, timestamp?: null, ancillaryData?: null, price?: null, payout?: null): SettleEventFilter;
    };
    estimateGas: {
        ancillaryBytesLimit(overrides?: CallOverrides): Promise<BigNumber>;
        defaultLiveness(overrides?: CallOverrides): Promise<BigNumber>;
        disputePrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        disputePriceFor(disputer: string, requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        finder(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;
        getRequest(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getState(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        hasPrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        proposePrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, proposedPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        proposePriceFor(proposer: string, requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, proposedPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        requestPrice(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, currency: string, reward: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        requests(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        setBond(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, bond: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setCustomLiveness(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, customLiveness: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setRefundOnDispute(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        settle(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        settleAndGetPrice(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        stampAncillaryData(ancillaryData: BytesLike, requester: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        ancillaryBytesLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        defaultLiveness(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        disputePrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        disputePriceFor(disputer: string, requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        finder(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRequest(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getState(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasPrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposePrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, proposedPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        proposePriceFor(proposer: string, requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, proposedPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        requestPrice(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, currency: string, reward: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        requests(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setBond(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, bond: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setCustomLiveness(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, customLiveness: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setRefundOnDispute(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        settle(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        settleAndGetPrice(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        stampAncillaryData(ancillaryData: BytesLike, requester: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
