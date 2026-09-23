import type { ReactElement } from 'react';

import css from './Backdrop.module.scss';

type BackdropProps = {
  onClose?: () => void;
  ariaLabel?: string;
};

export function Backdrop({
  onClose,
  ariaLabel = 'Close',
}: BackdropProps): ReactElement {
  if (onClose) {
    return (
      <button
        type="button"
        className={css.backdrop}
        onClick={onClose}
        aria-label={ariaLabel}
        tabIndex={-1}
      />
    );
  }

  return <div className={css.backdrop} aria-hidden="true" />;
}
