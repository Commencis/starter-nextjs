import type { ButtonHTMLAttributes, ReactElement } from 'react';

export type AllowedButtonHTMLAttributes = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'name' | 'onClick' | 'disabled' | 'aria-label'
>;

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'link';

export type ButtonStyleProps = {
  size?: ButtonSize;
  variant?: ButtonVariant;
  isFullWidth?: boolean;
  isRounded?: boolean;
};

export type ButtonContentElements = {
  leadingIcon?: ReactElement;
  trailingIcon?: ReactElement;
  children: ReactElement | string;
};
