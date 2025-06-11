import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/ai-for-lawyers-resources",
        destination: "https://github.com/cadamsdotcom/ai-for-lawyers-resources",
        permanent: true, // This will send a 301 redirect
      },
    ];
  }
};

export default nextConfig;
