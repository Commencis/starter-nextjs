import type { InternalApiPath } from '@/types';
import type { FetchOptions } from '@/types/http.types';
import { makeRequest } from '@/lib/http/makeRequest';

type ClientFetchOptions = {
  path: InternalApiPath;
} & Omit<FetchOptions, 'path' | 'revalidate'>;

export async function clientFetch<T = unknown>({
  baseUrl,
  path,
  method = 'GET',
  headers = {},
  body,
}: ClientFetchOptions): Promise<T> {
  const response = await makeRequest<T>({
    baseUrl,
    path,
    method,
    headers,
    body,
  });

  return response;
}
