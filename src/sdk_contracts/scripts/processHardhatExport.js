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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const existingDeployments = __importStar(require("../deployments/deployments.json"));
// Prunes the hardhat export file sent to the cache directory to only contain the deployment addresses of each contract
// over the network of chains the Across v2 contracts are deployed on. Meant to be run as part of a publish process.
async function run() {
    try {
        const deploymentExport = require("../cache/massExport.json");
        const castExport = deploymentExport;
        console.log("Generating exports on the following networks(if they have deployments)", Object.keys(castExport));
        const processedOutput = {};
        Object.keys(castExport).forEach((chainId) => {
            if (castExport[chainId][0])
                Object.keys(castExport[chainId][0].contracts).forEach((contractName) => {
                    if (!processedOutput[chainId])
                        processedOutput[chainId] = {};
                    const address = castExport[chainId][0]?.contracts[contractName].address;
                    const blockNumber = findDeploymentBlockNumber(castExport[chainId][0].name, contractName);
                    const existingBlockNumber = existingDeployments[chainId][contractName].blockNumber;
                    console.log(`Not updating ${contractName} as it has a later block number set in deployments.json than the one in deployments/${contractName}.json`);
                    const hasLaterBlockNumber = existingBlockNumber > blockNumber;
                    if (hasLaterBlockNumber)
                        return; // If we have already found a later block number for this contract, then ignore this one.
                    // As its likely that we manually updated the `deployments` file and we don't want to override it.
                    if (/.*_SpokePool/.test(contractName))
                        contractName = "SpokePool"; // Strip the network name from the spoke pool in the contractName.
                    processedOutput[chainId][contractName] = { address, blockNumber };
                });
        });
        console.log("Constructed the following address export for release:\n", processedOutput);
        fs_1.default.writeFileSync(`${path_1.default.resolve(__dirname)}/../deployments/deployments.json`, JSON.stringify(processedOutput));
    }
    catch (error) { }
}
exports.run = run;
if (require.main === module) {
    run()
        .then(() => {
        process.exit(0);
    })
        .catch(async (error) => {
        console.error("Process exited with", error);
        process.exit(1);
    });
}
function findDeploymentBlockNumber(networkName, contractName) {
    const deploymentArtifact = require(`../deployments/${networkName}/${contractName}.json`);
    return deploymentArtifact.receipt.blockNumber;
}
