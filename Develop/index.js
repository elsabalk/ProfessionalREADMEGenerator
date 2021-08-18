// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

const fileName = 'README.md';


// TODO: Create an array of questions for user input



const questions = () => { 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'gitHubUserName',
            message: 'What is your Github Username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'projectName',
            message: 'What is your project\'s name?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project',
        },
        {
            type: 'checkbox',
            message: 'What kind of license will your project have?',
            name: 'license',
            choices: [
                'MIT', 
                'GPL 3.0', 
                'Apache 2.0', 
                'BSD', 
                'none'
            ],
        },
        {
            type: 'input',
            name: 'dependencies',
            message: 'What command should be run to install dependencies?',
            default: 'npm i',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?',
            default: 'npm test',
        },
        {
            type: 'input',
            name: 'repo',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'What does the user need to know about contributing to the repo?',
        },
        
    ]).then(answers => {
                writeToFile(fileName, answers)
                console.log('Generating Readme file.....')
            }).catch((err) => console.error(err));
        }

// TODO: Create a function to write README file
function writeToFile(readmeFileName, answers) {
    fs.writeFileSync(readmeFileName, generateMarkdown(answers));
}

questions();


// TODO: Create a function to initialize app
function init() {}


// Function call to initialize app
init();
