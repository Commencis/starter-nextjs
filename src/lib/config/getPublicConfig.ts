export type PublicConfig = {
  baseApiUrl?: string;
};

export function getPublicConfig(): PublicConfig {
  return {
    baseApiUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
  };
}
