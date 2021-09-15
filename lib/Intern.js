const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, email, id, school) {
        super(name, email, id); 
        this.school = school;
    }
}

// class Intern  {
//     constructor(name, email, employeeID, school) {
//         // super(name, email, employeeID); 
//         this.name = name;
//         this.email = email;
//         this.employeeID = employeeID;
//         this.school = school;
//     }
// }

module.exports = Intern; 