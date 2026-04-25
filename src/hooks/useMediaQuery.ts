import { useLayoutEffect, useState } from 'react';

export function useMediaQuery(query: string): null | boolean {
  const [matches, setMatches] = useState<null | boolean>(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia(query);
    const handler = (): void => setMatches(mediaQuery.matches);

    // Sync once on mount and when query changes.
    handler();

    mediaQuery.addEventListener('change', handler);

    return (): void => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, [query]);

  return matches;
}
