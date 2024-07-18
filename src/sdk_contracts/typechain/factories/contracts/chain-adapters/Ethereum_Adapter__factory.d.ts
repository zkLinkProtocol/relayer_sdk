import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Ethereum_Adapter, Ethereum_AdapterInterface } from "../../../contracts/chain-adapters/Ethereum_Adapter";
declare type Ethereum_AdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Ethereum_Adapter__factory extends ContractFactory {
    constructor(...args: Ethereum_AdapterConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<Ethereum_Adapter>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Ethereum_Adapter;
    connect(signer: Signer): Ethereum_Adapter__factory;
    static readonly bytecode = "0x60808060405234610016576106b0908161001b8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c806352c8c75c146100345763e6eb8ade1461002f575f80fd5b61024c565b60807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101df577fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b6100876101e3565b61008f610206565b906101b860443561009e610229565b9061017e61016a73ffffffffffffffffffffffffffffffffffffffff808716907fa9059cbb0000000000000000000000000000000000000000000000000000000060a052851660a4528360c45260446080526100fb610100604052565b60405190610108826103ad565b602082527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460208301525f8060805160a082855af13d156101d7573d9161014e8361040f565b9261015c60405194856103ce565b83523d5f602085013e6105b2565b80519081159182156101bd575b50506104c2565b6040805173ffffffffffffffffffffffffffffffffffffffff95861681529585166020870152850152909116606083015281906080820190565b0390a1005b6101d092506020809183010191016104aa565b8880610177565b6060916105b2565b5f80fd5b6004359073ffffffffffffffffffffffffffffffffffffffff821682036101df57565b6024359073ffffffffffffffffffffffffffffffffffffffff821682036101df57565b6064359073ffffffffffffffffffffffffffffffffffffffff821682036101df57565b60407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101df5761027e6101e3565b60243567ffffffffffffffff918282116101df57366023830112156101df5781600401359283116101df57602482019160248436920101116101df575f806102c58561040f565b6102d260405191826103ce565b8581526020810190868683378260208883010152519082855af115610322576101b87f9e6c52944e331ba6270e7fe4cea2a4086bae8f7a27e1cdba07f416806f5d0ac49360405193849384610449565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f657865637574652063616c6c206661696c6564000000000000000000000000006044820152fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6040810190811067ffffffffffffffff8211176103c957604052565b610380565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176103c957604052565b67ffffffffffffffff81116103c957601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b9183606094601f9273ffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09516865260406020870152816040870152868601375f8582860101520116010190565b908160209103126101df575180151581036101df5790565b156104c957565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152fd5b1561055457565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b919290156105d557508151156105c6575090565b6105d2903b151561054d565b90565b8251909150156105e85750805190602001fd5b604051907f08c379a00000000000000000000000000000000000000000000000000000000082528160208060048301528251928360248401525f5b848110610663575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f835f604480968601015201168101030190fd5b81810183015186820160440152859350820161062356fea2646970667358221220cb982f0fc40877fd47e9454e004bcff6a4e56b70be9bff1484aa63f8a45b24be64736f6c63430008170033";
    static readonly abi: readonly [{
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
    static createInterface(): Ethereum_AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Ethereum_Adapter;
}
export {};
