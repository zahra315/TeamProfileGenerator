const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const { dirname } = require("node:path");
const fileDirectory = path.resolve(--dirname, 'dist');
const filePath = path.join(fileDirectory. 'index.html');
const Engineer = require('./lib/Engineer-class');
const Intern = require('./lib/Intern-class');
const Manager = require('./lib/Manager-class');
const Choices = require("inquirer/lib/objects/choices");

let listOfEmployee = [];

const prompt = [
    {
        type:"input",
        name:"name",
        message:"Enter Employee's Name:"
    },
    {
        type:"input",
        name:"id",
        message:"Enter Employee's ID:"
    },
    {
        type:"input",
        name:"email",
        message:"Enter Employee's Email:"
    },
    {
        type:"list",
        name:"role",
        message:"What role does this employee have?",
        choices:["Manager", "Engineer", "Intern"]
    }
]