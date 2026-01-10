import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
  },
};

export default nextConfig;
