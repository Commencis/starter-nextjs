import { getPublicConfig } from '@/lib/config/getPublicConfig';

export function isProduction(): boolean {
  return getPublicConfig().appEnv === 'production';
}
