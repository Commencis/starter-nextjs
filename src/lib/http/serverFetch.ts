/*
 * Copyright 2017-2025 Commencis. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Commencis.
 * Any reproduction of this material must contain this notice.
 */

import type { FetchOptions } from '@/types/http.types';
import { SERVER_MIN_CACHE_DURATION_SEC } from '@/constants/http.constants';
import { makeRequest } from '@/lib/http/core/makeRequest';

export async function serverFetch<T = unknown>({
  url,
  method = 'GET',
  headers = {},
  revalidate = SERVER_MIN_CACHE_DURATION_SEC,
}: FetchOptions): Promise<T> {
  const response = await makeRequest<T>({
    url,
    method,
    headers,
    revalidate,
  });

  return response;
}
