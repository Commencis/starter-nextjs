import { ENVIRONMENTS } from '@/constants';
import { Environment } from '@/types';

export const getCurrentEnvironment = (): Environment => {
  const env = process.env.NEXT_PUBLIC_APP_ENV as Environment;

  if (!ENVIRONMENTS.includes(env)) {
    throw new Error(`Invalid environment: ${env}`);
  }

  return env;
};
