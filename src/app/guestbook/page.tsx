import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React from 'react'

import { XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { createMessage, deleteMessage } from '@/actions'
import db from '@/lib/db'
import { SubmitButton } from '@/components/SubmitButton'

async function getData() {
  const data = await db.guestbookEntry.findMany({
    select: {
      message: true,
      id: true,
      User: {
        select: {
          firstName: true
        }
      }
    }
  })

  return data
}

const GuestbookRoute = async () => {
  const data = await getData()
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <Card className='w-[400px]'>
        <CardHeader>
          <CardTitle>Guestbook Page</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={createMessage}>
            <Input name='message' placeholder='your message' required />
            <SubmitButton />
          </form>

          <div className='mt-8'>
            {data.map((item: any) => (
              <div className='flex w-full items-center justify-between'>
                <div className='flex'>
                  <p className='mr-1'>{item.User.firstName}:</p>
                  <p>{item.message}</p>
                </div>
                <form action={deleteMessage}>
                  <input type='hidden' name='messageId' value={item.id} />
                  <Button size='icon' variant='outline'>
                    <XIcon className='h-4 w-4' />
                  </Button>
                </form>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default GuestbookRoute
