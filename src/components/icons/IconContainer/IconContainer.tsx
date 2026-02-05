/*
 * Copyright 2017-2026 Commencis. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Commencis.
 * Any reproduction of this material must contain this notice.
 */

import type { ReactElement } from 'react';

import clsx from 'clsx';

import type { IconStyleProps } from '@/types/svg.types';

import css from './IconContainer.module.scss';

type IconContainerProps = IconStyleProps & {
  children: ReactElement;
};

export function IconContainer({
  children,
  color = 'primary',
}: IconContainerProps): ReactElement {
  return (
    <span className={clsx(css.container, css[`ic-color-${color}`])}>
      {children}
    </span>
  );
}
