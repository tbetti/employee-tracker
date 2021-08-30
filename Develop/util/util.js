const inquirer = require('inquirer');
const questions = require('./inquire_questions.js');
//const init = require('../server.js');

// Display data or ask additional questions based on option selected
function option(data) {
    switch(data.options){
        case 'View all departments':
            console.log("Now viewing all departments");
            // inquirer.prompt(questions.finished)
            // .then((data) =>{
            //     console.log(data);
            //     if(data.finished==="Yes") init;
            // })
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
    }
}

module.exports = option;