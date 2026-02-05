const { join } = require('node:path');

/**
 * @type {import('@svgr/core').Config}
 */
const svgrVectorConfig = {
  typescript: true,
  jsxRuntime: 'automatic',
  template: require('./vector.template.cjs'),
  indexTemplate: require('./index.template.cjs'),
  outDir: join(process.cwd(), 'src/components/vectors'),
  titleProp: true,
  expandProps: true,
  svgProps: {
    role: 'img',
  },
};

module.exports = svgrVectorConfig;
