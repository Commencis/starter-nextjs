import type { ElementType, PropsWithChildren, ReactElement } from 'react';
import type { Route } from 'next';
import Link from 'next/link';

import type { LinkRef } from '@/types/common/link.types';
import type { CommonAriaAttributes } from '@/utils/aria.utils';
import { isLocalURL } from '@/utils/url.utils';

import { Anchor } from '../Anchor/Anchor';

type AdaptiveLinkProps = PropsWithChildren<
  CommonAriaAttributes &
    LinkRef & {
      className?: string;
    }
>;

export function AdaptiveLink({
  href,
  className,
  children,
  ...rest
}: AdaptiveLinkProps): ReactElement {
  const isExternal = !isLocalURL(href);
  const Component: ElementType = isExternal ? Anchor : Link;
  const hrefProps = isExternal ? { href } : { href: href as Route };

  return (
    <Component className={className} {...hrefProps} {...rest}>
      {children}
    </Component>
  );
}
