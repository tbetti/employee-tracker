const inquirer = require('inquirer');
const questions = require('./util/inquire_questions.js');
const cTable = require('console.table');
const DB = require('./util/util');

// Prompt user for action
function init() {
    inquirer.prompt(questions.options)
        .then((data) => {
            option(data)
        })
}

// Display data or ask additional questions based on option selected
function option(data) {
    switch (data.options) {
        // Print tables of departments, roles, and employees to console
        case 'View all departments':
            DB.viewDepartments().then(res => {
                console.log('\n'+cTable.getTable(res));
                init();
            })
            break;
        case 'View all roles':
            DB.viewRoles().then(res => {
                console.log('\n'+cTable.getTable(res));
                init();
            })
            break;
        case 'View all employees':
            DB.viewEmployees().then(res => {
                console.log('\n'+cTable.getTable(res));
                init();
            });
            break;
        // Add a department
        case 'Add a department':
            inquirer.prompt(questions.addDepartment)
                .then((data) => {
                    addDepartment(data);
                })
            break;
        // Add a role
        case 'Add a role':
            inquirer.prompt(questions.addRole)
                .then((data) => {
                    addRole(data);
                })
            break;
        // Add an employee
        case 'Add an employee':
            inquirer.prompt(questions.addEmployee)
                .then((data) => {
                    addEmployee(data);
                })
            break;
        case 'Update an employee role':
            inquirer.prompt(questions.updateEmployeeRole)
                .then((data) => {
                    console.log(data);
                })
            break;
        case 'Quit':
            break;
    }
}

function addDepartment(data){
    DB.addDepartment({ department_name: data.department_name }).then(res => {
        if (res.affectedRows === 1) {
            console.log(`Successfully added ${data.department_name}`);
        }
        init();
    });
}

function addRole(data){
    // Connect role to department by finding the department's id
    DB.findId(data.department, 'departments', 'department_name').then(res => {
        DB.addRole({
            title: data.newRole,
            salary: data.salary,
            department_id: res[0].id
        }).then(res => {
            if (res.affectedRows === 1) {
                console.log(`Successfully added ${data.newRole} to ${data.department}`);
            }
            init();
        });
    })
}

function addEmployee(data){
    // Connect employee to role by finding role's id
    DB.findId(data.role, 'roles', 'title').then(res => {
        DB.addEmployee({
            first_name: data.firstName,
            last_name: data.lastName,
            role_id: res[0].id
        }).then(res => {
            if (res.affectedRows === 1) {
                console.log(`Successfully added ${data.firstName} to ${data.role}`);
            }
            init();
        });
    })
}

init();