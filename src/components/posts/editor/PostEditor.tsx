'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'
import { submitPost } from '@/actions/posts'
import UserAvatar from '../UserAvatar'

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
    <div className='flex flex-col gap-5 rounded-2xl bg-card p-5 shadow-sm'>
      <div className='flex gap-5'>
        <UserAvatar avatarUrl={user?.picture} className='hidden sm:inline' />
      </div>
    </div>
  )
}
