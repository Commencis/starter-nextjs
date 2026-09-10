/* eslint-disable no-console */

import { spawnSync } from 'node:child_process';

export function runCommand(command: string, args: string[]): void {
  const label = [command, ...args].join(' ');
  console.log(`\n> ${label}`);

  const result = spawnSync(command, args, {
    cwd: process.cwd(),
    env: process.env,
    stdio: 'inherit',
  });

  if (result.error) {
    console.error(result.error);
    process.exit(1);
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
