const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
        type: "editor",
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
        name: "licence",
        choices: ["MIT", "Apache", "GPLv3"]
    },
    {
        type: "input",
        message: "How can others contribute?",
        name: "contribute"
    },
    {
        type: "input",
        message: "How can this code be tested?",
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
    {
        type: "input",
        message: "Enter your image url (https://github.com/your-repository/...)",
        name: "image"
    }
    ];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
