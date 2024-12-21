import PostEditor from '@/components/posts/editor/PostEditor'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

const GuestbookRoute = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  return (
    <main className='h-[200vh] w-full'>
      <div className='w-full'>
        <PostEditor />
      </div>
    </main>
  )
}

export default GuestbookRoute
