import BlogPostMeta from "../types/BlogPostMeta";
import { HeadPost } from "./HeadPost";

export default function BlogPost({
  children,
  meta,
}: {
  children: JSX.Element | JSX.Element[];
  meta: BlogPostMeta;
}) {
  return (
    <>
      <HeadPost meta={meta} isBlogPost />
      <article>{children}</article>
    </>
  );
}
