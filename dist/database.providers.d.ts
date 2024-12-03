import { Pool } from 'mysql2/promise';
export declare const databaseProviders: {
    provide: string;
    useFactory: () => Promise<Pool>;
}[];
