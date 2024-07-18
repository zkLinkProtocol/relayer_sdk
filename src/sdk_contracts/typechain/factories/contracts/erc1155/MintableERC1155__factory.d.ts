import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MintableERC1155, MintableERC1155Interface } from "../../../contracts/erc1155/MintableERC1155";
declare type MintableERC1155ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MintableERC1155__factory extends ContractFactory {
    constructor(...args: MintableERC1155ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<MintableERC1155>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): MintableERC1155;
    connect(signer: Signer): MintableERC1155__factory;
    static readonly bytecode = "0x608034620001275760208101906001600160401b0382118183101762000113575f9160405252600254600190600181811c9116801562000108575b6020821014620000f457601f8111620000aa575b5f600281905560038054336001600160a01b031982168117909255604051926001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a3611f8490816200012c8239f35b60025f52601f0160051c7f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace908101905b818110620000e957506200004e565b5f81558201620000da565b634e487b7160e01b5f52602260045260245ffd5b90607f16906200003a565b634e487b7160e01b5f52604160045260245ffd5b5f80fdfe604060808152600480361015610013575f80fd5b5f3560e01c8062fdd58e146116cc57806301ffc9a7146115df5780630bb78ec1146115855780630e89341c14611585578063162094c4146112b95780632eb2c2d614610ea25780634e1273f414610cf4578063715018a614610c58578063754e5e37146107b55780638da5cb5b14610763578063a22cb46514610610578063e985e9c514610596578063f242432a146101ee5763f2fde38b146100b4575f80fd5b346101ea5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101ea576100eb611719565b906100f4611c6a565b73ffffffffffffffffffffffffffffffffffffffff809216928315610167575050600354827fffffffffffffffffffffffff0000000000000000000000000000000000000000821617600355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3005b90602060849251917f08c379a0000000000000000000000000000000000000000000000000000000008352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152fd5b5f80fd5b50346101ea5760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101ea57610226611719565b9161022f61173c565b92604435906064359060843567ffffffffffffffff81116101ea576102579036908701611a17565b9173ffffffffffffffffffffffffffffffffffffffff809216913383148015610573575b61028490611b9e565b8716610291811515611ce9565b61029a85611f18565b506102a482611f18565b50845f526020975f8952865f20845f52895282875f20546102c782821015611d74565b875f525f8b52885f20865f528b5203875f2055855f525f8952865f20825f528952865f206102f6848254611dff565b905581848851888152858c8201527fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628a3392a43b61033057005b86945f899461038b8951978896879586947ff23a6e61000000000000000000000000000000000000000000000000000000009c8d8752339087015260248601526044850152606484015260a0608484015260a48301906118df565b03925af15f9181610544575b5061048c5750506103a6611e71565b6308c379a014610441575b61043d9250519182917f08c379a0000000000000000000000000000000000000000000000000000000008352820160809060208152603460208201527f455243313135353a207472616e7366657220746f206e6f6e2d4552433131353560408201527f526563656976657220696d706c656d656e74657200000000000000000000000060608201520190565b0390fd5b610449611e8c565b8061045457506103b1565b61043d91519384937f08c379a000000000000000000000000000000000000000000000000000000000855284015260248301906118df565b7fffffffff000000000000000000000000000000000000000000000000000000009192945016036104b957005b61043d91519182917f08c379a0000000000000000000000000000000000000000000000000000000008352820160809060208152602860208201527f455243313135353a204552433131353552656365697665722072656a6563746560408201527f6420746f6b656e7300000000000000000000000000000000000000000000000060608201520190565b610565919250863d881161056c575b61055d81836117b0565b810190611e39565b905f610397565b503d610553565b50825f526001602052855f20335f5260205261028460ff875f205416905061027b565b82346101ea57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101ea576020906105d0611719565b6105d861173c565b9073ffffffffffffffffffffffffffffffffffffffff8091165f5260018452825f2091165f52825260ff815f20541690519015158152f35b5090346101ea57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101ea57610648611719565b90602435918215158093036101ea5773ffffffffffffffffffffffffffffffffffffffff16928333146106e15750335f526001602052805f20835f52602052805f207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0081541660ff8416179055519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a3005b602060849251917f08c379a0000000000000000000000000000000000000000000000000000000008352820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c6600000000000000000000000000000000000000000000006064820152fd5b82346101ea575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101ea5760209073ffffffffffffffffffffffffffffffffffffffff600354169051908152f35b50346101ea5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101ea5767ffffffffffffffff9181359190602480358581116101ea5761080b9036908501611a35565b9360448035610818611c6a565b5f5b8751811015610bcd5773ffffffffffffffffffffffffffffffffffffffff610842828a611c29565b511686516020918282018281108d821117610ba25789525f82528015610b225761086b87611f18565b5061087585611f18565b50865f525f8352885f20815f528352885f20610892868254611dff565b9055805f8a5189815287868201527fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628c3392a4803b6108d7575b50505060010161081a565b828a9b97969594939c98999a9261093d925f808d8f51968795869485937ff23a6e61000000000000000000000000000000000000000000000000000000009b8c865233908601528401528d8d8401528b606484015260a0608484015260a48301906118df565b03925af15f9181610b03575b50610a3b578b8b8b8b61095a611e71565b6308c379a0146109f1575b61043d8383519182917f08c379a0000000000000000000000000000000000000000000000000000000008352820160809060208152603460208201527f455243313135353a207472616e7366657220746f206e6f6e2d4552433131353560408201527f526563656976657220696d706c656d656e74657200000000000000000000000060608201520190565b6109f9611e8c565b9081610a055750610965565b61043d92519485947f08c379a00000000000000000000000000000000000000000000000000000000086528501528301906118df565b7fffffffff000000000000000000000000000000000000000000000000000000009192939495969a9998979b501603610a775760015f806108cc565b61043d8787519182917f08c379a0000000000000000000000000000000000000000000000000000000008352820160809060208152602860208201527f455243313135353a204552433131353552656365697665722072656a6563746560408201527f6420746f6b656e7300000000000000000000000000000000000000000000000060608201520190565b610b1b9192508d803d1061056c5761055d81836117b0565b905f610949565b60848a7f455243313135353a206d696e7420746f20746865207a65726f206164647265738860218c888f51957f08c379a00000000000000000000000000000000000000000000000000000000087528601528401528201527f73000000000000000000000000000000000000000000000000000000000000006064820152fd5b8860418c7f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b8786838682519260808085019133865260209360208701528501528451809152602060a085019501915f5b828110610c2e577f13d0a346ea6c350592dd539c68d5ff6d61d6b8834695625d09834638717193e08680898860608301520390a1005b835173ffffffffffffffffffffffffffffffffffffffff1687529581019592810192600101610bf8565b346101ea575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101ea57610c8e611c6a565b5f73ffffffffffffffffffffffffffffffffffffffff6003547fffffffffffffffffffffffff00000000000000000000000000000000000000008116600355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b5090346101ea57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101ea5767ffffffffffffffff82358181116101ea57610d439036908501611a35565b906024359081116101ea57610d5b90369085016119b7565b928151845103610e1f57508051907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0610dab610d968461199f565b93610da3865195866117b0565b80855261199f565b013660208401375f5b8151811015610e065780610df573ffffffffffffffffffffffffffffffffffffffff610de260019486611c29565b5116610dee8389611c29565b5190611ae5565b610dff8286611c29565b5201610db4565b835160208082528190610e1b90820186611ab2565b0390f35b60849060208451917f08c379a0000000000000000000000000000000000000000000000000000000008352820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d6174636800000000000000000000000000000000000000000000006064820152fd5b50346101ea577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc9060a0823601126101ea57610edc611719565b91610ee561173c565b9267ffffffffffffffff926044358481116101ea57610f0790369083016119b7565b906064358581116101ea57610f1f90369083016119b7565b946084359081116101ea57610f379036908301611a17565b9373ffffffffffffffffffffffffffffffffffffffff809416933385148015611296575b610f6490611b9e565b835187510361121357871694610f7b861515611ce9565b5f5b8451811015610ff95780610f9360019287611c29565b51610f9e828b611c29565b5190805f526020905f82528d5f208a5f5282528d83815f2054610fc382821015611d74565b835f525f8552825f208d5f52855203905f20555f525f81528c5f20908a5f5252610ff18c5f20918254611dff565b905501610f7d565b509094939592919684878a518b81527f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb6110358d830188611ab2565b9180830360208201528061104a33948b611ab2565b0390a43b61105457005b875194859384937fbc197c810000000000000000000000000000000000000000000000000000000098898652338b87015260248601526044850160a0905260a4850161109f91611ab2565b828582030160648601526110b291611ab2565b908382030160848401526110c5916118df565b03815a6020945f91f15f91816111f2575b506111c95750506110e5611e71565b6308c379a01461117b575b61043d91519182917f08c379a0000000000000000000000000000000000000000000000000000000008352820160809060208152603460208201527f455243313135353a207472616e7366657220746f206e6f6e2d4552433131353560408201527f526563656976657220696d706c656d656e74657200000000000000000000000060608201520190565b611183611e8c565b8061118e57506110f0565b61043d90602093519384937f08c379a000000000000000000000000000000000000000000000000000000000855284015260248301906118df565b7fffffffff0000000000000000000000000000000000000000000000000000000016036104b957005b61120c91925060203d60201161056c5761055d81836117b0565b905f6110d6565b60848360208b51917f08c379a0000000000000000000000000000000000000000000000000000000008352820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d617463680000000000000000000000000000000000000000000000006064820152fd5b50845f526001602052885f20335f52602052610f6460ff8a5f2054169050610f5b565b50346101ea57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101ea578035906024359267ffffffffffffffff938481116101ea57366023820112156101ea5761131e903690602481860135910161193b565b91611327611c6a565b835f5260209481865261133c835f205461175f565b61152957845f52818652825f209184519182116114fd575061135e825461175f565b601f81116114ba575b5085601f82116001146113f65791817f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b969794926113e6945f916113eb575b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c19161790555b519282849384528301906118df565b0390a2005b90508601515f6113a6565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0821690835f52875f20915f5b8181106114a35750926113e69492600192827f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b9a9b98961061146c575b5050811b0190556113d7565b8801517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c191690555f80611460565b91928960018192868b015181550194019201611423565b825f52865f20601f830160051c8101918884106114f3575b601f0160051c01905b8181106114e85750611367565b5f81556001016114db565b90915081906114d2565b6041907f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b508460649251917f08c379a0000000000000000000000000000000000000000000000000000000008352820152600f60248201527f75726920616c72656164792073657400000000000000000000000000000000006044820152fd5b5090346101ea5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101ea5781610e1b92355f526020526115cc815f2061181e565b90519182916020835260208301906118df565b50346101ea5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101ea57357fffffffff0000000000000000000000000000000000000000000000000000000081168091036101ea576020917fd9b67a260000000000000000000000000000000000000000000000000000000082149182156116a2575b8215611678575b50519015158152f35b7f01ffc9a7000000000000000000000000000000000000000000000000000000001491505f61166f565b7f0e89341c0000000000000000000000000000000000000000000000000000000081149250611668565b82346101ea57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101ea57602090611712611709611719565b60243590611ae5565b9051908152f35b6004359073ffffffffffffffffffffffffffffffffffffffff821682036101ea57565b6024359073ffffffffffffffffffffffffffffffffffffffff821682036101ea57565b90600182811c921680156117a6575b602083101461177957565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b91607f169161176e565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176117f157604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b9060405191825f82546118308161175f565b908184526020946001916001811690815f1461189e5750600114611860575b50505061185e925003836117b0565b565b5f90815285812095935091905b81831061188657505061185e93508201015f808061184f565b8554888401850152948501948794509183019161186d565b91505061185e9593507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152151560051b8201015f808061184f565b91908251928382525f5b8481106119275750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f845f6020809697860101520116010190565b6020818301810151848301820152016118e9565b92919267ffffffffffffffff82116117f1576040519161198360207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601846117b0565b8294818452818301116101ea578281602093845f960137010152565b67ffffffffffffffff81116117f15760051b60200190565b9080601f830112156101ea5760209082356119d18161199f565b936119df60405195866117b0565b81855260208086019260051b8201019283116101ea57602001905b828210611a08575050505090565b813581529083019083016119fa565b9080601f830112156101ea57816020611a329335910161193b565b90565b9080601f830112156101ea576020908235611a4f8161199f565b93611a5d60405195866117b0565b81855260208086019260051b8201019283116101ea57602001905b828210611a86575050505090565b813573ffffffffffffffffffffffffffffffffffffffff811681036101ea578152908301908301611a78565b9081518082526020808093019301915f5b828110611ad1575050505090565b835185529381019392810192600101611ac3565b73ffffffffffffffffffffffffffffffffffffffff16908115611b1a575f525f60205260405f20905f5260205260405f205490565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201527f616c6964206f776e6572000000000000000000000000000000000000000000006064820152fd5b15611ba557565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206f7220617070726f7665640000000000000000000000000000000000006064820152fd5b8051821015611c3d5760209160051b010190565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b73ffffffffffffffffffffffffffffffffffffffff600354163303611c8b57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b15611cf057565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152fd5b15611d7b57565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e73666572000000000000000000000000000000000000000000006064820152fd5b91908201809211611e0c57565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b908160209103126101ea57517fffffffff00000000000000000000000000000000000000000000000000000000811681036101ea5790565b5f9060033d11611e7d57565b905060045f803e5f5160e01c90565b5f60443d10611a32576040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc91823d016004833e815167ffffffffffffffff918282113d602484011117611f0757818401948551938411611f0f573d85010160208487010111611f075750611a32929101602001906117b0565b949350505050565b50949350505050565b604051906040820182811067ffffffffffffffff8211176117f15760405260018252602082016020368237825115611c3d57529056fea26469706673582212207fdc94b9a38848a7b8b375326969c08bb05c35047397c94c4ba2da6b212a287e64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "caller";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "recipients";
            readonly type: "address[]";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Airdrop";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }];
        readonly name: "ApprovalForAll";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
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
            readonly internalType: "uint256[]";
            readonly name: "ids";
            readonly type: "uint256[]";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "values";
            readonly type: "uint256[]";
        }];
        readonly name: "TransferBatch";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
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
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "TransferSingle";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "value";
            readonly type: "string";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }];
        readonly name: "URI";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "_tokenURIs";
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
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address[]";
            readonly name: "recipients";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "airdrop";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
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
            readonly internalType: "address[]";
            readonly name: "accounts";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "ids";
            readonly type: "uint256[]";
        }];
        readonly name: "balanceOfBatch";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }];
        readonly name: "isApprovedForAll";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
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
            readonly internalType: "uint256[]";
            readonly name: "ids";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "amounts";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "safeBatchTransferFrom";
        readonly outputs: readonly [];
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
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }];
        readonly name: "setApprovalForAll";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "tokenURI";
            readonly type: "string";
        }];
        readonly name: "setTokenURI";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
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
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "uri";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): MintableERC1155Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): MintableERC1155;
}
export {};
