"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const common_1 = require("@uma/common");
require("@nomicfoundation/hardhat-verify"); // Must be above hardhat-upgrades
require("@nomiclabs/hardhat-waffle");
require("@typechain/hardhat");
require("@matterlabs/hardhat-zksync-solc");
require("@matterlabs/hardhat-zksync-verify");
require("@matterlabs/hardhat-zksync-upgradable");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("hardhat-deploy");
require("@openzeppelin/hardhat-upgrades");
// Custom tasks to add to HRE.
// eslint-disable-next-line node/no-missing-require
require("./tasks/enableL1TokenAcrossEcosystem");
// eslint-disable-next-line node/no-missing-require
require("./tasks/finalizeScrollClaims");
// eslint-disable-next-line node/no-missing-require
require("./tasks/rescueStuckScrollTxn");
dotenv.config();
const isTest = process.env.IS_TEST === "true" || process.env.CI === "true";
// To compile with zksolc, `hardhat` must be the default network and its `zksync` property must be true.
// So we allow the caller to set this environment variable to toggle compiling zk contracts or not.
// TODO: Figure out way to only compile specific contracts intended to be deployed on ZkSync (e.g. ZkSync_SpokePool) if
// the following config is true.
const compileZk = process.env.COMPILE_ZK === "true";
const solcVersion = "0.8.23";
const mnemonic = (0, common_1.getMnemonic)();
// Compilation settings are overridden for large contracts to allow them to compile without going over the bytecode
// limit.
const LARGE_CONTRACT_COMPILER_SETTINGS = {
    version: solcVersion,
    settings: {
        optimizer: { enabled: true, runs: 1000 },
        viaIR: true,
        debug: { revertStrings: isTest ? "default" : "strip" },
    },
};
const DEFAULT_CONTRACT_COMPILER_SETTINGS = {
    version: solcVersion,
    settings: {
        optimizer: { enabled: true, runs: 1000000 },
        viaIR: true,
        // Only strip revert strings if not testing or in ci.
        debug: { revertStrings: isTest ? "default" : "strip" },
    },
};
const config = {
    solidity: {
        compilers: [DEFAULT_CONTRACT_COMPILER_SETTINGS],
        overrides: {
            "contracts/HubPool.sol": LARGE_CONTRACT_COMPILER_SETTINGS,
            "contracts/Arbitrum_SpokePool.sol": {
                ...DEFAULT_CONTRACT_COMPILER_SETTINGS,
                // NOTE: Arbitrum, only supports 0.8.19.
                // See https://docs.arbitrum.io/for-devs/concepts/differences-between-arbitrum-ethereum/solidity-support#differences-from-solidity-on-ethereum
                version: "0.8.19",
            },
            // "contracts/Polygon_SpokePool.sol": MEDIUM_CONTRACT_COMPILER_SETTINGS,
            "contracts/Linea_SpokePool.sol": {
                ...DEFAULT_CONTRACT_COMPILER_SETTINGS,
                // NOTE: Linea only supports 0.8.19.
                // See https://docs.linea.build/build-on-linea/ethereum-differences#evm-opcodes
                version: "0.8.19",
            },
            "contracts/SpokePoolVerifier.sol": {
                ...DEFAULT_CONTRACT_COMPILER_SETTINGS,
                // NOTE: Linea only supports 0.8.19.
                // See https://docs.linea.build/build-on-linea/ethereum-differences#evm-opcodes
                version: "0.8.19",
            },
            "contracts/Blast_SpokePool.sol": LARGE_CONTRACT_COMPILER_SETTINGS,
            "contracts/Lisk_SpokePool.sol": LARGE_CONTRACT_COMPILER_SETTINGS,
        },
    },
    zksolc: {
        version: "latest",
        settings: {
            optimizer: {
                enabled: true,
            },
        },
    },
    networks: {
        hardhat: {
            accounts: { accountsBalance: "1000000000000000000000000" },
            zksync: compileZk,
            allowUnlimitedContractSize: true,
        },
        mainnet: {
            url: (0, common_1.getNodeUrl)("mainnet", true, 1),
            accounts: { mnemonic },
            saveDeployments: true,
            chainId: 1,
        },
        "zksync-goerli": {
            chainId: 280,
            url: "https://testnet.era.zksync.dev",
            saveDeployments: true,
            accounts: { mnemonic },
            ethNetwork: "goerli",
            companionNetworks: { l1: "goerli" },
            zksync: true,
            verifyURL: "https://zksync2-testnet-explorer.zksync.dev/contract_verification",
        },
        zksync: {
            chainId: 324,
            url: "https://mainnet.era.zksync.io",
            saveDeployments: true,
            accounts: { mnemonic },
            ethNetwork: "mainnet",
            companionNetworks: { l1: "mainnet" },
            zksync: true,
            verifyURL: "https://zksync2-mainnet-explorer.zksync.io/contract_verification",
        },
        optimism: {
            url: (0, common_1.getNodeUrl)("optimism", true, 10),
            accounts: { mnemonic },
            saveDeployments: true,
            chainId: 10,
            companionNetworks: { l1: "mainnet" },
        },
        kovan: {
            url: (0, common_1.getNodeUrl)("kovan", true, 42),
            accounts: { mnemonic },
            saveDeployments: true,
            chainId: 42,
        },
        "optimism-kovan": {
            url: (0, common_1.getNodeUrl)("optimism-kovan", true, 69),
            accounts: { mnemonic },
            saveDeployments: true,
            chainId: 69,
            companionNetworks: { l1: "kovan" },
        },
        "optimism-goerli": {
            url: (0, common_1.getNodeUrl)("optimism-goerli", true, 420),
            accounts: { mnemonic },
            saveDeployments: true,
            chainId: 420,
            companionNetworks: { l1: "goerli" },
        },
        "optimism-sepolia": {
            url: (0, common_1.getNodeUrl)("optimism-sepolia", true, 11155420),
            accounts: { mnemonic },
            saveDeployments: true,
            chainId: 11155420,
            companionNetworks: { l1: "sepolia" },
        },
        arbitrum: {
            chainId: 42161,
            url: (0, common_1.getNodeUrl)("arbitrum", true, 42161),
            saveDeployments: true,
            accounts: { mnemonic },
            companionNetworks: { l1: "mainnet" },
        },
        "arbitrum-rinkeby": {
            chainId: 421611,
            url: (0, common_1.getNodeUrl)("arbitrum-rinkeby", true, 421611),
            saveDeployments: true,
            accounts: { mnemonic },
            companionNetworks: { l1: "rinkeby" },
        },
        "arbitrum-goerli": {
            chainId: 421613,
            url: "https://goerli-rollup.arbitrum.io/rpc",
            saveDeployments: true,
            accounts: { mnemonic },
            companionNetworks: { l1: "goerli" },
        },
        "arbitrum-sepolia": {
            chainId: 421614,
            url: (0, common_1.getNodeUrl)("arbitrum-sepolia", true, 421614),
            saveDeployments: true,
            accounts: { mnemonic },
            companionNetworks: { l1: "sepolia" },
        },
        rinkeby: {
            chainId: 4,
            url: (0, common_1.getNodeUrl)("rinkeby", true, 4),
            saveDeployments: true,
            accounts: { mnemonic },
        },
        goerli: {
            chainId: 5,
            url: (0, common_1.getNodeUrl)("goerli", true, 5),
            saveDeployments: true,
            accounts: { mnemonic },
        },
        sepolia: {
            url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
            accounts: { mnemonic },
            saveDeployments: true,
            chainId: 11155111,
        },
        polygon: {
            chainId: 137,
            url: (0, common_1.getNodeUrl)("polygon-matic", true, 137),
            saveDeployments: true,
            accounts: { mnemonic },
            companionNetworks: { l1: "mainnet" },
        },
        boba: {
            chainId: 288,
            url: (0, common_1.getNodeUrl)("boba", true, 288),
            accounts: { mnemonic },
            companionNetworks: { l1: "mainnet" },
        },
        "polygon-mumbai": {
            chainId: 80001,
            url: (0, common_1.getNodeUrl)("polygon-mumbai", true, 80001),
            saveDeployments: true,
            accounts: { mnemonic },
            companionNetworks: { l1: "goerli" },
        },
        "polygon-amoy": {
            chainId: 80002,
            url: "https://rpc-amoy.polygon.technology",
            saveDeployments: true,
            accounts: { mnemonic },
            companionNetworks: { l1: "sepolia" },
        },
        base: {
            chainId: 8453,
            url: "https://mainnet.base.org",
            saveDeployments: true,
            accounts: { mnemonic },
            companionNetworks: { l1: "mainnet" },
        },
        "base-goerli": {
            chainId: 84531,
            url: "https://goerli.base.org",
            saveDeployments: true,
            accounts: { mnemonic },
            companionNetworks: { l1: "goerli" },
        },
        "base-sepolia": {
            chainId: 84532,
            url: `https://base-sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
            saveDeployments: true,
            accounts: { mnemonic },
            companionNetworks: { l1: "sepolia" },
        },
        linea: {
            chainId: 59144,
            url: `https://linea-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
            saveDeployments: true,
            accounts: { mnemonic },
            companionNetworks: { l1: "mainnet" },
        },
        "linea-goerli": {
            chainId: 59140,
            url: `https://linea-goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
            saveDeployments: true,
            accounts: { mnemonic },
            companionNetworks: { l1: "goerli" },
        },
        "scroll-sepolia": {
            chainId: 534351,
            url: "https://sepolia-rpc.scroll.io",
            saveDeployments: true,
            accounts: { mnemonic },
            companionNetworks: { l1: "sepolia" },
        },
        "polygon-zk-evm": {
            chainId: 1101,
            url: "https://zkevm-rpc.com",
            saveDeployments: true,
            accounts: { mnemonic },
            companionNetworks: { l1: "mainnet" },
        },
        "polygon-zk-evm-testnet": {
            chainId: 1442,
            url: "https://rpc.public.zkevm-test.net",
            saveDeployments: true,
            accounts: { mnemonic },
            companionNetworks: { l1: "goerli" },
        },
        mode: {
            chainId: 34443,
            url: "https://mainnet.mode.network",
            saveDeployments: true,
            accounts: { mnemonic },
            companionNetworks: { l1: "mainnet" },
        },
        "mode-sepolia": {
            chainId: 919,
            url: "https://sepolia.mode.network",
            saveDeployments: true,
            accounts: { mnemonic },
            companionNetworks: { l1: "sepolia" },
        },
        lisk: {
            chainId: 1135,
            url: "https://rpc.api.lisk.com",
            saveDeployments: true,
            accounts: { mnemonic },
            companionNetworks: { l1: "mainnet" },
        },
        "lisk-sepolia": {
            chainId: 4202,
            url: "https://rpc.sepolia-api.lisk.com",
            saveDeployments: true,
            accounts: { mnemonic },
            companionNetworks: { l1: "sepolia" },
        },
        blast: {
            chainId: 81457,
            url: "https://rpc.blast.io",
            saveDeployments: true,
            accounts: { mnemonic },
            companionNetworks: { l1: "mainnet" },
        },
        "blast-sepolia": {
            chainId: 168587773,
            url: "https://sepolia.blast.io",
            saveDeployments: true,
            accounts: { mnemonic },
            companionNetworks: { l1: "sepolia" },
        },
    },
    gasReporter: { enabled: process.env.REPORT_GAS !== undefined, currency: "USD" },
    etherscan: {
        apiKey: {
            mainnet: process.env.ETHERSCAN_API_KEY,
            kovan: process.env.ETHERSCAN_API_KEY,
            rinkeby: process.env.ETHERSCAN_API_KEY,
            goerli: process.env.ETHERSCAN_API_KEY,
            sepolia: process.env.ETHERSCAN_API_KEY,
            optimisticEthereum: process.env.OPTIMISM_ETHERSCAN_API_KEY,
            optimisticGoerli: process.env.OPTIMISM_ETHERSCAN_API_KEY,
            optimisticSepolia: process.env.OPTIMISM_ETHERSCAN_API_KEY,
            arbitrumOne: process.env.ARBITRUM_ETHERSCAN_API_KEY,
            "arbitrum-sepolia": process.env.ARBITRUM_ETHERSCAN_API_KEY,
            polygon: process.env.POLYGON_ETHERSCAN_API_KEY,
            polygonMumbai: process.env.POLYGON_ETHERSCAN_API_KEY,
            "polygon-amoy": process.env.POLYGON_ETHERSCAN_API_KEY,
            base: process.env.BASE_ETHERSCAN_API_KEY,
            "base-goerli": process.env.BASE_ETHERSCAN_API_KEY,
            "base-sepolia": process.env.BASE_ETHERSCAN_API_KEY,
            linea: process.env.LINEA_ETHERSCAN_API_KEY,
            "linea-goerli": process.env.LINEA_ETHERSCAN_API_KEY,
            "scroll-sepolia": process.env.SCROLL_ETHERSCAN_API_KEY,
            "polygon-zk-evm": process.env.POLYGON_ZK_EVM_ETHERSCAN_API_KEY,
            "polygon-zk-evm-testnet": process.env.POLYGON_ZK_EVM_ETHERSCAN_API_KEY,
            mode: process.env.MODE_ETHERSCAN_API_KEY,
            "mode-sepolia": process.env.MODE_ETHERSCAN_API_KEY,
            lisk: process.env.LISK_ETHERSCAN_API_KEY,
            "lisk-sepolia": process.env.LISK_ETHERSCAN_API_KEY,
            blast: process.env.BLAST_ETHERSCAN_API_KEY,
            "blast-sepolia": process.env.BLAST_ETHERSCAN_API_KEY,
        },
        customChains: [
            {
                network: "base",
                chainId: 8453,
                urls: {
                    apiURL: "https://api.basescan.org/api",
                    browserURL: "https://basescan.org",
                },
            },
            {
                network: "base-goerli",
                chainId: 84531,
                urls: {
                    apiURL: "https://api-goerli.basescan.org/api",
                    browserURL: "https://goerli.basescan.org",
                },
            },
            {
                network: "base-sepolia",
                chainId: 84532,
                urls: {
                    apiURL: "https://api-sepolia.basescan.org/api",
                    browserURL: "https://sepolia.basescan.org",
                },
            },
            {
                network: "linea",
                chainId: 59144,
                urls: {
                    apiURL: "https://api.lineascan.build/api",
                    browserURL: "https://lineascan.org",
                },
            },
            {
                network: "linea-goerli",
                chainId: 59140,
                urls: {
                    apiURL: "https://api-testnet.lineascan.build/api",
                    browserURL: "https://goerli.lineascan.build",
                },
            },
            {
                network: "sepolia",
                chainId: 11155111,
                urls: {
                    apiURL: "https://api-sepolia.etherscan.io/api",
                    browserURL: "https://sepolia.etherscan.io",
                },
            },
            {
                network: "scroll-sepolia",
                chainId: 534351,
                urls: {
                    apiURL: "https://api-sepolia.scrollscan.com/api",
                    browserURL: "https://api-sepolia.scrollscan.com",
                },
            },
            {
                network: "optimisticSepolia",
                chainId: 11155420,
                urls: {
                    apiURL: "https://api-sepolia-optimistic.etherscan.io/api",
                    browserURL: "https://sepolia-optimism.etherscan.io",
                },
            },
            {
                network: "polygon-zk-evm",
                chainId: 1101,
                urls: {
                    apiURL: "https://api-zkevm.polygonscan.com/api",
                    browserURL: "https://zkevm.polygonscan.com",
                },
            },
            {
                network: "polygon-zk-evm-testnet",
                chainId: 1442,
                urls: {
                    apiURL: "https://api-testnet-zkevm.polygonscan.com/api",
                    browserURL: "https://testnet-zkevm.polygonscan.com/",
                },
            },
            {
                network: "polygon-amoy",
                chainId: 80002,
                urls: {
                    apiURL: "https://api-amoy.polygonscan.com/api",
                    browserURL: "https://amoy.polygonscan.com",
                },
            },
            {
                network: "arbitrum-sepolia",
                chainId: 421614,
                urls: {
                    apiURL: "https://api-sepolia.arbiscan.io/api",
                    browserURL: "https://sepolia.arbiscan.io",
                },
            },
            {
                network: "mode-sepolia",
                chainId: 919,
                urls: {
                    apiURL: "https://api.routescan.io/v2/network/testnet/evm/919/etherscan",
                    browserURL: "https://testnet.modescan.io",
                },
            },
            {
                network: "mode",
                chainId: 34443,
                urls: {
                    apiURL: "https://api.routescan.io/v2/network/mainnet/evm/34443/etherscan",
                    browserURL: "https://modescan.io",
                },
            },
            {
                network: "lisk",
                chainId: 1135,
                urls: {
                    apiURL: "https://blockscout.lisk.com/api",
                    browserURL: "https://blockscout.lisk.com",
                },
            },
            {
                network: "lisk-sepolia",
                chainId: 4202,
                urls: {
                    apiURL: "https://sepolia-blockscout.lisk.com/api",
                    browserURL: "https://sepolia-blockscout.lisk.com",
                },
            },
            {
                network: "blast",
                chainId: 81457,
                urls: {
                    apiURL: "https://api.blastscan.io/api",
                    browserURL: "https://blastscan.io",
                },
            },
            {
                network: "blast-sepolia",
                chainId: 168587773,
                urls: {
                    apiURL: "https://api-sepolia.blastscan.io/api",
                    browserURL: "https://sepolia.blastscan.io",
                },
            },
        ],
    },
    namedAccounts: { deployer: 0 },
    typechain: {
        outDir: "./typechain",
        target: "ethers-v5",
    },
};
exports.default = config;
