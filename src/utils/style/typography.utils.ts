/*
 * Copyright 2017-2026 Commencis. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Commencis.
 * Any reproduction of this material must contain this notice.
 */

import type { TypographyVariant } from '@/types/style/typography.types';

import css from '@/styles/modules/typography.module.scss';

export function getTypographyClasses(variant: TypographyVariant): string {
  return css[variant] ?? '';
}
