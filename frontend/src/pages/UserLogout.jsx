import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage
    const navigate = useNavigate();

    useEffect(() => {
        // If token is null, redirect to login
        if (!token) {
            navigate('/login');
            return;
        }

        // Call the logout API
        axios
            .get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
                headers: {
                    Authorization: `Bearer ${token}`, // Send token in headers
                },
            })
            .then((res) => {
                if (res.status === 200) {
                    localStorage.removeItem('token'); // Remove token
                    navigate('/login'); // Redirect to login
                }
            })
            .catch((err) => {
                console.error(err); // Log the error
                localStorage.removeItem('token'); // Clear invalid token
                navigate('/login'); // Redirect user to login page
            });
    }, [token, navigate]); // Dependency array includes `token` and `navigate`

    return <div>Userlogout</div>;
};

export default UserLogout;
