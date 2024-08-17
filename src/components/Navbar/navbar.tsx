"use client";

import { useState } from "react";
import Link from "next/link";
import NavLink from "./navLink";
import Image from "next/image";

const links = [
    { title: "About", url: "/about" },
    { title: "Shop", url: "/shop" },
    { title: "Customize", url: "/customize" },
    { title: "Contact", url: "/contact" },
    { title: "Sign In", url: "/signin" },
];

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
            <div className="flex items-center justify-between p-4 md:p-6">
                <Link href="/" className="flex items-center text-2xl font-bold text-gray-900">
                    <Image src="/logo bambrush-VECTOR.png" width={49} height={55} alt="Logo" className="mr-2" />
                    BAMBRUSH
                </Link>
                <button
                    onClick={() => setOpen((prev) => !prev)}
                    className="block lg:hidden px-2 py-1 text-gray-700 hover:text-gray-900 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                <div className="hidden lg:flex lg:items-center lg:space-x-4">
                    <ul className="flex space-x-4">
                        {links.map((link) => (
                            <NavLink item={link} key={link.title} />
                        ))}
                    </ul>
                </div>
                {open && (
                    <div className="lg:hidden absolute top-full right-0 w-full bg-white border border-gray-200 shadow-lg">
                        <ul className="flex flex-col p-4 space-y-2">
                            {links.map((link) => (
                                <NavLink item={link} key={link.title} />
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
