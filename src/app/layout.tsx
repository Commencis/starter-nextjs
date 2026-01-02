import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function RootLayout(props: Props): ReactNode {
  const { children } = props;

  return children;
}
