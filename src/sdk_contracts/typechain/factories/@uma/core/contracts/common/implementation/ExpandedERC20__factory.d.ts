import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ExpandedERC20, ExpandedERC20Interface } from "../../../../../../@uma/core/contracts/common/implementation/ExpandedERC20";
declare type ExpandedERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ExpandedERC20__factory extends ContractFactory {
    constructor(...args: ExpandedERC20ConstructorParams);
    deploy(_tokenName: string, _tokenSymbol: string, _tokenDecimals: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ExpandedERC20>;
    getDeployTransaction(_tokenName: string, _tokenSymbol: string, _tokenDecimals: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): ExpandedERC20;
    connect(signer: Signer): ExpandedERC20__factory;
    static readonly bytecode = "0x60406080815234620006de576200259e803803806200001e8162000702565b9283398101606082820312620006de5781516001600160401b0390818111620006de57826200004f91850162000728565b60209283850151838111620006de5786916200006d91870162000728565b9401519160ff92838116809103620006de57825191808311620005e9576003908154936001958686811c96168015620006d3575b89871014620006bf578190601f968781116200066c575b50899087831160011462000609575f92620005fd575b50505f1982851b1c191690861b1782555b8751908111620005e95760049788548681811c91168015620005de575b89821014620005cb5790818684931162000578575b50889086831160011462000515575f9262000509575b50505f1982841b1c191690851b1787555b60ff19918260065416176006555f80526005928387526200016c86868b5f20015416620001658162000798565b15620007b7565b5f80528387526002895f2086810187868254161790555f8155013315620004ba5780546001600160a01b031916331790555f8080528488528990208501548616620001b78162000798565b156200046357620001c7620006e2565b5f8152855f52848852620001e787878c5f20015416620001658162000798565b855f52848852828a5f208781016002878254161790555f81550190865f905b620003de575b5050505f805283875285858a5f20015416620002288162000798565b15620003875762000238620006e2565b915f835260025f528488526200025a87878c5f20015416620001658162000798565b60025f52848852895f208681016002868254161790555f81550191855f905b62000303575b50505050505f80528352845f200154166200029a8162000798565b15620002af578251611d799081620008058239f35b608492519162461bcd60e51b8352820152603860248201525f805160206200257e83398151915260448201527f20746f206d616e61676520612073686172656420726f6c6500000000000000006064820152fd5b8151811015620003815780861b82018901516001600160a01b0316801562000340575f908152848a528b9020805486168817905586018662000279565b60648b858c8f519262461bcd60e51b845283015260248201527f43616e6e6f74206164642030783020746f20612073686172656420726f6c65006044820152fd5b6200027f565b885162461bcd60e51b8152808901889052603860248201525f805160206200257e83398151915260448201527f20746f206d616e61676520612073686172656420726f6c6500000000000000006064820152608490fd5b81518110156200045d5780871b82018a01516001600160a01b031680156200041b575f908152838b528c9020805487168917905587018762000206565b5060648b858c8f519262461bcd60e51b845283015260248201527f43616e6e6f74206164642030783020746f20612073686172656420726f6c65006044820152fd5b6200020c565b885162461bcd60e51b8152808901889052603c60248201525f805160206200257e83398151915260448201527f20746f206d616e61676520616e206578636c757369766520726f6c65000000006064820152608490fd5b895162461bcd60e51b8152808a01899052602360248201527f43616e6e6f742073657420616e206578636c757369766520726f6c6520746f2060448201526203078360ec1b6064820152608490fd5b015190505f8062000127565b90879350601f198316918b5f528a5f20925f5b8c82821062000561575050841162000549575b505050811b01875562000138565b01515f1983861b60f8161c191690555f80806200053b565b8385015186558b9790950194938401930162000528565b909150895f52885f208680850160051c8201928b8610620005c1575b918991869594930160051c01915b828110620005b257505062000111565b5f8155859450899101620005a2565b9250819262000594565b60228a634e487b7160e01b5f525260245ffd5b90607f1690620000fc565b634e487b7160e01b5f52604160045260245ffd5b015190505f80620000ce565b90889350601f19831691865f528b5f20925f5b8d8282106200065557505084116200063d575b505050811b018255620000df565b01515f1983871b60f8161c191690555f80806200062f565b8385015186558c979095019493840193016200061c565b909150845f52895f208780850160051c8201928c8610620006b5575b918a91869594930160051c01915b828110620006a6575050620000b8565b5f81558594508a910162000696565b9250819262000688565b634e487b7160e01b5f52602260045260245ffd5b95607f1695620000a1565b5f80fd5b60405190602082016001600160401b03811183821017620005e957604052565b6040519190601f01601f191682016001600160401b03811183821017620005e957604052565b919080601f84011215620006de5782516001600160401b038111620005e9576020906200075e601f8201601f1916830162000702565b92818452828287010111620006de575f5b818110620007845750825f9394955001015290565b85810183015184820184015282016200076f565b60031115620007a357565b634e487b7160e01b5f52602160045260245ffd5b15620007bf57565b60405162461bcd60e51b815260206004820152601e60248201527f43616e6e6f74207573652061207072652d6578697374696e6720726f6c6500006044820152606490fdfe6080604081815260049182361015610015575f80fd5b5f3560e01c90816306fdde031461122d57508063095ea7b3146111e657806318160ddd146111aa57806323b872dd1461107c578063313ce5671461103d5780633950935114610fc557806340c10f1914610eb157806342966c6814610e685780636be7658b14610d5b57806370a0823114610cfa57806373cc802a14610c0957806374d0a67614610ab257806379cc679014610a605780637cdc1cb914610a1357806395d89b411461081a578063983b2d5614610724578063a457c2d714610621578063a9059cbb146105d3578063aaa14ca3146104e9578063ab3545e51461046d578063d97c05be146102f3578063dd62ed3e1461027e5763f44637ba1461011c575f80fd5b3461027a576020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a576101546113d4565b9060025f526005815261017b600260ff6001865f2001541661017581611454565b14611516565b60025f5260058152610199610194845f205433906117a1565b6115a1565b60025f526005815273ffffffffffffffffffffffffffffffffffffffff6003845f2001921693841561021f5750835f52525f2060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00825416179055339060027f63502af7324ff6db91ab38f8236a648727d9385ea6c782073dd4882d8a61a48f5f80a4005b6064918451917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601f60248201527f43616e6e6f74206164642030783020746f20612073686172656420726f6c65006044820152fd5b5f80fd5b503461027a57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a576020906102b86113d4565b6102c06113f7565b9073ffffffffffffffffffffffffffffffffffffffff8091165f5260018452825f2091165f528252805f20549051908152f35b503461027a57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a5781359161032d6113f7565b90835f526005602052610353600160ff81865f2001541661034d81611454565b146117bd565b835f52600560205261036c610194845f205433906117a1565b835f52600560205273ffffffffffffffffffffffffffffffffffffffff6002845f200192169283156103ea575050817fffffffffffffffffffffffff000000000000000000000000000000000000000082541617905533917f3b855c56b409b671c7112789d022675eb639d0bcb8896f1b6197c132f799e7465f80a4005b90602060849251917f08c379a0000000000000000000000000000000000000000000000000000000008352820152602360248201527f43616e6e6f742073657420616e206578636c757369766520726f6c6520746f2060448201527f30783000000000000000000000000000000000000000000000000000000000006064820152fd5b503461027a5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a5760209135805f52600583526104bf600160ff81855f2001541661034d81611454565b5f526005825273ffffffffffffffffffffffffffffffffffffffff6002825f200154169051908152f35b50903461027a5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a576105a9903591825f526005602052610540600260ff6001845f2001541661017581611454565b61055261054d33856117a1565b61148b565b825f526005602052600333915f20019073ffffffffffffffffffffffffffffffffffffffff165f5260205260405f207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008154169055565b339033907feb3e33034c392e69263b04ec0fa376dc12784a41b6676c7f31b936cbc0fbb5af5f80a4005b503461027a57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a5760209061061a6106106113d4565b60243590336119b9565b5160018152f35b50903461027a57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a576106596113d4565b9060243590335f526001602052835f2073ffffffffffffffffffffffffffffffffffffffff84165f52602052835f2054908282106106a15760208561061a8585038733611848565b60849060208651917f08c379a0000000000000000000000000000000000000000000000000000000008352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152fd5b50903461027a57602091827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a5761075f6113d4565b600193845f5260058152610780600260ff87865f2001541661017581611454565b845f5260058152610798610194845f205433906117a1565b845f526005815273ffffffffffffffffffffffffffffffffffffffff6003845f2001921693841561021f5750835f52525f20827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082541617905533917f63502af7324ff6db91ab38f8236a648727d9385ea6c782073dd4882d8a61a48f5f80a4005b50903461027a575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a5781515f928254936001948060011c60018216968715610a09575b60209283831089146109dd57869798838897985290815f146109825750600114610907575b50505003601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019267ffffffffffffffff8411838510176108db57508291826108d7925282611370565b0390f35b6041907f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b5f888152929493507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b82841061096c57505050907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe092601f92820101918193610889565b8054888501870152879450928501928101610931565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016848701525050151560051b830101905081601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0610889565b6022887f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b90607f1690610864565b503461027a57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a57610a57602092610a506113f7565b90356117a1565b90519015158152f35b503461027a57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a5760209061061a610a9d6113d4565b610aa961054d33611748565b60243590611bc7565b50903461027a57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a57803591610aed6113f7565b835f526005602052610b0d600260ff6001855f2001541661017581611454565b835f526005602052610b26610194835f205433906117a1565b835f52600560205273ffffffffffffffffffffffffffffffffffffffff6003835f20019116928315610bac5750825f526020525f2060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082541617905533917f63502af7324ff6db91ab38f8236a648727d9385ea6c782073dd4882d8a61a48f5f80a4005b60649060208451917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601f60248201527f43616e6e6f74206164642030783020746f20612073686172656420726f6c65006044820152fd5b50903461027a5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a57610c426113d4565b905f80526005602052610c62600160ff81865f2001541661034d81611454565b5f80526005602052610c7b610194845f205433906117a1565b5f8052600560205273ffffffffffffffffffffffffffffffffffffffff6002845f200192169283156103ea575050817fffffffffffffffffffffffff000000000000000000000000000000000000000082541617905533905f7f3b855c56b409b671c7112789d022675eb639d0bcb8896f1b6197c132f799e7468180a4005b503461027a5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a5760209073ffffffffffffffffffffffffffffffffffffffff610d4a6113d4565b165f525f8252805f20549051908152f35b503461027a57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a57610e296003923591610d9a6113f7565b938491845f526005602052610dbd600260ff6001845f2001541661017581611454565b845f526005602052610dd6610194825f205433906117a1565b845f5260056020525f20019073ffffffffffffffffffffffffffffffffffffffff165f5260205260405f207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008154169055565b73ffffffffffffffffffffffffffffffffffffffff339216907feb3e33034c392e69263b04ec0fa376dc12784a41b6676c7f31b936cbc0fbb5af5f80a4005b823461027a5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a57610eaf90610ea861054d33611748565b3533611bc7565b005b503461027a57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a57610ee86113d4565b9173ffffffffffffffffffffffffffffffffffffffff60243593610f0e61054d3361162b565b16908115610f6857505f7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602085610f49829760025461141a565b6002558484528382528584208181540190558551908152a35160018152f35b60649060208451917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b503461027a57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a5760209061061a6110026113d4565b335f5260018452825f2073ffffffffffffffffffffffffffffffffffffffff82165f528452611036602435845f205461141a565b9033611848565b503461027a575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a5760209060ff600654169051908152f35b50903461027a5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a576110b56113d4565b6110bd6113f7565b906044359273ffffffffffffffffffffffffffffffffffffffff82165f526001602052845f20335f52602052845f2054907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611124575b60208661061a8787876119b9565b84821061114d57509183916111426020969561061a95033383611848565b919394819350611116565b60649060208751917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b503461027a575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a576020906002549051908152f35b503461027a57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a5760209061061a6112236113d4565b6024359033611848565b8391503461027a575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261027a575f92600354936001948060011c60018216968715611366575b60209283831089146109dd57869798838897985290815f1461098257506001146112e95750505003601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019267ffffffffffffffff8411838510176108db57508291826108d7925282611370565b60035f908152929493507fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b82841061135057505050907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe092601f92820101918193610889565b8054888501870152879450928501928101611315565b90607f1690611277565b6020808252825181830181905293925f5b8581106113c0575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f845f6040809697860101520116010190565b818101830151848201604001528201611381565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361027a57565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361027a57565b9190820180921161142757565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b6003111561145e57565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b1561149257565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f53656e64657220646f6573206e6f7420686f6c6420726571756972656420726f60448201527f6c650000000000000000000000000000000000000000000000000000000000006064820152fd5b1561151d57565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4d7573742062652063616c6c6564206f6e20616e20696e697469616c697a656460448201527f2053686172656420726f6c6500000000000000000000000000000000000000006064820152fd5b156115a857565b60846040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f43616e206f6e6c792062652063616c6c6564206279206120726f6c65206d616e60448201527f61676572000000000000000000000000000000000000000000000000000000006064820152fd5b60015f5260056020527f1471eb6eb2c5e789fc3de43f8ce62938c7d1836ec861730447e2ada8fd81017c547f1471eb6eb2c5e789fc3de43f8ce62938c7d1836ec861730447e2ada8fd81017b9060ff1661168481611454565b600181036116af57506002015473ffffffffffffffffffffffffffffffffffffffff91821691161490565b806116bb600292611454565b1461171e5760646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c696420726f6c6549640000000000000000000000000000000000006044820152fd5b73ffffffffffffffffffffffffffffffffffffffff600392165f520160205260ff60405f20541690565b60025f5260056020527f89832631fb3c3307a103ba2c84ab569c64d6182a18893dcd163f0f1c2090733b547f89832631fb3c3307a103ba2c84ab569c64d6182a18893dcd163f0f1c2090733a9060ff1661168481611454565b5f52600560205260405f2060ff60018201541661168481611454565b156117c457565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f4d7573742062652063616c6c6564206f6e20616e20696e697469616c697a656460448201527f204578636c757369766520726f6c6500000000000000000000000000000000006064820152fd5b73ffffffffffffffffffffffffffffffffffffffff80911691821561193657169182156118b25760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591835f526001825260405f20855f5282528060405f2055604051908152a3565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152fd5b60846040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152fd5b73ffffffffffffffffffffffffffffffffffffffff809116918215611b435716918215611abf57815f525f60205260405f2054818110611a3b57817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92602092855f525f84520360405f2055845f5260405f20818154019055604051908152a3565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152fd5b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152fd5b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152fd5b73ffffffffffffffffffffffffffffffffffffffff168015611cbf57805f525f60205260405f205491808310611c3b576020817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef925f958587528684520360408620558060025403600255604051908152a3565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152fd5b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152fdfea26469706673582212202acb6bc2c4146fdeac0f61c57eabbd5209d248fc28efd4bfa40956da3ecfa57b64736f6c63430008170033417474656d7074656420746f2075736520616e20696e76616c696420726f6c65";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_tokenName";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "_tokenSymbol";
            readonly type: "string";
        }, {
            readonly internalType: "uint8";
            readonly name: "_tokenDecimals";
            readonly type: "uint8";
        }];
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
    }];
    static createInterface(): ExpandedERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ExpandedERC20;
}
export {};
