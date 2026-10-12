import type { ApiPath, InternalApiPath } from '@/types/api.types';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export const enum HttpHeaderKey {
  CacheControl = 'Cache-Control',
  ContentType = 'Content-Type',
}

export const enum HttpHeaderValue {
  ApplicationJson = 'application/json',
  NoStore = 'no-store',
}

export type HttpHeader = Partial<
  Record<HttpHeaderKey, HttpHeaderValue | string>
>;

export type RequestBody =
  string | Record<string, unknown> | FormData | URLSearchParams;

export type FetchOptions = {
  baseUrl: string;
  path: ApiPath | InternalApiPath;
  method?: HttpMethod;
  headers?: HttpHeader;
  body?: RequestBody;
  timeoutMs?: number;
  revalidate?: NextFetchRequestConfig['revalidate'];
  cache?: RequestCache;
};
