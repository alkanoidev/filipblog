import Link from "next/link";
import BlogPostMeta from "../types/BlogPostMeta";
import PostType from "../types/Post";
import { HeadPost } from "./HeadPost";

export const Post = ({ post }: { post: PostType }) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <article>
      <HeadPost meta={meta} />
      <Link href={"/blog" + link}>
        <a>Read more &rarr;</a>
      </Link>
    </article>
  );
};
