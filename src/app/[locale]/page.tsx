import { ReactElement } from 'react';
import { useTranslations } from 'next-intl';

import { useConfig } from '@/hooks';

import { Button, Icon, Text } from '@/components/common';

const HomePage = (): ReactElement => {
  const t = useTranslations();

  const { version } = useConfig();

  return (
    <div>
      <h1>{t('starterName')}</h1>

      <Button label="Click Me" />
      <Icon name="chevron-right" size={20} />

      <Text variant="bodyMedium" color="neutral-700">
        {`${t('title')} - ${t('version')}: ${version}`}
      </Text>
    </div>
  );
};

export default HomePage;
