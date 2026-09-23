import type { ReactElement } from 'react';

import clsx from 'clsx';

import type { IconStyleProps } from '@/types/svg.types';
import { getIconColorClasses } from '@/utils/style/colors.utils';

import css from './IconContainer.module.scss';

type IconContainerProps = IconStyleProps & {
  children: ReactElement;
};

export function IconContainer({
  children,
  color = 'primary',
}: IconContainerProps): ReactElement {
  return (
    <span className={clsx(css.container, getIconColorClasses(color))}>
      {children}
    </span>
  );
}
