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
exports.Signer = exports.keccak256 = exports.defaultAbiCoder = exports.BigNumber = exports.ethers = exports.Contract = exports.expect = exports.avmL1ToL2Alias = exports.createFakeFromABI = exports.createFake = exports.getParamType = exports.randomAddress = exports.randomBigNumber = exports.seedContract = exports.seedWallet = exports.createRandomBytes32 = exports.hexToUtf8 = exports.utf8ToHex = exports.toBN = exports.fromWei = exports.toBNWeiWithDecimals = exports.toBNWei = exports.toWeiWithDecimals = exports.toWei = exports.getAllFilesInPath = exports.findArtifactFromPath = exports.getContractFactory = exports.SignerWithAddress = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const chai_1 = require("chai");
Object.defineProperty(exports, "expect", { enumerable: true, get: function () { return chai_1.expect; } });
const chai = __importStar(require("chai"));
const contracts_node_1 = require("@uma/contracts-node");
const optimismContracts = __importStar(require("@eth-optimism/contracts"));
const smock_1 = require("@defi-wonderland/smock");
const hardhat_1 = require("hardhat");
Object.defineProperty(exports, "ethers", { enumerable: true, get: function () { return hardhat_1.ethers; } });
const ethers_1 = require("ethers");
Object.defineProperty(exports, "BigNumber", { enumerable: true, get: function () { return ethers_1.BigNumber; } });
Object.defineProperty(exports, "Signer", { enumerable: true, get: function () { return ethers_1.Signer; } });
Object.defineProperty(exports, "Contract", { enumerable: true, get: function () { return ethers_1.Contract; } });
var signers_1 = require("@nomiclabs/hardhat-ethers/signers");
Object.defineProperty(exports, "SignerWithAddress", { enumerable: true, get: function () { return signers_1.SignerWithAddress; } });
chai.use(smock_1.smock.matchers);
function isFactoryOptions(signerOrFactoryOptions) {
    return "signer" in signerOrFactoryOptions || "libraries" in signerOrFactoryOptions;
}
async function getContractFactory(name, signerOrFactoryOptions) {
    try {
        // First, try get the artifact from this repo.
        return await hardhat_1.ethers.getContractFactory(name, signerOrFactoryOptions);
    }
    catch (_) {
        try {
            // If it does not exist then try find the contract in the UMA core package.
            if (isFactoryOptions(signerOrFactoryOptions))
                throw new Error("Cannot pass FactoryOptions to a contract imported from UMA");
            return new ethers_1.ContractFactory((0, contracts_node_1.getAbi)(name), (0, contracts_node_1.getBytecode)(name), signerOrFactoryOptions);
        }
        catch (_) {
            // If that also fails, try fetching it from Optimism package.
            try {
                return await optimismContracts.getContractFactory(name, signerOrFactoryOptions);
            }
            catch (_) {
                // If that also fails, then try getting it from the Arbitrum package.
                try {
                    const arbitrumArtifact = getArbitrumArtifact(name);
                    return new ethers_1.ContractFactory(arbitrumArtifact.abi, arbitrumArtifact.bytecode, signerOrFactoryOptions);
                }
                catch (_) {
                    // Finally, try importing the package from the local path. This would be the case when running these utils
                    // from node modules which breaks using the hardhat getContractFactory function.
                    try {
                        const localArtifact = getLocalArtifact(name);
                        return new ethers_1.ContractFactory(localArtifact.abi, localArtifact.bytecode, signerOrFactoryOptions);
                    }
                    catch (_) {
                        throw new Error(`Could not find the artifact for ${name}!`);
                    }
                }
            }
        }
    }
}
exports.getContractFactory = getContractFactory;
// Arbitrum does not export any of their artifacts nicely, so we have to do this manually. The methods that follow can
// be re-used if we end up requiring to import contract artifacts from other projects that dont export cleanly.
function getArbitrumArtifact(contractName) {
    try {
        // First, try find the contract from their main package.
        const artifactsPath = `${findPathToRootOfPackage("arb-bridge-eth")}build/contracts/contracts`;
        return findArtifactFromPath(contractName, artifactsPath);
    }
    catch (error) {
        // If that fails then try from the peripheral package.
        const artifactsPath = `${findPathToRootOfPackage("arb-bridge-peripherals")}build/contracts/contracts`;
        return findArtifactFromPath(contractName, artifactsPath);
    }
}
// Fetch the artifact from the publish package's artifacts directory.
function getLocalArtifact(contractName) {
    const artifactsPath = path_1.default.join(__dirname, "../../artifacts/contracts");
    return findArtifactFromPath(contractName, artifactsPath);
}
function findPathToRootOfPackage(packageName) {
    const packagePath = require.resolve(`${packageName}/package.json`);
    return packagePath.slice(0, packagePath.indexOf("package.json"));
}
function findArtifactFromPath(contractName, artifactsPath) {
    const allArtifactsPaths = getAllFilesInPath(artifactsPath);
    const desiredArtifactPaths = allArtifactsPaths.filter((a) => a.endsWith(`/${contractName}.json`));
    if (desiredArtifactPaths.length !== 1)
        throw new Error(`Couldn't find desired artifact or found too many for ${contractName}`);
    return JSON.parse(fs_1.default.readFileSync(desiredArtifactPaths[0], "utf-8"));
}
exports.findArtifactFromPath = findArtifactFromPath;
function getAllFilesInPath(dirPath, arrayOfFiles = []) {
    const files = fs_1.default.readdirSync(dirPath);
    files.forEach((file) => {
        if (fs_1.default.statSync(dirPath + "/" + file).isDirectory())
            arrayOfFiles = getAllFilesInPath(dirPath + "/" + file, arrayOfFiles);
        else
            arrayOfFiles.push(path_1.default.join(dirPath, "/", file));
    });
    return arrayOfFiles;
}
exports.getAllFilesInPath = getAllFilesInPath;
const toWei = (num) => hardhat_1.ethers.utils.parseEther(num.toString());
exports.toWei = toWei;
const toWeiWithDecimals = (num, decimals) => hardhat_1.ethers.utils.parseUnits(num.toString(), decimals);
exports.toWeiWithDecimals = toWeiWithDecimals;
const toBNWei = (num) => ethers_1.BigNumber.from((0, exports.toWei)(num));
exports.toBNWei = toBNWei;
const toBNWeiWithDecimals = (num, decimals) => ethers_1.BigNumber.from((0, exports.toWeiWithDecimals)(num, decimals));
exports.toBNWeiWithDecimals = toBNWeiWithDecimals;
const fromWei = (num) => hardhat_1.ethers.utils.formatUnits(num.toString());
exports.fromWei = fromWei;
const toBN = (num) => {
    // If the string version of the num contains a `.` then it is a number which needs to be parsed to a string int.
    if (num.toString().includes("."))
        return ethers_1.BigNumber.from(parseInt(num.toString()));
    return ethers_1.BigNumber.from(num.toString());
};
exports.toBN = toBN;
const utf8ToHex = (input) => hardhat_1.ethers.utils.formatBytes32String(input);
exports.utf8ToHex = utf8ToHex;
const hexToUtf8 = (input) => hardhat_1.ethers.utils.toUtf8String(input);
exports.hexToUtf8 = hexToUtf8;
const createRandomBytes32 = () => hardhat_1.ethers.utils.hexlify(hardhat_1.ethers.utils.randomBytes(32));
exports.createRandomBytes32 = createRandomBytes32;
async function seedWallet(walletToFund, tokens, weth, amountToSeedWith) {
    for (const token of tokens)
        await token.mint(await walletToFund.getAddress(), amountToSeedWith);
    if (weth)
        await weth.connect(walletToFund).deposit({ value: amountToSeedWith });
}
exports.seedWallet = seedWallet;
async function seedContract(contract, walletToFund, tokens, weth, amountToSeedWith) {
    await seedWallet(walletToFund, tokens, weth, amountToSeedWith);
    for (const token of tokens)
        await token.connect(walletToFund).transfer(contract.address, amountToSeedWith);
    if (weth)
        await weth.connect(walletToFund).transfer(contract.address, amountToSeedWith);
}
exports.seedContract = seedContract;
function randomBigNumber(bytes = 32, signed = false) {
    const sign = signed && Math.random() < 0.5 ? "-" : "";
    const byteString = "0x" + Buffer.from(hardhat_1.ethers.utils.randomBytes(signed ? bytes - 1 : bytes)).toString("hex");
    return hardhat_1.ethers.BigNumber.from(sign + byteString);
}
exports.randomBigNumber = randomBigNumber;
function randomAddress() {
    return hardhat_1.ethers.utils.getAddress(hardhat_1.ethers.utils.hexlify(hardhat_1.ethers.utils.randomBytes(20)));
}
exports.randomAddress = randomAddress;
async function getParamType(contractName, functionName, paramName) {
    const contractFactory = await getContractFactory(contractName, new hardhat_1.ethers.VoidSigner(hardhat_1.ethers.constants.AddressZero));
    const fragment = contractFactory.interface.fragments.find((fragment) => fragment.name === functionName);
    return fragment.inputs.find((input) => input.name === paramName) || "";
}
exports.getParamType = getParamType;
async function createFake(contractName, targetAddress = "") {
    const contractFactory = await getContractFactory(contractName, new hardhat_1.ethers.VoidSigner(hardhat_1.ethers.constants.AddressZero));
    return smock_1.smock.fake(contractFactory.interface.fragments, {
        address: targetAddress === "" ? undefined : targetAddress,
        provider: contractFactory.signer.provider,
    });
}
exports.createFake = createFake;
async function createFakeFromABI(abi, targetAddress = "") {
    const signer = new hardhat_1.ethers.VoidSigner(hardhat_1.ethers.constants.AddressZero);
    return smock_1.smock.fake(abi, {
        address: !targetAddress ? undefined : targetAddress,
        provider: signer.provider,
    });
}
exports.createFakeFromABI = createFakeFromABI;
function avmL1ToL2Alias(l1Address) {
    const offset = (0, exports.toBN)("0x1111000000000000000000000000000000001111");
    const l1AddressAsNumber = (0, exports.toBN)(l1Address);
    const l2AddressAsNumber = l1AddressAsNumber.add(offset);
    const mask = (0, exports.toBN)("2").pow((0, exports.toBN)("160"));
    return hardhat_1.ethers.utils.hexlify(l2AddressAsNumber.mod(mask));
}
exports.avmL1ToL2Alias = avmL1ToL2Alias;
const { defaultAbiCoder, keccak256 } = hardhat_1.ethers.utils;
exports.defaultAbiCoder = defaultAbiCoder;
exports.keccak256 = keccak256;
