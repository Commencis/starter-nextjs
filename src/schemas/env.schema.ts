import { z } from 'zod';

import { Environment } from '../types/env.types';

/**
 * Loaded by next.config.ts (via scripts/env/validateEnvironment) before the
 * app build graph is available, so `@/*` path aliases are not resolved here.
 * Use relative imports for any local modules this schema depends on.
 */

export const envVariablesSchema = z.object({
  NEXT_PUBLIC_ENVIRONMENT: z.enum(Environment),
  NEXT_PUBLIC_SITE_URL: z.url(),
  NEXT_PUBLIC_BASE_API_URL: z.url().optional(),
});

export type EnvVariables = z.infer<typeof envVariablesSchema>;
