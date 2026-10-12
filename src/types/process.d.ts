import type { EnvVariables } from '@/schemas/env.schema';

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface ProcessEnv extends EnvVariables {}
  }
}

/**
 * Empty module export (`export {}`) marks this file as a module so `declare global`
 * augments the global `NodeJS.ProcessEnv` type instead of creating a local declaration.
 */
export {};
