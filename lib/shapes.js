class Shape {
    constructor() {
        this.color = "black";
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        throw new Error("I haven't implemented render method yet.");
    }
}


class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" /> `;
    }
}

class Square extends shape {
    render(){
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}

class Circle extends shape {
    render(){
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}
module.exports(Triangle, Square, Circle);