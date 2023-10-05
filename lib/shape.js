// Shape class that manages the requirements for a shape
class Shape {
    // A constructor that has an optional value for color
    constructor(color = "") {
        this.color = color;
    }

    // A method to set the color of the shape
    setColor(color) {
        this.color = color;
    }

    //render function for the child classes to inherit
    render() {
        throw new Error('Child class must implement a render() method.');
    }
}

module.exports = Shape;