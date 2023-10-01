const Shape = require("./shape");

class Square extends Shape {
    constructor(color) {
        super(color);
        this.originX = 50;
        this.originY = 0;
        this.length = 200;
    }

    render() {
        return `<rect x='${this.originX}' y='${this.originY}' width='${this.length}' height='${this.length}' fill='${this.color}' />`;
    }
}

module.exports = Square;