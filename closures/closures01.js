/**
 * Closure: function along with its parents lexical scope is called closure
 * Closures are a powerful feature in JavaScript that allow functions to retain access to
 * variables from their outer (or enclosing) lexical scope, 
 * even after that outer function has completed execution
 */

/**
 * When does a closure is created?
 * A function is defined inside another function.
 * The inner function has access to `variables` declared in its outer function,
 * even after the outer function has returned.
 */

function outerFunction(outerVariable) {
    const str1 = "This exists in outer scopt"
    return function innerFunction(innerVariable) {
      console.log(`Outer Variable: ${outerVariable}| ${str1}`);
      console.log(`Inner Variable: ${innerVariable}`);
    };
  }
  
  const newFunction = outerFunction('outside'); // outerFunction creates a closure
  newFunction('inside'); // Logs: Outer Variable: outside, Inner Variable: inside
  