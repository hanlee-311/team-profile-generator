const inquirer = require('inquirer');
const fs = require('fs');
const generateTeamPage = require('./js/generatehtml');
const Manager = require('./js/manager');
const Intern = require('./js/engineer');
const Engineer = require('./js/engineer');

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
        const manager = new Manager(response.name, response.id, response.email, response.office);
        myTeam.push(manager);
        addTeam();
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
            return console.log(myTeam);
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
        const intern = new Intern(response.name, response.id, response.email, response.school);
        myTeam.push(intern);
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
        const engineer = new Engineer(response.name, response.id, response.email, response.Github);
        myTeam.push(engineer);
        addTeam();
    })
}    

init();