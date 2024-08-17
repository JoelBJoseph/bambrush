import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    item: {
        title: string;
        url: string;
    };
}

const NavLink: React.FC<NavLinkProps> = ({ item }) => {
    const currentPath = usePathname();

    const isActive = (path: string) => {
        return currentPath === path;
    };

    return (
        <Link
            href={item.url}
            className={`text-gray-700 hover:text-gray-900 transition-colors duration-300 px-3 py-2 rounded-md ${
                isActive(item.url) ? 'bg-gray-200' : ''
            }`}
            aria-current={isActive(item.url) ? 'page' : undefined}
        >
            {item.title}
        </Link>
    );
};

export default NavLink;
