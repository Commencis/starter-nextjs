export type Breakpoint = 'xs' | 'md' | 'lg';

export type PerBreakpoint<T> = Partial<Record<Breakpoint, T>>;

export type ResponsiveAttribute<T> = T | PerBreakpoint<T>;
