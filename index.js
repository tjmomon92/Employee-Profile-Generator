const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./Employee-Build/Manager-Build');
const Engineer = require('./Employee-Build/Engineer-Build');
const Intern = require('./Employee-Build/Intern-Build');

//empty array for employees
let teamList = [];

//adds a manager via prompt, then adds to the array
function addManager() {
    inquirer.prompt( [
        {
            name: 'name',
            type: 'input',
            message: 'Manager name?'
        },
        {
            name: 'id',
            type: 'input',
            message: 'Manager employee ID?'
        },
        {
            name: 'email',
            type: 'input',
            message: 'Manager Email?'
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'Manager office number?'
        } 
    ]).then ( (manager) => {
        teamList.push(new Manager(manager.name, manager.id, manager.email, manager.officeNumber))
        employeeRole()
    })
};

//asks user if engineer or intern is needed; calls addEngineer/ addIntern function
function employeeRole() {
    inquirer.prompt( [
        {
            name: 'employeeType',
            type: 'list',
            message: 'Add an Engineer or Intern?',
            choices: [
                'Engineer',
                'Intern'
            ]
        }
    ]).then ((response) => {
        if (response.employeeType === 'Engineer') {
            addEngineer();
        }
        // if (response.employeeType === 'Intern') {
        //     addIntern();
        // }
    })
};

//adds an engineer via prompt, then adds to the array
function addEngineer() {
    inquirer.prompt ( [ 
        {
            name: 'name',
            type: 'input',
            message: 'Engineer name?'
        },
        {
            name: 'id',
            type: 'input',
            message: 'Engineer employee ID?'
        },
        {
            name: 'email',
            type: 'input',
            message: 'Engineer Email?'
        },
        {
            name: 'github',
            type: 'input',
            message: "Engineer GitHub?"
        }
    ]).then((response) => {
        teamList.push(new Engineer(response.name, response.id, response.email, response.github))
        moreEmployees();
    })
};

//adds an intern via prompt, then adds to the array
function addIntern () {

}

//asks user if more employees are needed; if yes, calls add employees function, if no, writes the HTML
function moreEmployees() {
    inquirer.prompt( [
        {
            name: 'addMore',
            type: 'list',
            message: 'Add more employees?',
            choices: [
                'yes',
                'no'
            ]
        }
    ]).then((response) => {
        if (response.addMore === 'yes') {
            employeeRole();
        }
        if (response.addMore === 'no') {
            fs.writeFile('./browser/index.html', build.buildHTML(build.buildCards(teamList)), (err) => {
                err ? console.error(err) : console.log('The HTML has been built')
            })
        }
    })
};