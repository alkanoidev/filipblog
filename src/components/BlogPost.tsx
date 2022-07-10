import BlogPostMeta from "../types/BlogPostMeta";
import BackButton from "./Buttons/BackButton";
import StatsTray from "./StatsTray";
import Head from "next/head";

export default function BlogPost({
  children,
  meta,
}: {
  children: JSX.Element | JSX.Element[];
  meta: BlogPostMeta;
}) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <BackButton to={meta.minifiedTitle} />
      <h1 className="my-3">{meta.title}</h1>
      <StatsTray meta={meta} />
      <article className="mt-3 mb-6 blog-content">{children}</article>
    </>
  );
}
