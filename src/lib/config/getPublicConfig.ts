import type { Environment } from '@/types/env.types';

import { mapEnvToPublicConfig } from './config.mappers';

export type PublicConfig = {
  environment: Environment;
  siteUrl: string;
  baseApiUrl?: string;
};

export function getPublicConfig(): PublicConfig {
  return mapEnvToPublicConfig({
    NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT as Environment,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_BASE_API_URL: process.env.NEXT_PUBLIC_BASE_API_URL,
  });
}
