import type { MouseEvent, ReactElement } from 'react';

import type { LinkRef } from '@/types/common/link.types';

import { AdaptiveLink } from '@/components/ui/AdaptiveLink/AdaptiveLink';

import { ButtonContent } from './ButtonContent/ButtonContent';
import type { ButtonContentElements, ButtonStyleProps } from './Button.types';
import { getCommonButtonClasses } from './Button.utils';

export type LinkButtonProps = LinkRef &
  ButtonStyleProps &
  ButtonContentElements & {
    disabled?: boolean;
  };

export function LinkButton({
  href,
  target,
  rel,
  variant = 'primary',
  size = 'md',
  width = 'fit-content',
  leadingIcon,
  trailingIcon,
  label,
  disabled,
  ...rest
}: LinkButtonProps): ReactElement {
  const buttonClasses = getCommonButtonClasses({
    variant,
    size,
    width,
    disabled,
  });

  const disabledProps = disabled
    ? {
        'aria-disabled': true,
        href: '#',
        tabIndex: -1,
        onClick: (event: MouseEvent<HTMLAnchorElement>): void =>
          event.preventDefault(),
      }
    : {};

  return (
    <AdaptiveLink
      className={buttonClasses}
      target={target}
      rel={rel}
      href={href}
      {...rest}
      {...disabledProps}
    >
      <ButtonContent
        size={size}
        leadingIcon={leadingIcon}
        trailingIcon={trailingIcon}
        label={label}
      />
    </AdaptiveLink>
  );
}
