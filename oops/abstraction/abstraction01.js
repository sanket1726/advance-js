/**
 * Abstraction
 * Abstraction is the concept of hiding the complex implementation details
 * and showing only the essential features of the object.
 * This allows a user to interact with the object at a higher level
 * without worrying about the internal complexities.
 */

/**
 * Generic Pseudo Code:
abstract class Shape {
    abstract getArea(): float;
}

class Circle extends Shape {
    private radius: float;
    
    function getArea(): float {
        return 3.14 * radius * radius;
    }
}
* The Shape class abstracts the concept of an area,
* while each subclass like Circle provides its specific implementation.
 */

/**
 * JavaScript Example:
 * JavaScript doesn’t have built-in abstract classes,
 * but you can mimic abstraction by creating base classes that should not be instantiated directly.
 * Here, the Shape class acts as an abstract base class, while Circle implements the getArea method.
 */

class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Cannot instantiate abstract class");
        }
    }
    
    getArea() {
        throw new Error("getArea() must be implemented");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

const myCircle = new Circle(5);
console.log(myCircle.getArea()); // Output: 78.5398
