export { default } from "next-auth/middleware"
export const config = { 
  matcher: [
    "/test",
    "/dashboard"
  ], 
  pages: { 
    signIn: '/',
  }
}