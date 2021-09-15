const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id); 
        this.github = github;
    }
}

// class Engineer  {
//     constructor(name, email, employeeID, github) {
//         // super(name, email, employeeID); 
//         this.name = name;
//         this.email = email;
//         this.employeeID = employeeID;
//         this.github = github;
//     }
// }

module.exports = Engineer;