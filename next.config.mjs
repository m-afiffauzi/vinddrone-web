/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

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

export default withVideos({
  ...nextConfig,
});
