import type { FetchOptions, HttpMethod, RequestBody } from '@/types/http.types';
import { HttpStatusCode } from '@/types/api.types';
import {
  API_DEFAULT_REQUEST_TIMEOUT_MS,
  DEFAULT_HEADERS,
} from '@/constants/http.constants';

function prepareRequestBody(
  body?: RequestBody,
  method?: HttpMethod
): BodyInit | null | undefined {
  if (!body || method === 'GET') {
    return undefined;
  }

  if (typeof body === 'object') {
    return JSON.stringify(body);
  }

  return body;
}

function buildUrl(path: string, baseUrl?: string): URL {
  const serviceURL = new URL(path, baseUrl);

  return serviceURL;
}

export async function request<T = unknown>({
  baseUrl,
  path,
  method = 'GET',
  headers = {},
  body,
  timeoutMs,
  revalidate,
  cache,
}: FetchOptions): Promise<T> {
  try {
    const shouldIncludeRevalidate =
      typeof window === 'undefined' && typeof revalidate !== 'undefined';

    const config: RequestInit = {
      method,
      headers: {
        ...DEFAULT_HEADERS,
        ...headers,
      },
      body: prepareRequestBody(body, method),

      cache,
      ...(shouldIncludeRevalidate && {
        next: {
          revalidate,
        },
      }),

      signal: AbortSignal.timeout(timeoutMs ?? API_DEFAULT_REQUEST_TIMEOUT_MS),
    };
    const url = buildUrl(path, baseUrl);
    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(response.status.toString());
    }

    if (response.status === HttpStatusCode.NoContent) {
      return undefined as T;
    }

    const data = await response.json();

    return data as T;
  } catch (error) {
    throw new Error(`Fetch Error: ${path}: ${error}`);
  }
}
