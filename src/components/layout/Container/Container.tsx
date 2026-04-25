/*
 * Copyright 2017-2026 Commencis. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Commencis.
 * Any reproduction of this material must contain this notice.
 */

import type { ReactElement } from 'react';

import clsx from 'clsx';

import type { WithStrictChildren } from '@/types/common.types';

import type { BoxElement } from '@/components/ui/Box/Box.types';
import { Box } from '@/components/ui/Box/Box';

import type {
  ContainerAllowedBoxProps,
  ContainerSize,
} from './Container.types';

import css from './Container.module.scss';

type ContainerProps = WithStrictChildren &
  ContainerAllowedBoxProps & {
    as?: BoxElement;
    size?: ContainerSize;
  };

export function Container({
  as: Component = 'div',
  children,
  size = 'lg',
  ...boxProps
}: ContainerProps): ReactElement {
  return (
    <Box
      marginX="auto"
      paddingX={{ xs: 24, md: 32, lg: 64 }}
      renderRoot={(className, children) => (
        <Component className={clsx(css[`size-${size}`], className)}>
          {children}
        </Component>
      )}
      {...boxProps}
    >
      {children}
    </Box>
  );
}
