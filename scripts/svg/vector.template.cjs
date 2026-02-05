// Read more: https://react-svgr.com/docs/custom-templates/

const { generatedMessage } = require('./svg.utils.cjs');

const template = ({ componentName, jsx }, { tpl }) => {
  // SVGR prefixes component names with "Svg", we postfixed it with Icon. We can safely remove it. It is done to avoid collisions
  componentName = componentName.replace('Svg', '');

  return tpl`
${generatedMessage}

import type { ReactElement } from 'react';

import type { VectorProps } from '@/types/svg.types';
${'\n'}

export function ${componentName} ({title, titleId, ...props}: VectorProps): ReactElement {
  if (!('aria-hidden' in props)) {
    props['aria-hidden'] = title ? undefined : true;
  }

  return ${jsx};
}
`;
};

module.exports = template;
