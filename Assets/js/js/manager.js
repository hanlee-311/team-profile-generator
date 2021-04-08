const Employee = require('./employee')

class Manager extends Employee {
    constructor (empName, id, email, officeNumber) {
        super(empName, id, email);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;