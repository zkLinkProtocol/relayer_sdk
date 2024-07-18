import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export declare namespace IPermit2 {
    type TokenPermissionsStruct = {
        token: string;
        amount: BigNumberish;
    };
    type TokenPermissionsStructOutput = [string, BigNumber] & {
        token: string;
        amount: BigNumber;
    };
    type PermitTransferFromStruct = {
        permitted: IPermit2.TokenPermissionsStruct;
        nonce: BigNumberish;
        deadline: BigNumberish;
    };
    type PermitTransferFromStructOutput = [
        IPermit2.TokenPermissionsStructOutput,
        BigNumber,
        BigNumber
    ] & {
        permitted: IPermit2.TokenPermissionsStructOutput;
        nonce: BigNumber;
        deadline: BigNumber;
    };
    type SignatureTransferDetailsStruct = {
        to: string;
        requestedAmount: BigNumberish;
    };
    type SignatureTransferDetailsStructOutput = [string, BigNumber] & {
        to: string;
        requestedAmount: BigNumber;
    };
}
export interface IPermit2Interface extends utils.Interface {
    functions: {
        "permitWitnessTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes32,string,bytes)": FunctionFragment;
        "transferFrom(address,address,uint160,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "permitWitnessTransferFrom" | "transferFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "permitWitnessTransferFrom", values: [
        IPermit2.PermitTransferFromStruct,
        IPermit2.SignatureTransferDetailsStruct,
        string,
        BytesLike,
        string,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "permitWitnessTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    events: {};
}
export interface IPermit2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPermit2Interface;
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
        permitWitnessTransferFrom(permit: IPermit2.PermitTransferFromStruct, transferDetails: IPermit2.SignatureTransferDetailsStruct, owner: string, witness: BytesLike, witnessTypeString: string, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferFrom(from: string, to: string, amount: BigNumberish, token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    permitWitnessTransferFrom(permit: IPermit2.PermitTransferFromStruct, transferDetails: IPermit2.SignatureTransferDetailsStruct, owner: string, witness: BytesLike, witnessTypeString: string, signature: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferFrom(from: string, to: string, amount: BigNumberish, token: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        permitWitnessTransferFrom(permit: IPermit2.PermitTransferFromStruct, transferDetails: IPermit2.SignatureTransferDetailsStruct, owner: string, witness: BytesLike, witnessTypeString: string, signature: BytesLike, overrides?: CallOverrides): Promise<void>;
        transferFrom(from: string, to: string, amount: BigNumberish, token: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        permitWitnessTransferFrom(permit: IPermit2.PermitTransferFromStruct, transferDetails: IPermit2.SignatureTransferDetailsStruct, owner: string, witness: BytesLike, witnessTypeString: string, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferFrom(from: string, to: string, amount: BigNumberish, token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        permitWitnessTransferFrom(permit: IPermit2.PermitTransferFromStruct, transferDetails: IPermit2.SignatureTransferDetailsStruct, owner: string, witness: BytesLike, witnessTypeString: string, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, amount: BigNumberish, token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
