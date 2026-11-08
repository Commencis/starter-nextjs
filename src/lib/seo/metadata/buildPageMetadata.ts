import type { Metadata } from 'next';

import { SEO_METADATA } from '@/constants/seo.constants';
import { getServerConfig } from '@/lib/config/getServerConfig';

type PageMetadataParams = {
  title?: string;
  description?: string;
};

export function buildPageMetadata({
  title = SEO_METADATA.name,
  description = SEO_METADATA.description,
}: PageMetadataParams = {}): Metadata {
  const baseUrl = getServerConfig().baseUrl;

  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description,
    openGraph: {
      type: 'website',
      siteName: title,
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    metadataBase: baseUrl ? new URL(baseUrl) : undefined,
  };
}
