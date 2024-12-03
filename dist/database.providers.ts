import { Pool, createPool } from 'mysql2/promise';
import * as dotenv from 'dotenv';

dotenv.config();
export const databaseProviders = [
  {
    provide: 'DATABASE_POOL',
    useFactory: async () => {
      const pool = createPool({
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE, // Đảm bảo database chính xác
        waitForConnections: true,
        connectionLimit: 5,
        queueLimit: 0,
      });
      return pool;
    },
  },
];
