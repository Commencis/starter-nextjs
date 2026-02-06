import type { HttpHeader } from '@/types/http.types';
import { HttpHeaderKey, HttpHeaderValue } from '@/types/http.types';

export const DEFAULT_HEADERS: HttpHeader = {
  [HttpHeaderKey.ContentType]: HttpHeaderValue.ApplicationJson,
};

export const API_DEFAULT_CACHE_DURATION_SEC = 60;
export const API_DEFAULT_REQUEST_TIMEOUT_MS = 5000;
