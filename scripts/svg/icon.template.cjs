// Read more: https://react-svgr.com/docs/custom-templates/

const {
  identifier,
  jsxClosingElement,
  jsxElement,
  jsxIdentifier,
  jsxOpeningElement,
  jsxSpreadAttribute,
} = require('@babel/types');

const { generatedMessage } = require('./svg.utils.cjs');

const template = ({ componentName, jsx }, { tpl }) => {
  // SVGR prefixes component names with "Svg", we postfixed it with Icon. We can safely remove it. It is done to avoid collisions
  componentName = componentName.replace('Svg', '');

  const wrappedJsx = jsxElement(
    jsxOpeningElement(jsxIdentifier('IconContainer'), [
      jsxSpreadAttribute(identifier('props')),
    ]),
    jsxClosingElement(jsxIdentifier('IconContainer')),
    [jsx],
    false
  );

  return tpl`
${generatedMessage}

import type { ReactElement } from 'react';

import type { IconProps } from '@/types/svg.types';

import { IconContainer } from './IconContainer/IconContainer';
${'\n'}

export function ${componentName} ({ size = 24, ...props }: IconProps): ReactElement {
  return ${wrappedJsx};
}
`;
};

module.exports = template;
