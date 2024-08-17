import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const BuyNow: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Buy Now - BamBrush</title>
            </Head>
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 to-blue-200 py-10">
                <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-5xl w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="flex justify-center items-center">
                            <Image
                                src="/5.png"
                                alt="Bamboo Toothbrush"
                                width={600}
                                height={400}
                                className="rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Eco-friendly Bamboo Toothbrush</h1>
                            <p className="text-lg text-gray-700 mb-6">
                                Join the movement towards a sustainable future with our eco-friendly bamboo toothbrush. Made from natural bamboo, it&apos;s the perfect alternative to plastic toothbrushes.
                            </p>
                            <div className="text-3xl font-semibold text-green-600 mb-6">
                                ₹70.0
                            </div>
                            <Link href="/checkout">
                                <span className="inline-block px-10 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-lg transition duration-300 text-center cursor-pointer">
                                    Buy Now
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BuyNow;
