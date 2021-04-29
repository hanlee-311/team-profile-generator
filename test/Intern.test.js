const { test } = require('@jest/globals');
const Intern = require('../library/Intern');

test ('Testing the Intern instant',() => {
    const emp = new Intern();

    expect (typeof(emp)).toBe('object');
});

test('Intern name via the constructor', () => {
    const empName = 'Bob';

    const emp = new Intern(empName);

    expect(emp.empName).toBe(empName);
})

test('Intern id via the constructor', () => {
    const id = '1234';

    const emp = new Intern('foo', id);

    expect(emp.id).toBe(id);
})

test('Intern email via the constructor', () => {
    const email = 'bobby@gmail.com';

    const emp = new Intern('foo', '1234', email);

    expect(emp.email).toBe(email);
})

test('Intern school via the constructor', () => {
    const school = 'High School';

    const emp = new Intern('foo', '1234', 'bobby@gmail.com', school);

    expect(emp.school).toBe(school);
})

test('Can get school from getSchool', () => {
    const testvalue = 'High School';

    const emp = new Intern(testvalue);

    expect(emp.getSchool()).toBe(testvalue);
})


test('Can get role from getRole', () => {
    const testvalue = 'Intern';

    const emp = new Intern(testvalue);

    expect(emp.getRole()).toBe(testvalue);
})