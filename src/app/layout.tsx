import { ReactElement, ReactNode } from 'react';

import { FONT_ROBOTO } from '@/constants/font.constants';

import '@/styles/main.scss';

const MainLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactElement => {
  return (
    <html lang="en" className={FONT_ROBOTO.variable}>
      <body>{children}</body>
    </html>
  );
};

export default MainLayout;
