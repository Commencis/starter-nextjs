import type { NextConfig } from 'next';

import bundleAnalyzer from '@next/bundle-analyzer';

const isAnalyzeEnabled = process.env.ANALYZE === 'true';

const baseConfig: NextConfig = {
  poweredByHeader: false,
  reactCompiler: true,
};

const withBundleAnalyzer = bundleAnalyzer({ enabled: isAnalyzeEnabled });

const nextConfig: NextConfig = isAnalyzeEnabled
  ? withBundleAnalyzer(baseConfig)
  : baseConfig;

export default nextConfig;
