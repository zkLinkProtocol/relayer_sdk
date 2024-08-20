import {
  Contract,
  ContractFactory,
} from "ethers";
import type { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { SpokePool } from "./SpokePool";

const _abi = [
  {
    "inputs": [
    {
      "internalType": "address",
      "name": "_intentOwner",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "_intentReceiver",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "_inputToken",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "_inputAmount",
      "type": "uint256"
    },
    {
      "internalType": "address",
      "name": "_outputToken",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "_outputAmount",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "_destinationChainId",
      "type": "uint256"
    },
    {
      "internalType": "address",
      "name": "_exclusiveRelayer",
      "type": "address"
    },
    {
      "internalType": "uint32",
      "name": "_fillDeadline",
      "type": "uint32"
    },
    {
      "internalType": "uint32",
      "name": "_exclusivityDeadline",
      "type": "uint32"
    },
    {
      "internalType": "bytes",
      "name": "_payload",
      "type": "bytes"
    }
    ],
    "name": "createIntent",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
    {
      "indexed": false,
      "internalType": "address",
      "name": "intentOwner",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "address",
      "name": "intentReceiver",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "address",
      "name": "inputToken",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "inputAmount",
      "type": "uint256"
    },
    {
      "indexed": false,
      "internalType": "address",
      "name": "outputToken",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "outputAmount",
      "type": "uint256"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "destinationChainId",
      "type": "uint256"
    },
    {
      "indexed": false,
      "internalType": "uint32",
      "name": "nonce",
      "type": "uint32"
    },
    {
      "indexed": false,
      "internalType": "uint32",
      "name": "fillDeadline",
      "type": "uint32"
    },
    {
      "indexed": false,
      "internalType": "uint32",
      "name": "exclusivityDeadline",
      "type": "uint32"
    },
    {
      "indexed": false,
      "internalType": "address",
      "name": "exclusiveRelayer",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "bytes",
      "name": "payload",
      "type": "bytes"
    }
    ],
    "name": "IntentCreated",
    "type": "event"
  },
  {
    "inputs": [
    {
      "components": [
      {
        "internalType": "address",
        "name": "intentOwner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "intentReceiver",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "inputToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "outputToken",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "inputAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "outputAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "originChainId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "exclusiveRelayer",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "nonce",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "fillDeadline",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "exclusivityDeadline",
        "type": "uint32"
      },
      {
        "internalType": "bytes",
        "name": "payload",
        "type": "bytes"
      }
      ],
      "internalType": "struct IBaseBridgeEndPoint.IntentInfo",
      "name": "intent",
      "type": "tuple"
    },
    {
      "internalType": "uint256",
      "name": "repaymentChainId",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "_l2TxGasLimit",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "_l2GasPerPubdataByteLimit",
      "type": "uint256"
    },
    {
      "internalType": "address",
      "name": "_refundRecipient",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "_l2Recipient",
      "type": "address"
    }
    ],
    "name": "fillIntent",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
    {
      "indexed": false,
      "internalType": "address",
      "name": "intentOwner",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "address",
      "name": "intentReceiver",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "address",
      "name": "inputToken",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "address",
      "name": "outputToken",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "inputAmount",
      "type": "uint256"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "outputAmount",
      "type": "uint256"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "originChainId",
      "type": "uint256"
    },
    {
      "indexed": false,
      "internalType": "address",
      "name": "exclusiveRelayer",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "uint32",
      "name": "nonce",
      "type": "uint32"
    },
    {
      "indexed": false,
      "internalType": "uint32",
      "name": "fillDeadline",
      "type": "uint32"
    },
    {
      "indexed": false,
      "internalType": "uint32",
      "name": "exclusivityDeadline",
      "type": "uint32"
    },
    {
      "indexed": false,
      "internalType": "bytes",
      "name": "payload",
      "type": "bytes"
    },
    {
      "indexed": false,
      "internalType": "address",
      "name": "relayer",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "repaymentChainId",
      "type": "uint256"
    },
    {
      "indexed": false,
      "internalType": "bytes32",
      "name": "hash",
      "type": "bytes32"
    }
    ],
    "name": "IntentFilled",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "intentFilled",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
];

type SpokePoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SpokePoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SpokePool__factory extends ContractFactory {
  constructor(...args: SpokePoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, "", args[0]);
    }
  }

  static readonly abi = _abi;

  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SpokePool {
    return new Contract(address, _abi, signerOrProvider) as SpokePool;
  }
}
  