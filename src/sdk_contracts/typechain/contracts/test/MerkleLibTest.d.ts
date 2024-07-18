import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace HubPoolInterface {
    type PoolRebalanceLeafStruct = {
        chainId: BigNumberish;
        bundleLpFees: BigNumberish[];
        netSendAmounts: BigNumberish[];
        runningBalances: BigNumberish[];
        groupIndex: BigNumberish;
        leafId: BigNumberish;
        l1Tokens: string[];
    };
    type PoolRebalanceLeafStructOutput = [
        BigNumber,
        BigNumber[],
        BigNumber[],
        BigNumber[],
        BigNumber,
        number,
        string[]
    ] & {
        chainId: BigNumber;
        bundleLpFees: BigNumber[];
        netSendAmounts: BigNumber[];
        runningBalances: BigNumber[];
        groupIndex: BigNumber;
        leafId: number;
        l1Tokens: string[];
    };
}
export declare namespace SpokePoolInterface {
    type RelayerRefundLeafStruct = {
        amountToReturn: BigNumberish;
        chainId: BigNumberish;
        refundAmounts: BigNumberish[];
        leafId: BigNumberish;
        l2TokenAddress: string;
        refundAddresses: string[];
    };
    type RelayerRefundLeafStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber[],
        number,
        string,
        string[]
    ] & {
        amountToReturn: BigNumber;
        chainId: BigNumber;
        refundAmounts: BigNumber[];
        leafId: number;
        l2TokenAddress: string;
        refundAddresses: string[];
    };
}
export declare namespace MockV2SpokePoolInterface {
    type RelayDataStruct = {
        depositor: string;
        recipient: string;
        destinationToken: string;
        amount: BigNumberish;
        originChainId: BigNumberish;
        destinationChainId: BigNumberish;
        realizedLpFeePct: BigNumberish;
        relayerFeePct: BigNumberish;
        depositId: BigNumberish;
        message: BytesLike;
    };
    type RelayDataStructOutput = [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        string
    ] & {
        depositor: string;
        recipient: string;
        destinationToken: string;
        amount: BigNumber;
        originChainId: BigNumber;
        destinationChainId: BigNumber;
        realizedLpFeePct: BigNumber;
        relayerFeePct: BigNumber;
        depositId: number;
        message: string;
    };
    type SlowFillStruct = {
        relayData: MockV2SpokePoolInterface.RelayDataStruct;
        payoutAdjustmentPct: BigNumberish;
    };
    type SlowFillStructOutput = [
        MockV2SpokePoolInterface.RelayDataStructOutput,
        BigNumber
    ] & {
        relayData: MockV2SpokePoolInterface.RelayDataStructOutput;
        payoutAdjustmentPct: BigNumber;
    };
}
export declare namespace V3SpokePoolInterface {
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
export interface MerkleLibTestInterface extends utils.Interface {
    functions: {
        "claimedBitMap(uint256)": FunctionFragment;
        "claimedBitMap1D()": FunctionFragment;
        "isClaimed(uint256)": FunctionFragment;
        "isClaimed1D(uint8)": FunctionFragment;
        "setClaimed(uint256)": FunctionFragment;
        "setClaimed1D(uint8)": FunctionFragment;
        "verifyPoolRebalance(bytes32,(uint256,uint256[],int256[],int256[],uint256,uint8,address[]),bytes32[])": FunctionFragment;
        "verifyRelayerRefund(bytes32,(uint256,uint256,uint256[],uint32,address,address[]),bytes32[])": FunctionFragment;
        "verifySlowRelayFulfillment(bytes32,((address,address,address,uint256,uint256,uint256,int64,int64,uint32,bytes),int256),bytes32[])": FunctionFragment;
        "verifyV3SlowRelayFulfillment(bytes32,((address,address,address,address,address,uint256,uint256,uint256,uint32,uint32,uint32,bytes),uint256,uint256),bytes32[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "claimedBitMap" | "claimedBitMap1D" | "isClaimed" | "isClaimed1D" | "setClaimed" | "setClaimed1D" | "verifyPoolRebalance" | "verifyRelayerRefund" | "verifySlowRelayFulfillment" | "verifyV3SlowRelayFulfillment"): FunctionFragment;
    encodeFunctionData(functionFragment: "claimedBitMap", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimedBitMap1D", values?: undefined): string;
    encodeFunctionData(functionFragment: "isClaimed", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isClaimed1D", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setClaimed", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setClaimed1D", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "verifyPoolRebalance", values: [BytesLike, HubPoolInterface.PoolRebalanceLeafStruct, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "verifyRelayerRefund", values: [BytesLike, SpokePoolInterface.RelayerRefundLeafStruct, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "verifySlowRelayFulfillment", values: [BytesLike, MockV2SpokePoolInterface.SlowFillStruct, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "verifyV3SlowRelayFulfillment", values: [BytesLike, V3SpokePoolInterface.V3SlowFillStruct, BytesLike[]]): string;
    decodeFunctionResult(functionFragment: "claimedBitMap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimedBitMap1D", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isClaimed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isClaimed1D", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setClaimed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setClaimed1D", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyPoolRebalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyRelayerRefund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifySlowRelayFulfillment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyV3SlowRelayFulfillment", data: BytesLike): Result;
    events: {};
}
export interface MerkleLibTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MerkleLibTestInterface;
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
        claimedBitMap(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        claimedBitMap1D(overrides?: CallOverrides): Promise<[BigNumber]>;
        isClaimed(index: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        isClaimed1D(index: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        setClaimed(index: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setClaimed1D(index: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        verifyPoolRebalance(root: BytesLike, rebalance: HubPoolInterface.PoolRebalanceLeafStruct, proof: BytesLike[], overrides?: CallOverrides): Promise<[boolean]>;
        verifyRelayerRefund(root: BytesLike, refund: SpokePoolInterface.RelayerRefundLeafStruct, proof: BytesLike[], overrides?: CallOverrides): Promise<[boolean]>;
        verifySlowRelayFulfillment(root: BytesLike, slowFill: MockV2SpokePoolInterface.SlowFillStruct, proof: BytesLike[], overrides?: CallOverrides): Promise<[boolean]>;
        verifyV3SlowRelayFulfillment(root: BytesLike, slowFill: V3SpokePoolInterface.V3SlowFillStruct, proof: BytesLike[], overrides?: CallOverrides): Promise<[boolean]>;
    };
    claimedBitMap(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    claimedBitMap1D(overrides?: CallOverrides): Promise<BigNumber>;
    isClaimed(index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    isClaimed1D(index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    setClaimed(index: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setClaimed1D(index: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    verifyPoolRebalance(root: BytesLike, rebalance: HubPoolInterface.PoolRebalanceLeafStruct, proof: BytesLike[], overrides?: CallOverrides): Promise<boolean>;
    verifyRelayerRefund(root: BytesLike, refund: SpokePoolInterface.RelayerRefundLeafStruct, proof: BytesLike[], overrides?: CallOverrides): Promise<boolean>;
    verifySlowRelayFulfillment(root: BytesLike, slowFill: MockV2SpokePoolInterface.SlowFillStruct, proof: BytesLike[], overrides?: CallOverrides): Promise<boolean>;
    verifyV3SlowRelayFulfillment(root: BytesLike, slowFill: V3SpokePoolInterface.V3SlowFillStruct, proof: BytesLike[], overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        claimedBitMap(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        claimedBitMap1D(overrides?: CallOverrides): Promise<BigNumber>;
        isClaimed(index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        isClaimed1D(index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        setClaimed(index: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setClaimed1D(index: BigNumberish, overrides?: CallOverrides): Promise<void>;
        verifyPoolRebalance(root: BytesLike, rebalance: HubPoolInterface.PoolRebalanceLeafStruct, proof: BytesLike[], overrides?: CallOverrides): Promise<boolean>;
        verifyRelayerRefund(root: BytesLike, refund: SpokePoolInterface.RelayerRefundLeafStruct, proof: BytesLike[], overrides?: CallOverrides): Promise<boolean>;
        verifySlowRelayFulfillment(root: BytesLike, slowFill: MockV2SpokePoolInterface.SlowFillStruct, proof: BytesLike[], overrides?: CallOverrides): Promise<boolean>;
        verifyV3SlowRelayFulfillment(root: BytesLike, slowFill: V3SpokePoolInterface.V3SlowFillStruct, proof: BytesLike[], overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        claimedBitMap(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        claimedBitMap1D(overrides?: CallOverrides): Promise<BigNumber>;
        isClaimed(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isClaimed1D(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setClaimed(index: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setClaimed1D(index: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        verifyPoolRebalance(root: BytesLike, rebalance: HubPoolInterface.PoolRebalanceLeafStruct, proof: BytesLike[], overrides?: CallOverrides): Promise<BigNumber>;
        verifyRelayerRefund(root: BytesLike, refund: SpokePoolInterface.RelayerRefundLeafStruct, proof: BytesLike[], overrides?: CallOverrides): Promise<BigNumber>;
        verifySlowRelayFulfillment(root: BytesLike, slowFill: MockV2SpokePoolInterface.SlowFillStruct, proof: BytesLike[], overrides?: CallOverrides): Promise<BigNumber>;
        verifyV3SlowRelayFulfillment(root: BytesLike, slowFill: V3SpokePoolInterface.V3SlowFillStruct, proof: BytesLike[], overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        claimedBitMap(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimedBitMap1D(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isClaimed(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isClaimed1D(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setClaimed(index: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setClaimed1D(index: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        verifyPoolRebalance(root: BytesLike, rebalance: HubPoolInterface.PoolRebalanceLeafStruct, proof: BytesLike[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifyRelayerRefund(root: BytesLike, refund: SpokePoolInterface.RelayerRefundLeafStruct, proof: BytesLike[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifySlowRelayFulfillment(root: BytesLike, slowFill: MockV2SpokePoolInterface.SlowFillStruct, proof: BytesLike[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifyV3SlowRelayFulfillment(root: BytesLike, slowFill: V3SpokePoolInterface.V3SlowFillStruct, proof: BytesLike[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
