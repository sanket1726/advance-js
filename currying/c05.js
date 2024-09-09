// Use of currying in Functional programming

/**1. Function Composition
 * Function composition is the process of combining two or more functions
 * to produce a new function. 
 * Currying enhances this by allowing functions to be partially applied,
 * which makes it easier to compose and chain functions.
*/

//Example of Function Composition with Currying:

/**
 * Squares a number.
 * @param {number} x - The number to square.
 * @returns {number} - The squared number.
 */
const square = (x) => x * x;

/**
 * Adds 5 to a number.
 * @param {number} x - The number to which 5 will be added.
 * @returns {number} - The result of adding 5 to the number.
 */
const addFive = (x) => x + 5;

/**
 * Composes two functions into one.
 * @param {function} f - The first function to apply.
 * @param {function} g - The second function to apply.
 * @returns {function} - A new function that applies `f` and then `g`.
 */
const compose = (f, g) => (x) => g(f(x));

// Curried functions can be used in composition
const curriedAddFive = (x) => addFive(x);
const curriedSquare = (x) => square(x);

// Create a composed function
const addFiveThenSquare = compose(curriedAddFive, curriedSquare);

console.log(addFiveThenSquare(2)); // Output: 49 (i.e., (2^2) + 5 = 4 + 5 = 9)

/**Explanation:
 * compose(f, g): Takes two functions and returns a new function that applies f first, then g.
 * addFiveThenSquare: Composes the curried functions curriedAddFive and curriedSquare to create a new function.
*/

/**
 * 2. Partial Application
 * Partial application refers to fixing a number of arguments to a function,
 * producing another function that takes the remaining arguments.
 * Currying naturally supports partial application, making it easier to build complex functions incrementally.
 */

// Example of Partial Application:


/**
 * Creates a multiplier function with a fixed multiplier.
 * @param {number} a - The fixed multiplier.
 * @returns {function} - A function that multiplies a given number by `a`.
 */
const multiplyBy = (a) => (b) => a * b;

const double = multiplyBy(2); // Partially applied function

console.log(double(5)); // Output: 10 (i.e., 2 * 5 = 10)

/**Explanation:
 * multiplyBy(a): Returns a curried function that multiplies a given number by a.
 * double: A partially applied function that multiplies any number by 2.
*/

/**
 * 3. Higher-Order Functions
 * Higher-order functions are functions that take other functions
 * as arguments or return functions as results.
 * Currying aligns well with higher-order functions by enabling incremental function application.
*/

// Example of Higher-Order Functions:


/**
 * Applies a function to a list of numbers.
 * @param {function} fn - The function to apply.
 * @param {Array<number>} numbers - The list of numbers.
 * @returns {Array<number>} - The list of results after applying the function.
 */
const applyToList = (fn) => (numbers) => numbers.map(fn);

const increment = (x) => x + 1;
const curriedApplyToList = applyToList(increment);

console.log(curriedApplyToList([1, 2, 3])); // Output: [2, 3, 4]

/**Explanation:
 * applyToList(fn): Returns a function that applies fn to each item in the list.
 * curriedApplyToList: Uses the curried function to apply the increment function to a list of numbers.
*/

/**
 * 4. Immutability
 * Immutability is the concept of not modifying existing data structures
 * but instead creating new ones. 
 * Currying supports immutability by allowing functions to be called incrementally without altering their arguments.
*/

// Example of Immutability with Currying:

/**
 * Adds a fixed value to an array of numbers.
 * @param {number} value - The value to add.
 * @returns {function} - A function that adds `value` to each number in the array.
 */
const addToArray = (value) => (array) => array.map((item) => item + value);

const addThree = addToArray(3);

console.log(addThree([1, 2, 3])); // Output: [4, 5, 6]

/**Explanation:
 * addToArray(value): Returns a curried function that adds value to each number in the array.
 * addThree: Partially applies addToArray with a value of 3.
*/

/**
 * Summary:
 * Function Composition: Currying facilitates combining functions in a clean and modular way.
 * Partial Application: Currying supports creating specialized functions with preset arguments.
 * Higher-Order Functions: Currying integrates well with functions that operate on or return other functions.
 * Immutability: Currying supports creating new functions without modifying the original ones.
 * Currying aligns seamlessly with these core functional programming concepts,
 * making code more modular, reusable, and expressive. 
 * Let me know if there's anything specific you'd like to delve deeper into!
 */