import createMiddleware from 'next-intl/middleware';

import { routing } from '@/lib/i18n/i18n';

export default createMiddleware(routing);

export const config = {
  /**
   * Run on every path *except* the ones that…
   *   • start with `api`                   → API routes
   *   • start with `/_next/static`         → build-time JS/CSS/etc.
   *   • start with `/_next/image`          → Image Optimization
   *   • contain “.” in the last segment    → any file served from /public
   */
  matcher: ['/((?!api|_next/static|_next/image)(?!.*\\.[^/]+$).*)'],
};
