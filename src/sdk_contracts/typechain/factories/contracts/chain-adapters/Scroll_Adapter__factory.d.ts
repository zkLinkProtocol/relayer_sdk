import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Scroll_Adapter, Scroll_AdapterInterface } from "../../../contracts/chain-adapters/Scroll_Adapter";
declare type Scroll_AdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Scroll_Adapter__factory extends ContractFactory {
    constructor(...args: Scroll_AdapterConstructorParams);
    deploy(_l1GatewayRouter: string, _l1ScrollMessenger: string, _l2GasPriceOracle: string, _l2MessageRelayGasLimit: BigNumberish, _l2TokenRelayGasLimit: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<Scroll_Adapter>;
    getDeployTransaction(_l1GatewayRouter: string, _l1ScrollMessenger: string, _l2GasPriceOracle: string, _l2MessageRelayGasLimit: BigNumberish, _l2TokenRelayGasLimit: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Scroll_Adapter;
    connect(signer: Signer): Scroll_Adapter__factory;
    static readonly bytecode = "0x610120346100f657601f610e2038819003918201601f19168301916001600160401b038311848410176100fa5780849260a0946040528339810103126100f65780516001600160a01b039182821682036100f657602081015183811681036100f657604082015193841684036100f65761008760806100806060850161010e565b930161010e565b9260c05260e05261010092835260805260a052604051610d009182610120833960805182818160f501526102d0015260a051828181610599015261097c015260c0518281816103d30152610920015260e051828181610116015261033f0152518181816102710152610ad30152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b519063ffffffff821682036100f65756fe6080604081815260049081361015610015575f80fd5b5f925f3560e01c9081631dec6f9214610944575080633aeafbb2146108d657806352c8c75c146103635780636a4a3ed7146102f45780638b4bac8914610295578063b2525ef3146102265763e6eb8ade1461006e575f80fd5b807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102225761009f6109a0565b91602435928467ffffffffffffffff9182861161021e573660238701121561021e578584013592831161021e576024860195602484369201011161021e5773ffffffffffffffffffffffffffffffffffffffff907f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000831661014082610a83565b93813b1561021a5761019f9486948b9463ffffffff8c51988997889687957fb2267a7b00000000000000000000000000000000000000000000000000000000875216809e860152896024860152608060448601528c6084860191610a45565b9116606483015203925af18015610210576101f8575b50507f9e6c52944e331ba6270e7fe4cea2a4086bae8f7a27e1cdba07f416806f5d0ac4936101f29184519485948552806020860152840191610a45565b0390a180f35b610201906109c3565b61020c57845f6101b5565b8480fd5b85513d84823e3d90fd5b8580fd5b5080fd5b8280fd5b83823461021e57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021e576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b83823461021e57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021e576020905163ffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b83823461021e57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021e576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b5060807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126106a3576103966109a0565b91602491823573ffffffffffffffffffffffffffffffffffffffff948582168092036106a357604494853594606435968888168098036106a357887f00000000000000000000000000000000000000000000000000000000000000001691898751957fc676ad2900000000000000000000000000000000000000000000000000000000875216998a8287015260209586818781885afa9081156108cc57908892915f91610890575b5016036108375786517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523082820152848101849052858184818e5afa90811561082d575f91610800575b508881018091116107d5578751868101917f095ea7b3000000000000000000000000000000000000000000000000000000008352858783015284820152838152608081019167ffffffffffffffff91808410838511176107aa5760c081018481108482111761077f575f928f91849384918f528c88527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460a082015251925af13d15610771573d918211610746579061058192918a51916105728a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160184610a04565b82523d5f8a84013e5b8d610baa565b8051868115918215610726575b50509050156106a7577f0000000000000000000000000000000000000000000000000000000000000000906105c282610a83565b843b156106a3575f9463ffffffff6084948c8f978f8e519b8c9a8b997ff219fa66000000000000000000000000000000000000000000000000000000008b528a01528801528601521660648401525af1801561069957610657575b50825195865285015283015260608201527fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b90608090a180f35b608095939197509161068b7fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b9795936109c3565b5f979193955091939561061d565b84513d5f823e3d90fd5b5f80fd5b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e608492602a86888b51957f08c379a00000000000000000000000000000000000000000000000000000000087528601528401528201527f6f742073756363656564000000000000000000000000000000000000000000006064820152fd5b83809293500103126106a35785015180151581036106a35780865f61058e565b866041857f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b61058192915060609061057b565b886041877f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b876041867f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b846011837f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b90508581813d8311610826575b6108178183610a04565b810103126106a357515f61048a565b503d61080d565b88513d5f823e3d90fd5b7f6c32546f6b656e204d69736d6174636800000000000000000000000000000000606492601086888b51957f08c379a0000000000000000000000000000000000000000000000000000000008752860152840152820152fd5b80929350888092503d83116108c5575b6108aa8183610a04565b810103126106a357519080821682036106a35787915f61043e565b503d6108a0565b89513d5f823e3d90fd5b50346106a3575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126106a3576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b346106a3575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126106a35760209063ffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b6004359073ffffffffffffffffffffffffffffffffffffffff821682036106a357565b67ffffffffffffffff81116109d757604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176109d757604052565b601f82602094937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe093818652868601375f8582860101520116010190565b9063ffffffff604051927fd7704bae00000000000000000000000000000000000000000000000000000000845216600483015260208260248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa918215610b9f575f92610b6b575b50814710610b0d57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f496e73756666696369656e74204554482062616c616e636500000000000000006044820152fd5b9091506020813d602011610b97575b81610b8760209383610a04565b810103126106a35751905f610b03565b3d9150610b7a565b6040513d5f823e3d90fd5b91929015610c255750815115610bbe575090565b3b15610bc75790565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b825190915015610c385750805190602001fd5b604051907f08c379a00000000000000000000000000000000000000000000000000000000082528160208060048301528251928360248401525f5b848110610cb3575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f835f604480968601015201168101030190fd5b818101830151868201604401528593508201610c7356fea264697066735822122047fa96105979cf19140b6e67054079f8c29e659854690c46f0362e38de64ae6b64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IL1GatewayRouter";
            readonly name: "_l1GatewayRouter";
            readonly type: "address";
        }, {
            readonly internalType: "contract IL1ScrollMessenger";
            readonly name: "_l1ScrollMessenger";
            readonly type: "address";
        }, {
            readonly internalType: "contract IL2GasPriceOracle";
            readonly name: "_l2GasPriceOracle";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "_l2MessageRelayGasLimit";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "_l2TokenRelayGasLimit";
            readonly type: "uint32";
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
        readonly name: "L1_GATEWAY_ROUTER";
        readonly outputs: readonly [{
            readonly internalType: "contract IL1GatewayRouter";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L1_SCROLL_MESSENGER";
        readonly outputs: readonly [{
            readonly internalType: "contract IL1ScrollMessenger";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L2_GAS_PRICE_ORACLE";
        readonly outputs: readonly [{
            readonly internalType: "contract IL2GasPriceOracle";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L2_MESSAGE_RELAY_GAS_LIMIT";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L2_TOKEN_RELAY_GAS_LIMIT";
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
    }];
    static createInterface(): Scroll_AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Scroll_Adapter;
}
export {};
