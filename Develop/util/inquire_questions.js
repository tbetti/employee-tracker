// Import departments, roles, employees
const questions = {
    options: {
        type: "list",
        name: "options",
        message: "Select an option:",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"],
    },
    finished: {
        type: "list",
        name: "finished",
        message: "Would you like to choose another option?",
        choices: ["Yes", "No"],
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
            choices: ["IT", "Finance"],
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