import { Environment } from '@/types/env.types';
import { getPublicConfig } from '@/lib/config/getPublicConfig';

export function isProduction(): boolean {
  return getPublicConfig().environment === Environment.Production;
}
