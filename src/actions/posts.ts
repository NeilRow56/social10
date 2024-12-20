'use server'

import db from '@/lib/db'
import { createPostSchema } from '@/lib/validation'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

export async function submitPost(input: string) {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user) throw new Error('Unauthorized')

  const { content } = createPostSchema.parse({ content: input })

  await db.post.create({
    data: {
      content: content,
      userId: user.id
    }
  })
}
