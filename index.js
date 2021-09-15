const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


// Prompt user from list: Engineer, Intern, Manager

const PromptUser = () => {
    
    // if (!employeeData.team) {
    //     employeeData.team = [];
    // }


    return inquirer.prompt ([

        {   
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter the employee's name");
                  return false;
                }
              }
        },

        {   
            type: 'input',
            name: 'email',
            message: "What is the employee's email address?",
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log("Please enter the employee's email address");
                  return false;
                }
              }
        },

        {   
            type: 'input',
            name: 'id',
            message: "What is the employee's ID number?",
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log("Please enter the employee's ID number");
                  return false;
                }
              }
        },

        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role on the team?",
            choices: ['Manager', 'Engineer', 'intern']
        },
        {
            type: 'input',
            name: 'office',
            message: "What is this manager's office number?",
            when: function(answers) {
                return answers.role === "Manager";
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is this engineer's GitHub username?",
            when: function(answers) {
                return answers.role === "Engineer";
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Where is this intern enrolled in school?",
            when: function(answers) {
                return answers.role === "Intern";
            }
        },


    ])

}

PromptUser();

// What to do with Engineer, Intern, Manager data?







// const promptUser = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: "What is the employee's name?",
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log("Please enter the employee's name");
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'emailAddress',
//             message: "Please provide the employee's email address",
//             validate: emailAddress => {
//                 if (emailAddress) {
//                     return true;
//                 } else {
//                     console.log('Please provide an email address');
//                     return false;
//                 }
//             }
//         }











//     ])
// }