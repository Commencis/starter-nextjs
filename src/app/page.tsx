import { ReactElement } from 'react';

import { useConfig } from '@/hooks';

import { Button, Icon, Text } from '@/components/common';

const HomePage = (): ReactElement => {
  const { version } = useConfig();

  return (
    <div>
      <h1>Home Page</h1>
      <Button label="Click Me" />
      <Icon name="chevron-right" size={20} />
      <Text variant="bodyMedium" color="neutral-700">
        {`Version - ${version}`}
      </Text>
    </div>
  );
};

export default HomePage;
