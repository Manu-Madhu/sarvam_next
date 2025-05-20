import { Poppins, Teko } from "next/font/google";
import "./globals.css";
import SEO from "@/components/seo";
import Navbar from "@/components/common/Nav";
import Footer from "@/components/common/Footer";

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

export const metadata = {
  title: "Default Title | Your Store",
  description: "Default description for your store",
  keywords: "default, keywords, here"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
