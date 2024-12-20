import db from '@/lib/db'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { NextResponse } from 'next/server'

export async function GET() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user || !user.id || null) {
    throw new Error('Something went wrong')
  }

  let dbUser = await db.user.findUnique({
    where: {
      id: user.id
    }
  })
  // nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

  if (!dbUser) {
    dbUser = await db.user.create({
      data: {
        id: user.id,
        firstName: user.given_name ?? '',
        lastName: user.family_name ?? '',
        email: user.email ?? '',
        avatarUrl: user.picture ?? ''
      }
    })
  }

  return NextResponse.redirect('http://localhost:3000/')
}
