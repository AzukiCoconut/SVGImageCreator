const Circle = require('../lib/circle.js');

describe('Circle', () => {

    describe('Instantiate', () => {
        test('Should be an instance of Circle class', () =>{
            const circle = new Circle();

            expect(circle).toBeInstanceOf(Circle);
        });
    });

    describe('Initialize centerX property', () => {
        test('centerX property should be 150', () =>{
            const centerX = 150;
            const circle = new Circle();

            expect(circle.centerX).toBe(centerX);
        });
    });

    describe('Initialize centerY property', () => {
        test('centerY property should be 100', () => {
            const centerY = 100;
            const circle = new Circle();

            expect(circle.centerY).toBe(centerY);
        });
    });

    describe('Initialize radius property', () => {
        test('radius property should be 100', () => {
            const radius = 100;
            const circle = new Circle();

            expect(circle.radius).toBe(radius);
        });
    });

    describe('Initialize color', () => {
        test('Should set color property', () => {
            const color = 'green';
            const circle = new Circle(color);

            expect(circle.color).toBe(color);
        });
    });

    describe('setColor function', () => {
        test('Should set color property using the setColor function', () =>{
            const color = 'green';
            const circle = new Circle();
            circle.setColor(color);

            expect(circle.color).toBe(color);
        });
    });

    describe('render() function', () => {
        test('Should return string with variables set', () => {
            const svgCircle = '<circle cx="150" cy="100" r="100" fill="green" />';
            const circle = new Circle("green");

            expect(circle.render()).toEqual(svgCircle);
        });
    });
})