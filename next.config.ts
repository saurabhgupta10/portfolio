import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "build_dist",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
