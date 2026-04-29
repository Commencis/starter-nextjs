import type { BoxStyleProps } from '@/components/ui/Box/Box.types';

export type ContainerSize = 'md' | 'lg';

export type ContainerAllowedBoxProps = Omit<
  BoxStyleProps,
  | 'marginX'
  | 'marginLeft'
  | 'marginRight'
  | 'paddingX'
  | 'paddingLeft'
  | 'paddingRight'
>;
