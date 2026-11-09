import type { PageMetadata } from '@/types/meta.types';

export const BASE_PAGE_METADATA: PageMetadata = {
  name: 'Commencis Starter Next.js',
  shortName: 'Starter',
  description: 'Commencis Next.js starter.',
  themeColor: '#ffffff',
  backgroundColor: '#ffffff',
} as const;

export const ROBOTS_DISALLOWED_PATHS: string[] = ['/api/'];
