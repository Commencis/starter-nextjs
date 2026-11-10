import { HttpHeaderKey, HttpHeaderValue } from '@/types/http.types';
import { getServerConfig } from '@/lib/config/getServerConfig';

import packageJson from '../../../../package.json';

export type HealthResponse = {
  status: 'ok';
  environment: string;
  version: string;
  buildNumber: number;
  timestamp: string;
};

export function GET(): Response {
  const body: HealthResponse = {
    status: 'ok',
    version: packageJson.version,
    buildNumber: packageJson.buildNumber,
    environment: getServerConfig().environment,
    timestamp: new Date().toISOString(),
  };

  return Response.json(body, {
    headers: {
      [HttpHeaderKey.CacheControl]: HttpHeaderValue.NoStore,
    },
  });
}
