'use server'

import { revalidatePath } from 'next/cache'
import db from './lib/db'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

export async function createMessage(formData: FormData) {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user) {
    return redirect('/api/auth/login')
  }

  const data = await db.guestbookEntry.create({
    data: {
      message: formData.get('message') as string,
      userId: user.id
    }
  })

  revalidatePath('/guestbook')
}

export async function deleteMessage(formData: FormData) {
  const { getPermission } = getKindeServerSession()
  const permission = await getPermission('delete: message')

  if (permission) {
    const data = await db.guestbookEntry.delete({
      where: {
        id: formData.get('messageId') as string
      }
    })
    revalidatePath('/guestbook')
  } else {
    return redirect('/')
  }
}
