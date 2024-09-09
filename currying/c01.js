/**
 * What is currying
 * Currying is a technique in functional programming where a function that takes multiple arguments
 * is transformed into a series of functions, each taking one argument at a time.
 * 
 * A curried function expects arguments one by one, while a regular function expects all arguments at once.
 * Currying transforms a multi-argument function into a series of single-argument functions.
 * 
 * Why use currying
 * 1. Reusability: You can partially apply a function, making it more flexible.
 * 2. Function Composition: It makes composing functions easier in functional programming.
 *    You can break down complex operations into smaller, reusable steps.
 */

// Example 01
function add(a,b) {
    return a + b;
}

/**
 * In a normal function, you pass all arguments at once, e.g., add(2, 3).
 * In currying, the function curriedAdd takes one argument (a), 
 * then returns another function that takes the second argument (b).
 * @param a {number}:  receives number as input
 * @returns {Function}: returns a function
 */
function curriedAdd(a) {
    /**
     * @param b {number}: received number as input
     * @returns {number}
     */
    return function(b) {
      return a + b;
    };
  }

/**
 * Currying using arrow functions
 * Currying becomes more concise with ES6 arrow functions:
 */

const curriedAddArrow = a => b => a + b;
console.log(curriedAddArrow(2)(3)); // Output: 5

  
const curryAdd = curriedAdd(2)
console.log(curryAdd(5)); // Output: 5

// Example 02 --> please give your thoughts on this
function calculate(radius) {
    let rad = radius

    const circleArea = () => {
        return Math.PI * rad * rad;
    }

    const circleCircumference = () => {
        return 2 * Math.PI * rad;
    }

    const cylinderArea = (height) => {
        return (2 * Math.PI * rad * height) + (2 * Math.PI *  rad *rad)
    }

    return {circleArea, circleCircumference, cylinderArea}
}

const radius = 10
const calc = calculate(radius)

console.log('Calc response:', calc)
console.log('cylArea:', calc.cylinderArea(10))