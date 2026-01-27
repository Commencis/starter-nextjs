import type { FetchOptions, HttpMethod, RequestBody } from '@/types/http.types';
import { DEFAULT_HEADERS } from '@/constants/http.constants';

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

export async function makeRequest<T = unknown>({
  url,
  method = 'GET',
  headers = {},
  body,
  revalidate,
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

      ...(shouldIncludeRevalidate && {
        next: {
          revalidate,
        },
      }),
    };

    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(response.status.toString());
    }

    const data = await response.json();

    return data as T;
  } catch (error) {
    throw new Error(`Fetch Error: ${url}: ${error}`);
  }
}
