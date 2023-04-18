export default function Footer() {
  return (
    <footer className="w-full mx-auto sm:w-[652px] lg:w-[1024px] my-5 flex justify-start flex-col sm:flex-row sm:justify-between">
      <p>
        Built with{" "}
        <a className="text-primary" href="https://nextjs.org/">
          Next.js
        </a>
        ,{" "}
        <a className="text-primary" href="https://mdxjs.com/">
          MDX
        </a>{" "}
        and{" "}
        <a className="text-primary" href="https://tailwindcss.com/">
          Tailwind
        </a>
      </p>
      <p>
        <a className="text-primary" href="https://filipivanovic.netlify.app/">
          Portfolio
        </a>{" "}
        <a className="text-primary" href="https://github.com/alkanoidev">
          GitHub
        </a>
      </p>
    </footer>
  );
}
