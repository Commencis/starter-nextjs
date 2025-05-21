#!/bin/bash

if [ -z "$1" ] || [[ "$1" != "patch" && "$1" != "minor" && "$1" != "major" ]]; then
  echo "You must specify a valid version type (patch, minor, or major)."
  exit 1
fi

# Bump the version based on the argument (patch, minor, or major)
npm version "$1" -m "chore(release): update version to v%s"

if [ $? -eq 0 ]; then
  new_version=$(node -p "require('./package.json').version")
  echo "Version bumped to $new_version"
  echo "Tag created: v$new_version"
  echo "Please run 'git push origin --follow-tags' or 'git push --tags' manually."
else
  echo "Error: Version bump failed."
  exit 1
fi