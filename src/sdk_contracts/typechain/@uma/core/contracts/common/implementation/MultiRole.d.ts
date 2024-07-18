import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../../common";
export interface MultiRoleInterface extends utils.Interface {
    functions: {
        "addMember(uint256,address)": FunctionFragment;
        "getMember(uint256)": FunctionFragment;
        "holdsRole(uint256,address)": FunctionFragment;
        "removeMember(uint256,address)": FunctionFragment;
        "renounceMembership(uint256)": FunctionFragment;
        "resetMember(uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addMember" | "getMember" | "holdsRole" | "removeMember" | "renounceMembership" | "resetMember"): FunctionFragment;
    encodeFunctionData(functionFragment: "addMember", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "getMember", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "holdsRole", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "removeMember", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "renounceMembership", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "resetMember", values: [BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "addMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "holdsRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceMembership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resetMember", data: BytesLike): Result;
    events: {
        "AddedSharedMember(uint256,address,address)": EventFragment;
        "RemovedSharedMember(uint256,address,address)": EventFragment;
        "ResetExclusiveMember(uint256,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddedSharedMember"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemovedSharedMember"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ResetExclusiveMember"): EventFragment;
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
export interface MultiRole extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MultiRoleInterface;
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
        addMember(roleId: BigNumberish, newMember: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getMember(roleId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        holdsRole(roleId: BigNumberish, memberToCheck: string, overrides?: CallOverrides): Promise<[boolean]>;
        removeMember(roleId: BigNumberish, memberToRemove: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        renounceMembership(roleId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        resetMember(roleId: BigNumberish, newMember: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    addMember(roleId: BigNumberish, newMember: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getMember(roleId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    holdsRole(roleId: BigNumberish, memberToCheck: string, overrides?: CallOverrides): Promise<boolean>;
    removeMember(roleId: BigNumberish, memberToRemove: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    renounceMembership(roleId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    resetMember(roleId: BigNumberish, newMember: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        addMember(roleId: BigNumberish, newMember: string, overrides?: CallOverrides): Promise<void>;
        getMember(roleId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        holdsRole(roleId: BigNumberish, memberToCheck: string, overrides?: CallOverrides): Promise<boolean>;
        removeMember(roleId: BigNumberish, memberToRemove: string, overrides?: CallOverrides): Promise<void>;
        renounceMembership(roleId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        resetMember(roleId: BigNumberish, newMember: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddedSharedMember(uint256,address,address)"(roleId?: BigNumberish | null, newMember?: string | null, manager?: string | null): AddedSharedMemberEventFilter;
        AddedSharedMember(roleId?: BigNumberish | null, newMember?: string | null, manager?: string | null): AddedSharedMemberEventFilter;
        "RemovedSharedMember(uint256,address,address)"(roleId?: BigNumberish | null, oldMember?: string | null, manager?: string | null): RemovedSharedMemberEventFilter;
        RemovedSharedMember(roleId?: BigNumberish | null, oldMember?: string | null, manager?: string | null): RemovedSharedMemberEventFilter;
        "ResetExclusiveMember(uint256,address,address)"(roleId?: BigNumberish | null, newMember?: string | null, manager?: string | null): ResetExclusiveMemberEventFilter;
        ResetExclusiveMember(roleId?: BigNumberish | null, newMember?: string | null, manager?: string | null): ResetExclusiveMemberEventFilter;
    };
    estimateGas: {
        addMember(roleId: BigNumberish, newMember: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getMember(roleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        holdsRole(roleId: BigNumberish, memberToCheck: string, overrides?: CallOverrides): Promise<BigNumber>;
        removeMember(roleId: BigNumberish, memberToRemove: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        renounceMembership(roleId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        resetMember(roleId: BigNumberish, newMember: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addMember(roleId: BigNumberish, newMember: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getMember(roleId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        holdsRole(roleId: BigNumberish, memberToCheck: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeMember(roleId: BigNumberish, memberToRemove: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        renounceMembership(roleId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        resetMember(roleId: BigNumberish, newMember: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
