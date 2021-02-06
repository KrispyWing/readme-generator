// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github Username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    },
    {
      type: 'input',
      name: 'title',
      message: "What is the title of your Project? (Required)",
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter your project title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project:'
    },
    {
      type: 'input',
      name: 'install',
      message: 'Please enter setup/installation instructions for your project:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please explain how to use your project'
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license is your project using?',
      choices: ['MIT', 'ISC', 'Apache-2.0', 'GPL-3.0', 'None']
    },
    {
      type: 'confirm',
      name: 'contribute',
      message: 'Is this project accepting contributions?',
      default: false
    },
    {
      type: 'input',
      name: 'test',
      message: 'Explain how to test your project:'
    }
  ];  


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  const readmeData = inquirer.prompt(questions);  
  return readmeData;
}

// Function call to initialize app
init();


