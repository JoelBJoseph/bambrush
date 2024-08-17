import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";

const Hero: React.FC = () => {
    return (
        <section className="hero bg-gradient-to-r from-green-400 to-blue-500 text-white py-20">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl font-extrabold drop-shadow-lg">BAMBRUSH</h1>
                <h3 className="text-2xl mt-4 drop-shadow-md">Introducing Bamboo Toothbrush - The Sustainable Alternative to Plastic Toothbrushes</h3>
                <button className="mt-8 px-6 py-3 bg-white hover:bg-yellow-500 text-black font-semibold rounded-full shadow-lg transition duration-300">
                    <Link href={"/about"}>Learn More</Link></button>
            </div>
        </section>
    );
}

const ProductShowcase: React.FC = () => {
    return (
        <section className="product-showcase py-20 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-800">Shop Now 🛒</h1>
                    <p className="mt-4 text-gray-600">Grab your eco-friendly bamboo toothbrush before it’s gone!</p>
                </div>
                <div className="flex justify-center">
                    <div className="max-w-sm">
                        <Image src="/DSC01924.png" alt="Bamboo Toothbrush" width={500} height={800} className="rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300" />
                        <div className="text-center mt-6">
                            <Link href="/shop">
                                <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg transition duration-300">Buy Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Features: React.FC = () => {
    return (
        <section className="features bg-gray-100 py-20">
            <div className="container mx-auto space-y-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">Who We Are and What We Do</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            At BamBrush, we are dedicated to providing eco-friendly products to businesses all over the world. Our mission is to reduce plastic waste and save the environment for future generations. We source the best bamboo from rural Vietnam farms to keep our prices low and affordable to businesses. Our goal is to change the attitude of how businesses buy plastic products and educate them on sustainable alternatives.
                        </p>
                    </div>
                    <div className="lg:order-first">
                        <Image
                            src="/DSC01843.png" alt="Our Mission"
                            width={650}
                            height={400}
                            className="rounded-xl shadow-xl"
                        />

                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">The Plastic Pollution Problem</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Plastic pollution is one of the biggest environmental problems we face today. Over 264 million plastic toothbrushes are thrown away each year in the UK alone, contributing to the problem. This plastic waste harms wildlife and the environment. Businesses need to take responsibility and choose sustainable alternatives to help solve this problem.
                        </p>
                    </div>
                    <div>
                        <Image src="/DSC01711.png" alt="Plastic Pollution" width={650} height={400} className="rounded-xl shadow-xl" />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">Bamboo Toothbrush - The Sustainable Solution</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Bamboo Toothbrush offers an affordable and sustainable solution to the plastic pollution problem. Our toothbrushes are made from bamboo, a renewable and biodegradable material. By choosing our bamboo toothbrushes, businesses can reduce their carbon footprint and help eliminate plastic waste.
                        </p>
                    </div>
                    <div className="lg:order-first">
                        <Image src="/DSC01636.png" alt="Bamboo Toothbrush" width={650} height={400} className="rounded-xl shadow-xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}

const CallToAction: React.FC = () => {
    return (
        <section className="cta bg-gradient-to-r from-green-500 to-teal-500 py-20 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Get Your BamBrush Today!</h2>
                <p className="text-xl mb-8">Join the movement towards a sustainable future.</p>
                <button
                    className="px-8 py-4 bg-white hover:bg-yellow-500 text-black font-semibold rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                    <Link href="/shop">Buy Now</Link>
                </button>
            </div>
        </section>

    );
}

const Home: React.FC = () => {
    return (
        <div>
            <Head>
                <title>BamBrush</title>
            </Head>
            <Hero/>
            <ProductShowcase/>
            <Features/>
            <CallToAction/>
        </div>
    );
}

export default Home;
