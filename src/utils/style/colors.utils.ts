import type {
  SemanticBgColor,
  SemanticFgColor,
} from '@/types/style/color.types';
import type { IconColor } from '@/types/svg.types';

import css from '@/styles/modules/colors.module.scss';

export function getForegroundColorClasses(color: SemanticFgColor): string {
  return css[color];
}

export function getBackgroundColorClasses(color: SemanticBgColor): string {
  return css[color];
}

export function getIconColorClasses(color: IconColor): string {
  return css[`ic-color-${color}`];
}
