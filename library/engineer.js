const Employee = require('./Employee')

class Engineer extends Employee {
    constructor (empName, id, email, gitHub) {
        super (empName, id, email);
        this.gitHub = gitHub;
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;