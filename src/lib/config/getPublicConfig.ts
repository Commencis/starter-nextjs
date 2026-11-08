import type { Environment } from '@/types/env.types';

export type PublicConfig = {
  appEnv: Environment;
  baseApiUrl?: string;
};

export function getPublicConfig(): PublicConfig {
  return {
    appEnv: (process.env.NEXT_PUBLIC_APP_ENV ?? 'development') as Environment,
    baseApiUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
  };
}
