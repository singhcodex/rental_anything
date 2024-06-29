'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
        userType: 'Renter',
    });
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/register', formData);
            router.push('/auth/login');
        } catch (error) {
            console.error('Registration failed:', error.response.data.error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
        {/* Add form fields with Tailwind CSS styles here */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">Register</button>
        </form>
);
};

export default Register;
