import type { CSSProperties, ReactElement } from 'react';

import clsx from 'clsx';

import type {
  BoxRenderRootCallback,
  BoxStyleProps,
} from '@/components/ui/Box/Box.types';
import { Box, Text } from '@/components/ui';

import { hasWhitespace } from './PlaceholderBox.utils';

import css from './PlaceholderBox.module.scss';

type AllowedBoxStyleProps = Pick<
  BoxStyleProps,
  | 'margin'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginRight'
  | 'marginTop'
  | 'marginY'
  | 'marginX'
  | 'padding'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingTop'
  | 'paddingY'
  | 'paddingX'
>;

type PlaceholderBoxProps = AllowedBoxStyleProps & {
  height?: string;
  width?: string;
  label?: string;
};

/**
 * @remarks
 * Temporary layout placeholder while the UI is still under development.
 * Do not rely on it in production,
 * Delete this component before release.
 */
export function PlaceholderBox({
  height,
  width,
  label = 'Placeholder',
  ...boxStyleProps
}: PlaceholderBoxProps): ReactElement {
  const innerBoxDynamicStyle = {
    '--inner-height': height ?? '100px',
    '--inner-width': width ?? '100%',
  } as CSSProperties;

  const outerBoxRenderRoot: BoxRenderRootCallback = (className, children) => (
    <div
      className={clsx(className, {
        [css.outerBox]: hasWhitespace(boxStyleProps),
      })}
    >
      {children}
    </div>
  );

  const innerBoxRenderRoot: BoxRenderRootCallback = (className, children) => (
    <div className={clsx(className, css.innerBox)} style={innerBoxDynamicStyle}>
      {children}
    </div>
  );

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="full"
      renderRoot={outerBoxRenderRoot}
      {...boxStyleProps}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        renderRoot={innerBoxRenderRoot}
      >
        <Text
          variant="body-1"
          color="inherit"
          fontWeight="semi-bold"
          align="center"
        >
          {label}
        </Text>
      </Box>
    </Box>
  );
}
