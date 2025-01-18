import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token'); // Retrieve the token
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to login if the token is not found
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]); // Run effect when token changes or navigate is updated

    // Only render children if token exists
    return token ? <>{children}</> : null;
};

export default UserProtectWrapper;
