/** 
 * Closures with var, let, and const
 * `var`: has function scope, meaning it’s scoped to the function in which
 * it's declared (or globally if declared outside any function).
 * `let` and `const`: have block scope, meaning they are scoped to the nearest enclosing block (like inside {}).
 */


// Using var in Closures

/**
 * Using `var` inside closures can sometimes lead to unexpected behaviour, especially in loops
 * Here, because var is function-scoped, 
 * the value of i in the closure is the same in each iteration of the loop,
 * leading to all console.log(i) printing 3 (the final value).
 */

function closureVarExample() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    }
}

closureVarExample(); // Logs: 3, 3, 3 (after 1 second delay)  

// Using let in Closures
/**
 * With let, each iteration of the loop gets its own block-scoped variable,
 * so closures capture the correct value:
 */

function closureLetExample() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    }
}
closureLetExample(); // Logs: 0, 1, 2 (after 1 second delay)

// Using const in Closures
/**
 * Const also works same way as let, as it have block scope.
 * but it’s a constant, so you can’t reassign it within its scope.
 */

function closureConstExample() {
    const outerConst = 'outer value';
    return function inner() {
        console.log(outerConst); // Accesses 'outer value' even after closureConstExample has returned
    };
}
const result = closureConstExample();
result(); // Logs: 'outer value'

