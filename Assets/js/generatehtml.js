function teamMember(employee) {
    if (employee === 'none') {
        console.log('no more employees')
    }

    if(employee === 'intern') {
        console.log('This is an intern.')
    }

    if (employee === 'engineer') {
        console.log('This is an engineer')
    }
};

function generateTeamPage(data) {
    return teamMember(data.employee)
}

module.exports = generateTeamPage;