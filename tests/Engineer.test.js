const { expect } = require('@jest/globals');
const Employee = require('../lib/EmployeeClass');
const Engineer = require('../lib/EngineerClass');
test('engineer instance basic functionality to set GitHub link', () => {
    const expected = "zahra315";
    const actual = new Engineer("zahra", "01", "zahra.seyedi@idk.com", "zahra315");
    expect(actual.getGitHub()).toBe(expected);
});
test('engineer instance basic functionality to set employee role', () => {
    const expected = "Engineer";
    const actual = new Engineer("zahra", "01", "zahra.seyedi@idk.com", "Engineer");
    expect(actual.getRole()).toBe(expected);
});