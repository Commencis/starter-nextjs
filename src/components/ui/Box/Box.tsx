/*
 * Copyright 2017-2025 Commencis. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Commencis.
 * Any reproduction of this material must contain this notice.
 */

import type { PropsWithChildren, ReactElement } from 'react';

import type { WithOptionalId } from '@/types/common.types';

import type {
  BoxElement,
  BoxRenderRootCallback,
  BoxStyleProps,
} from './Box.types';
import { getBoxClasses } from './Box.utils';

type BoxProps = PropsWithChildren<
  WithOptionalId &
    BoxStyleProps & {
      as?: BoxElement;
      renderRoot?: BoxRenderRootCallback;
    }
>;

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
