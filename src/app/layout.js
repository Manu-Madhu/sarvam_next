import { Poppins, Teko } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Nav";
import Footer from "@/components/common/Footer";
import { getSeoData } from "@/service/api";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
});

const teko = Teko({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-teko"
});

// Global metadata defaults
const GLOBAL_METADATA = {
  authors: [{ name: "Sarvam Safety Team" }],
  publisher: "Sarvam Safety Equipment Private Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },
  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/apple-touch-icon.png",
  },
};

export async function generateMetadata() {
  const seoData = await getSeoData("home");

  return {
    ...GLOBAL_METADATA, // Spread global defaults first
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    alternates: {
      canonical: "https://www.sarvamsafety.com/"
    },
    openGraph: {
      ...GLOBAL_METADATA.openGraph, // Spread OG defaults if any
      title: seoData.title,
      description: seoData.description,
      type: "website",
      url: "https://www.sarvamsafety.com/",
    },
    twitter: {
      card: "summary_large_image",
      title: seoData.title,
      description: seoData.description,
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Only non-metadata tags should be here */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Preloads, scripts, etc. can stay */}
      </head>
      <body className={`${poppins.variable} ${teko.variable} font-poppins`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}