import { Button } from '@/components/ui/button'
import {
  RegisterLink,
  LoginLink,
  LogoutLink
} from '@kinde-oss/kinde-auth-nextjs/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Link from 'next/link'

export default async function Home() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  return (
    <section className='mx-auto flex h-screen w-full flex-col items-center justify-center lg:w-[60%]'>
      <h1 className='scroll-m-20 text-center text-3xl font-semibold tracking-normal md:text-4xl lg:text-5xl xl:text-6xl'>
        With the right tools, Authentication is easy!
      </h1>
      <p className='mt-4 text-center leading-7 text-muted-foreground lg:w-[70%] lg:text-lg'>
        Your one-stop destination for all things web development, from the
        latest updates to in-depth tutorials and resources.
      </p>

      {user ? (
        <div className='mt-5'>
          <LogoutLink className='mt-10'>
            <Button variant='destructive'>Logout</Button>
          </LogoutLink>
          <Button asChild className='ml-5'>
            <Link href='/guestbook'>Guest Book</Link>
          </Button>
        </div>
      ) : (
        <div className='mt-10 flex w-full items-center gap-x-4'>
          <LoginLink postLoginRedirectURL='/guestbook'>
            <Button>Sign in</Button>
          </LoginLink>

          <RegisterLink>
            <Button variant='outline' className='bg-slate-200'>
              Sign up
            </Button>
          </RegisterLink>
        </div>
      )}
    </section>
  )
}
