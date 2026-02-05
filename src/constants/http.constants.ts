import type { HttpHeader } from '@/types/http.types';

export const DEFAULT_HEADERS: HttpHeader = {
  'Content-Type': 'application/json',
};

export const API_DEFAULT_CACHE_DURATION_SEC = 60;
export const API_DEFAULT_REQUEST_TIMEOUT_MS = 5000;
