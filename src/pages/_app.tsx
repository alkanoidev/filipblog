import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import ThemeProvider from "../context/Theme";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div
      key={router.route}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear", stiffness: 500 }}
    >
      <ThemeProvider>
        <Layout pageTitle="Flog" description="Filip's Personal Blog">
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </motion.div>
  );
}

export default MyApp;
