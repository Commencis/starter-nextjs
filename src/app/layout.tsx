import { ReactElement } from 'react';

type Props = {
  children: ReactElement;
};

const RootLayout = (props: Props): ReactElement => {
  const { children } = props;

  return children;
};

export default RootLayout;
