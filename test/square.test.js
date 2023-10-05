const Square = require('../lib/square.js');

// Test Square Class
describe('Square', () => {

    // Tests Instantiation
    describe('Instantiate', () =>{
        test('Should be an instance of the Square class', () => {
            const square = new Square();

            expect(square).toBeInstanceOf(Square);
        });
    });

    // Tests initialization of properties
    describe('Initialize originX property', () => {
        test('Should return originX property', () => {
        const originX = 50;
        const square = new Square();

        expect(square.originX).toBe(originX);
    });
    } );

    describe('Initialize originY property', () => {
        test('Should return originY property', () => {
            const originY = 0;
            const square = new Square();

            expect(square.originY).toBe(originY);
        });
    });

    describe('Initialize length property', () => {
        test('Should return length property', () => {
            const length = 200;
            const square = new Square();

            expect(square.length).toBe(length);
        });
    });

    // Tests instantiation with color
    describe('Initialize color property', () => {
        test('Should return color property when passed in class declaration', () => {
            const color = 'purple';
            const square = new Square(color);

            expect(square.color).toBe(color);
        });
    });

    // Tests setColor Function
    describe('setColor function', () => {
        test('Should return color property when using setColor function', () => {
            const color = 'purple';
            const square = new Square();

            square.setColor(color);

            expect(square.color).toBe(color);
        });
    });

    // Tests render function
    describe('render() function', () => {
        test('Should return svg string for square', () => {
            const svgSquare = "<rect x='50' y='0' width='200' height='200' fill='purple' />";
            const square = new Square("purple");

            expect(square.render()).toEqual(svgSquare);

        });
    });
})