const Triangle = require('../lib/triangle.js');

describe('Triangle', () => {

    describe('Instantiate', () => {
        test('Should be an instance of the Triangle class', () => {
            const triangle = new Triangle();

            expect(triangle).toBeInstanceOf(Triangle);
        });
    });

    describe('Initialize width property', () => {
        test('Should return width property', () => {
            const width = 300;
            const triangle = new Triangle();

            expect(triangle.width).toBe(width);
        });
    });

    describe('Initialize height property', () => {
        test('Should return hieght property', () => {
            const height = 200;
            const triangle = new Triangle();

            expect(triangle.height).toBe(height);
        });
    });

    describe('Initialize color property', () => {
        test('Should return color property', () => {
            const color = 'red';

            const triangle = new Triangle(color);

            expect(triangle.color).toBe(color);
        });
    });

    describe('setColor function', () => {
        test('Should return color property when using setColor function', () => {
            const color = 'red';
            const triangle = new Triangle();
            triangle.setColor(color);

            expect(triangle.color).toBe(color);
        });
    });

    describe ('render() function', () => {
        test('should return svg string for triangle', () => {
            const svgTriangle = '<polygon points="150, 0 300, 200 0, 200" fill="red" />';
            const triangle = new Triangle("red");

            expect(triangle.render()).toEqual(svgTriangle);

        });
    });
})