import type { MetadataRoute } from 'next';

import { ROBOTS_DISALLOWED_PATHS } from '@/constants/seo.constants';
import { isProduction } from '@/utils/env.utils';
import { resolveBaseUrl } from '@/utils/url.server.utils';

export default async function robots(): Promise<MetadataRoute.Robots> {
  if (isProduction()) {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ROBOTS_DISALLOWED_PATHS,
      },
      sitemap: `${await resolveBaseUrl()}/sitemap.xml`,
    };
  }

  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
  };
}
