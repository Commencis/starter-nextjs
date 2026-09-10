/* eslint-disable no-console */

import { join } from 'node:path';

import { cleanSvgrOutput } from './cleanSvgrOutput';
import { createIconography } from './createIconography';
import { runCommand } from './runCommand';

type SvgGenerationTarget = 'icons' | 'vectors';

type SvgGenerationConfig = {
  preservedEntries: string[];
  recursive: boolean;
  outputDir: string;
  assetsDir: string;
  svgrConfig: string;
  eslintDir: string;
  postGenerate?: () => void;
};

const SVG_GENERATION_CONFIG: Record<SvgGenerationTarget, SvgGenerationConfig> =
  {
    icons: {
      preservedEntries: ['IconContainer'],
      recursive: false,
      outputDir: 'src/components/icons',
      assetsDir: 'src/assets/icons',
      svgrConfig: 'scripts/svg/icon.svgr.config.cjs',
      eslintDir: 'src/components/icons',
      postGenerate: createIconography,
    },
    vectors: {
      preservedEntries: [],
      recursive: true,
      outputDir: 'src/components/vectors',
      assetsDir: 'src/assets/vectors',
      svgrConfig: 'scripts/svg/vector.svgr.config.cjs',
      eslintDir: 'src/components/vectors',
    },
  };

function parseTarget(): SvgGenerationTarget {
  const target = process.argv[2];

  if (target === 'icons' || target === 'vectors') {
    return target;
  }

  console.error('Usage: tsx scripts/svg/generateSvg.ts <icons|vectors>');
  process.exit(1);
}

function generateSvg(target: SvgGenerationTarget): void {
  const config = SVG_GENERATION_CONFIG[target];
  const outputDir = join(process.cwd(), config.outputDir);

  const removed = cleanSvgrOutput(outputDir, {
    preservedEntries: config.preservedEntries,
    recursive: config.recursive,
  });

  console.log(
    `✓ Removed ${removed} generated ${target} file(s) from ${outputDir}`
  );

  runCommand('pnpm', [
    'exec',
    'svgr',
    '--config-file',
    config.svgrConfig,
    config.assetsDir,
  ]);

  runCommand('pnpm', ['exec', 'eslint', '--fix', config.eslintDir]);

  config.postGenerate?.();
}

generateSvg(parseTarget());
