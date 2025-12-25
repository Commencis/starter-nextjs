'use client';

import { useEffect, useLayoutEffect, useState } from 'react';

export const enum Breakpoint {
  Sm = 'sm',
  Md = 'md',
  Lg = 'lg',
  Xl = 'xl',
}

const BREAKPOINTS: Record<Breakpoint, number> = {
  // TODO: Modify breakpoints according to the design system
  [Breakpoint.Sm]: 0,
  [Breakpoint.Md]: 768,
  [Breakpoint.Lg]: 992,
  [Breakpoint.Xl]: 1200,
};

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

type UseMediaQueryOptions = {
  up?: Breakpoint;
  down?: Breakpoint;
  between?: { min: Breakpoint; max: Breakpoint };
};

const getMediaQuery = ({ up, down, between }: UseMediaQueryOptions): string => {
  if (up) {
    return `(min-width: ${BREAKPOINTS[up]}px)`;
  }

  if (down) {
    return `(max-width: ${BREAKPOINTS[down]}px)`;
  }

  if (between) {
    return `(min-width: ${BREAKPOINTS[between.min]}px) and (max-width: ${BREAKPOINTS[between.max]}px)`;
  }

  throw new Error(
    `Please provide a media query option 'up', 'down' or 'between'`
  );
};

export const useMediaQuery = (
  options: UseMediaQueryOptions
): null | boolean => {
  const [matches, setMatches] = useState<null | boolean>(null);
  const query = getMediaQuery(options);

  useIsomorphicLayoutEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    // Triggered at the first client-side load and if query changes
    const handleChange = (): void => setMatches(!!mediaQueryList.matches);

    if (
      mediaQueryList.addEventListener &&
      typeof mediaQueryList.addEventListener === 'function'
    ) {
      // IOS 14 and above
      mediaQueryList.addEventListener('change', handleChange);
    } else {
      mediaQueryList.addListener(handleChange);
    }

    // Call the listener function immediately to set the local state asap
    setMatches(!!mediaQueryList.matches);

    return (): void => {
      if (
        mediaQueryList.removeEventListener &&
        typeof mediaQueryList.removeEventListener === 'function'
      ) {
        // IOS 14 and above
        mediaQueryList.removeEventListener('change', handleChange);
      } else {
        mediaQueryList.removeListener(handleChange);
      }
    };
  }, [query]);

  return matches;
};
