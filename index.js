
const inquirer = require('inquirer');

const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Logo Text?',
    },
    {
      type: 'input',
      name: 'textColour',
      message: 'Text Colour?',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Shap?',
      choices: ['Circle',
                'Triangle',
                'Square',
      ],
    },
    {
      type: 'input',
      name: 'shapeColour',
      message: 'Shape Colour?',
    },
];

function createLogo(data) {
    console.log(data);
}

// ===================================================

function init() {    
    console.log("\n");
    inquirer
    .prompt(questions)
    .then((data) => {
        createLogo(data);
    });
}

init();