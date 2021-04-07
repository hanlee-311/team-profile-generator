const inquirer = require('inquirer');
const addTeam = require('./employee');
const generateTeamPage = require('./generatehtml');

function init() {
    inquirer
        .prompt([{
            type: 'input',
            message: `What is the team manager's name?`,
            name: 'name'
        },
        {
            type:'input',
            message: `What is the team manager's employee ID?`,
            name: 'id',
        },
        {
            type: 'input',
            message: `What is the team manager's email address?`,
            name: 'email',
        },
        {
            type: 'input',
            message: `What is the team manager's office number?`,
            name: 'office',
        },
    ])
    .then ((response) => {
        console.log(response);
        addTeam(response);
    })
}

init();