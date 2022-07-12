import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function ScrollToTop() {
  const [classes, setClasses] = useState("");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (
        document.documentElement.scrollTop > 200 ||
        document.body.scrollTop > 200
      ) {
        // Show button
        setClasses("translate-y-0");
      } else {
        // Hide button
        setClasses("translate-y-[100px]");
      }
    });
  }, [document.body.scrollTop, document.documentElement.scrollTop]);

  return (
    <button
      className={`${classes} bg-primary items-center text-light dark:text-dark justify-center flex text-2xl shadow hover:bg-primary/80 rounded-full w-[40px] h-[40px] fixed bottom-[30px] right-[30px] z-50 transition-all`}
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
    >
      <AiOutlineArrowUp />
    </button>
  );
}
