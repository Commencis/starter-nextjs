import type { SeoMetadata } from '@/types/seo.types';

export const SEO_METADATA: SeoMetadata = {
  name: 'Commencis Starter Next.js',
  shortName: 'Starter',
  description: 'Commencis Next.js starter.',
  themeColor: '#ffffff',
  backgroundColor: '#ffffff',
} as const;

export const ROBOTS_DISALLOWED_PATHS: string[] = ['/api/'];
