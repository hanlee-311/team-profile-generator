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

test('Can get name from getEmpName', () => {
    const testvalue = 'Bob';

    const emp = new Employee(testvalue);

    expect(emp.getEmpName()).toBe(testvalue);
})