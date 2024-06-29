// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";

function Hero() {
  return (
      <section className="hero">
        <div className="container">
          <h1>Welcome to Bambrush</h1>
          <h3>Introducing Bamboo Toothbrush - The Sustainable Alternative to Plastic Toothbrushes</h3>
          <button>
              <Link href="/">
                  Learn More
              </Link>
          </button>
        </div>
      </section>
  );
}

function ProductShowcase() {
  return (
      <section className="product-showcase">
          <div className="heading">
              <h1>Shop🛒</h1><Link href={"/shop"}>More→</Link>
          </div>
        <div className="container">
          {/* Add product images and animation here */}
          <Image src="/pexels-karolina-grabowska-4202480.jpg" alt="Product Image 1" width={400} height={600} />
          {/* Add animation effect here */}
        </div>
      </section>
  );
}

function Features() {
  return (
      <section className="features">
          <div className="content-reverse">
              <div className="text-only-container">
                  <h2>Who We Are and What We Do</h2>
                  <p>
                      At BamBrush, we are dedicated to providing eco-friendly products to businesses all over the world. Our mission is to
                      reduce plastic waste and save the environment for future generations. We source the best bamboo from rural Vietnam
                      farms to keep our prices low and affordable to businesses. Our goal is to change the attitude of how businesses buy
                      plastic products and educate them on sustainable alternatives.
                  </p>
              </div>
          </div>

          <div className="container">
              <div className="content">
                  <div className="image-container">
                      <Image src="/pexels-mikhail-nilov-7814566.jpg" alt="picture1" width={450} height={500}/>
                  </div>
                  <div className="text-container">
                      <h2>The Plastic Pollution Problem</h2>
                      <p>
                          Plastic pollution is one of the biggest environmental problems we face today. Over 264 million
                          plastic toothbrushes are thrown away each year in the UK alone, contributing to the problem.
                          This plastic waste harms wildlife and the environment. Businesses need to take responsibility
                          and choose sustainable alternatives to help solve this problem.
                      </p>
                  </div>
              </div>

              <div className="content">
                  <div className="image-container">
                      <Image src="/pexels-mikhail-nilov-7814625.jpg" alt="picture1" width={450} height={500}/>
                  </div>
                  <div className="text-container">
                      <h2>Bamboo Toothbrush - The Sustainable Solution</h2>
                      <p>
                          Bamboo Toothbrush offers an affordable and sustainable solution to the
                          plastic pollution problem. Our toothbrushes are made from bamboo, a
                          renewable and biodegradable material. By choosing our bamboo
                          toothbrushes, businesses can reduce their carbon footprint and help
                          eliminate plastic waste.
                      </p>
                  </div>
              </div>
          </div>

      </section>
  );
}

function CallToAction() {
    return (
        <section className="cta">
            <div className="container">
                <h2>Get Your BamBrush Today!</h2>
                <button>
                    <Link href={"/shop"}>
                        Buy Now
                    </Link>
                </button>
            </div>
        </section>
    );
}

export default function Home() {
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
