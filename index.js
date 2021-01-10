// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateReadMe = require("./utils/generateMarkdown.js");
const { promisify } = require("util");

const writeFileAsync = promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    //must include //Description, Table of Contents, //Installation, //Usage, //License, //Contributing, //Tests, and //Questions
    {
        type: "input",
        name: "title",
        message: "What is the title to your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project a bit: "
    },
    {
        type: "input",
        name: "installation",
        message: "Please describe your installation process, if any: "
    },
    {
        type: "input",
        name: "usage",
        message: "What is this project going used for?"
    },
    {
        type: "input",
        name: "license",
        message: "Which license would be best for this project: Apache, Academic, GNU, ISC, MIT, Mozilla, Open, WTFPL",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open",
            "WTFPL"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Are test included?"
    },
    {
        type: "input",
        name: "questions",
        message: "Who should I contact if there is an issue?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    }
];

// Function to prompt user for answers
const promptUser = () => {
    return inquirer.prompt(questions)
};


// TODO: Create a function to initialize app
const init = async () => {
    try {
        const answers = await promptUser();
        const md = generateReadMe(answers);
        //Write readme to dist folder
        await writeFileAsync("READMETEST.md", md)
    } catch(err) {
        console.log(err);
    }

};

// Function call to initialize app
init();
