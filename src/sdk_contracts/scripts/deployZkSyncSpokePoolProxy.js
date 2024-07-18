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
const hardhat_zksync_deploy_1 = require("@matterlabs/hardhat-zksync-deploy");
const zksync_web3_1 = require("zksync-web3");
const consts_1 = require("../deploy/consts");
require("dotenv").config();
const hre = __importStar(require("hardhat"));
async function main() {
    const contractName = "Ethereum_SpokePool";
    console.log("Deploying " + contractName + "...");
    const chainId = await hre.getChainId();
    if (chainId !== "280")
        throw new Error("This script can only be run on zkSync testnet (chainId 280)");
    // mnemonic for local node rich wallet
    const testMnemonic = process.env.MNEMONIC ?? "";
    const zkWallet = zksync_web3_1.Wallet.fromMnemonic(testMnemonic);
    const deployer = new hardhat_zksync_deploy_1.Deployer(hre, zkWallet);
    const contract = await deployer.loadArtifact(contractName);
    const proxy = await hre.zkUpgrades.deployProxy(deployer.zkWallet, contract, [1000000, "0x0e2817C49698cc0874204AeDf7c72Be2Bb7fCD5d", consts_1.L1_ADDRESS_MAP[chainId].weth], { initializer: "initialize" });
    await proxy.deployed();
    console.log(contractName + " deployed to:", proxy.address);
    // proxy.connect(zkWallet);
    // const value = await box.retrieve();
    // console.log('Box value is: ', value.toNumber());
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
