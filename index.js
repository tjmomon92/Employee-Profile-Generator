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