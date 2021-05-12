const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const { dirname } = require("node:path");
const fileDirectory = path.resolve(--dirname, 'dist');
const filePath = path.join(fileDirectory. 'index.html');
const Engineer = require('./lib/EngineerClass');
const Intern = require('./lib/InternClass');
const Manager = require('./lib/ManagerClass');
const Choices = require("inquirer/lib/objects/choices");

let listOfEmployee = [];

// General prompt for employee 
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

// Prompt for manager role
managerPrompt = [
    {
        type:"input",
        name:"officeNumber",
        message:"What is the office number?",
        validate: officeNumber => {
            if(officeNumber) { 
                return true;
             } else { 
                 console.log("This field is Required."); return false;
             }
        }
    }
]

// Prompt for engineer role
engineerPrompt = [
    {
        type:"input",
        name:"github",
        message:"Add link of GitHub URL",
        validate: github => {
            if(github) {
                return true;
            } else {
                console.log("This field is Required."); return false;
            }
        }
    }
]

// Prompt for intern role
internPrompt = [
    {
        type:"input",
        name:"school",
        message:"What school is the intern from",
        validate: school => {
            if(school) {
                return true;
            }else {
                console.log("This field is Required."); return false;
            }
        }
    }
]

// Initialize the application 
const init = () => {
    if(fs.existsSync(filePath)) {
        inquirer.prompt({
            type:"confirm",
            name:"overwrite",
            message:"Do you want to overwrite index file?"
        })
        .then(async(response) => {
            let overwrite = response.overwrite;
            if(await overwrite === true) {
                console.log("File out requirement");
                newEmployee();
            } else{
                console.log("Redirect current index file before restarting.");
            }
        })
    } else{
        console.log("File out requirement to generate team profile.");
        newEmployee();
    }
};



