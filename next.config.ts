import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import bundleAnalyzer from '@next/bundle-analyzer';

const i18nConfigPath = './src/lib/i18n/i18n.ts';
const isAnalyzeEnabled = process.env.ANALYZE === 'true';

const baseConfig: NextConfig = {
  poweredByHeader: false,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

const withNextIntl = createNextIntlPlugin({ requestConfig: i18nConfigPath });
const withBundleAnalyzer = bundleAnalyzer({ enabled: isAnalyzeEnabled });

const intlConfig = withNextIntl(baseConfig);

const nextConfig: NextConfig = isAnalyzeEnabled
  ? withBundleAnalyzer(intlConfig)
  : intlConfig;

export default nextConfig;
