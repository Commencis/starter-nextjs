import type { ReactElement } from 'react';

import clsx from 'clsx';

import { getStrokeColorClasses } from '@/utils/style/colors.utils';

import type { DividerColor, DividerOrientation } from './Divider.types';

import css from './Divider.module.scss';

export type DividerProps = {
  orientation: DividerOrientation;
  color?: DividerColor;
};

export function Divider({
  orientation,
  color = 'primary',
}: DividerProps): ReactElement {
  return (
    <div
      role="separator"
      className={clsx(css[orientation], getStrokeColorClasses(color))}
      aria-orientation={orientation}
    />
  );
}
