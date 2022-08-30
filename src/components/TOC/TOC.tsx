import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function TOC({ children }: { children: React.ReactNode[] }) {
  const [opened, setOpened] = useState(false);
  const wrapperRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent): void => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpened(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div
      className={`TOC relative bg-off-light dark:bg-off-dark transition-all shadow px-3 pb-3 rounded-lg`}
      ref={wrapperRef}
    >
      <div className="flex justify-between items-end">
        <h4 className="leading-tight text-dark dark:text-light font-normal">
          Table Of Contents
        </h4>
        <button
          onClick={() => {
            setOpened((prev) => !prev);
          }}
          onBlur={() => {
            setTimeout(() => {
              setOpened(false);
            }, 500);
          }}
          className="rounded-md transition ease-out px-2 mb-1 text-lg"
        >
          {opened ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      </div>
      <div
        className={`list ${
          opened && "show"
        } bg-off-light dark:bg-off-dark py-1 shadow-md w-full rounded-b-lg`}
      >
        {children}
      </div>
    </div>
  );
}
