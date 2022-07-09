import BlogPostMeta from "../types/BlogPostMeta";
import BackButton from "./Buttons/BackButton";
import StatsTray from "./StatsTray";

export default function BlogPost({
  children,
  meta,
}: {
  children: JSX.Element | JSX.Element[];
  meta: BlogPostMeta;
}) {
  return (
    <>
      <h1 className="my-3">{meta.title}</h1>
      <StatsTray meta={meta} />
      <article className="mt-3">{children}</article>
      <BackButton to={meta.minifiedTitle} />
    </>
  );
}
