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
        // {
        //     type: 'list',
        //     message: `Please select to add an engineer, an intern, or if you are finished building your team.`,
        //     name: 'employee',
        //     choices: [
        //         {
        //             name: 'Engineer',
        //             value: 'engineer',
        //         },
        //         {
        //             name: 'Intern',
        //             value: 'intern',
        //         },
        //         {
        //             name: 'Finished with my team',
        //             value: 'none',
        //         }
        //     ]
        // }
    ])
    .then ((response) => {
        addTeam(response);
    })
}

init();