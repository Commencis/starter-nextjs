import type { WithOptionalId } from '@/types/common.types';

export type AllowedRelAttribute = string;

export type AllowedTargetAttribute = '_blank';

export type LinkRef = WithOptionalId & {
  href: string;
  target?: AllowedTargetAttribute;
  rel?: AllowedRelAttribute;
};
