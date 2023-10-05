const Shape = require("./shape");

// A class that renders a triangle in the SVG image that inherits from Shape
class Triangle extends Shape {
    constructor(color) {
        super(color);
        this.width = 300;
        this.height = 200;
    }

    // A render method to add a triangle to a SVG imnage
    render() {
        return `<polygon points="${this.width/2}, 0 ${this.width}, ${this.height} 0, ${this.height}" fill="${this.color}" />`;
    }
}

module.exports = Triangle;