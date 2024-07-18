import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../../common";
export declare namespace SkinnyOptimisticOracleInterface {
    type RequestStruct = {
        proposer: string;
        disputer: string;
        currency: string;
        settled: boolean;
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
        proposedPrice: BigNumber;
        resolvedPrice: BigNumber;
        expirationTime: BigNumber;
        reward: BigNumber;
        finalFee: BigNumber;
        bond: BigNumber;
        customLiveness: BigNumber;
    };
}
export interface SkinnyOptimisticOracleInterfaceInterface extends utils.Interface {
    functions: {
        "ancillaryBytesLimit()": FunctionFragment;
        "disputePrice(address,bytes32,uint32,bytes,(address,address,address,bool,int256,int256,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
        "disputePriceFor(bytes32,uint32,bytes,(address,address,address,bool,int256,int256,uint256,uint256,uint256,uint256,uint256),address,address)": FunctionFragment;
        "getState(address,bytes32,uint32,bytes,(address,address,address,bool,int256,int256,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
        "hasPrice(address,bytes32,uint32,bytes,(address,address,address,bool,int256,int256,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
        "proposePrice(address,bytes32,uint32,bytes,(address,address,address,bool,int256,int256,uint256,uint256,uint256,uint256,uint256),int256)": FunctionFragment;
        "proposePriceFor(address,bytes32,uint32,bytes,(address,address,address,bool,int256,int256,uint256,uint256,uint256,uint256,uint256),address,int256)": FunctionFragment;
        "requestAndProposePriceFor(bytes32,uint32,bytes,address,uint256,uint256,uint256,address,int256)": FunctionFragment;
        "requestPrice(bytes32,uint32,bytes,address,uint256,uint256,uint256)": FunctionFragment;
        "settle(address,bytes32,uint32,bytes,(address,address,address,bool,int256,int256,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
        "stampAncillaryData(bytes,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ancillaryBytesLimit" | "disputePrice" | "disputePriceFor" | "getState" | "hasPrice" | "proposePrice" | "proposePriceFor" | "requestAndProposePriceFor" | "requestPrice" | "settle" | "stampAncillaryData"): FunctionFragment;
    encodeFunctionData(functionFragment: "ancillaryBytesLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "disputePrice", values: [
        string,
        BytesLike,
        BigNumberish,
        BytesLike,
        SkinnyOptimisticOracleInterface.RequestStruct
    ]): string;
    encodeFunctionData(functionFragment: "disputePriceFor", values: [
        BytesLike,
        BigNumberish,
        BytesLike,
        SkinnyOptimisticOracleInterface.RequestStruct,
        string,
        string
    ]): string;
    encodeFunctionData(functionFragment: "getState", values: [
        string,
        BytesLike,
        BigNumberish,
        BytesLike,
        SkinnyOptimisticOracleInterface.RequestStruct
    ]): string;
    encodeFunctionData(functionFragment: "hasPrice", values: [
        string,
        BytesLike,
        BigNumberish,
        BytesLike,
        SkinnyOptimisticOracleInterface.RequestStruct
    ]): string;
    encodeFunctionData(functionFragment: "proposePrice", values: [
        string,
        BytesLike,
        BigNumberish,
        BytesLike,
        SkinnyOptimisticOracleInterface.RequestStruct,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "proposePriceFor", values: [
        string,
        BytesLike,
        BigNumberish,
        BytesLike,
        SkinnyOptimisticOracleInterface.RequestStruct,
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "requestAndProposePriceFor", values: [
        BytesLike,
        BigNumberish,
        BytesLike,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "requestPrice", values: [
        BytesLike,
        BigNumberish,
        BytesLike,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "settle", values: [
        string,
        BytesLike,
        BigNumberish,
        BytesLike,
        SkinnyOptimisticOracleInterface.RequestStruct
    ]): string;
    encodeFunctionData(functionFragment: "stampAncillaryData", values: [BytesLike, string]): string;
    decodeFunctionResult(functionFragment: "ancillaryBytesLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputePrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disputePriceFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposePrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposePriceFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestAndProposePriceFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stampAncillaryData", data: BytesLike): Result;
    events: {};
}
export interface SkinnyOptimisticOracleInterface extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SkinnyOptimisticOracleInterfaceInterface;
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
        disputePrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        disputePriceFor(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, disputer: string, requester: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getState(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        hasPrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        proposePrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, proposedPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        proposePriceFor(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, proposer: string, proposedPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        requestAndProposePriceFor(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, currency: string, reward: BigNumberish, bond: BigNumberish, customLiveness: BigNumberish, proposer: string, proposedPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        requestPrice(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, currency: string, reward: BigNumberish, bond: BigNumberish, customLiveness: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        settle(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        stampAncillaryData(ancillaryData: BytesLike, requester: string, overrides?: CallOverrides): Promise<[string]>;
    };
    ancillaryBytesLimit(overrides?: CallOverrides): Promise<BigNumber>;
    disputePrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    disputePriceFor(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, disputer: string, requester: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getState(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    hasPrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    proposePrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, proposedPrice: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    proposePriceFor(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, proposer: string, proposedPrice: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    requestAndProposePriceFor(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, currency: string, reward: BigNumberish, bond: BigNumberish, customLiveness: BigNumberish, proposer: string, proposedPrice: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    requestPrice(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, currency: string, reward: BigNumberish, bond: BigNumberish, customLiveness: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    settle(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    stampAncillaryData(ancillaryData: BytesLike, requester: string, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        ancillaryBytesLimit(overrides?: CallOverrides): Promise<BigNumber>;
        disputePrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, overrides?: CallOverrides): Promise<BigNumber>;
        disputePriceFor(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, disputer: string, requester: string, overrides?: CallOverrides): Promise<BigNumber>;
        getState(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, overrides?: CallOverrides): Promise<number>;
        hasPrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, overrides?: CallOverrides): Promise<boolean>;
        proposePrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, proposedPrice: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposePriceFor(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, proposer: string, proposedPrice: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        requestAndProposePriceFor(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, currency: string, reward: BigNumberish, bond: BigNumberish, customLiveness: BigNumberish, proposer: string, proposedPrice: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        requestPrice(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, currency: string, reward: BigNumberish, bond: BigNumberish, customLiveness: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        settle(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            payout: BigNumber;
            resolvedPrice: BigNumber;
        }>;
        stampAncillaryData(ancillaryData: BytesLike, requester: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        ancillaryBytesLimit(overrides?: CallOverrides): Promise<BigNumber>;
        disputePrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        disputePriceFor(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, disputer: string, requester: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getState(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        hasPrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        proposePrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, proposedPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        proposePriceFor(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, proposer: string, proposedPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        requestAndProposePriceFor(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, currency: string, reward: BigNumberish, bond: BigNumberish, customLiveness: BigNumberish, proposer: string, proposedPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        requestPrice(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, currency: string, reward: BigNumberish, bond: BigNumberish, customLiveness: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        settle(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        stampAncillaryData(ancillaryData: BytesLike, requester: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        ancillaryBytesLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        disputePrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        disputePriceFor(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, disputer: string, requester: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getState(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        hasPrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        proposePrice(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, proposedPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        proposePriceFor(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, proposer: string, proposedPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        requestAndProposePriceFor(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, currency: string, reward: BigNumberish, bond: BigNumberish, customLiveness: BigNumberish, proposer: string, proposedPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        requestPrice(identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, currency: string, reward: BigNumberish, bond: BigNumberish, customLiveness: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        settle(requester: string, identifier: BytesLike, timestamp: BigNumberish, ancillaryData: BytesLike, request: SkinnyOptimisticOracleInterface.RequestStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        stampAncillaryData(ancillaryData: BytesLike, requester: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
