import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface BondTokenInterface extends utils.Interface {
    functions: {
        "HUB_POOL()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "decimals()": FunctionFragment;
        "deposit()": FunctionFragment;
        "name()": FunctionFragment;
        "owner()": FunctionFragment;
        "proposers(address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setProposer(address,bool)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "withdraw(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "HUB_POOL" | "allowance" | "approve" | "balanceOf" | "decimals" | "deposit" | "name" | "owner" | "proposers" | "renounceOwnership" | "setProposer" | "symbol" | "totalSupply" | "transfer" | "transferFrom" | "transferOwnership" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "HUB_POOL", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposers", values: [string]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setProposer", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "HUB_POOL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProposer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "Deposit(address,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ProposerModified(address,bool)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Withdrawal(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposerModified"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdrawal"): EventFragment;
}
export interface ApprovalEventObject {
    src: string;
    guy: string;
    wad: BigNumber;
}
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface DepositEventObject {
    dst: string;
    wad: BigNumber;
}
export declare type DepositEvent = TypedEvent<[string, BigNumber], DepositEventObject>;
export declare type DepositEventFilter = TypedEventFilter<DepositEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface ProposerModifiedEventObject {
    proposer: string;
    enabled: boolean;
}
export declare type ProposerModifiedEvent = TypedEvent<[
    string,
    boolean
], ProposerModifiedEventObject>;
export declare type ProposerModifiedEventFilter = TypedEventFilter<ProposerModifiedEvent>;
export interface TransferEventObject {
    src: string;
    dst: string;
    wad: BigNumber;
}
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface WithdrawalEventObject {
    src: string;
    wad: BigNumber;
}
export declare type WithdrawalEvent = TypedEvent<[
    string,
    BigNumber
], WithdrawalEventObject>;
export declare type WithdrawalEventFilter = TypedEventFilter<WithdrawalEvent>;
export interface BondToken extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BondTokenInterface;
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
        HUB_POOL(overrides?: CallOverrides): Promise<[string]>;
        allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(guy: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        deposit(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        proposers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setProposer(proposer: string, enabled: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferFrom(src: string, dst: string, amt: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdraw(wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    HUB_POOL(overrides?: CallOverrides): Promise<string>;
    allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(guy: string, wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    decimals(overrides?: CallOverrides): Promise<number>;
    deposit(overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    proposers(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setProposer(proposer: string, enabled: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(dst: string, wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferFrom(src: string, dst: string, amt: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdraw(wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        HUB_POOL(overrides?: CallOverrides): Promise<string>;
        allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(guy: string, wad: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<number>;
        deposit(overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        proposers(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setProposer(proposer: string, enabled: boolean, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(dst: string, wad: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(src: string, dst: string, amt: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        withdraw(wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(src?: string | null, guy?: string | null, wad?: null): ApprovalEventFilter;
        Approval(src?: string | null, guy?: string | null, wad?: null): ApprovalEventFilter;
        "Deposit(address,uint256)"(dst?: string | null, wad?: null): DepositEventFilter;
        Deposit(dst?: string | null, wad?: null): DepositEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "ProposerModified(address,bool)"(proposer?: null, enabled?: null): ProposerModifiedEventFilter;
        ProposerModified(proposer?: null, enabled?: null): ProposerModifiedEventFilter;
        "Transfer(address,address,uint256)"(src?: string | null, dst?: string | null, wad?: null): TransferEventFilter;
        Transfer(src?: string | null, dst?: string | null, wad?: null): TransferEventFilter;
        "Withdrawal(address,uint256)"(src?: string | null, wad?: null): WithdrawalEventFilter;
        Withdrawal(src?: string | null, wad?: null): WithdrawalEventFilter;
    };
    estimateGas: {
        HUB_POOL(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(guy: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        proposers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setProposer(proposer: string, enabled: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferFrom(src: string, dst: string, amt: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdraw(wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        HUB_POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(guy: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposers(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setProposer(proposer: string, enabled: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferFrom(src: string, dst: string, amt: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdraw(wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
