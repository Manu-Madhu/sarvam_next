const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.sarvamsafety.com";
const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.sarvamsafety.com";

//----------- HOME START------------ //
export async function getMainSlider() {
  const res = await fetch(`${API_BASE_URL}/website/open/read/getmainlsider`);
  if (!res.ok) {
    throw new Error("Failed to fetch slider data");
  }

  const data = await res.json();

  console.log(data);
  const processedData = data.response.data.map(item => ({
    ...item,
    bnr_banner: `${IMAGE_BASE_URL}/banner/${item.bnr_banner}`
  }));

  return processedData;
}
//----------- HOME END------------ //


//----------- SEO START------------ //
export async function getSeoData(page = "home") {
  try {
    const res = await fetch(
      `${API_BASE_URL}/website/open/read/getseodata/${page}`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    if (!data.success) {
      throw new Error("API response not successful");
    }

    return {
      title: data.response.seo_title,
      description: data.response.seo_description.trim(),
      keywords: data.response.seo_keywords.trim()
    };
  } catch (error) {
    console.error("Error fetching SEO data:", error);
    // Return default values
    return {
      title: `Sarvam Safety | ${page.charAt(0).toUpperCase() + page.slice(1)}`,
      description:
        "As a well-renowned safety equipment supplier, we offer a wide selection of safety equipment, industrial safety products, production consumables,etc. We are committed to providing the best safety tools and equipment for our consumers.",
      keywords:
        "Safety Equipment Supplier, safety product supplier, safety products online, Industrial Safety Products, construction safety products, PPE, industrial safety equipment, safety equipment near me, fire safety products, safety tools and equipment"
    };
  }
}
//----------- SEO END------------ //