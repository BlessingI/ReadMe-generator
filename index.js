const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the project title'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a brief description of your project'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe the installation process if any'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is this project used for'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Chose the appropriate license for this project:',
            choices: ['Apache', 'Academic', 'GNU', 'ISC', 'MIT', 'Mozilla', 'Open']
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who are the contributors of this projects'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Describe the test instructions'
        },
        {
            type: "input",
            name: "questions",
            message: "incase of questions, contact"
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ])
}





promptUser()
