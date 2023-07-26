export default function Footer() {
  return (
    <footer className="mx-auto w-full my-5 flex justify-start flex-col sm:flex-row px-1 sm:justify-between 2xl:max-w-5xl xl:max-w-4xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl">
      <p>
        Built with{" "}
        <a
          className="text-primary-light dark:text-primary-dark text-sm"
          href="https://nextjs.org/"
        >
          Next.js
        </a>
        ,{" "}
        <a
          className="text-primary-light dark:text-primary-dark text-sm"
          href="https://mdxjs.com/"
        >
          MDX
        </a>{" "}
        and{" "}
        <a
          className="text-primary-light dark:text-primary-dark text-sm"
          href="https://tailwindcss.com/"
        >
          Tailwind
        </a>
      </p>
      <p>
        <a
          className="text-primary-light dark:text-primary-dark text-sm"
          href="https://filipivanovic.netlify.app/"
        >
          Portfolio
        </a>{" "}
        <a
          className="text-primary-light dark:text-primary-dark text-sm"
          href="https://github.com/alkanoidev"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}
