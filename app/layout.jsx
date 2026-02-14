import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TopBar from "@/components/layout/TopBar";
import { Toaster } from "react-hot-toast";
import { metadata } from "@/lib/metadata";
import { generateBusinessJsonLd } from "@/lib/jsonLd";

export { metadata };

export default function RootLayout({ children }) {
  const businessJsonLd = generateBusinessJsonLd(metadata.business);
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBusinessJsonLd(metadata.business)),
          }}
        />
      </head>
      <body className="font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
        <TopBar />
        <Navbar />
        {children}
        <Toaster position="top-right" />
        <Footer />
      </body>
    </html>
  );
}
