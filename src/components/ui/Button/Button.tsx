'use client';

import type { MouseEvent, ReactElement } from 'react';

import { ButtonContent } from './ButtonContent/ButtonContent';
import type {
  AllowedButtonHTMLAttributes,
  ButtonContentElements,
  ButtonStyleProps,
} from './Button.types';
import { getCommonButtonClasses } from './Button.utils';

export type ButtonProps = AllowedButtonHTMLAttributes &
  ButtonStyleProps &
  ButtonContentElements;

export function Button({
  type = 'button',
  variant = 'primary',
  size = 'md',
  width = 'fit-content',
  disabled,
  leadingIcon,
  trailingIcon,
  label,
  onClick,
  ...rest
}: ButtonProps): ReactElement {
  const buttonClasses = getCommonButtonClasses({
    variant,
    size,
    width,
    disabled,
  });

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    onClick?.(event);
  };

  return (
    <button
      className={buttonClasses}
      type={type}
      onClick={handleClick}
      disabled={disabled}
      {...rest}
    >
      <ButtonContent
        size={size}
        leadingIcon={leadingIcon}
        trailingIcon={trailingIcon}
        label={label}
      />
    </button>
  );
}
