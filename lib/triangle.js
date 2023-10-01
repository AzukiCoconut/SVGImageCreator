const Shape = require("./shape");

class Triangle extends Shape {
    constructor(color) {
        super(color);
        this.width = 300;
        this.height = 200;
    }

    render() {
        return `<polygon points="${this.width/2}, 0 ${this.width}, ${this.height} 0, ${this.height}" fill="${this.color}" />`;
    }
}

module.exports = Triangle;