import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * 🔥 Next.js 16+ Proxy Middleware
 * - Runs on every request (except excluded paths)
 * - Used for auth guard, logging, redirects
 */
export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 🧠 Example: log request path
  console.log("Request Path:", pathname);

  // 🔐 Example: Protected routes (optional)
  const isProtectedRoute =
    pathname.startsWith("/dashboard");

  const token = request.cookies.get("token")?.value;

  // 🚫 If no token and trying to access protected route
  if (isProtectedRoute && !token) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // ✅ Allow request
  return NextResponse.next();
}

/**
 * 🌐 Route matcher (which routes middleware will run on)
 */
export const config = {
  matcher: [
    /*
      Exclude:
      - API routes
      - Next.js internal files
      - Static assets
    */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};