import 'server-only';

import { trimTrailingSlash } from '@/utils/url.utils';

export type HeaderGetter = {
  get(name: string): string | null;
};

export type HeadersLoader = () => Promise<HeaderGetter>;

/**
 * Absolute site origin for sitemaps, redirects, etc.
 * Uses `BASE_URL` when set (canonical). Otherwise `await getHeaders()` — pass
 */
export async function resolveBaseUrl(
  getHeaders: HeadersLoader
): Promise<string> {
  const baseUrlFromEnv = process.env.BASE_URL;
  if (baseUrlFromEnv) {
    return trimTrailingSlash(baseUrlFromEnv);
  }

  const headerList = await getHeaders();

  const host =
    headerList.get('x-forwarded-host')?.trim() ?? headerList.get('host');

  if (host) {
    const proto = headerList.get('x-forwarded-proto')?.trim() ?? 'https';
    return trimTrailingSlash(`${proto}://${host}`);
  }

  return 'http://localhost:3000';
}
