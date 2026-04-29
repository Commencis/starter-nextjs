# Bump Scripts

Small release helpers for versioning and build numbering.

- `pnpm bump:version <patch|minor|major>`
  - Increases `version` in `package.json`
  - Increases `buildNumber`
  - Creates a commit and a tag (`v<version>`)

- `pnpm bump:build`
  - Increases only `buildNumber` in `package.json`

Use `bump:version` for releases and `bump:build` for internal build increments.
