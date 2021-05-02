function generateTeamPage(team) {
    const generateManager = manager => {
        return `
        <div class="row">
        <div class="col s12 m6">
        <div class="card">
        <div class="card-content red lighten-3">
        <span class="card-title" style='font-weight: bold;'>${manager.getEmpName()}</span>
        <span class="card-title" style='font-weight: bold;'><i class="free_breakfast"></i>${manager.getRole()}</span>
            <div class="card-content red lighten-5">
            <ul class="collection">
                <li class="collection-item">ID: ${manager.getId()}</li>
                <li class="collection-item">Email: ${manager.getEmail()}</li>
                <li class="collection-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
            </div>
        </div>
        </div>
        </div>
        </div>
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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <title>My Team</title>
    </head>
    <body>

    <nav>
    <div class="nav-wrapper">
        <a href="#" class="brand-logo center">My Team</a>
    </div>
    </nav>

    ${generateTeamPage(team)}
    </body>
    </html>
    `
};