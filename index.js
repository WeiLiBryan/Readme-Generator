// Included packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// array of questions for user input
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

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize app
async function init() {
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


// Asks user questions
const ask = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: message[0],
        },
        {
            type: 'input',
            name: 'email',
            message: message[1],
        },
        {
            type: 'input',
            name: 'project',
            message: message[2],
        },
        {
            type: 'input',
            name: 'description',
            message: message[3],
        },
        {
            type: 'input',
            name: 'license',
            message: message[4],
        },
        {
            type: 'input',
            name: 'dependencies',
            message: message[5],
        },
        {
            type: 'input',
            name: 'test',
            message: message[6],
        },
        {
            type: 'input',
            name: 'repo-Info',
            message: message[7],
        },
        {
            type: 'input',
            name: 'contribute',
            message: message[8],
        },

    ]);
};



// Function call to initialize app
init();
