// requires inquirer
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes.js");
const Text = require("./lib/text.js");
const fs = require("fs");

// predefines the colours available for the text and shape
const colourChoice = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];

// questions user will have to answer in order to generate the logo
const questions = [
  {
    // enters the characters for the logo
    type: "input",
    name: "text",
    message: "Enter Text(up to 3 characters): ",
    // validate: function(input){
    //     if (0 > input.length > 3){
    //         return 'Please enter a text up to 3 characters'
    //     }
    //     return true;
    // }
  },
  {
    // user chooses the colour of the logo text
    type: "input",
    name: "text_colour",
    message: "Choose a colour for the text",
    // validate: function(input){
    //     const regex = /^#[0-9A-Fa-f]{6}$/;
    //     if ( !input.include(colourChoice) || !regex.test(input)){
    //         return 'Please enter a valid colour in either hex format or colour name';
    //     }
    //     return true;
    // }
  },
  {
    // user selects the shape for the logo
    type: "list",
    name: "shape",
    message: "Please choose a shape: ",
    choices: ["circle", "triangle", "square"],
    // validate: function(input){
    //     if(input.length === 0){
    //         return 'Please choose a shape';
    //     }
    //     return true
    // }
  },
  {
    // user selects the colour of the shape
    type: "input",
    name: "shape_colour",
    message: "Choose a colour for the shape",
    //     validate: function(input){
    //         const regex = /^#[0-9A-Fa-f]{6}$/;
    //         if ( !input.include(colourChoice) || !regex.test(input)){
    //             return 'Please enter a valid colour in either hex format or colour name';
    //     }
    //     return true;
    // }
  },
];

// initilizes the application
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      let shape;
      switch (answers.shape) {
        case "circle":
          shape = new Circle();
          break;
        case "triangle":
          shape = new Triangle();
          break;

        default:
          shape = new Square();
          break;
      }
      shape.setColor(answers.shape_colour);
      let text = new Text();
      text.setText(answers.text, answers.text_colour);
      text.setShape(shape);
      fs.writeFileSync("./examples/logo.svg", shape.render())
    })
    .catch((error) => {
      console.log.error;
    });
  return;
}
init();
