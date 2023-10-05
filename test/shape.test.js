const Shape = require("../lib/shape.js");

//Tests for Shape Class
describe('Shape', () => {
    // Tests instantiation
    describe('Instantiate', () => {
        test('Should be an instance of Shape class', () => {
            const shape = new Shape();

            expect(shape).toBeInstanceOf(Shape);
        });
    });

    // Tests instantiation with color
    describe('Initialize Color', () => {
        test('Should set color properly', () => {
            const color = 'blue';
            const shape = new Shape(color);

            expect(shape.color).toBe(color);
        });
    });

    // Test the setColor function
    describe('setColor function', () => {
        test('Should set the color property', () => {
            const color = 'blue';
            const shape = new Shape();
            shape.setColor(color);

            expect(shape.color).toBe(color);
        });
    });

    //Tests to ensure an error is given if they try to render using the shape class
    describe('render function', () => {
        test('Should throw an error if render() is called', () =>{
        const shape = new Shape();
        const err = new Error('Child class must implement a render() method.');
        expect(shape.render).toThrow(err);
        });
    });
});

