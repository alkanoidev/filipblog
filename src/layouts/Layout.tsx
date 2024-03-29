import dynamic from "next/dynamic";
import Head from "next/head";
import Footer from "../components/Footer";

const ScrollToTop = dynamic(() => import("../components/ui/Buttons/ScrollToTop"), {
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

      <div className="content min-h-screen flex flex-col sm:mx-auto justify-between pt-5">
        {children}

        <Footer />
        
        <ScrollToTop />
      </div>
    </>
  );
}
