import { NextResponse, type NextRequest } from "next/server";

import { i18n } from "./app/i18n/config";

const PUBLIC_FILE_PATTERN = /\.[^/]+$/;
const LOCALE_LIKE_SEGMENT_PATTERN = /^[a-z]{2}(?:-[a-z]{2})?$/i;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    PUBLIC_FILE_PATTERN.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const [firstSegment] = segments;

  if (!firstSegment) {
    const url = request.nextUrl.clone();
    url.pathname = `/${i18n.defaultLocale}`;
    return NextResponse.redirect(url);
  }

  const hasSupportedLocale = i18n.locales.some((locale) => locale === firstSegment);
  if (hasSupportedLocale) {
    return NextResponse.next();
  }

  if (segments.length === 1 && LOCALE_LIKE_SEGMENT_PATTERN.test(firstSegment)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${i18n.defaultLocale}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|images|.*\\..*).*)"],
};
