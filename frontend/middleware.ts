import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { PROTECTED_ROUTES_PATHS, PUBLIC_ROUTES_PATHS, ROUTES } from "@/routes";

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check for authentication token in HTTP-only cookie
  const authToken = request.cookies.get("auth-token")?.value;

  const isPublicRoute = PUBLIC_ROUTES_PATHS.some(route =>
    route === "/" ? pathname === route : pathname.startsWith(route),
  );

  const isProtectedRoute = PROTECTED_ROUTES_PATHS.some(route =>
    pathname.startsWith(route),
  );

  // Early return for routes that don't need authentication checks
  if (!isPublicRoute && !isProtectedRoute) {
    return NextResponse.next();
  }

  // If the user is authenticated and tries to access the login or register page, redirect to dashboard
  if (isPublicRoute && authToken) {
    return NextResponse.redirect(new URL(ROUTES.dashboard, request.url));
  }

  // Check if it's a protected route
  if (isProtectedRoute && !authToken) {
    return NextResponse.redirect(new URL(ROUTES.login, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
