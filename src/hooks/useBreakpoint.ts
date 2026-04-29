import type { Breakpoint } from '@/types/style/breakpoint.types';
import { BREAKPOINTS } from '@/constants/breakpoint.constants';

import { useMediaQuery } from './useMediaQuery';

type UseBreakpointOptions = {
  up?: Breakpoint;
  down?: Breakpoint;
  between?: { min: Breakpoint; max: Breakpoint };
};

function getBreakpointQuery({
  up,
  down,
  between,
}: UseBreakpointOptions): string {
  if (up) {
    return `(min-width: ${BREAKPOINTS[up]}px)`;
  }

  if (down) {
    return `(max-width: ${BREAKPOINTS[down] - 1}px)`;
  }

  if (between) {
    return `(min-width: ${BREAKPOINTS[between.min]}px) and (max-width: ${BREAKPOINTS[between.max] - 1}px)`;
  }

  throw new Error(
    `Please provide a media query option 'up', 'down' or 'between'`
  );
}

export function useBreakpoint(options: UseBreakpointOptions): null | boolean {
  const query = getBreakpointQuery(options);

  return useMediaQuery(query);
}
