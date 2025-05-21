import { getPackageInfo } from '@/config/getPackageInfo';

export type Config = {
  version?: string;
  buildNumber?: string;
};

export const getConfig = (): Config => {
  try {
    const { version, buildNumber } = getPackageInfo();

    const config: Config = {
      version,
      buildNumber,
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
