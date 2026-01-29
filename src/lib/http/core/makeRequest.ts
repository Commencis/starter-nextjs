import { getConfig } from '@/config/getConfig';
import { HttpStatusCode } from '@/types';
import type { FetchOptions, HttpMethod, RequestBody } from '@/types/http.types';
import {
  API_DEFAULT_REQUEST_TIMEOUT_MS,
  DEFAULT_HEADERS,
} from '@/constants/http.constants';

type RequestInit = globalThis.RequestInit;
type BodyInit = globalThis.BodyInit;

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

function buildUrl(path: string): URL {
  const config = getConfig();

  const baseUrl =
    typeof window === 'undefined' ? config.baseApiUrl : window.location.origin;
  const serviceURL = new URL(path, baseUrl);

  return serviceURL;
}

export async function makeRequest<T = unknown>({
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

    const response = await fetch(buildUrl(path), config);

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
