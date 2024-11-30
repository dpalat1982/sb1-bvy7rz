import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add cache control headers
  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  response.headers.set('CDN-Cache-Control', 'public, max-age=31536000, immutable');
  response.headers.set('Vercel-CDN-Cache-Control', 'public, max-age=31536000, immutable');

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};