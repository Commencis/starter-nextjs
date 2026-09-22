import type { PropsWithChildren, ReactElement } from 'react';

import type { WithOptionalId } from '@/types/common.types';

import type { TextElement, TextStyleProps } from './Text.types';
import { getTextClasses } from './Text.utils';

export type TextProps = WithOptionalId &
  TextStyleProps &
  PropsWithChildren & {
    as?: TextElement;
  };

export function Text({
  id,
  as: Component = 'span',
  color = 'primary',
  variant,
  fontWeight,
  align,
  maxLine,
  marginTop,
  marginBottom,
  children,
}: TextProps): ReactElement {
  const textClasses = getTextClasses({
    variant,
    color,
    fontWeight,
    align,
    maxLine,
    marginTop,
    marginBottom,
  });

  return (
    <Component id={id} className={textClasses}>
      {children}
    </Component>
  );
}
