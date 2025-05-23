import { getSeoData } from "@/service/api";

export async function buildSeoMetadata(page) {
  const seo = await getSeoData(page);
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: `https://www.sarvamsafety.com/${page === "home" ? "" : page}`
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
      url: `https://www.sarvamsafety.com/${page === "home" ? "" : page}`
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description
    }
  };
}
