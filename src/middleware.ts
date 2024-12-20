import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware'
export default withAuth({
  loginPage: 'api/auth/login',
  isReturnToCurrentPage: true
})
//Protected Routes
export const config = {
  matcher: ['/guestbook']
}
