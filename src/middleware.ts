import createMiddleware from "next-intl/middleware";
import { pathnames, locales, localePrefix } from "./config";
import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect from /ar to /en
  if (pathname === "/ar") {
    const url = request.nextUrl.clone();
    url.pathname = "/en";
    return NextResponse.redirect(url);
  }

  // Use next-intl's default middleware behavior for other routes
  return createMiddleware({
    defaultLocale: "en",
    locales,
    pathnames,
    localePrefix,
  })(request);
}
export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(ar|en)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*|api/).*)",
  ],
};
