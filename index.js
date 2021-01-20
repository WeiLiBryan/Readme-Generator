// Included packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user input
const questions = [
    "What is your GitHub username?",
    "What is your email address?",
    "What is your projects name?",
    "Please write a short description of your project",
    "What kind of license should your project have?",
    "What command should be run to install dependencies?",
    "What command should be run to run tests?",
    "What does the user need to know about using the repo?",
    "What does the user need to know about contributing to the repo?"
];

// function to write README file
function writeToFile(fileName, data) {
    writeFileAsync(fileName, data)
    console.log("Readme Generated")
}

// function to initialize app
async function init() {
    try {
        const response = await ask();

        const md = markdownMaker(response);

        console.log("Generating README");
        writeToFile("GENERATED-README.md", md);
        
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
            message: questions[0],
        },
        {
            type: 'input',
            name: 'email',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'project',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'description',
            message: questions[3],
        },
        {
            type: 'input',
            name: 'license',
            message: questions[4],
        },
        {
            type: 'input',
            name: 'dependencies',
            message: questions[5],
        },
        {
            type: 'input',
            name: 'test',
            message: questions[6],
        },
        {
            type: 'input',
            name: 'info',
            message: questions[7],
        },
        {
            type: 'input',
            name: 'contribute',
            message: questions[8],
        },

    ]);
};

const markdownMaker = (response) => 
`# ${response.project}

--------------------------------------

${response.description}

## Table of Contents

[Licenses](#License)    |   [Install Dependencies](#Dependencies)   |   [Test Command](#Test)

[Languages](#Language)  |   [Contribute](#Contribute)               |   [Author](#Author)

--------------------------------------

## License

${response.license}

## Dependencies

Install using ${response.dependencies}

## Test

Test using ${response.test}

## Language

${response.info}

## Contribute

Contribute using ${response.contribute}

## Author

${response.github}

[GitHub](https://github.com/${response.github}) | [Email](${response.email})

### [Back to Table of Contents](#table-of-contents)
`;

// Function call to initialize app
init();
