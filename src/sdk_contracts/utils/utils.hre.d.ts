import hre from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployment } from "hardhat-deploy/types";
/**
 * @description Resolve the HubPool deployment, as well as the HubPool and SpokePool chain IDs for a new deployment.
 * @dev This function relies on having companionNetworks defined in the HardhatUserConfig.
 * @dev This should only be used when deploying a SpokePool to a satellite chain (i.e. HubChainId != SpokeChainId).
 * @returns HubPool instance, HubPool chain ID and SpokePool chain ID.
 */
export declare function getSpokePoolDeploymentInfo(hre: HardhatRuntimeEnvironment): Promise<{
    hubPool: Deployment;
    hubChainId: number;
    spokeChainId: number;
}>;
declare type FnArgs = number | string;
export declare function deployNewProxy(name: string, constructorArgs: FnArgs[], initArgs: FnArgs[], implementationOnly?: boolean): Promise<void>;
export { hre };
