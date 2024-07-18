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
exports.getContractInfoFromAddress = exports.getDeployedBlockNumber = exports.getDeployedAddress = void 0;
const deployments_ = __importStar(require("../deployments/deployments.json"));
const deployments = deployments_;
// Returns the deployed address of any contract on any network.
function getDeployedAddress(contractName, networkId) {
    try {
        return deployments[networkId.toString()][contractName].address;
    }
    catch (_) {
        throw new Error(`Contract ${contractName} not found on ${networkId} in deployments.json`);
    }
}
exports.getDeployedAddress = getDeployedAddress;
// Returns the deployment block number of any contract on any network.
function getDeployedBlockNumber(contractName, networkId) {
    try {
        return deployments[networkId.toString()][contractName].blockNumber;
    }
    catch (_) {
        throw new Error(`Contract ${contractName} not found on ${networkId} in deployments.json`);
    }
}
exports.getDeployedBlockNumber = getDeployedBlockNumber;
// Returns the chainId and contract name for a given contract address.
function getContractInfoFromAddress(contractAddress) {
    const returnValue = [];
    Object.keys(deployments).forEach((_chainId) => Object.keys(deployments[_chainId]).forEach((_contractName) => {
        if (deployments[_chainId][_contractName].address === contractAddress)
            returnValue.push({ chainId: Number(_chainId), contractName: _contractName });
    }));
    if (returnValue.length === 0)
        throw new Error(`Contract ${contractAddress} not found in deployments.json`);
    if (returnValue.length > 1)
        throw new Error(`Multiple deployments found for ${contractAddress}`);
    return returnValue[0];
}
exports.getContractInfoFromAddress = getContractInfoFromAddress;
