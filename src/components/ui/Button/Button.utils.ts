import clsx from 'clsx';

import type { ResponsiveWidthProps } from '@/types/style/layout.types';
import { getResponsiveClasses, getWidthClasses } from '@/utils/style';

import type { ButtonVariant, ResponsiveButtonSize } from './Button.types';

import css from './Button.module.scss';

type GetButtonClassesOptions = ResponsiveWidthProps & {
  variant: ButtonVariant;
  size: ResponsiveButtonSize;
  disabled?: boolean;
};

export function getButtonSizeClasses(
  size: ResponsiveButtonSize,
  styles: Record<string, string> = css
): string {
  return getResponsiveClasses({
    props: { size },
    prefixMap: { size: 'size' },
    css: styles,
  });
}

export function getCommonButtonClasses({
  variant,
  size,
  width,
  disabled,
}: GetButtonClassesOptions): string {
  return clsx(
    css.button,
    css[variant],
    getButtonSizeClasses(size),
    getWidthClasses({ width }),
    { [css.disabled]: disabled }
  );
}
