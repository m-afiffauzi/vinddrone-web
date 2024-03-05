/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://ogcdn.net",
      },
      {
        protocol: "https",
        hostname: "https://images.unsplash.com/",
      },
    ],
  },
};

export default nextConfig;
