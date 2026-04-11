import { NextResponse, type NextRequest } from "next/server";

import { i18n } from "./app/i18n/config";

/**
 * i18n Middleware — detects locale from the URL path and redirects
 * to the default locale when no locale prefix is present.
 *
 * Example: `/` → `/en/`, `/about` → `/en/about`
 * Static assets and Next.js internals are excluded.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip Next.js internals and static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.includes(".") // static files (favicon.ico, etc.)
  ) {
    return NextResponse.next();
  }

  // Check if the pathname already starts with a supported locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect to the default locale
  const url = request.nextUrl.clone();
  url.pathname = `/${i18n.defaultLocale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  // Match all paths except Next.js internals and static files
  matcher: ["/((?!_next|api|images|.*\\..*).*)"],
};
