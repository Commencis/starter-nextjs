import type { EnvVariables } from '@/schemas/env.schema';

import type { PublicConfig } from './getPublicConfig';

type PublicEnvVariables = Pick<
  EnvVariables,
  | 'NEXT_PUBLIC_ENVIRONMENT'
  | 'NEXT_PUBLIC_SITE_URL'
  | 'NEXT_PUBLIC_BASE_API_URL'
>;

export function mapEnvToPublicConfig(env: PublicEnvVariables): PublicConfig {
  return {
    environment: env.NEXT_PUBLIC_ENVIRONMENT,
    siteUrl: env.NEXT_PUBLIC_SITE_URL,
    baseApiUrl: env.NEXT_PUBLIC_BASE_API_URL,
  };
}
