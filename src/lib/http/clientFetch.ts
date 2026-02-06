import type { InternalApiPath } from '@/types/api.types';
import type { FetchOptions } from '@/types/http.types';

import { request } from './core/request';

type ClientFetchOptions = Omit<FetchOptions, 'path' | 'revalidate'> & {
  path: InternalApiPath;
};

export async function clientFetch<T = unknown>({
  baseUrl,
  path,
  method = 'GET',
  headers = {},
  body,
}: ClientFetchOptions): Promise<T> {
  const response = await request<T>({
    baseUrl,
    path,
    method,
    headers,
    body,
  });

  return response;
}
