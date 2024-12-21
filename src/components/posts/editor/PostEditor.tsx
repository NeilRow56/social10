'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'
import { submitPost } from '@/actions/posts'
import UserAvatar from '../UserAvatar'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import './styles.css'

export default function PostEditor() {
  const { user } = useKindeBrowserClient()

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bold: false,
        italic: false
      }),
      Placeholder.configure({
        placeholder: "What's crack-a-lackin'?"
      })
    ],
    immediatelyRender: false
  })

  const input =
    editor?.getText({
      blockSeparator: '\n'
    }) || ''

  async function onSubmit() {
    await submitPost(input)
    editor?.commands.clearContent()
  }

  return (
    <div className='flex flex-col gap-5 rounded-2xl border bg-card p-5 shadow-sm'>
      <div className='flex gap-5'>
        <UserAvatar avatarUrl={user?.picture} className='hidden sm:inline' />
        <EditorContent
          editor={editor}
          className={cn(
            'max-h-[20rem] w-full overflow-y-auto rounded-2xl bg-slate-50 px-5 py-3 dark:bg-slate-900'
          )}
        />
      </div>
      <div className='flex justify-end'>
        <Button
          onClick={onSubmit}
          disabled={!input.trim()}
          className='min-w-20'
        >
          Post
        </Button>
      </div>
    </div>
  )
}
