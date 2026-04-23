/*
 * Copyright 2017-2026 Commencis. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Commencis.
 * Any reproduction of this material must contain this notice.
 */

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
