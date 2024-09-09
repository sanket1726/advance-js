/**
 * Call Method:
 * The call() method calls a function with a given this value and arguments provided individually.
 */

/**
 * syntax
 * functionName.call(thisArg, arg1, arg2, ...)
 */


/**
 * Greets a person by their full name.
 * @param {Object} thisArg - The object to use as `this` inside the function.
 * @param {string} greeting - The greeting message.
 * @returns {void} - No return value, just logs the greeting to the console.
 */
function greet(greeting) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName}`);
  }
  
  const person = {
    firstName: "Sanket",
    lastName: "Benade",
  };
  
  // Calling the function with `this` set to `person`
  greet.call(person, "Hello"); // Output: "Hello, Sanket Benade"
  