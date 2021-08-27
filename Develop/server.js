const inquirer = require('inquirer');
const questions = require('./util/inquire_questions.js');

// Prompt user for action
function init() {
    inquirer.prompt(questions.options)
    .then((data) =>{
        console.log(data);
        option(data)
    })
}

// Display data or ask additional questions based on option selected
function option(data) {
    switch(data.options){
        case 'View all departments':
            console.log("Now viewing all departments");
            break;
        case 'View all roles':
            console.log('Now viewing all roles');
            break;
        case 'View all employees':
            console.log('Now viewing all employees');
            break;
        case 'Add a department':
            inquirer.prompt(questions.addDepartment)
            .then((data)=>{
                console.log(data);
            })
            break;
        case 'Add a role':
            inquirer.prompt(questions.addRole)
            .then((data) =>{
                console.log(data);
            })
            break;
        case 'Add an employee':
            inquirer.prompt(questions.addEmployee)
            .then((data) =>{
                console.log(data);
            })
            break;
        case 'Update an employee role':
            inquirer.prompt(questions.updateEmployeeRole)
            .then((data) =>{
                console.log(data);
            })
            break;
        default:
            console.log("Something went wrong");
    }
}

init();