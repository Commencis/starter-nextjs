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
