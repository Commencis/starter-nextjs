import type { ReactElement, ReactNode } from 'react';

import { FONT_ROBOTO } from '@/constants/font.constants';

import { MainLayoutContainer } from '@/layouts';

import '@/styles/globals.scss';

type MainLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default async function MainLayout(
  props: MainLayoutProps
): Promise<ReactElement> {
  const { children } = props;

  return (
    <html lang="en" className={FONT_ROBOTO.variable}>
      <body>
        <MainLayoutContainer>{children}</MainLayoutContainer>
      </body>
    </html>
  );
}
