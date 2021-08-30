const inquirer = require('inquirer');
const questions = require('./util/inquire_questions.js');
const option = require('./util/util.js');
//const sequelize = require('./config/connection.js');
const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Prompt user for action
function init() {
    inquirer.prompt(questions.options)
    .then((data) =>{
        option(data)
    })
}

// Connect to sequelize
//sequelize.sync({force: true});

init();

module.exports = init;