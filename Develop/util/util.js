const db = require('../config/connection');
const util = require('util');
db.query = util.promisify(db.query);

// Create MySQL commands based on user input
class DB {
    viewDepartments(){
        return db.query('SELECT * FROM departments');
    }
    viewRoles(){
        return db.query('SELECT * FROM roles')
    }
    viewEmployees(){
        return db.query('SELECT * FROM employees')
    }
    addDepartment(data){
        return db.query(`INSERT INTO departments SET ?`, data) // expect object with all columns
    }
    addRole(data){
        return db.query(`INSERT INTO roles SET ?`, data)
    }
    addEmployee(data){
        return db.query(`INSERT INTO employees SET ?`, data)
    }
    updateEmployee(data){
        return db.query(`UPDATE employees SET ? WHERE id=?`)
    }
    deleteDepartment(data){
        return db.query(`DELETE FROM departments WHERE department_name=?`, data)
    }
    deleteRole(data){
        return db.query(`DELETE FROM roles WHERE title=?`, data)
    }
    deleteEmployees(data){
        return db.query(`DELETE FROM employeees WHERE id=?`, data)
    }
    findId(name, table, column){
        return db.query(`SELECT id FROM ${table} WHERE ${column}='${name}'`)
    }
}

// SELECT * FROM employees WHERE id=?, [gets filled in with number of person to delete/update]
// Updates need body of info we're updating and number of person we're getting

module.exports = new DB();