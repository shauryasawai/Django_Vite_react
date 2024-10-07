import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function RegisterForm() {
    const history = useHistory();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Ensure all the required fields are included
        const response = await fetch('http://127.0.0.1:8000/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: formData.username,
                email: formData.email,
                password: formData.password,
                password2: formData.password2,
            }),
        });
    
        const data = await response.json();  // Log error messages to see the exact issue
    
        if (response.status === 201) {
            history.push('/thank-you');
        } else {
            console.error('Error:', data);  // Log the error to understand the problem
        }
    };    

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input
                    type="password"
                    name="password2"
                    value={formData.password2}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterForm;
