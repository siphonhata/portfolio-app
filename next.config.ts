import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },

  eslint: {
    // Disables ESLint during the build process
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
