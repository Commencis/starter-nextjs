import type { ButtonHTMLAttributes, ReactElement } from 'react';

import type { ResponsiveAttribute } from '@/types/style/breakpoint.types';
import type { ResponsiveWidthProps } from '@/types/style/layout.types';

export type AllowedButtonHTMLAttributes = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'name' | 'onClick' | 'disabled' | 'aria-label'
>;

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ResponsiveButtonSize = ResponsiveAttribute<ButtonSize>;

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'link';

export type ButtonStyleProps = ResponsiveWidthProps & {
  size?: ResponsiveButtonSize;
  variant?: ButtonVariant;
};

export type ButtonContentElements = {
  label: string;
  leadingIcon?: ReactElement;
  trailingIcon?: ReactElement;
};
