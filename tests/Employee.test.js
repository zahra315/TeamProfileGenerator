// import {Employee} from './lib/Employee';
const Employee = require('../lib/EmployeeClass');

test('employee instance basic functionality', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object")
});
test('employee instance functionality to set name', () => {
    const expected = "zhara Seyedi";
    const actual = new Employee("zhara Seyedi");
    expect(actual.name).toBe(expected);
});
test('employee instance functionality to set ID', () => {
    const expected = "01";
    const actual = new Employee("Zahra Seyedi", "01");
    expect(actual.id).toBe(expected);
});
test('employee instance functionality to set Email', () => {
    const expected = "zahra.seyedi@idk.com";
    const actual = new Employee("Zahra Seyedi", "01", "zahra.seyedi@idk.com");
    expect(actual.getEmail()).toBe(expected);
});
test('get rol basic functionality to return Employee', () => {
    const expected = "Employee";
    const actual = new Employee("Zahra Seyedi", "01", "zahra.seyedi@idk.com");
    expect(actual.getRole()).toBe(expected);
});