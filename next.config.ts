import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/PoliAlerts",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
