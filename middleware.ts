import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res })

  // Refresh session if expired
  const { data: { session } } = await supabase.auth.getSession()

  // Only protect the /join page
  if (request.nextUrl.pathname === '/join') {
    // If user is not signed in, redirect to login
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // If user is signed in and tries to access /login,
  // redirect them to home page
  if (session && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return res
}

export const config = {
  matcher: ['/join', '/login'],
} 