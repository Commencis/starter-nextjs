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
