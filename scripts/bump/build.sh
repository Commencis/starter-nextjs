#!/bin/bash

node -e "
  const fs = require('fs');
  const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  pkg.buildNumber = (pkg.buildNumber || 0) + 1;
  fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2) + '\n');
  console.log('Build number bumped to ' + pkg.buildNumber + ' (v' + pkg.version + ')');
"
