/** @type {import('next').NextConfig} */
const nextConfig = {
  output:"standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.sarvamsafety.com"
      }
    ]
  }
};

export default nextConfig;
