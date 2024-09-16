/**
 * Inheritance
 * Inheritance allows a class (child class) to inherit
 * properties and methods from another class (parent class).
 * This helps in reusing code and establishing a relationship between classes.
 * function Overriding is included in this explanation.
 */

/**
 * Generic Pseudo Code:
 * The Dog class inherits the Animal class and overrides the sound method.
 class Animal {
    function sound(): void {
        print("Some generic animal sound");
    }
}

class Dog extends Animal {
    function sound(): void {
        print("Bark");
    }
}

 */

/**
 * JavaScript Example:
 * In JavaScript, inheritance is implemented using the extends keyword.
 */

class Animal {
    constructor(name) {
        this.name = name;
    }
    
    sound() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    sound() {
        console.log(`${this.name} barks`);
    }
}

const myDog = new Dog("Rex");
myDog.sound(); // Output: Rex barks
