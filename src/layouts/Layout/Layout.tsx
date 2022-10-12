import dynamic from "next/dynamic";
import Head from "next/head";
import BackgroundLight from "../../components/BackgroundLight";
import Footer from "../../components/Footer";

const ScrollToTop = dynamic(
  () => import("../../components/Buttons/ScrollToTop"),
  {
    ssr: false,
  }
);

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

      <div className="w-full h-full absolute top-0 -z-1 flex justify-center pointer-events-none">
        <BackgroundLight />
      </div>
      <div className="content min-h-screen flex flex-col justify-between pt-10 w-full lg:px-5 md:px-2 sm:px-2 px-2">
        {children}

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
