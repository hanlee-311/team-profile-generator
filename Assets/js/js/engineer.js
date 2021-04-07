const Employee = require('./employee')

class Engineer extends Employee {
    constructor (gitHub) {
        super (empName, id, email);
        this.gitHub = gitHub;
    }

    getRole() {
        return 'Engineer'
    }
}

module.export = Engineer;