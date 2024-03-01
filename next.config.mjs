/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cmgventures.com",
      },
      {
        protocol: "https",
        hostname: "d15shllkswkct0.cloudfront.net",
      },
    ],
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...nextConfig,
  ...withVideos(),
};
