#!/bin/bash

if [ -z "$1" ] || [[ "$1" != "patch" && "$1" != "minor" && "$1" != "major" ]]; then
  echo "You must specify a valid version type (patch, minor, or major)."
  exit 1
fi

if pnpm version "$1" --no-git-tag-version; then
  node -e "
    const fs = require('fs');
    const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    pkg.buildNumber = (pkg.buildNumber || 0) + 1;
    fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2) + '\n');
  "

  new_version=$(node -p "require('./package.json').version")
  build_number=$(node -p "require('./package.json').buildNumber")

  git add package.json
  git commit -m "chore(release): update version to v$new_version"
  git tag "v$new_version"

  echo "✅ Version bumped to $new_version (build $build_number)"
  echo "✅ Tag created: v$new_version"
  echo
  echo "Please run 'git push origin --follow-tags' or 'git push --tags' manually."
else
  echo "Error: Version bump failed."
  exit 1
fi
