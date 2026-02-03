import type { HttpHeader } from '@/types';

export const HEADER_KEY = {
  CONTENT_TYPE: 'Content-Type',
} as const;

export const HEADER_VALUE = {
  APPLICATION_JSON: 'application/json',
} as const;

export const DEFAULT_HEADERS: HttpHeader = {
  [HEADER_KEY.CONTENT_TYPE]: HEADER_VALUE.APPLICATION_JSON,
};

export const API_DEFAULT_CACHE_DURATION_SEC = 60;
export const API_DEFAULT_REQUEST_TIMEOUT_MS = 5000;
