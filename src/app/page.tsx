import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <section className='mx-auto flex h-screen w-full flex-col items-center justify-center lg:w-[60%]'>
      <h1 className='scroll-m-20 text-center text-3xl font-semibold tracking-normal md:text-4xl lg:text-5xl xl:text-6xl'>
        With the right tools, Authentication is easy!
      </h1>
      <p className='mt-4 text-center leading-7 text-muted-foreground lg:w-[70%] lg:text-lg'>
        Your one-stop destination for all things web development, from the
        latest updates to in-depth tutorials and resources.
      </p>

      <div className='mt-10 flex items-center gap-x-4'>
        <Button>Sign in</Button>

        <Button variant='secondary'>Register</Button>
      </div>
    </section>
  )
}
