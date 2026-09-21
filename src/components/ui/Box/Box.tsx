import type { PropsWithChildren, ReactElement } from 'react';

import type { WithOptionalId } from '@/types/common.types';
import {
  type CommonAriaAttributes,
  extractCommonAriaAttributes,
} from '@/utils/aria.utils';

import type { BoxRenderProps, BoxStyleProps } from './Box.types';
import { getBoxClasses } from './Box.utils';

type BoxProps = PropsWithChildren &
  WithOptionalId &
  CommonAriaAttributes &
  BoxStyleProps &
  BoxRenderProps;

export function Box({
  as: Component = 'div',
  id,
  children,
  renderRoot,
  ...rest
}: BoxProps): ReactElement {
  const ariaAttributes = extractCommonAriaAttributes(rest);
  const boxClasses = getBoxClasses(rest);

  if (renderRoot) {
    return renderRoot(boxClasses, children);
  }

  return (
    <Component id={id} className={boxClasses} {...ariaAttributes}>
      {children}
    </Component>
  );
}
