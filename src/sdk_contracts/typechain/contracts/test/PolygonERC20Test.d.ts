import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface PolygonERC20TestInterface extends utils.Interface {
    functions: {
        "addBurner(address)": FunctionFragment;
        "addMember(uint256,address)": FunctionFragment;
        "addMinter(address)": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "burnFrom(address,uint256)": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "getMember(uint256)": FunctionFragment;
        "holdsRole(uint256,address)": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "mint(address,uint256)": FunctionFragment;
        "name()": FunctionFragment;
        "removeMember(uint256,address)": FunctionFragment;
        "renounceMembership(uint256)": FunctionFragment;
        "resetMember(uint256,address)": FunctionFragment;
        "resetOwner(address)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "withdraw(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addBurner" | "addMember" | "addMinter" | "allowance" | "approve" | "balanceOf" | "burn" | "burnFrom" | "decimals" | "decreaseAllowance" | "getMember" | "holdsRole" | "increaseAllowance" | "mint" | "name" | "removeMember" | "renounceMembership" | "resetMember" | "resetOwner" | "symbol" | "totalSupply" | "transfer" | "transferFrom" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "addBurner", values: [string]): string;
    encodeFunctionData(functionFragment: "addMember", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "addMinter", values: [string]): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "burnFrom", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getMember", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "holdsRole", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeMember", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "renounceMembership", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "resetMember", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "resetOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "addBurner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addMinter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "holdsRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceMembership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resetMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resetOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "AddedSharedMember(uint256,address,address)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
        "RemovedSharedMember(uint256,address,address)": EventFragment;
        "ResetExclusiveMember(uint256,address,address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddedSharedMember"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemovedSharedMember"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ResetExclusiveMember"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export interface AddedSharedMemberEventObject {
    roleId: BigNumber;
    newMember: string;
    manager: string;
}
export declare type AddedSharedMemberEvent = TypedEvent<[
    BigNumber,
    string,
    string
], AddedSharedMemberEventObject>;
export declare type AddedSharedMemberEventFilter = TypedEventFilter<AddedSharedMemberEvent>;
export interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface RemovedSharedMemberEventObject {
    roleId: BigNumber;
    oldMember: string;
    manager: string;
}
export declare type RemovedSharedMemberEvent = TypedEvent<[
    BigNumber,
    string,
    string
], RemovedSharedMemberEventObject>;
export declare type RemovedSharedMemberEventFilter = TypedEventFilter<RemovedSharedMemberEvent>;
export interface ResetExclusiveMemberEventObject {
    roleId: BigNumber;
    newMember: string;
    manager: string;
}
export declare type ResetExclusiveMemberEvent = TypedEvent<[
    BigNumber,
    string,
    string
], ResetExclusiveMemberEventObject>;
export declare type ResetExclusiveMemberEventFilter = TypedEventFilter<ResetExclusiveMemberEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface PolygonERC20Test extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PolygonERC20TestInterface;
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
        addBurner(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        addMember(roleId: BigNumberish, newMember: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        addMinter(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        burnFrom(recipient: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getMember(roleId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        holdsRole(roleId: BigNumberish, memberToCheck: string, overrides?: CallOverrides): Promise<[boolean]>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        mint(recipient: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        removeMember(roleId: BigNumberish, memberToRemove: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        renounceMembership(roleId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        resetMember(roleId: BigNumberish, newMember: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        resetOwner(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdraw(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    addBurner(account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    addMember(roleId: BigNumberish, newMember: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    addMinter(account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    burn(value: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    burnFrom(recipient: string, value: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getMember(roleId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    holdsRole(roleId: BigNumberish, memberToCheck: string, overrides?: CallOverrides): Promise<boolean>;
    increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    mint(recipient: string, value: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    removeMember(roleId: BigNumberish, memberToRemove: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    renounceMembership(roleId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    resetMember(roleId: BigNumberish, newMember: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    resetOwner(account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdraw(amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        addBurner(account: string, overrides?: CallOverrides): Promise<void>;
        addMember(roleId: BigNumberish, newMember: string, overrides?: CallOverrides): Promise<void>;
        addMinter(account: string, overrides?: CallOverrides): Promise<void>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        burnFrom(recipient: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        getMember(roleId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        holdsRole(roleId: BigNumberish, memberToCheck: string, overrides?: CallOverrides): Promise<boolean>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        mint(recipient: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        name(overrides?: CallOverrides): Promise<string>;
        removeMember(roleId: BigNumberish, memberToRemove: string, overrides?: CallOverrides): Promise<void>;
        renounceMembership(roleId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        resetMember(roleId: BigNumberish, newMember: string, overrides?: CallOverrides): Promise<void>;
        resetOwner(account: string, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        withdraw(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddedSharedMember(uint256,address,address)"(roleId?: BigNumberish | null, newMember?: string | null, manager?: string | null): AddedSharedMemberEventFilter;
        AddedSharedMember(roleId?: BigNumberish | null, newMember?: string | null, manager?: string | null): AddedSharedMemberEventFilter;
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "RemovedSharedMember(uint256,address,address)"(roleId?: BigNumberish | null, oldMember?: string | null, manager?: string | null): RemovedSharedMemberEventFilter;
        RemovedSharedMember(roleId?: BigNumberish | null, oldMember?: string | null, manager?: string | null): RemovedSharedMemberEventFilter;
        "ResetExclusiveMember(uint256,address,address)"(roleId?: BigNumberish | null, newMember?: string | null, manager?: string | null): ResetExclusiveMemberEventFilter;
        ResetExclusiveMember(roleId?: BigNumberish | null, newMember?: string | null, manager?: string | null): ResetExclusiveMemberEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
    };
    estimateGas: {
        addBurner(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        addMember(roleId: BigNumberish, newMember: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        addMinter(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        burnFrom(recipient: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getMember(roleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        holdsRole(roleId: BigNumberish, memberToCheck: string, overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        mint(recipient: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        removeMember(roleId: BigNumberish, memberToRemove: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        renounceMembership(roleId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        resetMember(roleId: BigNumberish, newMember: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        resetOwner(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdraw(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addBurner(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        addMember(roleId: BigNumberish, newMember: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        addMinter(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        burnFrom(recipient: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getMember(roleId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        holdsRole(roleId: BigNumberish, memberToCheck: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        mint(recipient: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeMember(roleId: BigNumberish, memberToRemove: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        renounceMembership(roleId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        resetMember(roleId: BigNumberish, newMember: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        resetOwner(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdraw(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
