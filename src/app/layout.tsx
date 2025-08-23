import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const RootLayout = (props: Props): ReactNode => {
  const { children } = props;

  return children;
};

export default RootLayout;
