import { Breakpoint, useMediaQuery } from './useMediaQuery';

type BreakpointRanges = {
  isSm: boolean | null;
  isMd: boolean | null;
  isLg: boolean | null;
};

export function useBreakpointRanges(): BreakpointRanges {
  const isSm = useMediaQuery({ down: Breakpoint.Md });
  const isMd = useMediaQuery({
    between: { min: Breakpoint.Md, max: Breakpoint.Lg },
  });
  const isLg = useMediaQuery({ up: Breakpoint.Lg });
  return { isSm, isMd, isLg };
}
