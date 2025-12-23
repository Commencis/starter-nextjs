import type { ReactElement } from 'react';

import clsx from 'clsx';

import type { ServerDisplayProps } from '@/components/layout/ServerDisplay/ServerDisplay.types';
import css from '@/components/layout/ServerDisplay/ServerDisplay.module.scss';

export const ServerDisplay = ({
  children,
  showOnSm,
  showOnMd,
  showOnLg,
}: ServerDisplayProps): ReactElement => {
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
