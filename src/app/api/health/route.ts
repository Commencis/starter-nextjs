import { HttpHeaderKey, HttpHeaderValue } from '@/types/http.types';
import { getServerConfig } from '@/lib/config/getServerConfig';

import packageJson from '../../../../package.json';

export type HealthResponse = {
  status: 'ok';
  environmentId: string;
  version: string;
  buildNumber: number;
  timestamp: string;
};

export function GET(): Response {
  const body: HealthResponse = {
    status: 'ok',
    environmentId: getServerConfig().environmentId,
    version: packageJson.version,
    buildNumber: packageJson.buildNumber,
    timestamp: new Date().toISOString(),
  };

  return Response.json(body, {
    headers: {
      [HttpHeaderKey.CacheControl]: HttpHeaderValue.NoStore,
    },
  });
}
