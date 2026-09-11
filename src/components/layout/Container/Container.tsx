import type { ReactElement } from 'react';

import clsx from 'clsx';

import type { WithOptionalId, WithStrictChildren } from '@/types/common.types';

import type { BoxElement } from '@/components/ui/Box/Box.types';
import { Box } from '@/components/ui/Box/Box';

import type {
  ContainerAllowedBoxProps,
  ResponsiveContainerSize,
} from './Container.types';
import {
  defaultContainerSize,
  getContainerSizeClasses,
  getSizePadding,
} from './Container.utils';

export type ContainerProps = WithStrictChildren &
  WithOptionalId &
  ContainerAllowedBoxProps & {
    as?: BoxElement;
    size?: ResponsiveContainerSize;
  };

export function Container({
  id,
  as: Component = 'div',
  children,
  size = defaultContainerSize,
  ...boxProps
}: ContainerProps): ReactElement {
  return (
    <Box
      width="full"
      marginX="auto"
      paddingX={getSizePadding(size)}
      renderRoot={(className, children) => (
        <Component
          id={id}
          className={clsx(getContainerSizeClasses(size), className)}
        >
          {children}
        </Component>
      )}
      {...boxProps}
    >
      {children}
    </Box>
  );
}
