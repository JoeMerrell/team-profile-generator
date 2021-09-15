const Engineer = require('../lib/Engineer');
// jest.mock('../lib/Employee.js');

test('checks the contents of Engineer object', () => {
    const engineer = new Engineer('Mary Jones', 'mary@jones.com', '111111', 'MaryJones');

    expect(engineer.name).toBe('Mary Jones');
    expect(engineer.email).toBe('mary@jones.com');
    expect(engineer.id).toBe('111111');
    expect(engineer.github).toBe('MaryJones');

});

