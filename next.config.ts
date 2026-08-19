import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bombasbombinhas.com.br",
      },
      {
        protocol: "https",
        hostname: "www.bombasbombinhas.com.br",
      },
      {
        protocol: "http",
        hostname: "bombasbombinhas.com.br",
      },
      {
        protocol: "http",
        hostname: "www.bombasbombinhas.com.br",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      }
    ],
  },
};

export default nextConfig;
