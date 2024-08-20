import { BigNumber } from "ethers";
import { SortableEvent } from "./Common";
import { FilledV3RelayEvent, V3FundsDepositedEvent } from "../typechain";
import { SpokePoolClient } from "../clients";
import { RelayerRefundLeaf } from "./HubPool";

export type { FilledV3RelayEvent, V3FundsDepositedEvent };

export interface RelayData {
  intentOwner: string,
  intentReceiver: string, 
  inputToken: string;
  outputToken: string;
  inputAmount: BigNumber;
  outputAmount: BigNumber;
  originChainId: number;
  exclusiveRelayer: string;
  nonce: number;
  fillDeadline: number;
  exclusivityDeadline: number;
  payload: string;
}

export interface Deposit extends RelayData {
  destinationChainId: number;
  quoteTimestamp: number;
  speedUpSignature?: string;
  updatedRecipient?: string;
  updatedOutputAmount?: BigNumber;
  updatedMessage?: string;
  fromLiteChain: boolean;
  toLiteChain: boolean;
}

export interface DepositWithBlock extends Deposit, SortableEvent {
  quoteBlockNumber: number;
}

export enum FillStatus {
  Unfilled = 0,
  RequestedSlowFill,
  Filled,
}

export enum FillType {
  FastFill = 0,
  ReplacedSlowFill,
  SlowFill,
}

export interface RelayExecutionEventInfo {
  updatedRecipient: string;
  updatedOutputAmount: BigNumber;
  updatedMessage: string;
  fillType: FillType;
}

export interface Fill extends RelayData {
  destinationChainId: number;
  relayer: string;
  repaymentChainId: number;
  relayExecutionInfo: RelayExecutionEventInfo;
}

export interface FillWithBlock extends Fill, SortableEvent {}

export interface SpeedUp {
  depositor: string;
  depositorSignature: string;
  nonce: number;
  originChainId: number;
  updatedRecipient: string;
  updatedOutputAmount: BigNumber;
  updatedMessage: string;
}

export interface SlowFillRequest extends RelayData {
  destinationChainId: number;
}
export interface SlowFillRequestWithBlock extends SlowFillRequest, SortableEvent {}

export interface SlowFillLeaf {
  relayData: RelayData;
  chainId: number;
  updatedOutputAmount: BigNumber;
}

export interface RootBundleRelay {
  rootBundleId: number;
  relayerRefundRoot: string;
  slowRelayRoot: string;
}

export interface RootBundleRelayWithBlock extends RootBundleRelay, SortableEvent {}

export interface RelayerRefundExecution extends RelayerRefundLeaf {
  rootBundleId: number;
}

export interface RelayerRefundExecutionWithBlock extends RelayerRefundExecution, SortableEvent {}

export interface Refund {
  [refundAddress: string]: BigNumber;
}

export interface RunningBalances {
  [repaymentChainId: number]: {
    [l1TokenAddress: string]: BigNumber;
  };
}

export interface TokensBridged extends SortableEvent {
  amountToReturn: BigNumber;
  chainId: number;
  leafId: number;
  l2TokenAddress: string;
}

export interface SpokePoolClientsByChain {
  [chainId: number]: SpokePoolClient;
}
