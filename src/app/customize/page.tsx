import Head from 'next/head';
import Link from 'next/link';

const PageInProgress: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 py-10 px-4">
            <Head>
                <title>Page in Progress - BamBrush</title>
            </Head>
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Page in Progress</h1>
                <p className="text-lg mb-6">
                    Sorry, this page is currently under development. Please check back later.
                </p>
                <Link href="/">
                    <span className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg transition duration-300">
                        Return to Homepage
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default PageInProgress;
