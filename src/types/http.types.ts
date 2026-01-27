export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type HttpHeader = Record<string, string>;

export type RequestBody =
  | string
  | Record<string, unknown>
  | FormData
  | URLSearchParams;

export type FetchOptions = {
  url: string;
  method?: HttpMethod;
  headers?: HttpHeader;
  body?: RequestBody;
  revalidate?: globalThis.NextFetchRequestConfig['revalidate'];
};
