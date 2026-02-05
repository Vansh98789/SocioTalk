    import pkg from "pg";
    import dotenv from "dotenv";

    dotenv.config();
    const { Pool } = pkg;
console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);
console.log('DATABASE_URL format:', process.env.DATABASE_URL ? 'postgresql://user:***@host/db' : 'MISSING');
    const isProduction = process.env.NODE_ENV === "production";

    const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: isProduction ? { rejectUnauthorized: false } : false
    });

    export default pool;
