'use Client'

import { PostData } from '@/lib/types'

interface PostProps {
  post: PostData
}

export default function Post({ post }: PostProps) {
  return <article>{post.content}</article>
}
