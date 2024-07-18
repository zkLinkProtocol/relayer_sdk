export declare type Deployments = Record<string, Record<string, {
    address: string;
    blockNumber: number;
}>>;
export declare function run(): Promise<void>;
