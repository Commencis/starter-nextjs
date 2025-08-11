import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import bundleAnalyzer from '@next/bundle-analyzer';

const withNextIntl = createNextIntlPlugin({
  requestConfig: './src/lib/i18n/i18n.ts',
});

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

let nextConfig: NextConfig = {
  poweredByHeader: false,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  sassOptions: {
    additionalData: '@use "@/styles/globals" as *;',
  },
};

nextConfig = withNextIntl(nextConfig);
nextConfig = withBundleAnalyzer(nextConfig);

export default nextConfig;
