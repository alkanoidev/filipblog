import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if ("theme" in localStorage) {
              const theme = localStorage.getItem("theme");
              if (theme === "dark") {
                document.documentElement.classList.add("dark");
                document.documentElement.style.colorScheme = "dark";
              } else {
                document.documentElement.classList.remove("dark");
                document.documentElement.style.colorScheme = "light";
              }
            } else {
              document.documentElement.classList.add("dark");
              document.documentElement.style.colorScheme = "dark";
            }`,
          }}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
