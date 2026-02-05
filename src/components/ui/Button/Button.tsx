'use client';

import type { MouseEvent, PropsWithChildren, ReactElement } from 'react';

import clsx from 'clsx';

import type {
  AllowedButtonHTMLAttributes,
  ButtonSize,
  ButtonVariant,
} from './Button.types';

import css from './Button.module.scss';

type ButtonProps = AllowedButtonHTMLAttributes &
  PropsWithChildren<{
    size?: ButtonSize;
    variant?: ButtonVariant;
    leadingIcon?: ReactElement;
    trailingIcon?: ReactElement;
    isFullWidth?: boolean;
  }>;

export function Button({
  type = 'button',
  variant = 'primary',
  size = 'md',
  onClick,
  leadingIcon,
  trailingIcon,
  children,
  isFullWidth = false,
  ...rest
}: ButtonProps): ReactElement {
  const buttonClasses = clsx(css.button, css[variant], css[`size-${size}`], {
    [css.fullWidth]: isFullWidth,
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
      <div className={css.content}>
        {leadingIcon && <span>{leadingIcon}</span>}
        {children && <span>{children}</span>}
        {trailingIcon && <span>{trailingIcon}</span>}
      </div>
    </button>
  );
}
