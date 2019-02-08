import mysql from 'promise-mysql';
import {} from 'dotenv/config';

const config = {
    host: 'db',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'FIFA',
    connectionLimit: 100,
};

const pool = mysql.createPool(config);

export default pool;
