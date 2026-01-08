import type { AxiosHeaderValue } from 'axios';

import type { ObjectValues } from '@/types';
import type { HEADER_KEY } from '@/constants';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type HeaderKey = ObjectValues<typeof HEADER_KEY>;

export type HttpHeader = Partial<Record<HeaderKey, AxiosHeaderValue>>;
