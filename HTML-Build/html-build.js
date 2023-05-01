const Manager = require('../Employee-Build/Manager-Build');
const Engineer = require('../Employee-Build/Engineer-Build');
const Intern = require('../Employee-Build/Intern-Build');

//HTML layout, plus string split for html
function buildHTML (cards) {
    return `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./index.css">
        <title>Employee List</title>
    </head>
    <body>
        <header class="header">
            <h1>Current Employees</h1>
        </header>
        <section>
            <div class="cardContainer">
               ${cards ? cards.toString().split(',') : ''}
            </div>
        </section>
    </body>
    </html>
    `}

module.exports = {
    buildHTML: buildHTML
}