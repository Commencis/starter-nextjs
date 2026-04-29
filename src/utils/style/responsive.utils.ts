import clsx from 'clsx';

import type {
  UnknownComponentProps,
  UnknownStyleProps,
} from '@/types/common.types';

type GetResponsiveClassesOptions<TProps, TPrefixMap> = {
  props: TProps;
  prefixMap: TPrefixMap;
  css: Record<string, string>;
};

export function getResponsiveClasses<
  TProps extends UnknownStyleProps,
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
            const className = css[`${prefix}-${bp}-${bpValue}`];
            if (className) {
              acc.push(className);
            }
          }
        });
      } else {
        const className = css[`${prefix}-${value}`];
        if (className) {
          acc.push(className);
        }
      }

      return acc;
    },
    []
  );

  return clsx(classList);
}

function isStylePropKey<K extends string>(
  key: string,
  allowedKeys: readonly K[]
): key is K {
  return allowedKeys.some((k) => k === key);
}

export function extractStyleProps<K extends string>(
  props: UnknownComponentProps,
  keys: readonly K[]
): Partial<Pick<UnknownComponentProps, K>> {
  return Object.entries(props).reduce<Partial<Pick<UnknownComponentProps, K>>>(
    (acc, [key, value]) => {
      if (isStylePropKey(key, keys)) {
        acc[key] = value;
      }
      return acc;
    },
    {}
  );
}

type StyleResolverConfig<K extends string> = {
  keys: readonly K[];
  prefixMap: Record<K, string>;
  css: Record<string, string>;
};

export function responsiveStyleResolver<K extends string>({
  keys,
  prefixMap,
  css,
}: StyleResolverConfig<K>): (componentProps: UnknownComponentProps) => string {
  return (componentProps) =>
    getResponsiveClasses({
      props: extractStyleProps(componentProps, keys),
      prefixMap,
      css,
    });
}
