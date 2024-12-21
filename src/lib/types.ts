import { Prisma } from '@prisma/client'

export const postDataInclude = {
  user: {
    select: {
      firstName: true,
      lastName: true,
      avatarUrl: true
    }
  }
} satisfies Prisma.PostInclude

export type PostData = Prisma.PostGetPayload<{
  include: typeof postDataInclude
}>
