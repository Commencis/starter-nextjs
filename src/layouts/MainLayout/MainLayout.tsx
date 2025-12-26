/*
 * Copyright 2017-2025 Commencis. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Commencis.
 * Any reproduction of this material must contain this notice.
 */

import type { PropsWithChildren, ReactElement } from 'react';

export function MainLayoutContainer({
  children,
}: PropsWithChildren): ReactElement {
  return <main>{children}</main>;
}
