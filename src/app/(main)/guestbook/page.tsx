import PostEditor from '@/components/posts/editor/PostEditor'
import Post from '@/components/posts/Post'
import db from '@/lib/db'
import { postDataInclude } from '@/lib/types'

const GuestbookRoute = async () => {
  const posts = await db.post.findMany({
    include: postDataInclude,
    orderBy: {
      createdAt: 'desc'
    }
  })
  return (
    <main className='w-full min-w-0'>
      <div className='w-full min-w-0 space-y-5'>
        <PostEditor />
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </main>
  )
}

export default GuestbookRoute
