const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown"); // imports the function generateMarkdown from utils folder


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the name of your project?",
        name: "name"
    },
    {
        type: "input",
        message: "Enter a description for your project.",
        name: "description"
    },
    {
        type: "input",
        message: "Enter installation instructions.",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter usage information.",
        name: "usage"
    },
    {
        type: "list",
        message: "What licence is relevant to this project?",
        name: "license",
        choices: ["MIT", "Apache", "GPLv3", "ISC", "None"]
    },
    {
        type: "input",
        message: "How can others contribute?",
        name: "contribute"
    },
    {
        type: "input",
        message: "How can this code be tested? What command should be run for testing?",
        name: "test"
    },
    {
        type: "input",
        message: "Questions?",
        name: "questions"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    ];

// function to write README file
function writeToFile(fileName, template) {
    fs.writeFile(fileName, template, (err)=> {
        if (err){
            console.log(err);
        }
        else {
            console.log("Readme has been created")
        }
    }) 
}

// function to initialize program
function init() {
inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    const template = generateMarkdown(answers)
    writeToFile('Output/README.md', template)  
    });
}


// function call to initialize program
init();
