import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Ethereum_RescueAdapter, Ethereum_RescueAdapterInterface } from "../../../contracts/chain-adapters/Ethereum_RescueAdapter";
declare type Ethereum_RescueAdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Ethereum_RescueAdapter__factory extends ContractFactory {
    constructor(...args: Ethereum_RescueAdapterConstructorParams);
    deploy(_rescueAddress: string, overrides?: Overrides & {
        from?: string;
    }): Promise<Ethereum_RescueAdapter>;
    getDeployTransaction(_rescueAddress: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Ethereum_RescueAdapter;
    connect(signer: Signer): Ethereum_RescueAdapter__factory;
    static readonly bytecode = "0x60a03461007157601f61070f38819003918201601f19168301916001600160401b038311848410176100755780849260209460405283398101031261007157516001600160a01b038116810361007157608052604051610685908161008a823960805181818161016701526104400152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe608060409080825260049081361015610016575f80fd5b5f3560e01c908163525550ea146103f85750806352c8c75c1461033d5763e6eb8ade14610041575f80fd5b817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102cf57610072610464565b5060249182359267ffffffffffffffff8085116102cf57366023860112156102cf57848401356100a1816104f5565b956100ae85519788610487565b81875260209687810192368682850101116102cf5788815f92888396018737830101528051810103126102cf575173ffffffffffffffffffffffffffffffffffffffff8082168092036102cf5784517f70a08231000000000000000000000000000000000000000000000000000000008152308782015287818681865afa908115610333575f91610306575b50855190888201927fa9059cbb0000000000000000000000000000000000000000000000000000000084527f000000000000000000000000000000000000000000000000000000000000000016868301526044820152604481526080810193818510818611176102db5760c08201908111858210176102db5786528784527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460a0820152516102189392915f91829182855af13d156102d3573d916101fe836104f5565b9261020b88519485610487565b83523d5f8a85013e61052f565b80518581159182156102af575b505090501561023057005b608493602a9251937f08c379a00000000000000000000000000000000000000000000000000000000085528401528201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152fd5b83809293500103126102cf5784015180151581036102cf5780855f610225565b5f80fd5b60609161052f565b856041897f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b90508781813d831161032c575b61031d8183610487565b810103126102cf57515f61013a565b503d610313565b86513d5f823e3d90fd5b5060807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102cf57610370610464565b5073ffffffffffffffffffffffffffffffffffffffff602435818116036102cf57606435908116036102cf57602060649251917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601460248201527f72656c6179546f6b656e732064697361626c65640000000000000000000000006044820152fd5b346102cf575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102cf5760209073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b6004359073ffffffffffffffffffffffffffffffffffffffff821682036102cf57565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176104c857604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b67ffffffffffffffff81116104c857601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b919290156105aa5750815115610543575090565b3b1561054c5790565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b8251909150156105bd5750805190602001fd5b604051907f08c379a00000000000000000000000000000000000000000000000000000000082528160208060048301528251928360248401525f5b848110610638575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f835f604480968601015201168101030190fd5b8181018301518682016044015285935082016105f856fea26469706673582212204c25601b6a71d9eddfa230d00b172506b36610df542cd4d1d6c1ba43a4a623fe64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_rescueAddress";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
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
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "relayTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "rescueAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): Ethereum_RescueAdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Ethereum_RescueAdapter;
}
export {};
