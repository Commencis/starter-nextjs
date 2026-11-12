import type { MetadataRoute } from 'next';

import { getPublicConfig } from '@/lib/config/getPublicConfig';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: getPublicConfig().siteUrl,
      lastModified: new Date(),
    },
  ];
}
