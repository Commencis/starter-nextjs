import type { Environment } from '@/types';
import { ENVIRONMENTS } from '@/constants';

export const getCurrentEnvironment = (): Environment => {
  const env = process.env.NEXT_PUBLIC_APP_ENV as Environment;

  if (!ENVIRONMENTS.includes(env)) {
    throw new Error(`Invalid environment: ${env}`);
  }

  return env;
};
