import { HttpHeaderKey, HttpHeaderValue } from '@/types/http.types';

import packageJson from '../../../../package.json';

export type HealthResponse = {
  status: 'ok';
  version: string;
  buildNumber: number;
  timestamp: string;
};

export function GET(): Response {
  const body: HealthResponse = {
    status: 'ok',
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
