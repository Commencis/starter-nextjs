import 'server-only';

import { getPublicConfig, type PublicConfig } from './getPublicConfig';

type ServerConfig = PublicConfig & {
  baseUrl?: string;
  environmentId: string;
};

export function getServerConfig(): ServerConfig {
  const publicConfig = getPublicConfig();

  return {
    ...publicConfig,
    baseUrl: process.env.BASE_URL,
    environmentId: process.env.ENVIRONMENT_ID ?? 'local',
  };
}
