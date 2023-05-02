// constructs the shape
class Shape {
    constructor() {
        this.color = "black";
    }
    setColor(color) {
        this.color = color;
    }
    // gives an error if construct hasn't been implemented
    render() {
        throw new Error("I haven't implemented render method yet.");
    }
}

// sets the properties for the triangle shape
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" /> `;
    }
}

// sets the properties for the Square shape
class Square extends Shape {
    render(){
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}

// sets the properties for the Circle shape
class Circle extends Shape {
    render(){
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}
module.exports = {Triangle, Square, Circle}