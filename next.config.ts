import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Help Next.js resolve the correct workspace root on CI (e.g., Vercel)
  // when multiple lockfiles exist on the machine.
  outputFileTracingRoot: path.resolve(__dirname),
  experimental: {
    // Disable Next.js Lightning CSS optimizer to avoid native binary on CI
    optimizeCss: false,
  },
};

export default nextConfig;
