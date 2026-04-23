// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;

export function trimTrailingSlash(stringToTrim: string): string {
  return stringToTrim.replace(/\/+$/, '');
}

function isAbsoluteUrl(url: string): boolean {
  return ABSOLUTE_URL_REGEX.test(url);
}

function getLocationOrigin(): string {
  if (typeof window === 'undefined') {
    return '';
  }
  const { protocol, hostname, port } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

/**
 * Checks whether the given URL is local to the current origin.
 * Relative URLs are always considered local.
 * Absolute URLs are local only if they share the same origin.
 * Does not account for basePath.
 */
export function isLocalURL(url: string): boolean {
  if (!isAbsoluteUrl(url)) {
    return true;
  }
  try {
    const locationOrigin = getLocationOrigin();
    if (!locationOrigin) {
      return false;
    }
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin;
  } catch {
    return false;
  }
}
