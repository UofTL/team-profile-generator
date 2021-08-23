// set inquirer dependencies and fs
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");

const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require('./generateHTML');

// create a roster " " array with each new employee object pushed to the roster array
const roster = [];

// add team members
function newTeamMember() {
    return inquirer
        .prompt([{
            type: 'list',
            name: 'teamMembers',
            message: "What opening do you have in your the dream team?",
            choices: [
                'Engineer',
                new inquirer.Separator(),
                'Intern',
                new inquirer.Separator(),
                "I am happy with my current Team, there is no opening."
            ]
        }])
        .then((response) => {
            switch (response.teamMembers) {
                case 'Engineer':
                    newEngineer();
                    break;
                case 'Intern':
                    newIntern();
                    break;
                default:
                    writeHTML(roster);
                    break;
            }
        });
};

// create new manager
function newManager() {
    return inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: "Please provide the new Manager name",
            },
            {
                type: 'input',
                name: 'id',
                message: "Please provide new Manager ID",
            },
            {
                type: 'input',
                name: 'email',
                message: "Please provide new Manager email",
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Please provide new Manager office number",
            },
        ])
        .then((response) => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
            roster.push(manager);
            newTeamMember();
        });
};

// create new engineer
function newEngineer() {
    return inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: "Please provide new Engineer name",
            },
            {
                type: 'input',
                name: 'id',
                message: "Please provide new Engineer ID",
            },
            {
                type: 'input',
                name: 'email',
                message: "Please provide new Engineer email",
            },
            {
                type: 'input',
                name: 'github',
                message: "Please provide new Engineer GitHub User account",
            },
        ])
        .then((response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            roster.push(engineer);
            newTeamMember();
        });
};

// create new intern
function newIntern() {
    return inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: "Please provide new Intern name",
            },
            {
                type: 'input',
                name: 'id',
                message: "Please provide new Intern ID",
            },
            {
                type: 'input',
                name: 'email',
                message: "Please provide new Intern email",
            },
            {
                type: 'input',
                name: 'school',
                message: "Please provide new Intern School",
            },
        ])
        .then((response) => {
            const intern = new Intern(response.name, response.id, response.email, response.school);
            roster.push(intern);
            newTeamMember();
        });
};

//generate the HTML
const writeHTML = (roster) => {
    fs.writeFileSync('test.html', generateHTML(roster));
};
newManager();