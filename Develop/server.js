const inquirer = require('inquirer');
const questions = require('./util/inquire_questions.js');
const {printTable} = require('console-table-printer');
const DB = require('./util/util');

// Prompt user for action
function init() {
    inquirer.prompt(questions.options)
    .then((data) =>{
        option(data)
    })
}

// Display data or ask additional questions based on option selected
function option(data) {
    switch(data.options){
        case 'View all departments':
            DB.viewDepartments().then(res=>{
                console.log('\n\n')
                printTable(res);
                init();
            })
            break;
        case 'View all roles':
            DB.viewRoles().then(res =>{
                console.log('\n\n')
                printTable(res);
                init();
            })
            break;
        case 'View all employees':
            DB.viewEmployees().then(res=>{
                console.log('\n\n')
                printTable(res);
                init();
            });
            break;
        case 'Add a department':
            inquirer.prompt(questions.addDepartment)
            .then((data)=>{
                DB.addDepartment({department_name: data.department_name}).then(res=>{
                    if(res.affectedRows === 1){
                        console.log(`Successfully added ${data.department_name}`);
                    }
                    init();
                });
            })
            break;
        case 'Add a role':
            inquirer.prompt(questions.addRole)
            .then((data) =>{
                DB.findId(data.department, 'departments', 'department_name').then(res=>{
                    result = JSON.stringify(res);
                    console.log(res[0].id);
                })
            })
            // .then((data) =>{
            //     DB.addRole({
            //         title: data.newRole,
            //         salary: data.salary,
            //         department_id: findId(data.department, 'departments', 'department_name')
            //     }).then(res=>{
            //         if(res.affectedRows === 1){
            //             console.log(`Successfully added ${data.newRole} to ${data.department}`);
            //         }
            //         init();
            //     });
            // }) 
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

init();