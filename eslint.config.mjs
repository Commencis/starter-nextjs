import { commencisNextConfig, defineConfig } from '@commencis/eslint-config';

export default defineConfig(commencisNextConfig, {
  ignores: ['.next', 'next.config.ts', 'next-env.d.ts'],
});
