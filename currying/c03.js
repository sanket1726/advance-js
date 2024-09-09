/**
 * Advanced concepts about currying
 */

/**
 * Dynamic currying
 * Dynamic currying allows a function to be curried even if
 * you don’t know how many arguments the original function expects.
 * It handles the arguments one by one and returns the final result when all required arguments are passed.
 * The key aspect of dynamic currying is that it can handle variable-length arguments,
 * making it more flexible than static currying.
 */

/**
 * To understand dynamic currying, we need to build a curried function that works regardless of how many arguments are passed at a time.
 * The basic idea is:
 * 1.Collect arguments as they are passed.
 * 2.When enough arguments are provided (i.e., equal to the number of parameters the original function expects),
    invoke the original function.
 * 3.If not enough arguments are provided, return a function that continues to collect them.
 */

/**
* Dynamically curries a function, allowing arguments to be passed one at a time or in batches.
* @param {function} fn - The original function that needs to be curried.
* @returns {function} - A curried function that takes arguments incrementally.
*/
function dynamicCurry(fn) {
    console.log('fn length:', fn.length)
    /**
     * This inner function accumulates arguments until enough are passed.
     * @param {...*} args - Arguments provided to the curried function.
     * @returns {function|*} - Either returns the result if all arguments are provided, or a function to collect more arguments.
     */
    return function curried(...args) {
        console.log('args length:', args.length)
        // Check if the number of passed arguments is equal to or greater than the original function's argument count
        if (args.length >= fn.length) {
            // If we have enough arguments, call the original function with all collected arguments
            return fn(...args);
        } else {
            // If not enough arguments, return a function that takes more arguments
            return function (...nextArgs) {
                // Recursively call curried with the combined arguments
                return curried(...args.concat(nextArgs));
            };
        }
    };
}

/**
 * A sample function that adds three numbers together.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @returns {number} - The sum of a, b, and c.
 */
function sum(a, b, c) {
    return a + b + c;
}

// Using dynamic currying
const curriedSum = dynamicCurry(sum);

console.log(curriedSum(1)(2)(3));    // Output: 6
console.log(curriedSum(1, 2)(3));    // Output: 6
console.log(curriedSum(1, 2, 3));    // Output: 6

/**
 * Benefits of dynamic currying
 * 1. Flexible Argument Passing: You can pass arguments one at a time or all at once, 
 * making your code more flexible.
 * 2. Reuse Functionality: By breaking down functions into smaller, curried versions,
 * you can create specialized functions for specific use cases.
 * 3.Higher Modularity: The ability to partially apply functions (fix some arguments)
 * leads to better code reuse and composition.
 */
