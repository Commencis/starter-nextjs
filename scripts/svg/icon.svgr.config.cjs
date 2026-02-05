const { join } = require('node:path');

/**
 * @type {import('@svgr/core').Config}
 */
const svgrIconConfig = {
  typescript: true,
  jsxRuntime: 'automatic',
  template: require('./icon.template.cjs'),
  indexTemplate: require('./index.template.cjs'),
  outDir: join(process.cwd(), 'src/components/icons'),
  expandProps: false,
  dimensions: false,
  svgProps: {
    fill: 'currentColor',
    'aria-hidden': 'true',
    width: '{size}',
    height: '{size}',
  },
};

module.exports = svgrIconConfig;
