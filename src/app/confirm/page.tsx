import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Confirmation: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
            <Head>
                <title>Order Confirmation - BamBrush</title>
            </Head>

            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                <div className="flex flex-col items-center">
                    <Image
                        src="/checked.png" // Replace with your checkmark image
                        alt="Order Confirmed"
                        width={100}
                        height={100}
                        className="mb-6"
                    />
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Order Confirmed!</h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Thank you for your purchase! Your order has been successfully placed.
                    </p>
                    <p className="text-gray-600 mb-6">
                        You will receive an email confirmation shortly with your order details.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Link href="/">
                            <span className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg transition duration-300">
                                Back to Home
                            </span>
                        </Link>
                        <Link href="/shop">
                            <span className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full shadow-lg transition duration-300">
                                Continue Shopping
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Confirmation;
