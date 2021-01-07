// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    //must include Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
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
        name: "features",
        message: "What are your projects special features?"
    },
    {
        type: "input",
        name: "contact",
        message: "Contact info for bug reporting?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
