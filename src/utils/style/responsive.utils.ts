/*
 * Copyright 2017-2025 Commencis. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Commencis.
 * Any reproduction of this material must contain this notice.
 */

import clsx from 'clsx';

type GetResponsiveClassesOptions<TProps, TPrefixMap> = {
  props: TProps;
  prefixMap: TPrefixMap;
  css: Record<string, string>;
};

export function getResponsiveClasses<
  TProps extends Record<string, unknown>,
  TPrefixMap extends Record<string, string>,
>({
  props,
  prefixMap,
  css,
}: GetResponsiveClassesOptions<TProps, TPrefixMap>): string {
  const classList = Object.entries(props).reduce<string[]>(
    (acc, [key, value]) => {
      if (value === undefined) {
        return acc;
      }

      const prefix = prefixMap[key as keyof TPrefixMap];
      if (!prefix) {
        return acc;
      }

      if (typeof value === 'object' && value !== null) {
        Object.entries(value).forEach(([bp, bpValue]) => {
          if (bpValue !== undefined) {
            acc.push(css[`${prefix}-${bp}-${bpValue}`]);
          }
        });
      } else {
        acc.push(css[`${prefix}-${value}`]);
      }

      return acc;
    },
    []
  );

  return clsx(classList);
}
