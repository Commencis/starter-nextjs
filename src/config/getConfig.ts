import { getCurrentEnvironment } from '@/config/getCurrentEnvironment';
import { getPackageInfo } from '@/config/getPackageInfo';
import type { Environment } from '@/types';
import { ENVIRONMENT } from '@/constants';

export type Config = {
  version?: string;
  buildNumber?: string;
  baseApiUrl?: string;
  environment: Environment;
  isDevelopment: boolean;
  isTest: boolean;
  isUat: boolean;
  isStaging: boolean;
  isProduction: boolean;
};

export const getConfig = (): Config => {
  try {
    const { version, buildNumber } = getPackageInfo();
    const environment = getCurrentEnvironment();

    const config: Config = {
      version,
      buildNumber,
      baseApiUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
      environment,
      isDevelopment: environment === ENVIRONMENT.DEVELOPMENT,
      isTest: environment === ENVIRONMENT.TEST,
      isUat: environment === ENVIRONMENT.UAT,
      isStaging: environment === ENVIRONMENT.STAGING,
      isProduction: environment === ENVIRONMENT.PRODUCTION,
    };

    Object.entries(config).forEach(([key, value]) => {
      if (typeof value === 'undefined' || value === null) {
        throw new Error(`Missing config/environment variable: ${key}`);
      }
    });

    return config;
  } catch (error) {
    throw new Error(`Failed to load configuration: ${error}`);
  }
};
