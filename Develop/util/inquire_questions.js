// Import departments, roles, employees
const questions = {
    options: {
        type: "list",
        name: "options",
        message: "Select an option:",
        choices: ["View all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"],
    },
    addDepartment: {
        type: "input",
        name: "newDepartment",
        message: "Enter the department name: ",
    },
    addRole: [
        {
            type: "input",
            name: "newRole",
            message: "Enter the role title: ",
        },
        {
            type: "input",
            name: "salary",
            message: "Enter the salary for this role: ",
        },
        {
            type: "list",
            name: "department",
            message: "Select this role's department: ",
            choices: ["departmentName1", "departmentName2"],
        }
    ],
    addEmployee: [
        {
            type: "input",
            name: "firstName",
            message: "Enter employee's first name: ",
        },
        {
            type: "input",
            name: "lastName",
            message: "Enter employee's last name: ",
        },
        {
            type: "list",
            name: "role",
            message: "Select employee's role: ",
            choices: ["role1", "role2", "role3"],
        }
    ],
    updateEmployeeRole: [
        {
            type: "list",
            name: "employee",
            message: "Select which employee to update: ",
            choices: ["employee1", "employee2", "employee3"],
        },
        {
            type: "list",
            name: "role",
            message: "Select employee's role: ",
            choices: ["role1", "role2", "role3"],
        }
    ]
}

module.exports = questions;