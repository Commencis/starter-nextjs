import type { ApiPath } from '@/types';
import type { FetchOptions } from '@/types/http.types';
import { API_DEFAULT_CACHE_DURATION_SEC } from '@/constants/http.constants';
import { makeRequest } from '@/lib/http/makeRequest';

type ServerFetchOptions = {
  path: ApiPath;
} & Omit<FetchOptions, 'path'>;

export async function serverFetch<T = unknown>({
  baseUrl,
  path,
  method = 'GET',
  headers = {},
  revalidate = API_DEFAULT_CACHE_DURATION_SEC,
}: ServerFetchOptions): Promise<T> {
  const response = await makeRequest<T>({
    baseUrl,
    path,
    method,
    headers,
    revalidate,
  });

  return response;
}
