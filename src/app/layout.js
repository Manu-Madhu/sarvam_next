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
  title: "Sarvam Safety | Best Safety Equipment Supplier in India",
  description:
    "As a well-renowned safety equipment supplier, we offer a wide selection of safety equipment, industrial safety products, production consumables,etc. We are committed to providing the best safety tools and equipment for our consumers.",
  keywords:
    "Safety Equipment Supplier, safety product supplier, safety products online, Industrial Safety Products, construction safety products, PPE, industrial safety equipment, safety equipment near me, fire safety products, safety tools and equipment"
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
