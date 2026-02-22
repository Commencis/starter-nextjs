import type { ReactElement } from 'react';

import clsx from 'clsx';

import type { BoxProps } from '@/components/ui/Box/Box';
import { Box } from '@/components/ui/Box/Box';

import styles from './Container.module.scss';

type ContainerProps = Omit<
  BoxProps,
  | 'marginX'
  | 'marginLeft'
  | 'marginRight'
  | 'paddingX'
  | 'paddingLeft'
  | 'paddingRight'
  | 'renderRoot'
>;

export function Container({
  as: Component = 'div',
  children,
  ...boxProps
}: ContainerProps): ReactElement {
  return (
    <Box
      marginY={0}
      marginX="auto"
      paddingX={{ xs: 16, md: 32, lg: 64 }}
      renderRoot={(className, children) => (
        <Component className={clsx(className, styles.container)}>
          {children}
        </Component>
      )}
      {...boxProps}
    >
      {children}
    </Box>
  );
}
