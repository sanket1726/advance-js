/**
 * Real-World Applications of Currying
 * Currying has practical uses in various scenarios,
 * particularly when you want to break complex tasks into smaller, manageable ones.
 */

/**
 * Currying can be used to create a configurable logger for different log levels.
 */

/**
 * Creates a logger for a specific log level.
 * @param {string} level - The log level ('info', 'warn', 'error').
 * @returns {function} - A function that logs messages with the specified level.
 */
const createLogger = (level) => (message) => console.log(`[${level.toUpperCase()}]: ${message}`);

const infoLogger = createLogger('info');
const errorLogger = createLogger('error');

infoLogger('This is an info message.');   // Output: [INFO]: This is an info message.
errorLogger('This is an error message.'); // Output: [ERROR]: This is an error message.

// NOTE: react code will not work as we have not done the dev setup for react.

/**
 * Currying use-case in reactJsFunction
 * Composition in React Hooks.
 * Currying is useful for composing hook logic by partially applying state management.
 */

/**
 * Returns a curried function to handle state updates for multiple inputs.
 * @param {function} setState - React's state setter function.
 * @returns {function} - A function to handle state changes based on field name and value.
 */
const handleInputChange = (setState) => (field) => (event) => {
    const { value } = event.target;
    setState((prevState) => ({ ...prevState, [field]: value }));
  };
  
  // Usage in a React component
  function UserForm() {
    const [formData, setFormData] = React.useState({ name: '', email: '' });
    const handleChange = handleInputChange(setFormData);
  
    return (
      <form>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange('name')}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange('email')}
        />
      </form>
    );
  }
  