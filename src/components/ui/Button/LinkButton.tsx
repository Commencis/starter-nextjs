import type { ElementType, ReactElement } from 'react';
import type { Route } from 'next';
import type { LinkProps } from 'next/link';
import Link from 'next/link';

import clsx from 'clsx';

import { isLocalURL } from '@/utils/url.utils';

import { Anchor } from '../Anchor/Anchor';

import { ButtonContent } from './ButtonContent/ButtonContent';
import type { ButtonContentElements, ButtonStyleProps } from './Button.types';

import css from './Button.module.scss';

type AllowedLinkProps = Omit<LinkProps<Route>, 'href'>;

export type LinkButtonProps = AllowedLinkProps &
  ButtonStyleProps &
  ButtonContentElements & {
    href: string;
  };

export function LinkButton({
  href,
  target,
  rel,
  variant = 'primary',
  size = 'md',
  leadingIcon,
  trailingIcon,
  children,
  isFullWidth = false,
  isRounded = false,
  ...rest
}: LinkButtonProps): ReactElement {
  const isExternal = !isLocalURL(href);
  const Component: ElementType = isExternal ? Anchor : Link;
  const linkProps = isExternal ? { href } : { href: href as Route, ...rest };

  const buttonClasses = clsx(css.button, css[variant], css[`size-${size}`], {
    [css.fullWidth]: isFullWidth,
    [css.rounded]: isRounded,
  });

  return (
    <Component
      className={buttonClasses}
      target={target}
      rel={rel}
      {...linkProps}
    >
      <ButtonContent
        size={size}
        leadingIcon={leadingIcon}
        trailingIcon={trailingIcon}
      >
        {children}
      </ButtonContent>
    </Component>
  );
}
