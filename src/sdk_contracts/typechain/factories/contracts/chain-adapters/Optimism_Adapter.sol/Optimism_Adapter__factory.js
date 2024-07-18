"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Optimism_Adapter__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract WETH9Interface",
                name: "_l1Weth",
                type: "address",
            },
            {
                internalType: "address",
                name: "_crossDomainMessenger",
                type: "address",
            },
            {
                internalType: "contract IL1StandardBridge",
                name: "_l1StandardBridge",
                type: "address",
            },
            {
                internalType: "contract IERC20",
                name: "_l1Usdc",
                type: "address",
            },
            {
                internalType: "contract ITokenMessenger",
                name: "_cctpTokenMessenger",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "target",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "message",
                type: "bytes",
            },
        ],
        name: "MessageRelayed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "l1Token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "l2Token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "to",
                type: "address",
            },
        ],
        name: "TokensRelayed",
        type: "event",
    },
    {
        inputs: [],
        name: "DAI",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "DAI_OPTIMISM_BRIDGE",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "L1_STANDARD_BRIDGE",
        outputs: [
            {
                internalType: "contract IL1StandardBridge",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "L1_WETH",
        outputs: [
            {
                internalType: "contract WETH9Interface",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "L2_GAS_LIMIT",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "MESSENGER",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "SNX",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "SNX_OPTIMISM_BRIDGE",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "cctpTokenMessenger",
        outputs: [
            {
                internalType: "contract ITokenMessenger",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "recipientCircleDomainId",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "message",
                type: "bytes",
            },
        ],
        name: "relayMessage",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "l1Token",
                type: "address",
            },
            {
                internalType: "address",
                name: "l2Token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
        ],
        name: "relayTokens",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "usdcToken",
        outputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x6101403461013657601f61168d38819003918201601f19168301916001600160401b0383118484101761013a5780849260a094604052833981010312610136578051906001600160a01b038083168303610136576020820151918183168303610136576040810151928284168403610136576060820151918383168303610136576080015192831683036101365760805260c05260e052600260a0526101009182526101209081526040519061153e928361014f843960805183818161018501526103d1015260a05183818161043001526108b1015260c05183818161077a01528181610e750152610fd6015260e0518381816103620152818161074b015281816107b60152818161081f01526109b70152518281816105690152610f6a01525181818161060b01528181610b270152610efc0152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080806040526004361015610012575f80fd5b5f905f3560e01c90816311eac85514610f8e575080631efd482a14610f2057806335a2db6a14610eb257806352c8c75c146104dd5780635e522dd5146104905780635e743ef7146104545780636e400983146103f5578063927ede2d146103865780639748cf7c14610317578063abcaae84146102ca578063e0bab4c41461027d578063e6eb8ade146100fc5763e8d6101e146100ad575f80fd5b346100f957807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f957602060405173c011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f8152f35b80fd5b5060407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f95761012f610ffa565b6024359067ffffffffffffffff9081831161026a573660238401121561026a57826004013591821161026a576024830192602483369201011161026a578373ffffffffffffffffffffffffffffffffffffffff807f00000000000000000000000000000000000000000000000000000000000000001692833b156102795782906040519283917f3dbb202b0000000000000000000000000000000000000000000000000000000083521694856004830152606060248301528183816101f8606482018b8d61109f565b62030d40604483015203925af1801561026e57610256575b50506102507f9e6c52944e331ba6270e7fe4cea2a4086bae8f7a27e1cdba07f416806f5d0ac493604051938493845260406020850152604084019161109f565b0390a180f35b61025f9061101d565b61026a57835f610210565b8380fd5b6040513d84823e3d90fd5b8280fd5b50346100f957807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f9576020604051736b175474e89094c44da98b954eedeac495271d0f8152f35b50346100f957807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f95760206040517339ea01a0298c315d149a490e34b59dbf2ec7e48f8152f35b50346100f957807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f957602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346100f957807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f957602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346100f957807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f957602060405163ffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346100f957807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f957602060405162030d408152f35b50346100f957807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f95760206040517310e6593cdda8c58a1d0f14c5164b376352a55f2f8152f35b5060807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610aa457610510610ffa565b60243573ffffffffffffffffffffffffffffffffffffffff81168103610aa4576064359073ffffffffffffffffffffffffffffffffffffffff82168203610aa4578373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168073ffffffffffffffffffffffffffffffffffffffff8616145f1461073257803b1561071a578180916024604051809481937f2e1a7d4d00000000000000000000000000000000000000000000000000000000835260443560048401525af1801561026e5761071e575b5073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016803b1561071a5781608491604051928380927f9a2ac6d500000000000000000000000000000000000000000000000000000000825273ffffffffffffffffffffffffffffffffffffffff8916600483015262030d40602483015260606044830152846064830152604435905af1801561026e57610702575b50509173ffffffffffffffffffffffffffffffffffffffff608092817fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b955b81604051951685521660208401526044356040840152166060820152a180f35b61070e9094929461101d565b61026a5791835f6106a3565b5080fd5b6107279061101d565b61026a57835f6105f3565b505073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016151580610e5d575b15610b0f577f00000000000000000000000000000000000000000000000000000000000000006107dc60443573ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016836110dd565b6040517fcb75c11c00000000000000000000000000000000000000000000000000000000815260208160048173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa908115610ab0578691610abb575b50602073ffffffffffffffffffffffffffffffffffffffff916024604051809481937fa56ec6320000000000000000000000000000000000000000000000000000000083528188166004840152165afa908115610ab0578691610a7a575b50907f000000000000000000000000000000000000000000000000000000000000000063ffffffff1690604435805b61092557505050509173ffffffffffffffffffffffffffffffffffffffff608092817fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b956106e2565b83811115610a7457835b6040517f6fd3504e00000000000000000000000000000000000000000000000000000000815281600482015284602482015273ffffffffffffffffffffffffffffffffffffffff8816604482015273ffffffffffffffffffffffffffffffffffffffff841660648201526020816084818d73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165af18015610a6957610a21575b5081039081116109f457806108dc565b6024887f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b6020813d602011610a61575b81610a3a6020938361105e565b81010312610a5d575167ffffffffffffffff811603610a59575f6109e4565b8880fd5b8980fd5b3d9150610a2d565b6040513d8c823e3d90fd5b8061092f565b90506020813d602011610aa8575b81610a956020938361105e565b81010312610aa457515f6108ad565b5f80fd5b3d9150610a88565b6040513d88823e3d90fd5b90506020813d602011610b07575b81610ad66020938361105e565b81010312610b03575173ffffffffffffffffffffffffffffffffffffffff81168103610b0357602061084f565b8580fd5b3d9150610ac9565b8373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016736b175474e89094c44da98b954eedeac495271d0f73ffffffffffffffffffffffffffffffffffffffff861614610e42575b73c011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f73ffffffffffffffffffffffffffffffffffffffff86161480610e26575b610bcf6044358373ffffffffffffffffffffffffffffffffffffffff89166110dd565b15610cba5773ffffffffffffffffffffffffffffffffffffffff16803b1561071a578160405180927fffaad6a5000000000000000000000000000000000000000000000000000000008252818381610c506044358b600484016020909392919373ffffffffffffffffffffffffffffffffffffffff60408201951681520152565b03925af1801561026e57610ca2575b50509173ffffffffffffffffffffffffffffffffffffffff608092817fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b956106e2565b610cae9094929461101d565b61026a5791835f610c5f565b73ffffffffffffffffffffffffffffffffffffffff915016803b15610aa4575f809160e4604051809481937f838b252000000000000000000000000000000000000000000000000000000000835273ffffffffffffffffffffffffffffffffffffffff8a16600484015273ffffffffffffffffffffffffffffffffffffffff8816602484015273ffffffffffffffffffffffffffffffffffffffff89166044840152604435606484015262030d40608484015260c060a48401528160c48401525af18015610e1b57610dc9575b509173ffffffffffffffffffffffffffffffffffffffff608092817fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b956106e2565b7fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b93919450608092610e0f73ffffffffffffffffffffffffffffffffffffffff9261101d565b5f959294509250610d87565b6040513d5f823e3d90fd5b7339ea01a0298c315d149a490e34b59dbf2ec7e48f9150610bac565b507310e6593cdda8c58a1d0f14c5164b376352a55f2f610b79565b5073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841614610773565b34610aa4575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610aa457602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b34610aa4575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610aa457602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b34610aa4575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610aa45760209073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b6004359073ffffffffffffffffffffffffffffffffffffffff82168203610aa457565b67ffffffffffffffff811161103157604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761103157604052565b601f82602094937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe093818652868601375f8582860101520116010190565b9073ffffffffffffffffffffffffffffffffffffffff8092169060409182517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523060048201526024948316858201526020958682604481865afa9182156113de575f926113af575b5081018091116113835783517f095ea7b30000000000000000000000000000000000000000000000000000000087820190815273ffffffffffffffffffffffffffffffffffffffff909416868201908152602081019290925290819060400103916111d87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09384810184528361105e565b84519367ffffffffffffffff92858701848111878210176113575787528886527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564868a0152515f9182919082855af1913d15611347573d90811161131b579061125e9493929161125189885195601f840116018561105e565b83523d5f8985013e6113e8565b80518481159182156112fb575b505090501561127957505050565b60849291602a9151927f08c379a000000000000000000000000000000000000000000000000000000000845260048401528201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152fd5b8380929350010312610aa4578301518015158103610aa45780845f61126b565b867f4e487b71000000000000000000000000000000000000000000000000000000005f5260416004525ffd5b509061125e9392506060916113e8565b887f4e487b71000000000000000000000000000000000000000000000000000000005f5260416004525ffd5b847f4e487b71000000000000000000000000000000000000000000000000000000005f5260116004525ffd5b9091508681813d83116113d7575b6113c7818361105e565b81010312610aa45751905f611147565b503d6113bd565b85513d5f823e3d90fd5b9192901561146357508151156113fc575090565b3b156114055790565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b8251909150156114765750805190602001fd5b604051907f08c379a00000000000000000000000000000000000000000000000000000000082528160208060048301528251928360248401525f5b8481106114f1575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f835f604480968601015201168101030190fd5b8181018301518682016044015285935082016114b156fea26469706673582212205eb4005f42392140b32584353384a3a23d0380aceae490d4701a45991b96d25764736f6c63430008170033";
const isSuperArgs = (xs) => xs.length > 1;
class Optimism_Adapter__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_l1Weth, _crossDomainMessenger, _l1StandardBridge, _l1Usdc, _cctpTokenMessenger, overrides) {
        return super.deploy(_l1Weth, _crossDomainMessenger, _l1StandardBridge, _l1Usdc, _cctpTokenMessenger, overrides || {});
    }
    getDeployTransaction(_l1Weth, _crossDomainMessenger, _l1StandardBridge, _l1Usdc, _cctpTokenMessenger, overrides) {
        return super.getDeployTransaction(_l1Weth, _crossDomainMessenger, _l1StandardBridge, _l1Usdc, _cctpTokenMessenger, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.Optimism_Adapter__factory = Optimism_Adapter__factory;
Optimism_Adapter__factory.bytecode = _bytecode;
Optimism_Adapter__factory.abi = _abi;
