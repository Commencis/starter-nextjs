import type { ReactElement } from 'react';

import clsx from 'clsx';

import type {
  ButtonProps,
  ButtonSize,
} from '@/components/common/Button/Button.types';
import type { TextVariant } from '@/components/common/Text/Text.types';
import css from '@/components/common/Button/Button.module.scss';
import { Text } from '@/components/common/Text/Text';

const buttonSizeTextVariantMap = {
  small: 'footnoteMedium',
  medium: 'captionMedium',
  large: 'bodyMedium',
} as const satisfies Record<ButtonSize, TextVariant>;

export const Button = ({
  label,
  size = 'medium',
  variant = 'filled',
  className,
  ...rest
}: ButtonProps): ReactElement => {
  return (
    <button
      className={clsx(css.button, css[variant], css[size], className)}
      {...rest}
    >
      <Text as="span" variant={buttonSizeTextVariantMap[size]}>
        {label}
      </Text>
    </button>
  );
};
