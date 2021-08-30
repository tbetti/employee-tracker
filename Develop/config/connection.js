const mysql = require('mysql2');
require('dotenv').config('../.env');
const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_HOST,
        password: process.env.DB_PASSWORD,
        database: 'employees_db'
    }
);

module.exports = db;