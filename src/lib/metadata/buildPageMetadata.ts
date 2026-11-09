import type { Metadata } from 'next';

import { BASE_PAGE_METADATA } from '@/constants/meta.constants';
import { getServerConfig } from '@/lib/config/getServerConfig';

type PageMetadataParams = {
  title?: string;
  description?: string;
};

export function buildPageMetadata({
  title = BASE_PAGE_METADATA.name,
  description = BASE_PAGE_METADATA.description,
}: PageMetadataParams = {}): Metadata {
  const baseUrl = getServerConfig().siteUrl;

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
    metadataBase: new URL(baseUrl),
  };
}
