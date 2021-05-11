// import {Employee} from './lib/Employee';
const Employee = require('../lib/Employee-class');

test('employee instance functionality to set name', () => {
    const expected = "zhara Seyedi";
    const actual = new Employee(expected);
    expect(actual.name).toBe(expected);
});
test('employee instance functionality to set ID', () => {
    const expected = "01";
    const actual = new Employee("Zahra Seyedi", expected);
    expect(actual.expected).toBe(expected);
});
test('employee instance functionality to set Email', () => {
    const expected = "zahra.seyedi@idk.com";
    const actual = new Employee("Zahra Seyedi", 1, expected);
    expect(actual.getEmail()).toBe(expected);
});
test('get rol basic functionality to return Employee', () => {
    const expected = "Employee";
    const actual = new Employee("Zahra Seyedi", 1, "zahra.seyedi@idk.com");
    expect(actual.getRole()).toBe(expected);
});