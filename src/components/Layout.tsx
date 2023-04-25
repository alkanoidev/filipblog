import dynamic from "next/dynamic";
import Head from "next/head";
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

      <div className="content min-h-screen flex flex-col sm:mx-auto justify-between pt-5 2xl:max-w-5xl xl:max-w-4xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl w-full">
        {children}

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
