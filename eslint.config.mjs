import { configFactory } from '@commencis/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  configFactory({
    typescript: true,
    react: true,
    reactCompiler: true,
    jsxA11y: true,
    next: true,
  })
);
