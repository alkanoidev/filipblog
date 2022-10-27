import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../layouts/Layout";
import ThemeProvider, { useThemeContext } from "../context/Theme";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import Script from "next/script";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};
function MyApp({ Component, pageProps, router }: AppProps) {
  const { theme } = useThemeContext();

  return (
    <>
      <NextNProgress height={3} color="#68AF73" />
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Filip's personal blog" />

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <meta
          name="theme-color"
          content={theme === "dark" ? "#080808" : "#F5F5F5"}
        />
        <meta
          name="keywords"
          content="Development Blog, Dev Blog, Blog, Dev, React, NextJS, Tailwind, JavaScript, Frontend"
        />
      </Head>
      <motion.div
        key={router.route}
        variants={variants}
        className="h-full"
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear", stiffness: 500 }}
      >
        <ThemeProvider>
          <Layout pageTitle="Filip's Blog" description="Filip's Personal Blog">
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </motion.div>
    </>
  );
}

export default MyApp;
