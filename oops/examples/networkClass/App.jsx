import React, { useEffect, useState } from 'react';
import networkInstance from './network'; // Import the singleton instance

const MyComponent = () => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        // Set tokens (accessToken, refreshToken, and expiration)
        networkInstance.setTokens({
            accessToken: 'your-jwt-access-token-here',
            refreshToken: 'your-refresh-token-here',
            expiresIn: 3600 // Token expires in 60 minutes
        });

        // Make a GET request
        networkInstance.get('https://api.example.com/data')
            .then(responseData => setData(responseData))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Data from API</h1>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
        </div>
    );
};

export default MyComponent;
