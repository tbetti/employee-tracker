const db = require('../config/connection');

// Prompt users for input
const questions = {
    options: {
        type: "list",
        name: "options",
        message: "Select an option:",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Delete department", "Quit"],
    },
    addDepartment: {
        type: "input",
        name: "department_name",
        message: "Enter the department name: ",
        validate: (answer) =>{
            if(answer != "") return true;
            return "Department name is required";
        }
    },
    addRole: [
        {
            type: "input",
            name: "newRole",
            message: "Enter the role title: ",
            validate: (answer) =>{
                if(answer != "") return true;
                return "Role title is required";
            }
        },
        {
            type: "input",
            name: "salary",
            message: "Enter the salary for this role: ",
            validate: (answer) =>{
                answer = parseFloat(answer);
                if(answer != "" && !isNaN(answer)) return true;
                if(isNaN(answer)) return "Salary must be a number";
                return "Salary is required";
            }
        },
        {
            type: "list",
            name: "department",
            message: "Select this role's department: ",
            choices: getArray("departments", "department_name"),
        }
    ],
    addEmployee: [
        {
            type: "input",
            name: "firstName",
            message: "Enter employee's first name: ",
            validate: (answer) =>{
                if(answer != "") return true;
                return "Employee first name is required";
            }
        },
        {
            type: "input",
            name: "lastName",
            message: "Enter employee's last name: ",
            validate: (answer) =>{
                if(answer != "") return true;
                return "Employee last name is required";
            }
        },
        {
            type: "list",
            name: "role",
            message: "Select employee's role: ",
            choices: getArray("roles", "title"),
        }
    ],
    updateEmployeeRole: [
        {
            type: "list",
            name: "employee",
            message: "Select which employee to update: ",
            choices: getArray("employees", "first_name"),
        },
        {
            type: "list",
            name: "role",
            message: "Select employee's role: ",
            choices: getArray("roles", "title"),
        }
    ],
    deleteDepartment: [
        {
            type: "list",
            name: "department_name",
            message: "Choose which department you want to delete: ",
            choices: getArray("departments", "department_name")
        }
    ],
    deleteRole: [
        {
            type: "list",
            name: "deleteRole",
            message: "Choose which role you want to delete: ",
            choices: getArray("roles", "title")
        }
    ],
    deleteEmployee: [
        {
            type: "list",
            name: "deleteEmployee",
            message: "Choose which employee you want to delete: ",
            choices: getArray("employees", "first_name")
        }
    ]
}

// Create arrays of current departments, roles, and employees
function getArray(table, column) {
    const array = [];
    db.query(`SELECT ${column} FROM ${table}`, (err, results) =>{
        results = JSON.stringify(results);
        results = JSON.parse(results);
        results.forEach(element => {
            if(table==='departments') array.push(element.department_name);
            else if(table==='roles') array.push(element.title);
            else if(table == 'employees') array.push(element.first_name);
        });
    })
    return array;
}

module.exports = questions;