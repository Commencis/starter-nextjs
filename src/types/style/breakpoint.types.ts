export type Breakpoint = 'xs' | 'md' | 'lg';

export type ResponsiveAttribute<T> = T | Partial<Record<Breakpoint, T>>;
