const inquirer = require('inquirer');

function addTeam(data) {
    if (data.employee !== 'none') {
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
            console.log(response)
        })
    }
}

module.exports = addTeam;