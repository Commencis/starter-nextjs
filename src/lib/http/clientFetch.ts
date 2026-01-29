/*
 * Copyright 2017-2025 Commencis. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Commencis.
 * Any reproduction of this material must contain this notice.
 */

import type { InternalApiPath } from '@/types';
import type { FetchOptions } from '@/types/http.types';
import { makeRequest } from '@/lib/http/core/makeRequest';

type ClientFetchOptions = {
  path: InternalApiPath;
} & Omit<FetchOptions, 'path' | 'revalidate'>;

export async function clientFetch<T = unknown>({
  path,
  method = 'GET',
  headers = {},
  body,
}: ClientFetchOptions): Promise<T> {
  const response = await makeRequest<T>({
    path,
    method,
    headers,
    body,
  });

  return response;
}
