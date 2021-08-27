const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class Department extends Model{};

Department.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
    },
    {
        sequelize,
        timeStamps: false,
        freezeTableName: true,
        modelName: 'departments',
    }
);

module.exports = Department;