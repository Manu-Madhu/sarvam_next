import { API_BASE_URL } from "../utils/endPoints";

//----------- HOME START------------ //
// Banner
export async function getMainSlider() {
  const res = await fetch(`${API_BASE_URL}/website/open/read/getmainlsider`);
  if (!res.ok) {
    throw new Error("Failed to fetch slider data");
  }

  const data = await res.json();

  const processedData = data.response.data.map(item => ({
    ...item,
    bnr_banner: `${API_BASE_URL}/banner/${item.bnr_banner}`
  }));

  return processedData;
}

// Supplier
export async function getSupplier() {
  const res = await fetch(`${API_BASE_URL}/website/open/read/supplierdata`);
  if (!res.ok) {
    throw new Error("Failed to fetch supplier data");
  }

  const data = await res.json();

  return data?.response?.data;
}
//----------- HOME END------------ //


//----------- ABOUT START------------ //
// banner
export const getAboutBanner = async ()=> {

  try {
   const res =await fetch(`${API_BASE_URL}/website/open/read/getpagedatafacts/about`);

   const data = await res.json();
   return data?.response
  }catch(error){
    console.log(error)
  }

}
//----------- ABOUT END------------ //


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
      description: "As a well-renowned safety equipment supplier,",
      keywords: "Industrial Safety Products, construction safety products,"
    };
  }
}
//----------- SEO END------------ //
