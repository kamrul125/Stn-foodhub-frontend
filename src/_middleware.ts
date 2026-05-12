import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  // ১. লগইন বা রেজিস্টার পেজে থাকলে এবং টোকেন থাকলে ড্যাশবোর্ডে পাঠিয়ে দাও
  // এটি লুপ হওয়া আটকাবে
  if (token && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard/admin", request.url));
  }

  // ২. প্রোটেক্টেড রুট চেক
  const isProtectedRoute = pathname.startsWith("/dashboard");

  if (isProtectedRoute && !token) {
    // টোকেন না থাকলে লগইন পেজে রিডাইরেক্ট
    const loginUrl = new URL("/login", request.url);
    // নেক্সট জেএস-এ অনেক সময় পুরনো ক্যাশ থাকে, তাই রিডাইরেক্টের সময় কুকি ক্লিয়ার নিশ্চিত করা ভালো
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
      সব রাউট ধরবে শুধু নিচের গুলো বাদে:
      - api, _next/static, _next/image, favicon.ico
      - পাবলিক ইমেজ বা এসেট ফোল্ডার (যদি থাকে)
    */
    "/((?!api|_next/static|_next/image|favicon.ico|public|images).*)",
  ],
};