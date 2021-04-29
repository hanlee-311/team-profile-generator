const { test } = require('@jest/globals');
const Manager = require('../library/Manager');

test ('Testing the Manager instant',() => {
    const emp = new Manager();

    expect (typeof(emp)).toBe('object');
});

test('Manager name via the constructor', () => {
    const empName = 'Bob';

    const emp = new Manager(empName);

    expect(emp.empName).toBe(empName);
})

test('Manager id via the constructor', () => {
    const id = '1234';

    const emp = new Manager('foo', id);

    expect(emp.id).toBe(id);
})

test('Manager email via the constructor', () => {
    const email = 'bobby@gmail.com';

    const emp = new Manager('foo', '1234', email);

    expect(emp.email).toBe(email);
})

test('Manager officeNumber via the constructor', () => {
    const officeNumber = '5678';

    const emp = new Manager('foo', '1234', 'bobby@gmail.com', officeNumber);

    expect(emp.officeNumber).toBe(officeNumber);
})

test('Can get office number from getOfficeNumber', () => {
    const testvalue = '56789';

    const emp = new Manager(testvalue);

    expect(emp.getOfficeNumber()).toBe(testvalue);
})


test('Can get role from getRole', () => {
    const testvalue = 'Manager';

    const emp = new Manager(testvalue);

    expect(emp.getRole()).toBe(testvalue);
})