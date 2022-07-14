import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../layouts/Layout";
import ThemeProvider from "../context/Theme";
import { motion } from "framer-motion";
import { useEffect } from "react";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};
function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.style.display = "none";
    }
  }, []);

  return (
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
  );
}

export default MyApp;
