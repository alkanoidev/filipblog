import React, { useEffect, useRef, useState } from "react";

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
      className={`TOC relative bg-off-light dark:bg-off-dark w-full transition-all motion-reduce:transition-none shadow px-3 pb-3 rounded-lg hover:cursor-pointer`}
      ref={wrapperRef}
      onClick={() => {
        setOpened((prev) => !prev);
      }}
      onBlur={() => {
        setTimeout(() => {
          setOpened(false);
        }, 500);
      }}
    >
      <div className="flex justify-between items-end">
        <h4 className="leading-tight text-dark dark:text-light font-normal">
          Table Of Contents
        </h4>
        <div className="rounded-md transition motion-reduce:transition-none ease-out px-2 mb-1 text-lg text-dark dark:text-light">
          {opened ? (
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
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
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
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </div>
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
