import { getSeoData } from "@/service/api";

export async function buildSeoMetadata(page) {
  const seo = await getSeoData(page);
  const url = `https://www.sarvamsafety.com/${page === "home" ? "" : page}`;

  // update the for preview products
  const image = seo.img || '/assets/favicon.png'
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
      url: url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: seo.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [image]
    }
  };
}
