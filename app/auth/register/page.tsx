'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

const Register = () => {

    const [error, setError] = useState('');

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
        if(!formData.username || !formData.email || !formData.password || !formData.phoneNumber){
            setError("All Fields are required");
            return;
        }
        try {
            const res = await fetch('/api/register', {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({formData})
            });
            router.push('/auth/login');
        } catch (error) {
            console.error('Registration failed:', error.response.data.error);
        }
    };

    return (
        <div className="container mx-auto py-3 px-5">


            <div className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <form className="">
                    <h2 className="h2 text-center">Register with Us.</h2>
                    <p className="text-lg text-center mt-4">We are so happy to for you to be a member of <span className="text-accent underline">our Community</span>.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="fullName" className="text-lg">FullName</Label>
                            <Input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter Full Name"/>
                        </div>
                        <div>
                            <Label htmlFor="username" className="text-lg">Username</Label>
                            <Input type="text" id="username" name="username" value={formData.username} onChange={handleChange} placeholder="Enter username"/>
                        </div>
                        <div>
                            <Label htmlFor="email" className="text-lg">Email</Label>
                            <Input type="text" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email"/>
                        </div>
                        <div>
                            <Label htmlFor="contact" className="text-lg">Contact</Label>
                            <Input type="number" id="contact" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Enter Contact number"/>
                        </div>
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="password" className="text-lg">Password</Label>
                        <Input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Password"/>
                    </div>
                    <div className="mt-4">
                        <Label className="text-lg">Select your Role</Label>
                        <Select value={formData.userType} name="userType" onChange={handleChange}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a Role"></SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select a Role</SelectLabel>
                                    <SelectItem value="renter">
                                        Renter
                                    </SelectItem>
                                    <SelectItem value="owner">Owner</SelectItem>

                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>


                    <div className="mt-4">
                        <Label htmlFor="address" className="text-lg">Address</Label>
                        <Input type="text" id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Enter address"/>
                    </div>
                    <Button type="Submit" className="text-xl bg-accent rounded-lg my-3">Register</Button>
                </form>
            </div>
        </div>
    );
};

export default Register;
