'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', formData);
            localStorage.setItem('token', response.data.token);
            router.push('/protected');
        } catch (error) {
            console.error('Login failed:', error.response.data.error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
            {/* Add form fields with Tailwind CSS styles here */}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">Login</button>
        </form>
    );
};

export default Login;
