// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
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
        message: "Contact info for bug reporting?"
    },
    {
        type: "input",
        name: "usage",
        message: "Contact info for bug reporting?"
    },
    {
        type: "input",
        name: "license",
        message: "Contact info for bug reporting?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Contact info for bug reporting?"
    },
    {
        type: "input",
        name: "tests",
        message: "Contact info for bug reporting?"
    },
    {
        type: "input",
        name: "questions",
        message: "Please enter your email address:"
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
];

// Function to prompt user for answers
const promptUser = () => {
    return inquirer.prompt(questions)
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: CREATE README.MD FILE
const generateReadMe = (answers) => {
    return `
    ### ${answers.title}
    `
};

//

// TODO: Create a function to initialize app
const init = async () => {
    try {
        const answers = await promptUser();
        const md = generateReadMe(answers);
        await writeFileAsync("READMETEST.md", md)
    } catch(err) {
        console.log(err);
    }

};

// Function call to initialize app
init();
