const inquirer = require('inquirer');
const fs = require('fs')

const colourChoice = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue",
"BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk",
"Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki",
"DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen",
"DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue",
"DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro",
"GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed",
"Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral",
"LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon",
"LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime",
"LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple",
"MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue",
"MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange",
"OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff",
"Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown",
"Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray",
"SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet",
"Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
];

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter Text(up to 3 characters): ',
        validate: function(input){
            if (0 > input.length > 3){
                return 'Please enter a text up to 3 characters'
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'text-colour',
        message: 'Choose a colour for the text',
        validate: function(input){
            const regex = /^#[0-9A-Fa-f]{6}$/;
            if ( !input.include(colourChoice) || !regex.test(input)){
                return 'Please enter a valid colour in either hex format or colour name';
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose a shape: ',
        choices: ['circle', 'triangle', 'square'],
        validate: function(input){
            if(input.length === 0){
                return 'Please choose a shape';
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'shape-colour',
        message: 'Choose a colour for the shape',
        validate: function(input){
            const regex = /^#[0-9A-Fa-f]{6}$/;
            if ( !input.include(colourChoice) || !regex.test(input)){
                return 'Please enter a valid colour in either hex format or colour name';
        }
        return true;
    }   
}
];

function init(){
    inquirer.prompt(questions)
    .then(answers => console.log(answers))
    .catch(error => {console.log.error});
    return;
}