const Sequelize = require('sequelize');
require('dotenv').config('../.env');

const sequelize = new Sequelize(
    'employees_db',
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: 3306
    }
);

module.exports = sequelize;