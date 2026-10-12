import path from 'node:path';
import { createInterface } from 'node:readline/promises';

export const ENV_EXAMPLE_PATH = path.join(process.cwd(), '.env.example');
export const ENV_LOCAL_PATH = path.join(process.cwd(), '.env.local');

export type EnvConflict = {
  key: string;
  localValue: string;
  exampleValue: string;
};

export function parseEnvFile(content: string): Record<string, string> {
  const values: Record<string, string> = {};

  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();

    if (trimmed.length === 0 || trimmed.startsWith('#')) {
      continue;
    }

    const separatorIndex = trimmed.indexOf('=');

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1);

    if (key.length === 0) {
      continue;
    }

    values[key] = value;
  }

  return values;
}

export function getConflictingKeys(
  localValues: Record<string, string>,
  exampleValues: Record<string, string>
): EnvConflict[] {
  const conflicts: EnvConflict[] = [];

  for (const [key, exampleValue] of Object.entries(exampleValues)) {
    const localValue = localValues[key];

    if (localValue !== undefined && localValue !== exampleValue) {
      conflicts.push({ key, localValue, exampleValue });
    }
  }

  return conflicts;
}

export function getPreservedKeys(
  localValues: Record<string, string>,
  exampleValues: Record<string, string>
): Record<string, string> {
  const preserved: Record<string, string> = {};

  for (const [key, value] of Object.entries(localValues)) {
    if (!(key in exampleValues)) {
      preserved[key] = value;
    }
  }

  return preserved;
}

export function resolveEnvValues(
  exampleValues: Record<string, string>,
  localValues: Record<string, string>,
  conflicts: EnvConflict[],
  applyExampleOverrides: boolean
): Record<string, string> {
  const resolved: Record<string, string> = { ...exampleValues };

  if (!applyExampleOverrides) {
    for (const { key } of conflicts) {
      const localValue = localValues[key];

      if (localValue !== undefined) {
        resolved[key] = localValue;
      }
    }
  }

  return resolved;
}

export function formatConflictSummary(conflicts: EnvConflict[]): string {
  const conflictLines = conflicts.flatMap((conflict) => [
    `  • ${conflict.key}`,
    `      current: ${conflict.localValue}`,
    `      example: ${conflict.exampleValue}`,
  ]);

  return [
    'The following .env.local values will be replaced with .env.example:',
    '',
    ...conflictLines,
    '',
  ].join('\n');
}

export async function confirmOverrides(
  conflicts: EnvConflict[]
): Promise<boolean> {
  if (!process.stdin.isTTY) {
    throw new Error(
      'Environment conflicts require interactive confirmation. Run `pnpm generate:env` in a terminal.'
    );
  }

  // eslint-disable-next-line no-console
  console.log(formatConflictSummary(conflicts));

  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  try {
    const answer = await readline.question('Apply these replacements? [y/N] ');
    const normalized = answer.trim().toLowerCase();

    return normalized === 'y' || normalized === 'yes';
  } finally {
    readline.close();
  }
}

export function buildEnvLocalContent(
  exampleContent: string,
  resolvedValues: Record<string, string>,
  preservedKeys: Record<string, string>
): string {
  const lines = exampleContent.split(/\r?\n/).map((line) => {
    const trimmed = line.trim();

    if (trimmed.length === 0 || trimmed.startsWith('#')) {
      return line;
    }

    const separatorIndex = trimmed.indexOf('=');

    if (separatorIndex === -1) {
      return line;
    }

    const key = trimmed.slice(0, separatorIndex).trim();

    if (key.length === 0 || !(key in resolvedValues)) {
      return line;
    }

    return `${key}=${resolvedValues[key]}`;
  });

  const preservedEntries = Object.entries(preservedKeys);

  if (preservedEntries.length === 0) {
    return ensureTrailingNewline(lines.join('\n'));
  }

  const preservedBlock = [
    '',
    '# Preserved from existing .env.local',
    ...preservedEntries.map(([key, value]) => `${key}=${value}`),
  ];

  return ensureTrailingNewline([...lines, ...preservedBlock].join('\n'));
}

export function ensureTrailingNewline(content: string): string {
  return content.endsWith('\n') ? content : `${content}\n`;
}
