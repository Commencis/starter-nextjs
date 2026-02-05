import type { PropsWithChildren, ReactElement } from 'react';

import clsx from 'clsx';

import css from '@/components/layout/ServerDisplay/ServerDisplay.module.scss';

export type DisplayProps = PropsWithChildren<{
  showOnSm?: boolean;
  showOnMd?: boolean;
  showOnLg?: boolean;
}>;

export const Display = ({
  children,
  showOnSm = false,
  showOnMd = false,
  showOnLg = false,
}: DisplayProps): ReactElement => {
  const displayClasses = clsx({
    [css.smHidden]: !showOnSm,
    [css.smVisible]: showOnSm,

    [css.mdHidden]: !showOnMd,
    [css.mdVisible]: showOnMd,

    [css.lgHidden]: !showOnLg,
    [css.lgVisible]: showOnLg,
  });

  return <div className={displayClasses}>{children}</div>;
};
