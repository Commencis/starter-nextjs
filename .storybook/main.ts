import path from 'node:path';

import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  core: { disableTelemetry: true },
  framework: '@storybook/nextjs-vite',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],

  viteFinal: async (viteConfig) => {
    viteConfig.resolve ??= {};
    viteConfig.resolve.alias = {
      ...viteConfig.resolve.alias,
      '@': path.join(import.meta.dirname, '../src'),
    };
    return viteConfig;
  },
};

export default config;
