import type { BoxStyleProps } from '@/components/ui/Box/Box.types';

function hasMargin(boxStyleProps: BoxStyleProps): boolean {
  return Boolean(
    boxStyleProps.margin ||
    boxStyleProps.marginBottom ||
    boxStyleProps.marginLeft ||
    boxStyleProps.marginRight ||
    boxStyleProps.marginTop ||
    boxStyleProps.marginY ||
    boxStyleProps.marginX
  );
}

function hasPadding(boxStyleProps: BoxStyleProps): boolean {
  return Boolean(
    boxStyleProps.padding ||
    boxStyleProps.paddingBottom ||
    boxStyleProps.paddingLeft ||
    boxStyleProps.paddingRight ||
    boxStyleProps.paddingTop ||
    boxStyleProps.paddingY ||
    boxStyleProps.paddingX
  );
}

export function hasWhitespace(boxStyleProps: BoxStyleProps): boolean {
  return hasMargin(boxStyleProps) || hasPadding(boxStyleProps);
}
