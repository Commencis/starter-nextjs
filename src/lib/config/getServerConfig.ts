import 'server-only';

import { getPublicConfig, type PublicConfig } from './getPublicConfig';

type ServerConfig = PublicConfig & {};

export function getServerConfig(): ServerConfig {
  const publicConfig = getPublicConfig();

  return {
    ...publicConfig,
  };
}
