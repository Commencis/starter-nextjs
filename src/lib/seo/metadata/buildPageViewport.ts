import type { Viewport } from 'next';

import { SEO_METADATA } from '@/constants/seo.constants';

export function buildPageViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: SEO_METADATA.themeColor,
  };
}
