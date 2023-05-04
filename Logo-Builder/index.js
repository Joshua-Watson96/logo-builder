// requires inquirer
const inquirer = require("inquirer");
const Logo = require("./lib/shapes.js");
const fs = require("fs");

// predefines the colours available for the text and shape
// 

// initilizes the application
const init = () => {
  const questions = inquirer
    .prompt([
      {
        // enters the characters for the logo
        type: "input",
        name: "text",
        message: "Enter Text(up to 3 characters): ",
        
      },
      {
        // user chooses the colour of the logo text
        type: "input",
        name: "text_colour",
        message: "Choose a colour for the text",
        
      },
      {
        // user selects the shape for the logo
        type: "list",
        name: "shape",
        message: "Please choose a shape: ",
        choices: ["circle", "triangle", "square"],
        
      },
      {
        // user selects the colour of the shape
        type: "input",
        name: "shape_colour",
        message: "Choose a colour for the shape",
      
      },
    ])
    
    .then((Response) => { 
        const logo = new Logo()
        const generateLogo = logo.createLogo(Response);
        fs.writeFile("logo.svg", generateLogo,  log => {
          console.log("Generated logo.svg ");
        })
      }
      );
};

init();

module.exports = init;
