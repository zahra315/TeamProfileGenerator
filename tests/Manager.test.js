const { expect } = require('@jest/globals');
const Manager = require('../lib/ManagerClass');
test('manager instance basic functionality to set office number', () => {
    const expected = "345";
    const actual = new Manager("zahra", "01", "zahra.seyedi@idk.com", expected);
    expect(actual.getOfficeNumber()).toBe(expected);
});
test('manager instance basic functionality to set manager role', () => {
    const expected = "Manager";
    const actual = new Manager("zahra", "01", "zahra.seyedi@idk.com", expected);
    expect(actual.getRole()).toBe(expected);
});