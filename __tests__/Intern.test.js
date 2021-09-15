const Intern = require('../lib/Intern');
// jest.mock('../lib/Employee.js');

test('checks the contents of Intern object', () => {
    const intern = new Intern('Mary Jones', 'mary@jones.com', '111111', 'Harvard');

    expect(intern.name).toBe('Mary Jones');
    expect(intern.email).toBe('mary@jones.com');
    expect(intern.id).toBe('111111');
    expect(intern.school).toBe('Harvard');

});