import type { MetadataRoute } from 'next';

import { ROBOTS_DISALLOWED_PATHS } from '@/constants/meta.constants';
import { isProduction } from '@/utils/env.utils';
import { resolveBaseUrl } from '@/utils/url.server.utils';
import { constructUrl } from '@/utils/url.utils';

export default async function robots(): Promise<MetadataRoute.Robots> {
  if (isProduction()) {
    const baseUrl = await resolveBaseUrl();

    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ROBOTS_DISALLOWED_PATHS,
      },
      sitemap: constructUrl(baseUrl, 'sitemap.xml')?.toString(),
    };
  }

  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
  };
}
