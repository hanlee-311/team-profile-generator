const inquirer = require('inquirer');
const fs = require('fs');
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
        fs.writeFile('log.txt', generateTeamPage(response), (err) => 
        err ? console.error(err) : console.log('Success!')
        );
    })
}

init();