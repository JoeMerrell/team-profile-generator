const Employee = require('../lib/Employee');
// jest.mock('../lib/Employee.js');

test('checks the contents of Employee object', () => {
    const employee = new Employee('Mary Jones', 'mary@jones.com', '111111');

    expect(employee.name).toBe('Mary Jones');
    expect(employee.email).toBe('mary@jones.com');
    expect(employee.id).toBe('111111');

});

