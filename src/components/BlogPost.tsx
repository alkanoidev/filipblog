import BlogPostMeta from "../types/BlogPostMeta";
import BackButton from "./Buttons/BackButton";
import StatsTray from "./StatsTray";
import Head from "next/head";
import ChangeThemeBtn from "./Buttons/ChangeThemeBtn";

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
      <div className="flex w-full flex-col">
        <div className="flex justify-between items-center sticky rounded-b-lg z-10 top-0 p-1 backdrop-blur-md">
          <BackButton to={meta.minifiedTitle} />
          <ChangeThemeBtn />
        </div>
        <h1 className="my-3 mx-2 font-bold text-primary">{meta.title}</h1>
        <StatsTray meta={meta} />
        <article className="mt-3 mx-2 mb-6 blog-content">{children}</article>
      </div>
    </>
  );
}
