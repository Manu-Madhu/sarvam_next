// constants/seo.js
export const GLOBAL_METADATA = {
  authors: [{ name: "Sarvam Safety Team" }],
  publisher: "Sarvam Safety Equipment Private Limited",
  robots: { 
    index: true, 
    follow: true,
    googleBot: { index: true, follow: true }
  },
  metadataBase: new URL("https://www.sarvamsafety.com"),
  icons: {
    icon: "/assets/favicon.ico",
    apple: "/assets/apple-touch-icon.png",
  },
};