import { envVariablesSchema } from '../../src/schemas/env.schema';

import {
  getValidationFailedResults,
  getValidationSuccessResults,
} from './validateEnvironment.utils';

/* eslint-disable no-console */
export function validateEnvironment(): void {
  const { env } = process;

  if (env.ENV_VALIDATED === 'true' || env.SKIP_ENV_VALIDATION === 'true') {
    return;
  }

  const parsed = envVariablesSchema.safeParse(env);

  if (!parsed.success) {
    console.error(getValidationFailedResults(parsed.error));
    process.exit(1);
  }

  env.ENV_VALIDATED = 'true';
  console.log(getValidationSuccessResults(parsed.data));
}
/* eslint-enable no-console */
