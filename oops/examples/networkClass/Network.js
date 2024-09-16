/**
 * Let's design the Network class
 * that encapsulates the logic for handling an authorization token,
 * making HTTP requests, and exposing methods for different HTTP verbs (GET, POST, etc.).
 * We will include real-world features like:
 * 1. Constructor to initialize the token.
 * 2. Encapsulation to hide the token.
 * 3. Abstraction of HTTP methods for easy usage.
 * 4. Inheritance and Polymorphism for extending the class if needed.
 * 5. Exporting an instance directly for use in a ReactJS app.
 */


/**
 * Key Comment Additions
Class-level Documentation:

Describes the purpose of the Network class (making HTTP requests and managing tokens).
Private Fields (#accessToken, #refreshToken, #tokenExpiryTime):

Detailed comments describing the role of each private field.
 * Methods:

Each method (e.g., get, post, setTokens, etc.) includes:
A brief description of what the method does.
Descriptions for all parameters (url, data, etc.).
The return type (e.g., Promise<any>), which specifies what the method returns.
Private Methods:

Methods like #isTokenExpired(), #refreshAccessToken(), #ensureValidToken()
include detailed comments explaining the logic behind checking the token and refreshing it.
Error Handling:

Where appropriate, I've added notes about errors thrown, so a developer knows to handle them when calling these methods.
 */
 
/**
 * Final Thoughts:
With these comments, the code is much more readable and easy to understand.
The JSDoc-style comments also make it easier to generate documentation automatically if needed.
 */

/**
 * Class representing a network utility for making HTTP requests.
 * Handles JWT token management, including access token expiration and refresh.
 */
class Network {
    /**
     * @private
     * @type {string | null} Stores the access token (JWT) used for authorization.
     */
    #accessToken = null;

    /**
     * @private
     * @type {string | null} Stores the refresh token used to request a new access token.
     */
    #refreshToken = null;

    /**
     * @private
     * @type {number | null} Stores the expiration timestamp of the current access token.
     */
    #tokenExpiryTime = null;

    /**
     * Creates a Network instance.
     * @param {string | null} [accessToken=null] - Initial access token.
     * @param {string | null} [refreshToken=null] - Initial refresh token.
     */
    constructor(accessToken = null, refreshToken = null) {
        this.#accessToken = accessToken;
        this.#refreshToken = refreshToken;
        this.#tokenExpiryTime = null; // Token expiry time will be set when tokens are received.
    }

    /**
     * Sets the access token, refresh token, and the expiry time.
     * @param {Object} tokens - Token details.
     * @param {string} tokens.accessToken - JWT access token.
     * @param {string} tokens.refreshToken - Refresh token used to get a new access token.
     * @param {number} tokens.expiresIn - Time (in seconds) until the access token expires.
     */
    setTokens({ accessToken, refreshToken, expiresIn }) {
        this.#accessToken = accessToken;
        this.#refreshToken = refreshToken;
        // Set the expiration time based on current time and expiresIn seconds.
        this.#tokenExpiryTime = Date.now() + expiresIn * 1000;
    }

    /**
     * @private
     * Checks whether the access token has expired.
     * @returns {boolean} True if the token has expired, false otherwise.
     */
    #isTokenExpired() {
        return Date.now() > this.#tokenExpiryTime;
    }

    /**
     * @private
     * Refreshes the access token using the refresh token.
     * Makes a request to the token refresh endpoint.
     * @returns {Promise<boolean>} Resolves true if token is refreshed successfully, otherwise throws an error.
     */
    async #refreshAccessToken() {
        try {
            const response = await fetch('https://api.example.com/auth/refresh', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    refreshToken: this.#refreshToken
                })
            });

            if (response.ok) {
                const data = await response.json();
                // Update tokens and expiry time with the new values from the server.
                this.setTokens({
                    accessToken: data.accessToken,
                    refreshToken: data.refreshToken, // Refresh token may also be refreshed.
                    expiresIn: data.expiresIn // Expiry time, typically 60 minutes (3600 seconds).
                });
                return true; // Token refreshed successfully.
            } else {
                throw new Error('Failed to refresh access token');
            }
        } catch (error) {
            console.error('Token refresh error:', error);
            throw error;
        }
    }

    /**
     * @private
     * Ensures that a valid access token is available before making any API request.
     * If the token has expired, it refreshes the token.
     * @returns {Promise<void>} Resolves once the token is valid or refreshed.
     */
    async #ensureValidToken() {
        if (this.#isTokenExpired()) {
            console.log('Access token expired, refreshing...');
            await this.#refreshAccessToken();
        }
    }

    /**
     * Makes a GET HTTP request to the specified URL.
     * @param {string} url - The URL to send the GET request to.
     * @returns {Promise<any>} The response data as a JSON object.
     */
    async get(url) {
        await this.#ensureValidToken();
        return this.#fetch(url, 'GET');
    }

    /**
     * Makes a POST HTTP request to the specified URL with provided data.
     * @param {string} url - The URL to send the POST request to.
     * @param {Object} data - The data to send in the POST request body.
     * @returns {Promise<any>} The response data as a JSON object.
     */
    async post(url, data) {
        await this.#ensureValidToken();
        return this.#fetch(url, 'POST', data);
    }

    /**
     * Makes a PUT HTTP request to the specified URL with provided data.
     * @param {string} url - The URL to send the PUT request to.
     * @param {Object} data - The data to send in the PUT request body.
     * @returns {Promise<any>} The response data as a JSON object.
     */
    async put(url, data) {
        await this.#ensureValidToken();
        return this.#fetch(url, 'PUT', data);
    }

    /**
     * Makes a DELETE HTTP request to the specified URL.
     * @param {string} url - The URL to send the DELETE request to.
     * @returns {Promise<any>} The response data as a JSON object.
     */
    async delete(url) {
        await this.#ensureValidToken();
        return this.#fetch(url, 'DELETE');
    }

    /**
     * @private
     * A utility method for making HTTP requests.
     * Includes logic to set headers, including the Authorization header with the JWT.
     * @param {string} url - The URL to make the request to.
     * @param {string} method - The HTTP method (GET, POST, PUT, DELETE).
     * @param {Object | null} [data=null] - Optional data to send with the request.
     * @returns {Promise<any>} The parsed response data as a JSON object.
     */
    async #fetch(url, method, data = null) {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': this.#accessToken ? `Bearer ${this.#accessToken}` : undefined
        };

        const options = {
            method,
            headers,
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Network error:', error);
            throw error;
        }
    }
}

// Exporting a singleton instance to be used in a React app.
const networkInstance = new Network();
export default networkInstance;
