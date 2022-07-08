import BlogPostMeta from "../types/BlogPostMeta";

export default function BlogPost({
  children,
  meta,
}: {
  children: JSX.Element | JSX.Element[];
  meta: BlogPostMeta;
}) {
  return (
    <>
      <article>{children}</article>
    </>
  );
}
