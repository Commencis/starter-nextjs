import type { MetadataRoute } from 'next';

import { resolveBaseUrl } from '@/utils/url.server.utils';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: await resolveBaseUrl(),
      lastModified: new Date(),
    },
  ];
}
