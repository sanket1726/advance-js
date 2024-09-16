/**
 * Polymorphism
 * Polymorphism refers to the ability of different objects
 * to respond to the same method in different ways.
 * It allows one method to work differently based on the object it is invoked on.
 */

/**
 * Generic Pseudo Code:
 class Shape {
    function draw(): void {
        print("Drawing a shape");
    }
}

class Circle extends Shape {
    function draw(): void {
        print("Drawing a circle");
    }
}

class Rectangle extends Shape {
    function draw(): void {
        print("Drawing a rectangle");
    }
}

Shape shape = new Circle();
shape.draw(); // Output: Drawing a circle

 * The draw method behaves differently depending on whether the object is a Circle or a Rectangle.
 */

/**
 * JavaScript Example:
 * Polymorphism in JavaScript can be achieved through method overriding.
 * In this example, the draw method is polymorphic because
 * it behaves differently for each subclass (Circle, Rectangle).
 */

class Shape {
    draw() {
        console.log("Drawing a shape");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing a circle");
    }
}

class Rectangle extends Shape {
    draw() {
        console.log("Drawing a rectangle");
    }
}

let shapes = [new Circle(), new Rectangle()];
shapes.forEach(shape => shape.draw());
// Output:
// Drawing a circle
// Drawing a rectangle
