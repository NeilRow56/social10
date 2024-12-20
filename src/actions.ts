'use server'

import { revalidatePath } from 'next/cache'
import db from './lib/db'

export async function createMessage(formData: FormData) {
  const data = await db.guestbookEntry.create({
    data: {
      message: formData.get('message') as string,
      userId: 'sdf'
    }
  })

  revalidatePath('/guestbook')
}

export async function deleteMessage(formData: FormData) {
  const data = await db.guestbookEntry.delete({
    where: {
      id: formData.get('messageId') as string
    }
  })
}
