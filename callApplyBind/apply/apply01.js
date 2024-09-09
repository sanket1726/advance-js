/**
 * Apply:
 * The apply() method works similarly to call(), but it accepts arguments as an array.
 */

/**
 * syntax
 * functionName.call([thisArg], arg1, arg2, ...)
 */

/**
 * Finds the maximum number in an array using `apply`.
 * @param {Object} thisArg - The object to use as `this`, but in this case it's `null`.
 * @param {Array<number>} numbers - The array of numbers to find the maximum from.
 * @returns {number} - The maximum number in the array.
 */
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(11, numbers); // Output: 7
console.log(max);
