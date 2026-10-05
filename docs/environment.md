# Environment

- Add every new variable to `.env.example`. Never commit `.env.local`.
- `NEXT_PUBLIC_*` reaches the browser. Keep secrets without the prefix and read them only in server code.
- `NEXT_PUBLIC_APP_ENV` values: `development`, `test`, `uat`, `staging`, `production` (`src/types/env.types.ts`).
