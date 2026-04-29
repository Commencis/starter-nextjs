#!/bin/bash

if node -e "
    const fs = require('fs');
    const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    pkg.buildNumber = (pkg.buildNumber || 0) + 1;
    fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2) + '\n');
  "; then
  version=$(node -p "require('./package.json').version")
  build_number=$(node -p "require('./package.json').buildNumber")
  commit_message="chore(release): update build to $build_number"

  git add package.json

  if git commit -m "$commit_message"; then
    echo "✅ Build number bumped to $build_number (v$version)"
    echo "✅ Commit created: $commit_message"
    echo
    echo "Please run 'git push origin' manually."
  else
    echo "Error: Build commit failed."
    exit 1
  fi
else
  echo "Error: Build bump failed."
  exit 1
fi
