import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Checkout: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Checkout - BamBrush</title>
            </Head>
            <section className="min-h-screen bg-gray-100 py-10">
                <div className="container mx-auto p-8 bg-white rounded-2xl shadow-2xl max-w-3xl">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Order Summary */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
                            <div className="flex items-center justify-between border-b pb-4 mb-4">
                                <div className="flex items-center">
                                    <Image
                                        src="/5.png"
                                        alt="Bamboo Toothbrush"
                                        width={100}
                                        height={100}
                                        className="rounded-lg shadow-md"
                                    />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-700">Eco-friendly Bamboo
                                            Toothbrush</h3>
                                        <p className="text-sm text-gray-500">Quantity: 1</p>
                                    </div>
                                </div>
                                <div className="text-lg font-semibold text-gray-800">₹30.0</div>
                            </div>

                            <div className="flex justify-between text-lg font-semibold text-gray-800">
                                <p>Total</p>
                                <p>₹30.0</p>
                            </div>
                        </div>

                        {/* Payment and Shipping Information */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Shipping Information</h2>
                            <form className="space-y-6"> {/* Adjusted space between inputs */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-base" // Increased padding and text size
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-base"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        id="city"
                                        className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-base"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                        Postal Code
                                    </label>
                                    <input
                                        type="text"
                                        id="postal-code"
                                        className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-base"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                        Country
                                    </label>
                                    <input
                                        type="text"
                                        id="country"
                                        className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-base"
                                        required
                                    />
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Payment Button */}
                    <div className="mt-8">
                        <Link href="/confirm">
                            <span className="w-full inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-full shadow-lg text-center transition duration-300">
                                Complete Purchase
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Checkout;
