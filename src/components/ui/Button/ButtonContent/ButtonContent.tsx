import type { ReactElement } from 'react';

import clsx from 'clsx';

import type { ButtonContentElements, ButtonSize } from '../Button.types';

import css from './ButtonContent.module.scss';

export type ButtonContentProps = ButtonContentElements & {
  size: ButtonSize;
};

export function ButtonContent({
  size,
  leadingIcon,
  trailingIcon,
  children,
}: ButtonContentProps): ReactElement {
  return (
    <div className={clsx(css.content, css[`size-${size}`])}>
      {leadingIcon}
      {children}
      {trailingIcon}
    </div>
  );
}
