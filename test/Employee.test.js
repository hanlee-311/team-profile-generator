const { test } = require('@jest/globals');
const Employee = require('../library/Employee');

test ('Testing the employee instant',() => {
    const emp = new Employee();

    expect (typeof(emp)).toBe('object');
});

test('Employee name via the constructor', () => {
    const empName = 'Bob';

    const emp = new Employee(empName);

    expect(emp.empName).toBe(empName);
})

test('Employee id via the constructor', () => {
    const id = '1234';

    const emp = new Employee('foo', id);

    expect(emp.id).toBe(id);
})

test('Employee email via the constructor', () => {
    const email = 'bobby@gmail.com';

    const emp = new Employee('foo', '1234', email);

    expect(emp.email).toBe(email);
})

test('Can get name from getEmpName', () => {
    const testvalue = 'Bob';

    const emp = new Employee(testvalue);

    expect(emp.getEmpName()).toBe(testvalue);
})

test('Can get id from getID', () => {
    const testvalue = '1234';

    const emp = new Employee('foo', testvalue);

    expect(emp.getId()).toBe(testvalue);
})

test('Can get email from email', () => {
    const testvalue = 'bobby@gmail.com';

    const emp = new Employee('foo', '1234', testvalue);

    expect(emp.getEmail()).toBe(testvalue);
})

test('Can get role from getRole', () => {
    const testvalue = 'Employee';

    const emp = new Employee(testvalue);

    expect(emp.getRole()).toBe(testvalue);
})