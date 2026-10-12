import { constants as fsConstants } from 'node:fs';
import { access, readFile, writeFile } from 'node:fs/promises';

import {
  buildEnvLocalContent,
  confirmOverrides,
  ensureTrailingNewline,
  ENV_EXAMPLE_PATH,
  ENV_LOCAL_PATH,
  getConflictingKeys,
  getPreservedKeys,
  parseEnvFile,
  resolveEnvValues,
} from './generateEnv.utils';

/* eslint-disable no-console */
async function fileExists(filePath: string): Promise<boolean> {
  try {
    await access(filePath, fsConstants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function generateEnv(): Promise<void> {
  if (!(await fileExists(ENV_EXAMPLE_PATH))) {
    console.error(`\n❌ Missing .env.example at ${ENV_EXAMPLE_PATH}\n`);
    process.exit(1);
  }

  const exampleContent = await readFile(ENV_EXAMPLE_PATH, 'utf8');
  const exampleValues = parseEnvFile(exampleContent);
  const hasLocal = await fileExists(ENV_LOCAL_PATH);

  if (!hasLocal) {
    await writeFile(
      ENV_LOCAL_PATH,
      ensureTrailingNewline(exampleContent),
      'utf8'
    );
    console.log('\n✅ Created .env.local from .env.example\n');
    return;
  }

  const localContent = await readFile(ENV_LOCAL_PATH, 'utf8');
  const localValues = parseEnvFile(localContent);
  const conflicts = getConflictingKeys(localValues, exampleValues);
  const preservedKeys = getPreservedKeys(localValues, exampleValues);

  let applyExampleOverrides = true;

  if (conflicts.length > 0) {
    applyExampleOverrides = await confirmOverrides(conflicts);
  }

  const resolvedValues = resolveEnvValues(
    exampleValues,
    localValues,
    conflicts,
    applyExampleOverrides
  );

  const nextContent = buildEnvLocalContent(
    exampleContent,
    resolvedValues,
    preservedKeys
  );

  await writeFile(ENV_LOCAL_PATH, nextContent, 'utf8');

  if (conflicts.length === 0) {
    console.log(
      '\n✅ Updated .env.local from .env.example (no value conflicts)\n'
    );
    return;
  }

  if (applyExampleOverrides) {
    console.log(
      `\n✅ Updated .env.local — applied ${conflicts.length} replacement(s) from .env.example\n`
    );
    return;
  }

  console.log(
    `\n✅ Updated .env.local — kept ${conflicts.length} existing local value(s); synced structure from .env.example\n`
  );
}

generateEnv().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);

  console.error(`\n❌ ${message}\n`);
  process.exit(1);
});
/* eslint-enable no-console */
