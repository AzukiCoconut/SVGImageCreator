const Shape = require("../lib/shape.js");

describe('Shape', () => {
    describe('Instantiate', () => {
        test('Should be an instance of Shape class', () => {
            const shape = new Shape();

            expect(shape).toBeInstanceOf(Shape);
        });
    });

    describe('Initialize Color', () => {
        test('Should set color properly', () => {
            const color = 'blue';
            const shape = new Shape(color);

            expect(shape.color).toBe(color);
        });
    });

    describe('setColor function', () => {
        test('Should set the color property', () => {
            const color = 'blue';
            const shape = new Shape();
            shape.setColor(color);

            expect(shape.color).toBe(color);
        });
    });

    describe('render function', () => {
        test('Should throw an error if render() is called', () =>{
        const shape = new Shape();
        const err = new Error('Child class must implement a render() method.');
        expect(shape.render).toThrow(err);
        });
    });
});

