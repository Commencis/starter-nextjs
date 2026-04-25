import clsx from 'clsx';

import type { PerBreakpoint } from '@/types/style/breakpoint.types';
import type {
  TypographyVariant,
  TypographyVariantProps,
} from '@/types/style/typography.types';

import css from '@/styles/modules/typography.module.scss';

const DEFAULT_TYPOGRAPHY_VARIANT: TypographyVariant = 'body-1';

/**
 * Per-variant viewport scaling. Keys are the scalar variant users request;
 * values are the physical variant to apply at each breakpoint. Omitted
 * breakpoints inherit from the previous one via the CSS cascade.
 *
 * Keep in sync with the physical variant list in
 * @scss styles/variables/typography/_variants.scss ($typography-variant-map).
 */
const typographyViewportMap: Record<
  TypographyVariant,
  PerBreakpoint<TypographyVariant>
> = {
  'display-1': { xs: 'display-2', md: 'display-1' },
  'display-2': { xs: 'display-3', md: 'display-2' },
  'display-3': { xs: 'heading-1', md: 'display-3' },
  'heading-1': { xs: 'heading-1' },
  'heading-2': { xs: 'heading-2' },
  'heading-3': { xs: 'heading-3' },
  'heading-4': { xs: 'heading-4' },
  'label-1': { xs: 'label-1' },
  'label-2': { xs: 'label-2' },
  'label-3': { xs: 'label-3' },
  'body-1': { xs: 'body-1' },
  'body-2': { xs: 'body-2' },
  'body-3': { xs: 'body-3' },
  'body-4': { xs: 'body-4', md: 'body-3' },
};

/**
 * Resolves a typography variant prop to a className string composed of
 * per-breakpoint override classes (`typ-<bp>-<variant>`).
 *
 * Scalar variant -> looked up in `typographyViewportMap` to get the
 *                   per-breakpoint physical variants.
 * Object variant -> used as-is; when `xs` is omitted, `DEFAULT_TYPOGRAPHY_VARIANT` is
 *                   injected so text always has a baseline style.
 */
export function getTypographyVariantClasses(
  variant: TypographyVariantProps = DEFAULT_TYPOGRAPHY_VARIANT
): string {
  const breakpointMap: PerBreakpoint<TypographyVariant> =
    typeof variant === 'string'
      ? typographyViewportMap[variant]
      : { xs: DEFAULT_TYPOGRAPHY_VARIANT, ...variant };

  return clsx(
    Object.entries(breakpointMap).map(
      ([bp, value]) => css[`typ-${bp}-${value}`]
    )
  );
}
