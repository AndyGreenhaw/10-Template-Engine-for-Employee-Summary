const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = []

employeeCreator()

function employeeCreator(){
    inquirer.prompt ([
        {
        type: "list",
        message: "What employee role would you like to add to your team?",
        choices: ["Manager","Engineer","Intern", "My Team Is Complete"],
        name: "newEmployee"
        }
    ]).then(response=> {
        switch(response.newEmployee){
            case "Manager": managerQ();
            break;
            case "Engineer": engineerQ();
            break;
            case "Intern": internQ();
            break;
            case "My Team Is Complete": fs.writeFileSync('employees.html', render(employees), function(err){
                if(err){
                    return console.log(err)
                }
            })
        }
    })
}

function managerQ(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's name?",
            name: "managerName"
        },
        {
            type: "input",
            message: "What is the employee's ID number?",
            name: "managerId"
        },
        {
            type: "input",
            message: "What is the employee's email address?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What is the manager's office Number?",
            name: "managerOfficeNumber"
        }
    ]).then(response => { 
        const manager = new Manager (response.managerName, response.managerID, response.managerEmail, response.managerOfficeNum)
        employees.push(manager)
        employeeCreator()
    })
}

function engineerQ(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's name?",
            name: "engineerName"
        },
        {
            type: "input",
            message: "What is the employee's ID number?",
            name: "engineerId"
        },
        {
            type: "input",
            message: "What is the employee's email address?",
            name: "engineerEmail"
        },
        {
            type: "input",
            message: "What is the engineer's GitHub account name?",
            name: "engineerGithub"
        }
    ]).then(response => { 
        const engineer = new Engineer (response.engineerName, response.engineerID, response.engineerEmail, response.engineerGithub)
        employees.push(engineer)
        employeeCreator()
    })
}


function internQ(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's name?",
            name: "interName"
        },
        {
            type: "input",
            message: "What is the employee's ID number?",
            name: "internId"
        },
        {
            type: "input",
            message: "What is the employee's email address?",
            name: "internEmail"
        },
        {
            type: "input",
            message: "What is the name of the student's school?",
            name: "internSchool"
        }
    ]).then(response => { 
        const intern = new Intern (response.internName, response.internID, response.internEmail, response.internSchool)
        employees.push(intern)
        employeeCreator()
    })
}



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated (div) for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
