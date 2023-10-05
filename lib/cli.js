const inquirer = require("inquirer");
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createSVG } = require('./image.js');

// A class that manages the Command Line Interface
class CLI {
    constructor () {
        this.shape = '';
        this.shapeColor = '';
        this.text = '';
        this.textColor = '';
    }

    // A run function that begins collecting the information from the user.  Uses Inquirer.
    run() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Please enter text for the logo (max 3 characters):',
                validate(value) {
                    if (value.length > 3 || value.length === 0) {
                        return "Please enter text that has at least 1 character but no more than 3.";
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Please enter a color or hexadecimal value for color:',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Please select a shape:',
                choices: ['Circle', 'Square', 'Triangle'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Please enter a color or hexadecimal value for color:'
            },
            // Sets the variables to be used.
        ]).then((data) => {
            this.shape = data.shape;
            this.shapeColor = data.shapeColor;
            this.text = data.text;
            this.textColor = data.textColor;

            //Calls the createSVG function and writes the text to the logo.svg file.
            return writeFile(
                join(__dirname, '..', 'examples', 'logo.svg'), 
                createSVG(this.text, this.textColor, this.shape, this.shapeColor)
            );
        })
        // informs the user that the logo was generated.
        .then (() => console.log('Generated logo.svg'))
        // Catch errors.
        .catch((err) => {
            console.log(err);
            console.log('Oops, Something went wrong');
        });
    }
}

module.exports = CLI;
