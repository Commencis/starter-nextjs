import type { PropsWithChildren, ReactElement } from 'react';

import clsx from 'clsx';

import css from './Display.module.scss';

type DisplayProps = PropsWithChildren<{
  showOnXs?: boolean;
  showOnMd?: boolean;
  showOnLg?: boolean;
}>;

export function Display({
  children,
  showOnXs = false,
  showOnMd = false,
  showOnLg = false,
}: DisplayProps): ReactElement {
  const displayClasses = clsx({
    [css.xsHidden]: !showOnXs,
    [css.xsVisible]: showOnXs,

    [css.mdHidden]: !showOnMd,
    [css.mdVisible]: showOnMd,

    [css.lgHidden]: !showOnLg,
    [css.lgVisible]: showOnLg,
  });

  return <div className={displayClasses}>{children}</div>;
}
