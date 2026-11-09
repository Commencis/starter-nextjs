import type { Viewport } from 'next';

import { BASE_PAGE_METADATA } from '@/constants/meta.constants';

export function buildPageViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: BASE_PAGE_METADATA.themeColor,
  };
}
