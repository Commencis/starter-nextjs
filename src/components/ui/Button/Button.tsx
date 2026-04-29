'use client';

import type { MouseEvent, ReactElement } from 'react';

import clsx from 'clsx';

import { ButtonContent } from './ButtonContent/ButtonContent';
import type {
  AllowedButtonHTMLAttributes,
  ButtonContentElements,
  ButtonStyleProps,
} from './Button.types';

import css from './Button.module.scss';

export type ButtonProps = AllowedButtonHTMLAttributes &
  ButtonStyleProps &
  ButtonContentElements;

export function Button({
  type = 'button',
  variant = 'primary',
  size = 'md',
  onClick,
  leadingIcon,
  trailingIcon,
  children,
  isFullWidth = false,
  isRounded = false,
  ...rest
}: ButtonProps): ReactElement {
  const buttonClasses = clsx(css.button, css[variant], css[`size-${size}`], {
    [css.fullWidth]: isFullWidth,
    [css.rounded]: isRounded,
  });

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    onClick?.(event);
  };

  return (
    <button
      className={buttonClasses}
      type={type}
      onClick={handleClick}
      {...rest}
    >
      <ButtonContent
        size={size}
        leadingIcon={leadingIcon}
        trailingIcon={trailingIcon}
      >
        {children}
      </ButtonContent>
    </button>
  );
}
