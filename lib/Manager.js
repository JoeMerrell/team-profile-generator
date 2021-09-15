const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, email, id, office) {
        super(name, email, id); 
        this.office = office;
    }
}

// class Manager  {
//     constructor(name, email, employeeID, office) {
//         // super(name, email, employeeID); 
//         this.name = name;
//         this.email = email;
//         this.employeeID = employeeID;
//         this.office = office;
//     }
// }

module.exports = Manager;