const { basename, extname } = require('node:path');

const { generatedMessage } = require('./svg.utils.cjs');

const indexTemplate = (paths) => {
  const exportEntries = paths.map(({ path: filePath }) => {
    const exportName = basename(filePath, extname(filePath));
    return `export { ${exportName} } from './${exportName}'`;
  });
  return `${generatedMessage}\n${exportEntries.join('\n')}`;
};

module.exports = indexTemplate;
