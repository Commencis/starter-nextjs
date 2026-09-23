import type { ResponsiveAttribute } from '@/types/style/breakpoint.types';

import type { BoxStyleProps } from '@/components/ui/Box/Box.types';

export type ContainerSize = 'md' | 'lg' | 'full';

export type ResponsiveContainerSize = ResponsiveAttribute<ContainerSize>;

export type ContainerAllowedBoxProps = Omit<
  BoxStyleProps,
  | 'marginX'
  | 'marginLeft'
  | 'marginRight'
  | 'paddingX'
  | 'paddingLeft'
  | 'paddingRight'
>;
