import Head from 'next/head';
import Image from 'next/image';

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <Head>
                <title>About Us - BamBrush</title>
            </Head>

            <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-xl">
                <section className="mb-12 text-center">
                    <h1 className="text-5xl font-extrabold text-gray-800 mb-4">About BAMBRUSH</h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Welcome to BamBrush, your go-to brand for eco-friendly bamboo toothbrushes. Our mission is to
                        reduce plastic waste and promote sustainable living by providing high-quality bamboo
                        toothbrushes at affordable prices.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-4">Product Overview</h2>
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        <p className="text-lg text-gray-600 mb-6 md:mb-0">
                            BamBrush bamboo toothbrushes are made from 100% biodegradable bamboo. The bristles are soft
                            and gentle on your gums while providing effective cleaning. Perfect for those who are
                            environmentally conscious and want to reduce their carbon footprint.
                        </p>
                        <Image
                            src="/DSC01715.png"
                            alt="Bamboo Toothbrush"
                            width={400}
                            height={300}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-4">Features</h2>
                    <ul className="list-disc list-inside text-lg text-gray-600 space-y-4">
                        <li>Eco-friendly and biodegradable</li>
                        <li>Soft bristles for gentle cleaning</li>
                        <li>Ergonomically designed handle</li>
                        <li>Durable and long-lasting</li>
                        <li>Available in multiple colors</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-4">BamBrush Cycle</h2>
                    <div className="flex justify-center">
                        <Image
                            src="/1.png"
                            alt="BamBrush Cycle"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-4">Our Target Audience</h2>
                    <p className="text-lg text-gray-600">
                        Our target audience ranges from large hotel chains striving to reduce their carbon footprint, to
                        eco-retreats and holiday parks seeking sustainable solutions, and even local dentists and shops
                        looking to improve their sustainability practices. We believe that by offering affordable,
                        eco-friendly options, we can empower businesses to join us in our fight against plastic
                        pollution.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-4">Our Values</h2>
                    <p className="text-lg text-gray-600">
                        Our values of honesty, education, quality, and affordability guide every decision we make as a
                        company. We pride ourselves on being transparent with our customers, providing them with the
                        knowledge and tools they need to make informed choices for their businesses and the environment.
                    </p>
                </section>

                <section>
                    <h2 className="text-4xl font-semibold text-gray-800 mb-4">Our Vision</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Our vision is to continue sourcing and creating sustainable solutions for everyday life, working
                        towards a world where future generations and wildlife can thrive without the looming threat of
                        plastic pollution. With your support, we can make our vision a reality.
                    </p>
                    <p className="text-lg text-gray-600">
                        Join us at BamBrush as we strive to create a greener future. Together, we can make a lasting
                        impact on our planet and leave a positive legacy for generations to come.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default About;