const inquirer = require('inquirer');
const questions = require('./util/inquire_questions.js');
const option = require('./util/util.js');
const sequelize = require('./config/connection.js');
const Department = require('./models/department.js');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

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

// Connect to sequelize and listen on port 3001
sequelize.sync({force: true}).then(()=>{
    app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
});

init();