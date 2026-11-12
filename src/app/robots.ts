import type { MetadataRoute } from 'next';

import { ROBOTS_DISALLOWED_PATHS } from '@/constants/meta.constants';
import { isProduction } from '@/utils/env.utils';
import { constructUrl } from '@/utils/url.utils';
import { getPublicConfig } from '@/lib/config/getPublicConfig';

export default async function robots(): Promise<MetadataRoute.Robots> {
  if (isProduction()) {
    const siteUrl = getPublicConfig().siteUrl;

    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ROBOTS_DISALLOWED_PATHS,
      },
      sitemap: constructUrl(siteUrl, 'sitemap.xml')?.toString(),
    };
  }

  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
  };
}
