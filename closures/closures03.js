/**
 * Closures with function
 * Closures often arise naturally when working with
 * higher-order functions (functions that return functions or take them as arguments).
 * Here’s a common example:
 */

function counter() {
    let count = 0; // This variable is enclosed in the inner function
    return function () {
        count++;
        console.log(count);
    };
}

/**
 * Here, count is captured by the inner function,
 * and even after counter has finished executing,
 * the increment function can access and modify count.
 */

const increment = counter(); // Create a closure
increment(); // Logs: 1
increment(); // Logs: 2

/**
 * Closures with Classes
 * Closures are useful in classes when you want to create
 * private variables that are not accessible directly from instances.
 */

/**
 * `let count` = 0;
 * This variable count is declared in the constructor and is
 * not accessible from outside the class directly.
 * It’s only accessible through the methods defined inside the constructor.
 * This is where closure comes into play—each method (increment, reset) 
 * has access to count due to closure, even though the variable isn’t exposed outside.
 * `this.increment`:
 * This method increases the value of count and logs the current value.
 * It creates a closure over count, meaning it retains access to the variable,
 * even after the constructor has finished executing.
 * `this.reset`:
 * Similarly, this method resets the value of count to zero,
 * again demonstrating how the private variable count is manipulated only through these methods.
 * Encapsulation via Closure:
 * The closure ensures that count remains private to the instance.
 * There’s no direct way to modify or access count outside of the methods that encapsulate it.
*/

class Counter {
    // Constructor to initialize the class
    constructor() {
        let count = 0; // Private variable, accessible only through closures

        /**
         * Method to increment the count
         * @returns {void}
         */
        this.increment = function () {
            count++;
            console.log(`Current count: ${count}`);
        };

        /**
         * Method to reset the count
         * @returns {void}
         */
        this.reset = function () {
            count = 0;
            console.log("Count has been reset.");
        };
    }
}

// Creating an instance of the Counter class
const myCounter = new Counter();

// Using the increment method
myCounter.increment(); // Logs: Current count: 1
myCounter.increment(); // Logs: Current count: 2

// Resetting the count
myCounter.reset(); // Logs: Count has been reset.

let count = 0;

class BankAccount {
    // Constructor to initialize the class
    constructor(initialBalance) {
        let balance = initialBalance; // Private balance variable

        /**
         * Private method to validate amount
         * @param {number} amount - Amount to validate
         * @returns {boolean} - Whether the amount is valid
         */
        const validateAmount = function (amount) {
            return amount > 0;
        };

        /**
         * Method to deposit money to the account
         * @param {number} amount - Amount to deposit
         * @returns {void}
         */
        this.deposit = function (amount) {
            if (validateAmount(amount)) {
                balance += amount;
                console.log(`Deposited: $${amount}. New balance: $${balance}`);
            } else {
                console.log("Invalid amount. Deposit failed.");
            }
        };

        /**
         * Method to withdraw money from the account
         * @param {number} amount - Amount to withdraw
         * @returns {void}
         */
        this.withdraw = function (amount) {
            if (validateAmount(amount) && amount <= balance) {
                balance -= amount;
                console.log(`Withdrew: $${amount}. Remaining balance: $${balance}`);
            } else {
                console.log("Invalid or insufficient funds. Withdrawal failed.");
            }
        };

        /**
         * Method to check the balance of the account
         * @returns {void}
         */
        this.getBalance = function () {
            console.log(`Current balance: $${balance}`);
        };
    }
}

// Creating an instance of the BankAccount class
const myAccount = new BankAccount(500);

// Interacting with the account
myAccount.deposit(200); // Deposited: $200. New balance: $700
myAccount.withdraw(100); // Withdrew: $100. Remaining balance: $600
myAccount.getBalance(); // Current balance: $600
// myAccount.validateAmount(100) // validateAmount method will not accessible from outside the class as it's a private method