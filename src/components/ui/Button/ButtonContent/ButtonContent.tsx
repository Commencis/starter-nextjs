import type { ReactElement } from 'react';

import clsx from 'clsx';

import { Text } from '@/components/ui/Text/Text';

import type {
  ButtonContentElements,
  ResponsiveButtonSize,
} from '../Button.types';
import { getButtonSizeClasses } from '../Button.utils';

import css from './ButtonContent.module.scss';

export type ButtonContentProps = ButtonContentElements & {
  size: ResponsiveButtonSize;
};

export function ButtonContent({
  size,
  leadingIcon,
  trailingIcon,
  label,
}: ButtonContentProps): ReactElement {
  return (
    <div className={clsx(css.content, getButtonSizeClasses(size, css))}>
      {leadingIcon}
      <Text variant="label-2" fontWeight="semi-bold" color="inherit">
        {label}
      </Text>
      {trailingIcon}
    </div>
  );
}
