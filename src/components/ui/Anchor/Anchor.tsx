import type {
  AnchorHTMLAttributes,
  PropsWithChildren,
  ReactElement,
} from 'react';

type AllowedAnchorAttributes = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
>;

type AnchorProps = PropsWithChildren<
  AllowedAnchorAttributes & {
    href: string;
  }
>;

export function Anchor({
  className,
  target = '_blank',
  rel = 'noopener',
  children,
  ...rest
}: AnchorProps): ReactElement {
  return (
    <a className={className} target={target} rel={rel} {...rest}>
      {children}
    </a>
  );
}
