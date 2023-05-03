import { useEffect, useState } from "react";
import classNames from "../../../utils/classNames";

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
      className={classNames(
        "p-3 transition text-center font-semibold focus:outline-none shadow",
        "items-center justify-center flex fixed bottom-[30px] right-[30px] z-50 transition-all ease-in-out",
        "w-12 h-12 group rounded-full",
        "text-primary-light dark:text-primary-dark",
        "inline-flex gap-2 justify-center",
        "bg-surface-light dark:bg-surface-dark",
        // hover
        "lg:hover:bg-primary-light lg:dark:hover:bg-primary-dark",
        "lg:hover:bg-opacity-[12%] lg:dark:hover:bg-opacity-[12%]",
        // focus
        "lg:focus:bg-primary-light lg:dark:focus:bg-primary-dark",
        "lg:focus:bg-opacity-[20%] lg:dark:focus:bg-opacity-[20%]",
        classes
      )}
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
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
