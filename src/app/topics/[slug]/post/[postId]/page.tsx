import { divider } from "@nextui-org/react";
import Link from "next/link";
import paths from "@/path";
import PostShow from "@/component/post/post-show";
import CommentCreateForm from "@/component/comments/comment-create-form";
import CommentList from "@/component/comments/comment-list";
import { fetchCommentsByPostId } from "@/db/queries/comments";

interface ShowPostProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default async function ShowPost({ params }: ShowPostProps) {
  const { slug, postId } = params;

  return (
    <div>
      <Link href={paths.topicShow(slug)}> back to {slug}</Link>
      <PostShow postId={postId} />
      <CommentCreateForm postId={postId} startOpen />
      <CommentList postId={postId}/>
    </div>
  );
}
