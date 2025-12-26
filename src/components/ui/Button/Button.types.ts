/*
 * Copyright 2017-2025 Commencis. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Commencis.
 * Any reproduction of this material must contain this notice.
 */

import type { ButtonHTMLAttributes } from 'react';

export type AllowedButtonHTMLAttributes = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'name' | 'onClick' | 'disabled'
>;

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
