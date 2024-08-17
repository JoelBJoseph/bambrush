"use client";

import Head from 'next/head';
import { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here, you would typically handle form submission
        setFormStatus('Thank you for reaching out! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
            <Head>
                <title>Contact Us - BamBrush</title>
            </Head>
            <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
                <p className="text-lg text-gray-600 mb-6">
                    If you have any questions or need further information, please feel free to reach out to us using the form below.
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
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="mt-1 block w-full pt-4 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="mt-1 block w-full pt-3 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg transition duration-300"
                    >
                        Send Message
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

export default Contact;
