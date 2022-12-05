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
      <div className="flex px-2 w-full flex-col">
        <div className="flex justify-between items-center sticky rounded-b-lg z-10 top-1 backdrop-blur-md">
          <BackButton to={meta.minifiedTitle} />
          <ChangeThemeBtn />
        </div>
        <h1 className="my-3 font-bold text-primary">{meta.title}</h1>
        <StatsTray meta={meta} />
        <article className="mt-3 mb-6 blog-content">{children}</article>
      </div>
    </>
  );
}
