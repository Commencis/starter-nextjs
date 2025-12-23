import type { ReactElement } from 'react';
import { useTranslations } from 'next-intl';

import { Button, Text } from '@/components/common';

import { useConfig } from '@/hooks';

const HomePage = (): ReactElement => {
  const t = useTranslations();

  const { version } = useConfig();

  return (
    <div>
      <h1>{t('starterName')}</h1>

      <Button label="Click Me" />

      <Text variant="bodyMedium" color="neutral-700">
        {`${t('title')} - ${t('version')}: ${version}`}
      </Text>
    </div>
  );
};

export default HomePage;
