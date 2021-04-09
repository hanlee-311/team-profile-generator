const inquirer = require('inquirer');
const fs = require('fs');
const generateTeamPage = require('./library/generatehtml');
const Manager = require('./library/manager');
const Intern = require('./library/intern');
const Engineer = require('./library/engineer');

const myTeam = [];

function init() {
    inquirer
        .prompt([{
            type: 'input',
            message: `What is the team manager's name?`,
            name: 'managerName'
        },
        {
            type:'input',
            message: `What is the team manager's employee ID?`,
            name: 'managerId',
        },
        {
            type: 'input',
            message: `What is the team manager's email address?`,
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: `What is the team manager's office number?`,
            name: 'office',
        },
    ])
    .then ((response) => {
        const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.office);
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
        if (response.employee === 'none') {
            return console.log(myTeam);
        }

        if (response.employee === 'engineer') {
            addEngineer()
        }

        if (response.employee === 'intern') {
            addIntern()
        }
    })
}

function addIntern() {
    inquirer
    .prompt([{
        type: 'input',
        message: `What is the intern's name?`,
        name: 'internName'
    },
    {
        type:'input',
        message: `What is the intern's employee ID?`,
        name: 'internId',
    },
    {
        type: 'input',
        message: `What is the intern's email address?`,
        name: 'internEmail',
    },
    {
        type: 'input',
        message: `What is the intern's school?`,
        name: 'school',
    }
    ])
    .then ((response) => {
        const intern = new Intern(response.internName, response.internId, response.internEmail, response.school);
        myTeam.push(intern);
        addTeam();
    })
}    

function addEngineer() {
    inquirer
    .prompt([{
        type: 'input',
        message: `What is the engineer's name?`,
        name: 'engineerName'
    },
    {
        type:'input',
        message: `What is the engineer's employee ID?`,
        name: 'engineerId',
    },
    {
        type: 'input',
        message: `What is the engineer's email address?`,
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: `What is the engineer's GitHub username?`,
        name: 'GitHub',
    }
    ])
    .then ((response) => {
        const engineer = new Engineer(response.EngineerName, response.engineerId, response.engineerEmail, response.Github);
        myTeam.push(engineer);
        addTeam();
    })
}    

init();