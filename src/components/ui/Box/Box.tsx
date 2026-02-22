import type { PropsWithChildren, ReactElement } from 'react';

import type { WithOptionalId } from '@/types/common.types';

import type {
  BoxElement,
  BoxRenderRootCallback,
  BoxStyleProps,
} from './Box.types';
import { getBoxClasses } from './Box.utils';

export type BoxProps = PropsWithChildren &
  WithOptionalId &
  BoxStyleProps & {
    as?: BoxElement;
    renderRoot?: BoxRenderRootCallback;
  };

export function Box({
  as: Component = 'div',
  id,
  children,
  renderRoot,
  ...styleProps
}: BoxProps): ReactElement {
  const boxClasses = getBoxClasses(styleProps);

  if (renderRoot) {
    return renderRoot(boxClasses, children);
  }

  return (
    <Component id={id} className={boxClasses}>
      {children}
    </Component>
  );
}
