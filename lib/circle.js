const Shape = require('./shape');

class Circle extends Shape {
    constructor (color){
        super(color);
        this.centerX = 150;
        this.centerY = 100;
        this.radius = this.centerY;
    }

    render() {
        return `<circle cx="${this.centerX}" cy="${this.centerY}" r="${this.radius}" fill="${this.color}" />`
    }
}

module.exports = Circle;