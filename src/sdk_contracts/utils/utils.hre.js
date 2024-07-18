"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hre = exports.deployNewProxy = exports.getSpokePoolDeploymentInfo = void 0;
const hardhat_1 = __importDefault(require("hardhat"));
exports.hre = hardhat_1.default;
const utils_1 = require("./utils");
/**
 * @description Resolve the HubPool deployment, as well as the HubPool and SpokePool chain IDs for a new deployment.
 * @dev This function relies on having companionNetworks defined in the HardhatUserConfig.
 * @dev This should only be used when deploying a SpokePool to a satellite chain (i.e. HubChainId != SpokeChainId).
 * @returns HubPool instance, HubPool chain ID and SpokePool chain ID.
 */
async function getSpokePoolDeploymentInfo(hre) {
    const { companionNetworks, getChainId } = hre;
    const spokeChainId = Number(await getChainId());
    const hubChain = companionNetworks.l1;
    const hubPool = await hubChain.deployments.get("HubPool");
    const hubChainId = Number(await hubChain.getChainId());
    console.log(`Using chain ${hubChainId} HubPool @ ${hubPool.address}`);
    return { hubPool, hubChainId, spokeChainId };
}
exports.getSpokePoolDeploymentInfo = getSpokePoolDeploymentInfo;
async function deployNewProxy(name, constructorArgs, initArgs, implementationOnly = false) {
    const { deployments, run, upgrades } = hardhat_1.default;
    let instance;
    if (implementationOnly) {
        instance = (await upgrades.deployImplementation(await (0, utils_1.getContractFactory)(name, {}), {
            constructorArgs,
            kind: "uups",
            unsafeAllow: ["delegatecall", "state-variable-immutable"],
        }));
        console.log(`New ${name} implementation deployed @ ${instance}`);
    }
    else {
        const proxy = await upgrades.deployProxy(await (0, utils_1.getContractFactory)(name, {}), initArgs, {
            kind: "uups",
            unsafeAllow: ["delegatecall", "state-variable-immutable"],
            constructorArgs,
            initializer: "initialize",
        });
        instance = (await proxy.deployed()).address;
        console.log(`New ${name} proxy deployed @ ${instance}`);
        const implementationAddress = await upgrades.erc1967.getImplementationAddress(instance);
        console.log(`${name} implementation deployed @ ${implementationAddress}`);
    }
    // Save the deployment manually because OZ's hardhat-upgrades packages bypasses hardhat-deploy.
    // See also: https://stackoverflow.com/questions/74870472
    const artifact = await deployments.getExtendedArtifact(name);
    const deployment = {
        address: instance,
        ...artifact,
    };
    await deployments.save(name, deployment);
    // hardhat-upgrades overrides the `verify` task that ships with `hardhat` so that if the address passed
    // is a proxy, hardhat will first verify the implementation and then the proxy and also link the proxy
    // to the implementation's ABI on etherscan.
    // https://docs.openzeppelin.com/upgrades-plugins/1.x/api-hardhat-upgrades#verify
    await run("verify:verify", { address: instance, constructorArguments: constructorArgs });
}
exports.deployNewProxy = deployNewProxy;
