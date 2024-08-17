import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bambrush",
  description: "The Sustainable Alternative to Plastic Toothbrushes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      <main className="pt-8">
          {children}
      </main>
      <Footer/>
      </body>
    </html>
  );
}
