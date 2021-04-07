const inquirer = require('inquirer');
const fs = require('fs');
const generateTeamPage = require('./js/generatehtml');
const Manager = require('./js/manager');

const myTeam = [];

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
        const manager = new Manager(empName, id, office);
        myTeam.push(manager)
        addTeam(response);
    })
}

function addTeam() {
    inquirer
    .prompt([{
        type: 'list',
        message: `Please select to add an engineer, an intern, or if you are finished building your team.`,
        name: 'employee',
        choices: [
            {
                name: 'Engineer',
                value: 'engineer',
            },
            {
                name: 'Intern',
                value: 'intern',
            },
            {
                name: 'Finished with my team',
                value: 'none',
            }
        ]
    }    
    ])
    .then ((response) => {
        if (response.employee == 'none') {
            return;
        }

        if (response.employee == 'engineer') {
            addEngineer()
        }

        if (response.employee == 'intern') {
            addIntern()
        }
    })
}

function addIntern() {
    inquirer
    .prompt([{
        type: 'input',
        message: `What is the intern's name?`,
        name: 'name'
    },
    {
        type:'input',
        message: `What is the intern's employee ID?`,
        name: 'id',
    },
    {
        type: 'input',
        message: `What is the intern's email address?`,
        name: 'email',
    },
    {
        type: 'input',
        message: `What is the intern's school?`,
        name: 'school',
    }
    ])
    .then ((response) => {
    addTeam();
    })
}    

function addEngineer() {
    inquirer
    .prompt([{
        type: 'input',
        message: `What is the engineer's name?`,
        name: 'name'
    },
    {
        type:'input',
        message: `What is the engineer's employee ID?`,
        name: 'id',
    },
    {
        type: 'input',
        message: `What is the engineer's email address?`,
        name: 'email',
    },
    {
        type: 'input',
        message: `What is the engineer's GitHub username?`,
        name: 'GitHub',
    }
    ])
    .then ((response) => {
    addTeam();
    })
}    

init();