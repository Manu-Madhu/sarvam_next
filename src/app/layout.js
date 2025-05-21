import { Poppins, Teko } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Nav";
import Footer from "@/components/common/Footer";
import { getSeoData } from "@/utils/api";

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

export async function generateMetadata() {
  const seoData = await getSeoData("home");

  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: seoData.title,
      description: seoData.description
    }
  };
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.png" />
      </head>
      <body className={`${poppins.variable} ${teko.variable} font-poppins`}>
        {/* Footer part */}
        <div>
          <Navbar />
        </div>

        {/* Body content */}
        <section>
          {children}
        </section>

        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
