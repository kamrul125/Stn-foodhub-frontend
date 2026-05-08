import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Next.js 16+ এ 'middleware' এর পরিবর্তে 'proxy' কনভেনশন ব্যবহার করা হচ্ছে।
 * এই ফাংশনটি প্রতিটি রিকোয়েস্ট ইন্টারসেপ্ট করবে।
 */
export default function proxy(request: NextRequest) {
  // আপনার অথেনটিকেশন বা রিডাইরেক্ট লজিক এখানে লিখুন
  // উদাহরণ: console.log("Request Path:", request.nextUrl.pathname);
  
  return NextResponse.next();
}

// কোন কোন পাথে এই প্রক্সি কাজ করবে সেটি এখানে ডিফাইন করা আছে
export const config = {
  matcher: [
    /*
     * নিচের পাথগুলো বাদে বাকি সব পাথে প্রক্সি কাজ করবে:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};