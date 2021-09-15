const Manager = require('../lib/Manager');
// jest.mock('../lib/Employee.js');

test('checks the contents of Manager object', () => {
    const manager = new Manager('Mary Jones', 'mary@jones.com', '111111', '36C');

    expect(manager.name).toBe('Mary Jones');
    expect(manager.email).toBe('mary@jones.com');
    expect(manager.id).toBe('111111');
    expect(manager.office).toBe('36C');

});