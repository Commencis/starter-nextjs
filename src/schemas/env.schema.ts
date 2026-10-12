import { z } from 'zod';

/**
 * Loaded by next.config.ts (via scripts/env/validateEnvironment) before the
 * app build graph is available, so `@/*` path aliases are not resolved here.
 * Use relative imports for any local modules this schema depends on.
 */

export const envVariablesSchema = z.object({
  NEXT_PUBLIC_BASE_API_URL: z.url().optional(),
  BASE_URL: z.url().optional(),
  ENVIRONMENT_ID: z.string().min(1).optional(),
});

export type EnvVariables = z.infer<typeof envVariablesSchema>;
