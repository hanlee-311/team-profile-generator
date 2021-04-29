const { test } = require('@jest/globals');
const Engineer = require('../library/Engineer');

test ('Testing the Engineer instant',() => {
    const emp = new Engineer();

    expect (typeof(emp)).toBe('object');
});

test('Engineer name via the constructor', () => {
    const empName = 'Bob';

    const emp = new Engineer(empName);

    expect(emp.empName).toBe(empName);
})

test('Engineer id via the constructor', () => {
    const id = '1234';

    const emp = new Engineer('foo', id);

    expect(emp.id).toBe(id);
})

test('Engineer email via the constructor', () => {
    const email = 'bobby@gmail.com';

    const emp = new Engineer('foo', '1234', email);

    expect(emp.email).toBe(email);
})

test('Engineer gitHub via the constructor', () => {
    const gitHub = 'mygit';

    const emp = new Engineer('foo', '1234', 'bobby@gmail.com', gitHub);

    expect(emp.gitHub).toBe(gitHub);
})

test('Can get github from getGithub', () => {
    const testvalue = 'mygit';

    const emp = new Engineer(testvalue);

    expect(emp.getGithub()).toBe(testvalue);
})


test('Can get role from getRole', () => {
    const testvalue = 'Engineer';

    const emp = new Engineer(testvalue);

    expect(emp.getRole()).toBe(testvalue);
})