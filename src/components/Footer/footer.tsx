import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-10">
            <div className="max-w-6xl mx-auto px-6">
                {/* Social Media Links */}
                <div className="flex justify-center mb-6">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110 mx-4">
                        <Image src="/facebook.png" alt="Facebook" width={30} height={30} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110 mx-4">
                        <Image src="/instagram.png" alt="Instagram" width={30} height={30} />
                    </a>
                </div>

                {/* Quick Links */}
                <div className="flex justify-center space-x-8 mb-6">
                    <Link href="/about">
                        <span className="hover:underline text-lg font-semibold transition-colors duration-300 hover:text-yellow-300">About Us</span>
                    </Link>
                    <Link href="/shop">
                        <span className="hover:underline text-lg font-semibold transition-colors duration-300 hover:text-yellow-300">Shop</span>
                    </Link>
                    <Link href="/customize">
                        <span className="hover:underline text-lg font-semibold transition-colors duration-300 hover:text-yellow-300">Customize</span>
                    </Link>
                    <Link href="/contact">
                        <span className="hover:underline text-lg font-semibold transition-colors duration-300 hover:text-yellow-300">Contact</span>
                    </Link>
                </div>

                <div className="text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} BamBrush. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
