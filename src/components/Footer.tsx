export default function Footer() {
  return (
    <footer className="mx-auto w-full my-5 flex justify-start flex-col sm:flex-row sm:justify-between">
      <p>
        Built with{" "}
        <a
          className="text-primary-light dark:text-primary-dark"
          href="https://nextjs.org/"
        >
          Next.js
        </a>
        ,{" "}
        <a
          className="text-primary-light dark:text-primary-dark"
          href="https://mdxjs.com/"
        >
          MDX
        </a>{" "}
        and{" "}
        <a
          className="text-primary-light dark:text-primary-dark"
          href="https://tailwindcss.com/"
        >
          Tailwind
        </a>
      </p>
      <p>
        <a
          className="text-primary-light dark:text-primary-dark"
          href="https://filipivanovic.netlify.app/"
        >
          Portfolio
        </a>{" "}
        <a
          className="text-primary-light dark:text-primary-dark"
          href="https://github.com/alkanoidev"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}
