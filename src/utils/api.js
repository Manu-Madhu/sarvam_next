const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.sarvamsafety.com";
const IMAGE_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.sarvamsafety.com";

// Home
export async function getMainSlider() {
  const res = await fetch(`${API_BASE_URL}/website/open/read/getmainlsider`);
  if (!res.ok) {
    throw new Error("Failed to fetch slider data");
  }

  const data = await res.json();


  console.log(data)
  const processedData = data.response.data.map(item => ({
    ...item,
    bnr_banner: `${IMAGE_BASE_URL}/banner/${item.bnr_banner}`
  }));

  return processedData;
}
