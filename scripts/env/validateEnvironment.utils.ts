import type { ZodError } from 'zod';

import type { EnvVariables } from '../../src/schemas/env.schema';

export function getValidationFailedResults(error: ZodError): string {
  const issueLines = error.issues.map((issue) => {
    const path = issue.path.length > 0 ? issue.path.join('.') : '(root)';

    return `  • ${path}: ${issue.message}`;
  });

  return [
    '',
    '❌ Environment variable validation failed',
    '',
    ...issueLines,
    '',
    'Fix the variables above (see .env.example) and restart.',
    '',
  ].join('\n');
}

export function getValidationSuccessResults(values: EnvVariables): string {
  const valueLines = Object.entries(values).map(
    ([key, value]) => `  • ${key}=${value}`
  );

  return [
    '',
    '✅ Environment variables validated with the following values:',
    '',
    ...valueLines,
    '',
  ].join('\n');
}
