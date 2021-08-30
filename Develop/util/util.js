const db = require('../config/connection');
const cTable = require('console.table');

function viewDepartments() {
    db.query('SELECT * FROM departments', (err, results) =>{
        console.log(cTable.getTable(results));
    });
};

function viewRoles() {
    db.query('SELECT * FROM roles', (err, results) =>{
        console.log(cTable.getTable(results));
    });
};

function viewEmployees() {
    db.query('SELECT * FROM employees', (err, results) =>{
        console.log(cTable.getTable(results));
    });
};

module.exports = { viewDepartments, viewRoles, viewEmployees };