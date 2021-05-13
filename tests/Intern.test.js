const Intern = require('../lib/InternClass');

test('intern instance basic functionality to set school', () => {
    const expected = "UC San Diego";
    const actual = new Intern("zahra", "01", "zahra.seyedi@idk.com", expected);
    expect(actual.getSchool()).toBe(expected);
});
test('intern instance basic functionality to set employee role', () => {
    const expected = "Intern";
    const actual = new Intern("zahra", "01", "zahra.seyedi@idk.com", expected);
    expect(actual.getRole()).toBe(expected);
});