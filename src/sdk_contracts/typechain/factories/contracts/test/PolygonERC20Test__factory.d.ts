import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PolygonERC20Test, PolygonERC20TestInterface } from "../../../contracts/test/PolygonERC20Test";
declare type PolygonERC20TestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PolygonERC20Test__factory extends ContractFactory {
    constructor(...args: PolygonERC20TestConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<PolygonERC20Test>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): PolygonERC20Test;
    connect(signer: Signer): PolygonERC20Test__factory;
    static readonly bytecode = "0x60406080815234620006ba5762000015620006be565b600c815260206b141bdb1e59dbdb8815195cdd60a21b8183015262000039620006be565b60098152681413d31657d51154d560ba1b82820152825190926001600160401b03808311620005c5576003908154936001938486811c96168015620006af575b878710146200069b578190601f9687811162000648575b508790878311600114620005e5575f92620005d9575b50505f1982851b1c191690841b1782555b8551908111620005c55760049586548481811c91168015620005ba575b87821014620005a75790818684931162000554575b508690868311600114620004f1575f92620004e5575b50505f1982841b1c191690831b1785555b60ff1960128160065416176006555f805260059182865260ff946200014886868b5f200154166200014181620006fe565b156200071d565b5f80528387526002895f2086810187868254161790555f8155013315620004965780546001600160a01b031916331790555f80805284885289902085015486166200019381620006fe565b156200043f57620001a3620006de565b5f8152855f52848852620001c387878c5f200154166200014181620006fe565b855f52848852828a5f208781016002878254161790555f81550190865f905b620003ba575b5050505f805283875285858a5f200154166200020481620006fe565b15620003635762000214620006de565b915f835260025f528488526200023687878c5f200154166200014181620006fe565b60025f52848852895f208681016002868254161790555f81550191855f905b620002df575b50505050505f80528352845f200154166200027681620006fe565b156200028b578251611dbf90816200076b8239f35b608492519162461bcd60e51b8352820152603860248201525f805160206200252a83398151915260448201527f20746f206d616e61676520612073686172656420726f6c6500000000000000006064820152fd5b81518110156200035d5780861b82018901516001600160a01b031680156200031c575f908152848a528b9020805486168817905586018662000255565b60648b858c8f519262461bcd60e51b845283015260248201527f43616e6e6f74206164642030783020746f20612073686172656420726f6c65006044820152fd5b6200025b565b885162461bcd60e51b8152808901889052603860248201525f805160206200252a83398151915260448201527f20746f206d616e61676520612073686172656420726f6c6500000000000000006064820152608490fd5b8151811015620004395780871b82018a01516001600160a01b03168015620003f7575f908152838b528c90208054871689179055870187620001e2565b5060648b858c8f519262461bcd60e51b845283015260248201527f43616e6e6f74206164642030783020746f20612073686172656420726f6c65006044820152fd5b620001e8565b885162461bcd60e51b8152808901889052603c60248201525f805160206200252a83398151915260448201527f20746f206d616e61676520616e206578636c757369766520726f6c65000000006064820152608490fd5b895162461bcd60e51b8152808a01899052602360248201527f43616e6e6f742073657420616e206578636c757369766520726f6c6520746f2060448201526203078360ec1b6064820152608490fd5b015190505f80620000ff565b90859350601f19831691895f52885f20925f5b8a8282106200053d575050841162000525575b505050811b01855562000110565b01515f1983861b60f8161c191690555f808062000517565b838501518655899790950194938401930162000504565b909150875f52865f208680850160051c8201928986106200059d575b918791869594930160051c01915b8281106200058e575050620000e9565b5f81558594508791016200057e565b9250819262000570565b602288634e487b7160e01b5f525260245ffd5b90607f1690620000d4565b634e487b7160e01b5f52604160045260245ffd5b015190505f80620000a6565b90869350601f19831691865f52895f20925f5b8b82821062000631575050841162000619575b505050811b018255620000b7565b01515f1983871b60f8161c191690555f80806200060b565b8385015186558a97909501949384019301620005f8565b909150845f52875f208780850160051c8201928a861062000691575b918891869594930160051c01915b8281106200068257505062000090565b5f815585945088910162000672565b9250819262000664565b634e487b7160e01b5f52602260045260245ffd5b95607f169562000079565b5f80fd5b60408051919082016001600160401b03811183821017620005c557604052565b60405190602082016001600160401b03811183821017620005c557604052565b600311156200070957565b634e487b7160e01b5f52602160045260245ffd5b156200072557565b60405162461bcd60e51b815260206004820152601e60248201527f43616e6e6f74207573652061207072652d6578697374696e6720726f6c6500006044820152606490fdfe6080604081815260049182361015610015575f80fd5b5f3560e01c90816306fdde031461127357508063095ea7b31461122c57806318160ddd146111f057806323b872dd146110c25780632e1a7d4d14611087578063313ce567146110485780633950935114610fd057806340c10f1914610ebc57806342966c6814610e735780636be7658b14610d6657806370a0823114610d0557806373cc802a14610c1457806374d0a67614610abd57806379cc679014610a6b5780637cdc1cb914610a1e57806395d89b4114610825578063983b2d561461072f578063a457c2d71461062c578063a9059cbb146105de578063aaa14ca3146104f4578063ab3545e514610478578063d97c05be146102fe578063dd62ed3e146102895763f44637ba14610127575f80fd5b34610285576020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102855761015f61141a565b9060025f5260058152610186600260ff6001865f200154166101808161149a565b1461155c565b60025f52600581526101a461019f845f205433906117e7565b6115e7565b60025f526005815273ffffffffffffffffffffffffffffffffffffffff6003845f2001921693841561022a5750835f52525f2060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00825416179055339060027f63502af7324ff6db91ab38f8236a648727d9385ea6c782073dd4882d8a61a48f5f80a4005b6064918451917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601f60248201527f43616e6e6f74206164642030783020746f20612073686172656420726f6c65006044820152fd5b5f80fd5b503461028557807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610285576020906102c361141a565b6102cb61143d565b9073ffffffffffffffffffffffffffffffffffffffff8091165f5260018452825f2091165f528252805f20549051908152f35b503461028557807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102855781359161033861143d565b90835f52600560205261035e600160ff81865f200154166103588161149a565b14611803565b835f52600560205261037761019f845f205433906117e7565b835f52600560205273ffffffffffffffffffffffffffffffffffffffff6002845f200192169283156103f5575050817fffffffffffffffffffffffff000000000000000000000000000000000000000082541617905533917f3b855c56b409b671c7112789d022675eb639d0bcb8896f1b6197c132f799e7465f80a4005b90602060849251917f08c379a0000000000000000000000000000000000000000000000000000000008352820152602360248201527f43616e6e6f742073657420616e206578636c757369766520726f6c6520746f2060448201527f30783000000000000000000000000000000000000000000000000000000000006064820152fd5b50346102855760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102855760209135805f52600583526104ca600160ff81855f200154166103588161149a565b5f526005825273ffffffffffffffffffffffffffffffffffffffff6002825f200154169051908152f35b5090346102855760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610285576105b4903591825f52600560205261054b600260ff6001845f200154166101808161149a565b61055d61055833856117e7565b6114d1565b825f526005602052600333915f20019073ffffffffffffffffffffffffffffffffffffffff165f5260205260405f207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008154169055565b339033907feb3e33034c392e69263b04ec0fa376dc12784a41b6676c7f31b936cbc0fbb5af5f80a4005b503461028557807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102855760209061062561061b61141a565b60243590336119ff565b5160018152f35b50903461028557817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102855761066461141a565b9060243590335f526001602052835f2073ffffffffffffffffffffffffffffffffffffffff84165f52602052835f2054908282106106ac57602085610625858503873361188e565b60849060208651917f08c379a0000000000000000000000000000000000000000000000000000000008352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152fd5b50903461028557602091827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102855761076a61141a565b600193845f526005815261078b600260ff87865f200154166101808161149a565b845f52600581526107a361019f845f205433906117e7565b845f526005815273ffffffffffffffffffffffffffffffffffffffff6003845f2001921693841561022a5750835f52525f20827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082541617905533917f63502af7324ff6db91ab38f8236a648727d9385ea6c782073dd4882d8a61a48f5f80a4005b509034610285575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102855781515f928254936001948060011c60018216968715610a14575b60209283831089146109e857869798838897985290815f1461098d5750600114610912575b50505003601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019267ffffffffffffffff8411838510176108e657508291826108e29252826113b6565b0390f35b6041907f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b5f888152929493507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b82841061097757505050907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe092601f92820101918193610894565b805488850187015287945092850192810161093c565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016848701525050151560051b830101905081601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0610894565b6022887f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b90607f169061086f565b503461028557807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261028557610a62602092610a5b61143d565b90356117e7565b90519015158152f35b503461028557807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261028557602090610625610aa861141a565b610ab46105583361178e565b60243590611c0d565b50903461028557817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261028557803591610af861143d565b835f526005602052610b18600260ff6001855f200154166101808161149a565b835f526005602052610b3161019f835f205433906117e7565b835f52600560205273ffffffffffffffffffffffffffffffffffffffff6003835f20019116928315610bb75750825f526020525f2060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082541617905533917f63502af7324ff6db91ab38f8236a648727d9385ea6c782073dd4882d8a61a48f5f80a4005b60649060208451917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601f60248201527f43616e6e6f74206164642030783020746f20612073686172656420726f6c65006044820152fd5b5090346102855760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261028557610c4d61141a565b905f80526005602052610c6d600160ff81865f200154166103588161149a565b5f80526005602052610c8661019f845f205433906117e7565b5f8052600560205273ffffffffffffffffffffffffffffffffffffffff6002845f200192169283156103f5575050817fffffffffffffffffffffffff000000000000000000000000000000000000000082541617905533905f7f3b855c56b409b671c7112789d022675eb639d0bcb8896f1b6197c132f799e7468180a4005b50346102855760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102855760209073ffffffffffffffffffffffffffffffffffffffff610d5561141a565b165f525f8252805f20549051908152f35b503461028557807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261028557610e346003923591610da561143d565b938491845f526005602052610dc8600260ff6001845f200154166101808161149a565b845f526005602052610de161019f825f205433906117e7565b845f5260056020525f20019073ffffffffffffffffffffffffffffffffffffffff165f5260205260405f207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008154169055565b73ffffffffffffffffffffffffffffffffffffffff339216907feb3e33034c392e69263b04ec0fa376dc12784a41b6676c7f31b936cbc0fbb5af5f80a4005b82346102855760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261028557610eba90610eb36105583361178e565b3533611c0d565b005b503461028557807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261028557610ef361141a565b9173ffffffffffffffffffffffffffffffffffffffff60243593610f1961055833611671565b16908115610f7357505f7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602085610f548297600254611460565b6002558484528382528584208181540190558551908152a35160018152f35b60649060208451917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b503461028557807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102855760209061062561100d61141a565b335f5260018452825f2073ffffffffffffffffffffffffffffffffffffffff82165f528452611041602435845f2054611460565b903361188e565b5034610285575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102855760209060ff600654169051908152f35b82346102855760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261028557610eba903533611c0d565b5090346102855760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610285576110fb61141a565b61110361143d565b906044359273ffffffffffffffffffffffffffffffffffffffff82165f526001602052845f20335f52602052845f2054907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361116a575b6020866106258787876119ff565b8482106111935750918391611188602096956106259503338361188e565b91939481935061115c565b60649060208751917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b5034610285575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610285576020906002549051908152f35b503461028557807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102855760209061062561126961141a565b602435903361188e565b83915034610285575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610285575f92600354936001948060011c600182169687156113ac575b60209283831089146109e857869798838897985290815f1461098d575060011461132f5750505003601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019267ffffffffffffffff8411838510176108e657508291826108e29252826113b6565b60035f908152929493507fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b82841061139657505050907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe092601f92820101918193610894565b805488850187015287945092850192810161135b565b90607f16906112bd565b6020808252825181830181905293925f5b858110611406575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f845f6040809697860101520116010190565b8181018301518482016040015282016113c7565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361028557565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361028557565b9190820180921161146d57565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b600311156114a457565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b156114d857565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f53656e64657220646f6573206e6f7420686f6c6420726571756972656420726f60448201527f6c650000000000000000000000000000000000000000000000000000000000006064820152fd5b1561156357565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4d7573742062652063616c6c6564206f6e20616e20696e697469616c697a656460448201527f2053686172656420726f6c6500000000000000000000000000000000000000006064820152fd5b156115ee57565b60846040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f43616e206f6e6c792062652063616c6c6564206279206120726f6c65206d616e60448201527f61676572000000000000000000000000000000000000000000000000000000006064820152fd5b60015f5260056020527f1471eb6eb2c5e789fc3de43f8ce62938c7d1836ec861730447e2ada8fd81017c547f1471eb6eb2c5e789fc3de43f8ce62938c7d1836ec861730447e2ada8fd81017b9060ff166116ca8161149a565b600181036116f557506002015473ffffffffffffffffffffffffffffffffffffffff91821691161490565b8061170160029261149a565b146117645760646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c696420726f6c6549640000000000000000000000000000000000006044820152fd5b73ffffffffffffffffffffffffffffffffffffffff600392165f520160205260ff60405f20541690565b60025f5260056020527f89832631fb3c3307a103ba2c84ab569c64d6182a18893dcd163f0f1c2090733b547f89832631fb3c3307a103ba2c84ab569c64d6182a18893dcd163f0f1c2090733a9060ff166116ca8161149a565b5f52600560205260405f2060ff6001820154166116ca8161149a565b1561180a57565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f4d7573742062652063616c6c6564206f6e20616e20696e697469616c697a656460448201527f204578636c757369766520726f6c6500000000000000000000000000000000006064820152fd5b73ffffffffffffffffffffffffffffffffffffffff80911691821561197c57169182156118f85760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591835f526001825260405f20855f5282528060405f2055604051908152a3565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152fd5b60846040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152fd5b73ffffffffffffffffffffffffffffffffffffffff809116918215611b895716918215611b0557815f525f60205260405f2054818110611a8157817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92602092855f525f84520360405f2055845f5260405f20818154019055604051908152a3565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152fd5b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152fd5b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152fd5b73ffffffffffffffffffffffffffffffffffffffff168015611d0557805f525f60205260405f205491808310611c81576020817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef925f958587528684520360408620558060025403600255604051908152a3565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152fd5b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152fdfea26469706673582212209c5cc408c6ab268bff806bad4728877517d243b0df761815bfc5e7bbac00bc4064736f6c63430008170033417474656d7074656420746f2075736520616e20696e76616c696420726f6c65";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "roleId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newMember";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "manager";
            readonly type: "address";
        }];
        readonly name: "AddedSharedMember";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "roleId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "oldMember";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "manager";
            readonly type: "address";
        }];
        readonly name: "RemovedSharedMember";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "roleId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newMember";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "manager";
            readonly type: "address";
        }];
        readonly name: "ResetExclusiveMember";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "addBurner";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "roleId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "newMember";
            readonly type: "address";
        }];
        readonly name: "addMember";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "addMinter";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "burnFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "roleId";
            readonly type: "uint256";
        }];
        readonly name: "getMember";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "roleId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "memberToCheck";
            readonly type: "address";
        }];
        readonly name: "holdsRole";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "roleId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "memberToRemove";
            readonly type: "address";
        }];
        readonly name: "removeMember";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "roleId";
            readonly type: "uint256";
        }];
        readonly name: "renounceMembership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "roleId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "newMember";
            readonly type: "address";
        }];
        readonly name: "resetMember";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "resetOwner";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): PolygonERC20TestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PolygonERC20Test;
}
export {};
