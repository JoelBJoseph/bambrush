"use client";

import React from "react";

const LoadingPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col items-center">
                <svg
                    className="animate-spin h-12 w-12 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 0116 0h-4a4 4 0 00-8 0H4z"
                    />
                </svg>
                <p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
            </div>
        </div>
    );
};

export default LoadingPage;
