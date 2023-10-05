const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');
let shapeEl;
let textEl;

// A function that creates an SVG image based on the responses from the user
function createSVG(text, textColor, shape, shapeColor) {
    // Determines the Shape and adds the required text and shape to the image
    if (shape === 'Circle') {
        shapeEl = new Circle(shapeColor).render();
        textEl = `<text x="150" y="117" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    } else if (shape === 'Square') {
        shapeEl = new Square(shapeColor).render();
        textEl = `<text x="150" y="117" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    } else {
        shapeEl = new Triangle(shapeColor).render();
        textEl = `<text x="150" y="157" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    }

    // Returns the completed SVG image text
    return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        
        ${shapeEl}
        
        ${textEl}
        </svg>`;
}

module.exports = { createSVG };