import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import ThemeProvider from "../context/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout pageTitle="Flog" description="Filip's Personal Blog">
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
