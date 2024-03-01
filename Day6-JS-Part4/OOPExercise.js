class Shape {
    constructor(shapeName, width, height) {
        this.shapeName = shapeName
        this.width = width;
        this.height = height;
    };
    calculateArea() {
        throw new Error('Unknown shape. Method not yet implemented.');
    };
};

class Rectangle extends Shape {
    displayFormula(){
        console.log('Area is width * height');
    };
    calculateArea(){
        console.log(`The area of ${this.shapeName} is ${this.width * this.height}.`);
    };
};


const shape1 = new Rectangle('shape1', 19, 80);
shape1.displayFormula();
shape1.calculateArea();
