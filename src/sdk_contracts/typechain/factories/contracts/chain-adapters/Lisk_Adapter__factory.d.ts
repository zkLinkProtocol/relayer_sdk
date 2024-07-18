import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Lisk_Adapter, Lisk_AdapterInterface } from "../../../contracts/chain-adapters/Lisk_Adapter";
declare type Lisk_AdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Lisk_Adapter__factory extends ContractFactory {
    constructor(...args: Lisk_AdapterConstructorParams);
    deploy(_l1Weth: string, _crossDomainMessenger: string, _l1StandardBridge: string, _l1Usdc: string, overrides?: Overrides & {
        from?: string;
    }): Promise<Lisk_Adapter>;
    getDeployTransaction(_l1Weth: string, _crossDomainMessenger: string, _l1StandardBridge: string, _l1Usdc: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Lisk_Adapter;
    connect(signer: Signer): Lisk_Adapter__factory;
    static readonly bytecode = "0x6101403461012a57601f61138738819003918201601f19168301916001600160401b0383118484101761012e5780849260809460405283398101031261012a578051906001600160a01b03808316830361012a576020820151818116810361012a57604083015192828416840361012a5760600151918216820361012a5760805260c0525f60e05263ffffffff60a052610100918252610120908152604051906112449283610143843960805183818161010901526102be015260a05183818161031d0152610751015260c05183818161061a01528181610b750152610cd6015260e05183818161024f015281816105eb01528181610656015281816106bf01526108570152518281816104090152610c6a0152518181816104ab015281816109c60152610bfc0152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080806040526004361015610012575f80fd5b5f905f3560e01c90816311eac85514610c8e575080631efd482a14610c2057806335a2db6a14610bb257806352c8c75c1461037d5780635e743ef7146103415780636e400983146102e2578063927ede2d146102735780639748cf7c146102045763e6eb8ade14610081575f80fd5b60407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610201576100b3610cfa565b6024359067ffffffffffffffff908183116101ee57366023840112156101ee5782600401359182116101ee57602483019260248336920101116101ee578373ffffffffffffffffffffffffffffffffffffffff807f00000000000000000000000000000000000000000000000000000000000000001692833b156101fd5782906040519283917f3dbb202b00000000000000000000000000000000000000000000000000000000835216948560048301526060602483015281838161017c606482018b8d610d9f565b62030d40604483015203925af180156101f2576101da575b50506101d47f9e6c52944e331ba6270e7fe4cea2a4086bae8f7a27e1cdba07f416806f5d0ac4936040519384938452604060208501526040840191610d9f565b0390a180f35b6101e390610d1d565b6101ee57835f610194565b8380fd5b6040513d84823e3d90fd5b8280fd5b80fd5b503461020157807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261020157602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b503461020157807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261020157602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b503461020157807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261020157602060405163ffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b503461020157807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261020157602060405162030d408152f35b5060807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610944576103b0610cfa565b60243573ffffffffffffffffffffffffffffffffffffffff81168103610944576064359073ffffffffffffffffffffffffffffffffffffffff82168203610944578373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168073ffffffffffffffffffffffffffffffffffffffff8616145f146105d257803b156105ba578180916024604051809481937f2e1a7d4d00000000000000000000000000000000000000000000000000000000835260443560048401525af180156101f2576105be575b5073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016803b156105ba5781608491604051928380927f9a2ac6d500000000000000000000000000000000000000000000000000000000825273ffffffffffffffffffffffffffffffffffffffff8916600483015262030d40602483015260606044830152846064830152604435905af180156101f2576105a2575b50509173ffffffffffffffffffffffffffffffffffffffff608092817fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b955b81604051951685521660208401526044356040840152166060820152a180f35b6105ae90949294610d1d565b6101ee5791835f610543565b5080fd5b6105c790610d1d565b6101ee57835f610493565b505073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016151580610b5d575b156109af577f000000000000000000000000000000000000000000000000000000000000000061067c60443573ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001683610ddd565b6040517fcb75c11c00000000000000000000000000000000000000000000000000000000815260208160048173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa90811561095057869161095b575b50602073ffffffffffffffffffffffffffffffffffffffff916024604051809481937fa56ec6320000000000000000000000000000000000000000000000000000000083528188166004840152165afa90811561095057869161091a575b50907f000000000000000000000000000000000000000000000000000000000000000063ffffffff1690604435805b6107c557505050509173ffffffffffffffffffffffffffffffffffffffff608092817fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b95610582565b8381111561091457835b6040517f6fd3504e00000000000000000000000000000000000000000000000000000000815281600482015284602482015273ffffffffffffffffffffffffffffffffffffffff8816604482015273ffffffffffffffffffffffffffffffffffffffff841660648201526020816084818d73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165af18015610909576108c1575b508103908111610894578061077c565b6024887f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b6020813d602011610901575b816108da60209383610d5e565b810103126108fd575167ffffffffffffffff8116036108f9575f610884565b8880fd5b8980fd5b3d91506108cd565b6040513d8c823e3d90fd5b806107cf565b90506020813d602011610948575b8161093560209383610d5e565b8101031261094457515f61074d565b5f80fd5b3d9150610928565b6040513d88823e3d90fd5b90506020813d6020116109a7575b8161097660209383610d5e565b810103126109a3575173ffffffffffffffffffffffffffffffffffffffff811681036109a35760206106ef565b8580fd5b3d9150610969565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016610a096044358273ffffffffffffffffffffffffffffffffffffffff8716610ddd565b803b15610944575f809160e4604051809481937f838b252000000000000000000000000000000000000000000000000000000000835273ffffffffffffffffffffffffffffffffffffffff8a16600484015273ffffffffffffffffffffffffffffffffffffffff8816602484015273ffffffffffffffffffffffffffffffffffffffff89166044840152604435606484015262030d40608484015260c060a48401528160c48401525af18015610b5257610b00575b509173ffffffffffffffffffffffffffffffffffffffff608092817fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b95610582565b7fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b93919450608092610b4673ffffffffffffffffffffffffffffffffffffffff92610d1d565b5f959294509250610abe565b6040513d5f823e3d90fd5b5073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841614610613565b34610944575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261094457602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b34610944575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261094457602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b34610944575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126109445760209073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361094457565b67ffffffffffffffff8111610d3157604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610d3157604052565b601f82602094937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe093818652868601375f8582860101520116010190565b9173ffffffffffffffffffffffffffffffffffffffff80931660409081517fdd62ed3e0000000000000000000000000000000000000000000000000000000081526004953087830152602495169182868301526020948583604481855afa9283156110e4575f936110b5575b50820180921161108a57835191858301937f095ea7b300000000000000000000000000000000000000000000000000000000855287840152604483015260448252608082019267ffffffffffffffff928085108486111761105f5760c08101858110858211176110345786528685527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460a0820152515f9182919082855af1903d15611025573d928311610ffa5790610f3f939291855192610f32887fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160185610d5e565b83523d5f8885013e6110ee565b8051838115918215610fda575b5050905015610f5b5750505050565b517f08c379a000000000000000000000000000000000000000000000000000000000815292830152602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608490fd5b83809293500103126109445782015180151581036109445780835f610f4c565b866041897f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b90610f3f9392506060916110ee565b8860418b7f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b8760418a7f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b856011887f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b9092508581813d83116110dd575b6110cd8183610d5e565b810103126109445751915f610e49565b503d6110c3565b85513d5f823e3d90fd5b919290156111695750815115611102575090565b3b1561110b5790565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b82519091501561117c5750805190602001fd5b604051907f08c379a00000000000000000000000000000000000000000000000000000000082528160208060048301528251928360248401525f5b8481106111f7575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f835f604480968601015201168101030190fd5b8181018301518682016044015285935082016111b756fea2646970667358221220211624aa4b145f2884b9fc79290d23286dd93ca8a86f10bac2dbd0bf99307e0664736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract WETH9Interface";
            readonly name: "_l1Weth";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_crossDomainMessenger";
            readonly type: "address";
        }, {
            readonly internalType: "contract IL1StandardBridge";
            readonly name: "_l1StandardBridge";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "_l1Usdc";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "MessageRelayed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "l1Token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "l2Token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "TokensRelayed";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "L1_STANDARD_BRIDGE";
        readonly outputs: readonly [{
            readonly internalType: "contract IL1StandardBridge";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L1_WETH";
        readonly outputs: readonly [{
            readonly internalType: "contract WETH9Interface";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L2_GAS_LIMIT";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "MESSENGER";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "cctpTokenMessenger";
        readonly outputs: readonly [{
            readonly internalType: "contract ITokenMessenger";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "recipientCircleDomainId";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "relayMessage";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "l1Token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "l2Token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "relayTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "usdcToken";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): Lisk_AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Lisk_Adapter;
}
export {};
