//set all const for everyone (employee, engineer, intern, manager)
const Employee = require('./lib/Employee');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//set html const to generate manager profile
const generateHTML = (roster) => {
    const createManager = (manager) => {
        manager.getName();
        manager.getId();
        manager.getEmail();
        manager.getOfficeNumber();
        manager.getRole();

        return `<div class="card text-white bg-dark mb-3" style="min-width: 18rem;">
  <div class="card-header">${manager.getName()}<br><i class="fas fa-user-check"></i> ${manager.getRole()}</div>
  <div class="card-body">
  <div class="card" style='min-width: 16rem;'>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><i class="fas fa-id-badge"></i>${manager.getId()}</li>
    <li class="list-group-item"><i class="fas fa-envelope-open-text"></i><a href="mailto:${manager.getEmail()}" target="null">${manager.getEmail()}</a></li>
    <li class="list-group-item"><i class="fas fa-phone"></i>${manager.getOfficeNumber()}</li>
  </ul>
</div>
  </div>
</div>
        `
    }

    //set html const to generate intern profile
    const createIntern = (intern) => {
        intern.getName();
        intern.getId();
        intern.getEmail();
        intern.getSchool();
        intern.getRole();

        return `
        <div class="card bg-light mb-3" style="min-width: 18rem;">
  <div class="card-header">${intern.getName()}<br><i class="fas fa-user-graduate"></i> ${intern.getRole()}</div>
  <div class="card-body">
  <div class="card" style='min-width: 16rem;'>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><i class="fas fa-id-badge"></i> ${intern.getId()}</li>
    <li class="list-group-item"><i class="fas fa-envelope-open-text"></i><a href="mailto:${intern.getEmail()}" target="null">${intern.getEmail()}</a></li>
    <li class="list-group-item"><i class="fas fa-university"></i>${intern.getSchool()}</li>
  </ul>
</div>
  </div>
</div>
        `
    }

    //set html const to generate engineer profile
    const createEngineer = (engineer) => {
        engineer.getName();
        engineer.getId();
        engineer.getEmail();
        engineer.getGithub();
        engineer.getRole();

        return `
        <div class="card text-white bg-info mb-3" style="min-width: 18rem;">
  <div class="card-header">${engineer.getName()}<br><i class="fas fa-code"></i> ${engineer.getRole()}</div>
  <div class="card-body">
  <div class="card" style='min-width: 16rem;'>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><i class="fas fa-id-badge"></i>${engineer.getId()}</li>
    <li class="list-group-item"><i class="fas fa-envelope-open-text"></i><a href="mailto:${engineer.getEmail()}" target="null">${engineer.getEmail()}</a></li>
    <li class="list-group-item"><i class="fab fa-github"></i><a href="https://github.com/${engineer.getGithub()}" target="null">${engineer.getGithub()}</a></li>
  </ul>
</div>
  </div>
</div>
        `
    }

    // filter to get mgr, intern, engineer to push cards to this array
    const cardArray = [];

    cardArray.push(roster
        .filter(item => item.getRole() === 'Manager')
        .map(newManager => createManager(newManager)).join(''));
    cardArray.push(roster
        .filter(item => item.getRole() === 'Intern')
        .map(newIntern => createIntern(newIntern)).join(''));
    cardArray.push(roster
        .filter(item => item.getRole() === 'Engineer')
        .map(newEngineer => createEngineer(newEngineer)).join(''));

    return cardArray.join('');
}

//export html module
module.exports = roster => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Bootstrap-->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

        <!--fontawesome link-->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>

        <!-- add css stylesheet -->
        <link rel="stylesheet" href="./css/style.css">

        <title>Generate Team Profile Sample</title>
    </head>
    <body>
    <header><h1>My Dream Team</h1></header> 
    <div class='container'>
        <div class="portfolio-container">
            <div class="project-row">
            ${generateHTML(roster)}
            </div>
        </div>
    </div>

        <!-- jQuery and Bootstrap -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    </body>
    </html>
    `
};