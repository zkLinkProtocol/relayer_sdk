import type {
  BaseContract,
  BigNumber,
  Signer,
} from "ethers";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "@across-protocol/contracts/dist/typechain/common";

export declare namespace SpokePool {
  export type IntentInfoStruct = {
    intentOwner: string;
    intentReceiver: string;
    inputToken: string;
    outputToken: string;
    inputAmount: BigNumber;
    outputAmount: BigNumber;
    originChainId: BigNumber;
    exclusiveRelayer: string;
    nonce: BigNumber;
    fillDeadline: BigNumber;
    exclusivityDeadline: BigNumber;
    payload: string;
  };
  export type IntentInfoStructOutput = [
    intentOwner: string,
    intentReceiver: string,
    inputToken: string,
    outputToken: string,
    inputAmount: bigint,
    outputAmount: bigint,
    originChainId: bigint,
    exclusiveRelayer: string,
    nonce: bigint,
    fillDeadline: bigint,
    exclusivityDeadline: bigint,
    payload: string
  ] & {
    intentOwner: string;
    intentReceiver: string;
    inputToken: string;
    outputToken: string;
    inputAmount: bigint;
    outputAmount: bigint;
    originChainId: bigint;
    exclusiveRelayer: string;
    nonce: bigint;
    fillDeadline: bigint;
    exclusivityDeadline: bigint;
    payload: string;
  };
}

export interface V3FundsDepositedEventObject {
  intentOwner: string;
  intentReceiver: string;
  inputToken: string;
  inputAmount: BigNumber;
  outputToken: string;
  outputAmount: BigNumber;
  destinationChainId: BigNumber;
  nonce: number;
  fillDeadline: number;
  exclusivityDeadline: number;
  exclusiveRelayer: string;
  payload: string;
}
export type V3FundsDepositedEvent = TypedEvent<
  [
    string,
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    number,
    number,
    number,
    string,
    string
  ],
  V3FundsDepositedEventObject
>;

export interface FilledV3RelayEventObject {
  intentOwner: string;
  intentReceiver: string;
  inputToken: string;
  outputToken: string;
  inputAmount: BigNumber;
  outputAmount: BigNumber;
  originChainId: BigNumber;
  exclusiveRelayer: string;
  nonce: number;
  fillDeadline: number;
  exclusivityDeadline: number;
  payload: string;
  relayer: string;
  repaymentChainId: BigNumber;
  hash: string;
}
export type FilledV3RelayEvent = TypedEvent<
  [
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    number,
    number,
    number,
    string,
    string,
    BigNumber,
    string
  ],
  FilledV3RelayEventObject
>;

export interface SpokePool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;
  queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;
}
