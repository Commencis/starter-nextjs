import type { NextConfig } from 'next';

import { validateEnvironment } from './scripts/env/validateEnvironment';

const noIndexHeader = {
  key: 'X-Robots-Tag',
  value: 'noindex, nofollow, noarchive',
};

const appConfig: NextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  reactCompiler: true,
  typedRoutes: true,
  agentRules: false,
  images: {
    deviceSizes: [768, 1024, 1280],
  },

  async headers() {
    return [{ source: '/api/:path*', headers: [noIndexHeader] }];
  },
};

export default function nextConfig(): NextConfig {
  validateEnvironment();

  return appConfig;
}
