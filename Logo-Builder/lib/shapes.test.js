const Logo = require('./shapes.js');

describe('Logo', () => {
  describe('createLogo', () => {
    test('should return the correct SVG for a circle logo', () => {
      const logo = new Logo();
      const data = {
        text: 'TST',
        text_colour: 'red',
        shape: 'circle',
        shape_colour: 'orange'
      };

      const result = logo.createLogo(data);

      
      expect(result)
      .toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          
      <circle cx="150" cy="100" r="80" fill="orange" />
    
      <text x="150" y="120" font-size="50" text-anchor="middle" fill="red">TST</text></svg>`)
      
      
    });
  })
})

//     it('should return the correct SVG for a triangle logo', () => {
//       const logo = new Logo();
//       const data = {
//         text: 'TST',
//         text_colour: 'wheat',
//         shape: 'triangle',
//         shape_colour: 'green'
//       };
//       const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="green" /><text x="150" y="150" font-size="50" text-anchor="middle" fill="wheat">TST</text></svg>`;
//       const resultSVG = logo.createLogo(data);
//       expect(resultSVG).toEqual(expectedSVG);
//     });

//     it('should return the correct SVG for a square logo', () => {
//       const logo = new Logo();
//       const data = {
//         text: 'TST',
//         text_colour: 'white',
//         shape: 'square',
//         shape_colour: 'black'
//       };
//       const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="35" width="150" height="150" fill="black" /><text x="150" y="125" font-size="50" text-anchor="middle" fill="white">TST</text></svg>`;
//       const resultSVG = logo.createLogo(data);
//       expect(resultSVG).toEqual(expectedSVG);
//     });
//   });
// });



