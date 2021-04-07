const Employee = require('./employee')

class Manager extends Employee {
    constructor (officeNumber) {
        super(empName, id, email);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }
}

module.export = Manager;