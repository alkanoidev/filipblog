import Head from "next/head";

export default function Layout({
  children,
  pageTitle,
  description,
}: {
  children: JSX.Element | JSX.Element[];
  pageTitle: string;
  description: string;
}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="w-full h-full flex flex-col items-center px-2 sm:px-0">
        <div className="flex w-full sm:w-[800px]">
          <div className="w-1/2 h-32 bg-primary relative top-[-70px] blur-[100px] rounded-full"></div>
          <div className="w-1/2 h-32 bg-secondary relative top-[-70px] blur-[100px] rounded-full"></div>
        </div>
        <div className="content sm:w-[600px] w-full">{children}</div>
      </main>
    </>
  );
}
