import { Comment } from "@prisma/client";

import { db } from "@/db";

export type CommentWithAuthor = Comment & {
  user: {
    name: string | null;
    image: string | null;
  };
};

export async function fetchCommentsByPostId(
  postId: string
): Promise<CommentWithAuthor[]> {
  return db.comment.findMany({
    where: { postId: postId },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
}
