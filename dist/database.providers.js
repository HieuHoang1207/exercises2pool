"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const promise_1 = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();
exports.databaseProviders = [
    {
        provide: 'DATABASE_POOL',
        useFactory: async () => {
            const pool = (0, promise_1.createPool)({
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT, 10),
                user: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                waitForConnections: true,
                connectionLimit: 5,
                queueLimit: 0,
            });
            return pool;
        },
    },
];
//# sourceMappingURL=database.providers.js.map