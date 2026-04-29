import type { NextConfig } from 'next';

const noIndexHeader = {
  key: 'X-Robots-Tag',
  value: 'noindex, nofollow, noarchive',
};

const nextConfig: NextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  reactCompiler: true,
  typedRoutes: true,
  images: {
    deviceSizes: [768, 1024, 1280],
  },

  async headers() {
    return [{ source: '/api/:path*', headers: [noIndexHeader] }];
  },
};

export default nextConfig;
