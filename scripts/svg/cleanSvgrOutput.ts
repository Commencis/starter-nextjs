import { readdirSync, statSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';

type CleanSvgrOutputOptions = {
  preservedEntries?: string[];
  recursive?: boolean;
};

function isSvgrGeneratedFile(name: string): boolean {
  return name === 'index.ts' || name.endsWith('.tsx');
}

export function cleanSvgrOutput(
  rootDir: string,
  { preservedEntries = [], recursive = false }: CleanSvgrOutputOptions = {}
): number {
  let removed = 0;

  for (const entry of readdirSync(rootDir)) {
    if (preservedEntries.includes(entry)) {
      continue;
    }

    const entryPath = join(rootDir, entry);
    const stat = statSync(entryPath);

    if (stat.isDirectory()) {
      if (recursive) {
        removed += cleanSvgrOutput(entryPath, {
          preservedEntries,
          recursive: true,
        });
      }

      continue;
    }

    if (!isSvgrGeneratedFile(entry)) {
      continue;
    }

    unlinkSync(entryPath);
    removed += 1;
  }

  return removed;
}
