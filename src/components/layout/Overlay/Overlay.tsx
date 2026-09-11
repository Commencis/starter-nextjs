import type { PropsWithChildren, ReactElement } from 'react';

import clsx from 'clsx';
import { RemoveScroll } from 'react-remove-scroll';

import type { BoxRenderRootCallback } from '@/components/ui/Box/Box.types';
import { Backdrop } from '@/components/layout/Backdrop/Backdrop';
import { Box } from '@/components/ui/Box/Box';

import css from './Overlay.module.scss';

type OverlayProps = PropsWithChildren<{
  isOpen?: boolean;
  onClose?: () => void;
  ariaLabel?: string;
  closeButtonAriaLabel?: string;
}>;

export function Overlay({
  children,
  isOpen = true,
  onClose,
  ariaLabel = 'Overlay',
  closeButtonAriaLabel = 'Close overlay',
}: OverlayProps): ReactElement {
  const renderRoot: BoxRenderRootCallback = (className, rootChildren) => (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      aria-hidden={!isOpen}
      tabIndex={-1}
      inert={!isOpen}
      className={clsx(css.overlay, className, { [css.open]: isOpen })}
    >
      {rootChildren}
    </div>
  );

  return (
    <RemoveScroll enabled={isOpen} removeScrollBar={false}>
      <Box display="flex" justifyContent="center" renderRoot={renderRoot}>
        <Backdrop
          onClose={isOpen ? onClose : undefined}
          ariaLabel={closeButtonAriaLabel}
        />
        {children}
      </Box>
    </RemoveScroll>
  );
}
