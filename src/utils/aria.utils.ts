import type { AriaAttributes } from 'react';

export type CommonAriaAttributes = Pick<
  AriaAttributes,
  'aria-label' | 'aria-labelledby' | 'aria-describedby' | 'aria-hidden'
>;

const allowedBaseAriaKeys: (keyof CommonAriaAttributes)[] = [
  'aria-label',
  'aria-labelledby',
  'aria-describedby',
  'aria-hidden',
];

export function extractCommonAriaAttributes<T extends CommonAriaAttributes>(
  props: T
): CommonAriaAttributes {
  return Object.fromEntries(
    Object.entries(props).filter(([key]) =>
      allowedBaseAriaKeys.includes(key as keyof CommonAriaAttributes)
    )
  );
}
