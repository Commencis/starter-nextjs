import type { ApiPath } from '@/types/api.types';
import type { FetchOptions } from '@/types/http.types';
import { API_DEFAULT_CACHE_DURATION_SEC } from '@/constants/http.constants';

import { request } from './core/request';

type ServerFetchOptions = Omit<FetchOptions, 'path'> & {
  path: ApiPath;
};

export async function serverFetch<T = unknown>({
  baseUrl,
  path,
  method = 'GET',
  headers = {},
  revalidate = API_DEFAULT_CACHE_DURATION_SEC,
}: ServerFetchOptions): Promise<T> {
  const response = await request<T>({
    baseUrl,
    path,
    method,
    headers,
    revalidate,
  });

  return response;
}
