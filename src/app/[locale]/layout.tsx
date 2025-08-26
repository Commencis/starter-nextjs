import type { ReactElement, ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';

import { FONT_ROBOTO } from '@/constants/font.constants';
import { routing } from '@/lib/i18n/i18n';

import '@/styles/main.scss';

type MainLayoutProps = Readonly<{
  params: Promise<{ locale: string }>;
  children: ReactNode;
}>;

const MainLayout = async (props: MainLayoutProps): Promise<ReactElement> => {
  const { children, params } = props;

  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={FONT_ROBOTO.variable}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
};

export default MainLayout;
