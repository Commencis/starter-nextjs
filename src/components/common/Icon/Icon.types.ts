import type { ComponentType, SVGProps } from 'react';

export type SVGComponentProps = SVGProps<SVGSVGElement>;

export type IconProps = {
  name: IconName;
  size?: IconSize;
  color?: string;
} & Omit<SVGComponentProps, 'fill' | 'width' | 'height'>;

export type DynamicIconReturnType = ComponentType<SVGComponentProps>;

export type IconSize = 12 | 14 | 16 | 18 | 20 | 22 | 24 | 32 | 40;

export type IconName =
  | 'chevron-right'
  | 'chevron-left'
  | 'chevron-up'
  | 'chevron-down';
