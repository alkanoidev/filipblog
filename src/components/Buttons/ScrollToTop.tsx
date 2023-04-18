import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [classes, setClasses] = useState("");

  useEffect(() => {
    setClasses("translate-y-[100px]");

    document.addEventListener("scroll", () => {
      if (
        document.documentElement.scrollTop > 200 ||
        document.body.scrollTop > 200
      ) {
        setClasses("translate-y-0");
      } else {
        setClasses("translate-y-[100px]");
      }
    });
  }, []);

  return (
    <button
      className={`
      ${classes} bg-primary-light dark:bg-primary-dark items-center text-light dark:text-dark justify-center flex text-2xl shadow
      hover:bg-primary-light/80 dark:hover:bg-primary-dark/80 rounded-full w-[40px] h-[40px] fixed bottom-[30px] right-[30px] z-50 transition-all
      motion-reduce:transition-none`}
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
        />
      </svg>
    </button>
  );
}
