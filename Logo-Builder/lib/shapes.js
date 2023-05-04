class Logo {}

Logo.prototype.createLogo = (data) => {
      const text = data.text;
      const text_colour = data.text_colour;
      const shape = data.shape;
      const shape_colour = data.shape_colour;
      let logoSVG = "";

      if (shape === "circle") {
        return (logoSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${shape_colour}" />
      
        <text x="150" y="120" font-size="50" text-anchor="middle" fill="${text_colour}">${text}</text>
      
      </svg>`);
      } else if (shape === "triangle") {
        return (logoSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="${shape_colour}" />
  
    <text x="150" y="150" font-size="50" text-anchor="middle" fill="${text_colour}">${text}</text>
     </svg>`);
      } else if (shape === "square") {
        return (logoSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="75" y="35" width="150" height="150" fill="${shape_colour}" />
  
    <text x="150" y="125" font-size="50" text-anchor="middle" fill="${text_colour}">${text}</text>
     </svg>`);
      }
    };

module.exports = Logo;
