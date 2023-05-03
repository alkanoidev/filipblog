import { useThemeContext } from "../context/Theme";
import IconButton from "./ui/Buttons/IconButton";
import TonalButton from "./ui/Buttons/TonalButton";
import StatsTray from "./StatsTray";
import Head from "next/head";
import classNames from "../utils/classNames";
import { PostMetaType } from "../types/PostType";

export default function ArticleLayout({
  children,
  meta,
}: {
  children: JSX.Element | JSX.Element[];
  meta: PostMetaType;
}) {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="flex mx-auto w-full sm:max-w-4xl lg:max-w-4xl flex-col">
        <div
          className={classNames(
            "flex justify-between items-center sticky z-10 top-0 p-1 bg-light dark:bg-dark"
          )}
        >
          <TonalButton
            href={"/" + "#" + meta.minifiedTitle}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            }
            title="Go Back"
          />
          <IconButton
            onClick={toggleTheme}
            title="Toggle Theme"
            icon={
              theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              )
            }
          />
        </div>
        <h1 className="my-3 mx-2 font-bold text-primary-light dark:text-primary-dark text-5xl">
          {meta.title}
        </h1>
        <div className="ml-2">
          <StatsTray meta={meta} />
        </div>
        <article className="mt-3 mx-2 mb-6 blog-content">{children}</article>
      </div>
    </>
  );
}
