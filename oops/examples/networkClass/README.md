# Network

## Network class design:

**Step-by-Step Design:**

1. **Constructor**
The constructor will initialize the authorization token and set up default configurations for making network requests.

2. **Encapsulation**
The token will be stored as a private field to prevent direct modification. It can only be updated using a setter method.

3. **HTTP Methods**
We will define methods like get, post, put, delete, which will return promises using the Fetch API.

4. **Instance Export**
We’ll export the instance of this class, so it can be used in React components to make API calls.

## Breakdown:

**Private Fields (Encapsulation):**

- The authorization token is stored as a private field `#token`, ensuring that it cannot be accessed directly from outside the class.

- `setToken()` and `getToken()` methods provide controlled access to the token.

**Constructor:**

- The constructor takes an optional `token` parameter. If the `token` is provided, it will be initialized; otherwise, it will be set to `null`.

**HTTP Methods (Abstraction):**

- The `get`, `post`, `put`, and `delete` methods abstract HTTP request logic.

- They internally call a private method `#fetch()` that handles the network 
request using the Fetch API.

**Private Method `#fetch()`:**

- This method sets the Authorization header based on the presence of the token.

- It handles errors and parses JSON responses.

- Since it's a private method (denoted by the `#` prefix), it can't be accessed outside the class.

**Promises:**

- Each method returns a Promise, making it compatible with async/await in React components or `.then()` chaining.

**Exporting an Instance:**

- The class is instantiated and the instance (`networkInstance`) is exported. This `singleton pattern` ensures that the same instance is used across the React app.

---

## Consuming Network class inside ReactJs app

**Token Expiry and Refresh Process:**

- Initial Token Setup: When the user logs in, the server returns an `accessToken` (JWT), `refreshToken`, and the expiry time (expiresIn = 3600 seconds).

- The `setTokens()` method is called to store these tokens and calculate the expiry time.

**Making Requests:**

- Before each API call, the `#ensureValidToken()` method checks if the token is expired.

- If expired, the `#refreshAccessToken()` method is called to request a new access token using the refresh token.

- The new access token and expiry time are stored for future requests.

**Enhancements:**

- You can add more error handling for cases where the refresh token itself expires (e.g., forcing the user to log in again).

- You might add support for silent token refresh in the background to improve the user experience.

- This implementation covers the real-world scenario of handling `JWT` expiration and token refreshing, ensuring that your React app always has a valid token for making secure API requests.

**Key OOP Concepts Applied:**

- Encapsulation: The token is protected, ensuring that only authorized methods can change or access it.

- Abstraction: The complexity of HTTP requests is hidden from the user. They only need to call get, post, put, or delete methods.

- Polymorphism (Potential for Extensibility): You can extend the Network class to add more functionalities, like adding caching or custom error handling, without modifying the core logic.

- Inheritance (Future Expansion): If you later want to add more specialized network classes (e.g., AuthenticatedNetwork), you can extend the Network class and override or add new methods.

- This design is flexible, reusable, and can be adapted for various use cases in your ReactJS app.