/**
 * Partial Application vs. Currying
 * It's important to differentiate between partial application and currying,
 * as they both involve dealing with function arguments but in slightly different ways.
 * 
 */

/**
 * Partial Application:
 * In partial application, you fix a few arguments of a function and
 * return a new function that takes the remaining arguments.
 * Partial application is about fixing a number of arguments and returning a new function.
 * 
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}: returns multiplication of numbers
*/
function multiply(a, b, c) {
    return a * b * c;
}

/**
 * Here, multiply.bind(null, 2) returns a new function
 * where a is always 2, and you only need to pass b and c.
 */
const partiallyAppliedMultiply = multiply.bind(null, 2); // Fixing the first argument (a)
console.log(partiallyAppliedMultiply(3, 4)); // Output: 24

/**
 * Currying is when you transform a function that takes multiple arguments
 * into a chain of functions, each taking a single argument.
 * Currying transforms the function into a series of functions, each taking one argument.
 * @param {number} a - First multiplier.
 * @returns {function} - A function that accepts the second multiplier.
 */
const curriedMultiply = a => b => c => a * b * c;
console.log(curriedMultiply(2)(3)(4)); // Output: 24
