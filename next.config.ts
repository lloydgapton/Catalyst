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
  // Next.js 15: top-level optimizeCss flag (in addition to experimental for safety)
  optimizeCss: false,
  experimental: {
    // Also set here for older behavior if still read from experimental
    optimizeCss: false,
  },
};

export default nextConfig;
