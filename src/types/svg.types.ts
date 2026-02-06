import type { SVGProps } from 'react';

export type IconSize = 20 | 22 | 24 | 28 | 32;

export type IconColor = 'primary' | 'brand' | 'blue' | 'green' | 'red';

export type IconCustomProps = {
  size?: IconSize;
};

export type IconStyleProps = {
  color?: IconColor;
};

export type IconProps = IconStyleProps & IconCustomProps;

/**
 * Discriminated union for SVG title props.
 * Either both title and titleId must be provided (for accessible SVGs),
 * or neither should be provided (for decorative SVGs).
 */
type SvgTitleProps =
  | {
      title: string;
      titleId: string;
    }
  | {
      title?: never;
      titleId?: never;
    };

/**
 * @type for vector SVG components
 * (illustrations, logos, etc.)
 */
export type VectorProps = SVGProps<SVGSVGElement> & SvgTitleProps;
