import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/'])


export default clerkMiddleware(async (auth, req) => {

  
  if (isProtectedRoute(req)) await auth.protect()

})

export const config = {
  matcher: [
    // Exclude specific paths like `/api/webhooks/clerk` from Clerk's middleware
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(?!/webhooks/clerk)(.*)', // Bypasses Clerk protection for `/api/webhooks/clerk`
  ],
};