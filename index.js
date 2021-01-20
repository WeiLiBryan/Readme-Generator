// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [
    "What is your GitHub username?",
    "What is your email address?",
    "What is your projects name?",
    "Please write a short description of your project",
    "What kind of license should your project have?",
    "What command should be run to install dependencies?",
    "What command should be run to run tests?",
    "What doe the user need to know about using the repo?",
    "What does the user need to know about contributing to the repo?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
async function init()  {
    try {
        const response = await ask();

        const md = markdownMaker(response);

        console.log("Generating README");
        writeToFile("GENERATE-README.md", md);
        
    } 
    
    catch (err) {
        console.error(err);
    }
};

function ask(){
    

    }
}

// Function call to initialize app
init();
