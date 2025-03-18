import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during production build
  },
};

export default nextConfig;
