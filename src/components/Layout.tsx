import dynamic from "next/dynamic";
import Head from "next/head";
import BackgroundLight from "./BackgroundLight";
import Footer from "./Footer";

const ScrollToTop = dynamic(() => import("./Buttons/ScrollToTop"), {
  ssr: false,
});

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

      <div className="w-full h-full relative z-0 flex flex-col items-center px-2 sm:px-0">
        <BackgroundLight />
        <main className="content min-h-screen flex flex-col justify-between sm:w-[600px] mt-10 w-full">
          {children}

          <Footer />
          <ScrollToTop />
        </main>
      </div>
    </>
  );
}
