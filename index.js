
const inquirer = require('inquirer');
const valid = require('./valid.js');

const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Logo Text (1-3 characters)?',
      validate: function (input) {
        if (input.length > 0 && input.length < 4) {
          return true;
        } else {
          return `Text must be 1-3 characters.`;
        }
      },
    },
    {
      type: 'input',
      name: 'textColour',
      message: 'Text Colour (Common name OR a hexadecimal value)?',
      validate: function (input) {
        if (colourIsValid(input)) {
          return true;
        } else {
          return `Invalid Colour`;
        }
      },
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Shape?',
      choices: ['Circle',
                'Triangle',
                'Square',
      ],
    },
    {
      type: 'input',
      name: 'shapeColour',
      message: 'Shape Colour?',
      validate: function (input,answers) {
        if (input.toLowerCase() !== answers.textColour.toLowerCase() && 
            colourIsValid(input)) {
          return true;
        } else {
          return 'Invalid or matching colour';
        }
      },
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