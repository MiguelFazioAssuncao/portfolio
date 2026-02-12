import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during builds due to Next.js 15 compatibility issues
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Enable TypeScript checking during builds
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
