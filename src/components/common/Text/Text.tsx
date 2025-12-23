import type { ReactElement } from 'react';

import clsx from 'clsx';

import type { TextProps } from '@/components/common/Text/Text.types';
import css from '@/components/common/Text/Text.module.scss';

export const Text = ({
  as: Component = 'p',
  color,
  variant = 'bodyMedium',
  children,
}: TextProps): ReactElement => {
  return (
    <Component
      className={clsx(css.typography, css[variant], color && css[color])}
    >
      {children}
    </Component>
  );
};
