import { hasLocale } from 'next-intl';
import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';
import { getRequestConfig } from 'next-intl/server';

import {
  DEFAULT_LOCALE,
  LOCALIZATION_NAMESPACES,
  SUPPORTED_LOCALES,
} from '@/constants';

const loadLocaleNamespaces = async (
  locale: string,
  namespaces: string[]
): Promise<Record<string, string>> => {
  const modules = await Promise.all(
    namespaces.map((key) =>
      import(`@/assets/locales/${locale}/${key}.json`).then(
        (mod) => mod.default
      )
    )
  );

  return Object.assign({}, ...modules);
};

export const routing = defineRouting({
  locales: SUPPORTED_LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localeDetection: false,
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: await loadLocaleNamespaces(locale, LOCALIZATION_NAMESPACES),
  };
});
