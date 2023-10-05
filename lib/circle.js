const Shape = require('./shape');

// A class that inherits from shape class that renders a Circle
class Circle extends Shape {
    // Constructor
    constructor (color){
        super(color);
        this.centerX = 150;
        this.centerY = 100;
        this.radius = this.centerY;
    }

    // render the string to be placed in the SVG image
    render() {
        return `<circle cx="${this.centerX}" cy="${this.centerY}" r="${this.radius}" fill="${this.color}" />`
    }
}

module.exports = Circle;