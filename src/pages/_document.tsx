import { useEffect } from "react";
import { Html, Head, Main, NextScript } from "next/document";
import loader from "../loader";
import { useThemeContext } from "../context/Theme";

function MyDocument() {
  const { theme } = useThemeContext();

  return (
    <Html>
      <Head />
      <head>
        <style>{loader}</style>
      </head>
      <body className="bg-dark antialiased selection:bg-secondary/50 selection:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
