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
      </Head>
      <main>
        {/* <Header /> NAVBAR */}
        <div className="content">{children}</div>
      </main>
    </>
  );
}
