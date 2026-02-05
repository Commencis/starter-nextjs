import type { ButtonHTMLAttributes } from 'react';

export type AllowedButtonHTMLAttributes = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'name' | 'onClick' | 'disabled'
>;

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
