/**
 * Encapsulation is the process of bundling data (variables) and methods (functions)
 * that operate on the data into a single unit or class. 
 * It also means restricting direct access to some of an object’s components
 * and only exposing what is necessary.
 */


/**
 * Generic Pseudo Code:
class Person {
    private age: int;
    public setAge(age: int): void {
        this.age = age;
    }
    public getAge(): int {
        return this.age;
    }
}
 * The age property is private and can only be accessed through setAge and getAge methods.
 */

/**
 * JavaScript Example:
 * In JavaScript, encapsulation can be achieved using closures or private fields (introduced in ES6+).
 * The #age property is private, ensuring that it is not directly accessible from outside the class.
 */

class Person {
    #age; // Private field
    
    constructor(name, age) {
        this.name = name;
        this.#age = age; // Access private variable inside the class
    }
    
    setAge(age) {
        this.#age = age; // Setting private field
    }
    
    getAge() {
        return this.#age;
    }
}

let aburao = new Person("aburao", 30);
console.log(aburao.name); // Output: aburao
console.log(aburao.getAge()); // Output: 30
aburao.setAge(35);
console.log(aburao.getAge()); // Output: 35
