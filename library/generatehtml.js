function generateTeamPage(team) {
    const generateManager = manager => {
        return `
        <h1>${manager.getEmpName()}<h1>
        `
    }

    const generateEngineer = engineer => {
        return `
        <h1>${engineer.getEmpName()}<h1>
        `
    }

    const generateIntern = intern => {
        return `
        <h1>${intern.getEmpName()}<h1>
        `
    }

    const html = [];

    html.push(team.filter(employee => employee.getRole()=== 'Manager').map(manager => generateManager(manager)));
    html.push(team.filter(employee => employee.getRole()=== 'Intern').map(intern => generateIntern(intern)));
    html.push(team.filter(employee => employee.getRole()=== 'Engineer').map(engineer => generateEngineer(engineer)));

    return html.join('');
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    </head>
    <body>
        <h1>This is just a template html file for me to use. Will be deleted once project is ready.</h1>
        ${generateTeamPage(team)}
    </body>
    </html>
    `
};