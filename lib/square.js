const Shape = require("./shape");

//A Square class that inherits from Shape that renders a Square shape in the SVG image
class Square extends Shape {
    // A constructor
    constructor(color) {
        super(color);
        this.originX = 50;
        this.originY = 0;
        this.length = 200;
    }

    // A render method that adds the square to the SVG image
    render() {
        return `<rect x='${this.originX}' y='${this.originY}' width='${this.length}' height='${this.length}' fill='${this.color}' />`;
    }
}

module.exports = Square;