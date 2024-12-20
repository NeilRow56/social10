'use client'

import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'

export function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <>
      {pending ? (
        <Button disabled className='mt-4 w-full'>
          <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Submitting
        </Button>
      ) : (
        <Button type='submit' className='mt-4 w-full'>
          Submit
        </Button>
      )}
    </>
  )
}
