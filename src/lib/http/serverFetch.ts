/*
 * Copyright 2017-2025 Commencis. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Commencis.
 * Any reproduction of this material must contain this notice.
 */

import type { ApiPath } from '@/types';
import type { FetchOptions } from '@/types/http.types';
import { API_DEFAULT_CACHE_DURATION_SEC } from '@/constants/http.constants';
import { makeRequest } from '@/lib/http/makeRequest';

type ServerFetchOptions = {
  path: ApiPath;
} & Omit<FetchOptions, 'path'>;

export async function serverFetch<T = unknown>({
  baseUrl,
  path,
  method = 'GET',
  headers = {},
  revalidate = API_DEFAULT_CACHE_DURATION_SEC,
}: ServerFetchOptions): Promise<T> {
  const response = await makeRequest<T>({
    baseUrl,
    path,
    method,
    headers,
    revalidate,
  });

  return response;
}
