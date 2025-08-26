import type { NextRequest, NextResponse } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';

import { routing } from '@/lib/i18n/i18n';

const handleI18nRouting = createIntlMiddleware(routing);

const middleware = (request: NextRequest): NextResponse => {
  const response: NextResponse = handleI18nRouting(request);

  return response;
};

export const config = {
  matcher: [
    /*
     * This matcher runs the middleware on page routes by excluding specific paths:
     * Skips all API routes that start with /api/.
     * Skips all Next.js internal assets under /_next/.
     * Skips all files by ignoring paths that end with a file extension (e.g. .ico, .svg).
     */
    '/((?!api|_next|.*\\.[^/]+$).*)',
  ],
};

export default middleware;
