"use client";

import Head from 'next/head';
import { useState } from 'react';

const SignUp: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [formStatus, setFormStatus] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here, you would typically handle form submission
        if (formData.password !== formData.confirmPassword) {
            setFormStatus('Passwords do not match.');
            return;
        }
        setFormStatus('Successfully signed up.');
        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
            <Head>
                <title>Sign Up - BamBrush</title>
            </Head>
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Sign Up</h1>
                <p className="text-lg text-gray-600 mb-6">
                    Create an account by filling out the form below.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full pt-4 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full pt-4 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="mt-1 block w-full pt-4 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="mt-1 block w-full pt-4 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
                {formStatus && (
                    <div className="mt-4 p-4 bg-green-50 text-green-700 border border-green-200 rounded-md">
                        {formStatus}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SignUp;
