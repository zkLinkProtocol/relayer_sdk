import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace MerkleDistributorInterface {
    type ClaimStruct = {
        windowIndex: BigNumberish;
        amount: BigNumberish;
        accountIndex: BigNumberish;
        account: string;
        merkleProof: BytesLike[];
    };
    type ClaimStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string[]
    ] & {
        windowIndex: BigNumber;
        amount: BigNumber;
        accountIndex: BigNumber;
        account: string;
        merkleProof: string[];
    };
}
export interface AcrossMerkleDistributorInterface extends utils.Interface {
    functions: {
        "claim((uint256,uint256,uint256,address,bytes32[]))": FunctionFragment;
        "claimFor((uint256,uint256,uint256,address,bytes32[]))": FunctionFragment;
        "claimMulti((uint256,uint256,uint256,address,bytes32[])[])": FunctionFragment;
        "deleteWindow(uint256)": FunctionFragment;
        "getRewardTokenForWindow(uint256)": FunctionFragment;
        "isClaimed(uint256,uint256)": FunctionFragment;
        "merkleWindows(uint256)": FunctionFragment;
        "nextCreatedIndex()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setWindow(uint256,address,bytes32,string)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "verifyClaim((uint256,uint256,uint256,address,bytes32[]))": FunctionFragment;
        "whitelistClaimer(address,bool)": FunctionFragment;
        "whitelistedClaimers(address)": FunctionFragment;
        "withdrawRewards(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "claim" | "claimFor" | "claimMulti" | "deleteWindow" | "getRewardTokenForWindow" | "isClaimed" | "merkleWindows" | "nextCreatedIndex" | "owner" | "renounceOwnership" | "setWindow" | "transferOwnership" | "verifyClaim" | "whitelistClaimer" | "whitelistedClaimers" | "withdrawRewards"): FunctionFragment;
    encodeFunctionData(functionFragment: "claim", values: [MerkleDistributorInterface.ClaimStruct]): string;
    encodeFunctionData(functionFragment: "claimFor", values: [MerkleDistributorInterface.ClaimStruct]): string;
    encodeFunctionData(functionFragment: "claimMulti", values: [MerkleDistributorInterface.ClaimStruct[]]): string;
    encodeFunctionData(functionFragment: "deleteWindow", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRewardTokenForWindow", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isClaimed", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "merkleWindows", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "nextCreatedIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setWindow", values: [BigNumberish, string, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "verifyClaim", values: [MerkleDistributorInterface.ClaimStruct]): string;
    encodeFunctionData(functionFragment: "whitelistClaimer", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "whitelistedClaimers", values: [string]): string;
    encodeFunctionData(functionFragment: "withdrawRewards", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimMulti", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteWindow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardTokenForWindow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isClaimed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "merkleWindows", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextCreatedIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWindow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyClaim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistClaimer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistedClaimers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawRewards", data: BytesLike): Result;
    events: {
        "ClaimFor(address,uint256,address,uint256,uint256,address)": EventFragment;
        "Claimed(address,uint256,address,uint256,uint256,address)": EventFragment;
        "CreatedWindow(uint256,uint256,address,address)": EventFragment;
        "DeleteWindow(uint256,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "WhitelistedClaimer(address,bool)": EventFragment;
        "WithdrawRewards(address,uint256,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ClaimFor"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CreatedWindow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DeleteWindow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WhitelistedClaimer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawRewards"): EventFragment;
}
export interface ClaimForEventObject {
    caller: string;
    windowIndex: BigNumber;
    account: string;
    accountIndex: BigNumber;
    amount: BigNumber;
    rewardToken: string;
}
export declare type ClaimForEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    string
], ClaimForEventObject>;
export declare type ClaimForEventFilter = TypedEventFilter<ClaimForEvent>;
export interface ClaimedEventObject {
    caller: string;
    windowIndex: BigNumber;
    account: string;
    accountIndex: BigNumber;
    amount: BigNumber;
    rewardToken: string;
}
export declare type ClaimedEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    string
], ClaimedEventObject>;
export declare type ClaimedEventFilter = TypedEventFilter<ClaimedEvent>;
export interface CreatedWindowEventObject {
    windowIndex: BigNumber;
    rewardsDeposited: BigNumber;
    rewardToken: string;
    owner: string;
}
export declare type CreatedWindowEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string,
    string
], CreatedWindowEventObject>;
export declare type CreatedWindowEventFilter = TypedEventFilter<CreatedWindowEvent>;
export interface DeleteWindowEventObject {
    windowIndex: BigNumber;
    owner: string;
}
export declare type DeleteWindowEvent = TypedEvent<[
    BigNumber,
    string
], DeleteWindowEventObject>;
export declare type DeleteWindowEventFilter = TypedEventFilter<DeleteWindowEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface WhitelistedClaimerEventObject {
    claimer: string;
    whitelist: boolean;
}
export declare type WhitelistedClaimerEvent = TypedEvent<[
    string,
    boolean
], WhitelistedClaimerEventObject>;
export declare type WhitelistedClaimerEventFilter = TypedEventFilter<WhitelistedClaimerEvent>;
export interface WithdrawRewardsEventObject {
    owner: string;
    amount: BigNumber;
    currency: string;
}
export declare type WithdrawRewardsEvent = TypedEvent<[
    string,
    BigNumber,
    string
], WithdrawRewardsEventObject>;
export declare type WithdrawRewardsEventFilter = TypedEventFilter<WithdrawRewardsEvent>;
export interface AcrossMerkleDistributor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AcrossMerkleDistributorInterface;
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
        claim(_claim: MerkleDistributorInterface.ClaimStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        claimFor(_claim: MerkleDistributorInterface.ClaimStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        claimMulti(claims: MerkleDistributorInterface.ClaimStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        deleteWindow(windowIndex: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getRewardTokenForWindow(windowIndex: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        isClaimed(windowIndex: BigNumberish, accountIndex: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        merkleWindows(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            string,
            string
        ] & {
            merkleRoot: string;
            remainingAmount: BigNumber;
            rewardToken: string;
            ipfsHash: string;
        }>;
        nextCreatedIndex(overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setWindow(rewardsToDeposit: BigNumberish, rewardToken: string, merkleRoot: BytesLike, ipfsHash: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        verifyClaim(_claim: MerkleDistributorInterface.ClaimStruct, overrides?: CallOverrides): Promise<[boolean] & {
            valid: boolean;
        }>;
        whitelistClaimer(newContract: string, whitelist: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        whitelistedClaimers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        withdrawRewards(rewardCurrency: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    claim(_claim: MerkleDistributorInterface.ClaimStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    claimFor(_claim: MerkleDistributorInterface.ClaimStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    claimMulti(claims: MerkleDistributorInterface.ClaimStruct[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    deleteWindow(windowIndex: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getRewardTokenForWindow(windowIndex: BigNumberish, overrides?: CallOverrides): Promise<string>;
    isClaimed(windowIndex: BigNumberish, accountIndex: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    merkleWindows(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
        string,
        BigNumber,
        string,
        string
    ] & {
        merkleRoot: string;
        remainingAmount: BigNumber;
        rewardToken: string;
        ipfsHash: string;
    }>;
    nextCreatedIndex(overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setWindow(rewardsToDeposit: BigNumberish, rewardToken: string, merkleRoot: BytesLike, ipfsHash: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    verifyClaim(_claim: MerkleDistributorInterface.ClaimStruct, overrides?: CallOverrides): Promise<boolean>;
    whitelistClaimer(newContract: string, whitelist: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    whitelistedClaimers(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    withdrawRewards(rewardCurrency: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        claim(_claim: MerkleDistributorInterface.ClaimStruct, overrides?: CallOverrides): Promise<void>;
        claimFor(_claim: MerkleDistributorInterface.ClaimStruct, overrides?: CallOverrides): Promise<void>;
        claimMulti(claims: MerkleDistributorInterface.ClaimStruct[], overrides?: CallOverrides): Promise<void>;
        deleteWindow(windowIndex: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getRewardTokenForWindow(windowIndex: BigNumberish, overrides?: CallOverrides): Promise<string>;
        isClaimed(windowIndex: BigNumberish, accountIndex: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        merkleWindows(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            string,
            string
        ] & {
            merkleRoot: string;
            remainingAmount: BigNumber;
            rewardToken: string;
            ipfsHash: string;
        }>;
        nextCreatedIndex(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setWindow(rewardsToDeposit: BigNumberish, rewardToken: string, merkleRoot: BytesLike, ipfsHash: string, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        verifyClaim(_claim: MerkleDistributorInterface.ClaimStruct, overrides?: CallOverrides): Promise<boolean>;
        whitelistClaimer(newContract: string, whitelist: boolean, overrides?: CallOverrides): Promise<void>;
        whitelistedClaimers(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        withdrawRewards(rewardCurrency: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ClaimFor(address,uint256,address,uint256,uint256,address)"(caller?: string | null, windowIndex?: null, account?: string | null, accountIndex?: null, amount?: null, rewardToken?: string | null): ClaimForEventFilter;
        ClaimFor(caller?: string | null, windowIndex?: null, account?: string | null, accountIndex?: null, amount?: null, rewardToken?: string | null): ClaimForEventFilter;
        "Claimed(address,uint256,address,uint256,uint256,address)"(caller?: string | null, windowIndex?: null, account?: string | null, accountIndex?: null, amount?: null, rewardToken?: string | null): ClaimedEventFilter;
        Claimed(caller?: string | null, windowIndex?: null, account?: string | null, accountIndex?: null, amount?: null, rewardToken?: string | null): ClaimedEventFilter;
        "CreatedWindow(uint256,uint256,address,address)"(windowIndex?: BigNumberish | null, rewardsDeposited?: null, rewardToken?: string | null, owner?: null): CreatedWindowEventFilter;
        CreatedWindow(windowIndex?: BigNumberish | null, rewardsDeposited?: null, rewardToken?: string | null, owner?: null): CreatedWindowEventFilter;
        "DeleteWindow(uint256,address)"(windowIndex?: BigNumberish | null, owner?: null): DeleteWindowEventFilter;
        DeleteWindow(windowIndex?: BigNumberish | null, owner?: null): DeleteWindowEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "WhitelistedClaimer(address,bool)"(claimer?: string | null, whitelist?: boolean | null): WhitelistedClaimerEventFilter;
        WhitelistedClaimer(claimer?: string | null, whitelist?: boolean | null): WhitelistedClaimerEventFilter;
        "WithdrawRewards(address,uint256,address)"(owner?: string | null, amount?: null, currency?: string | null): WithdrawRewardsEventFilter;
        WithdrawRewards(owner?: string | null, amount?: null, currency?: string | null): WithdrawRewardsEventFilter;
    };
    estimateGas: {
        claim(_claim: MerkleDistributorInterface.ClaimStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        claimFor(_claim: MerkleDistributorInterface.ClaimStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        claimMulti(claims: MerkleDistributorInterface.ClaimStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        deleteWindow(windowIndex: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getRewardTokenForWindow(windowIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isClaimed(windowIndex: BigNumberish, accountIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        merkleWindows(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        nextCreatedIndex(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setWindow(rewardsToDeposit: BigNumberish, rewardToken: string, merkleRoot: BytesLike, ipfsHash: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        verifyClaim(_claim: MerkleDistributorInterface.ClaimStruct, overrides?: CallOverrides): Promise<BigNumber>;
        whitelistClaimer(newContract: string, whitelist: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        whitelistedClaimers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawRewards(rewardCurrency: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        claim(_claim: MerkleDistributorInterface.ClaimStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        claimFor(_claim: MerkleDistributorInterface.ClaimStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        claimMulti(claims: MerkleDistributorInterface.ClaimStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        deleteWindow(windowIndex: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getRewardTokenForWindow(windowIndex: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isClaimed(windowIndex: BigNumberish, accountIndex: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        merkleWindows(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextCreatedIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setWindow(rewardsToDeposit: BigNumberish, rewardToken: string, merkleRoot: BytesLike, ipfsHash: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        verifyClaim(_claim: MerkleDistributorInterface.ClaimStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        whitelistClaimer(newContract: string, whitelist: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        whitelistedClaimers(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawRewards(rewardCurrency: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
