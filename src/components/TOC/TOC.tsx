import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function TOC({ children }: { children: React.ReactNode[] }) {
  const [opened, setOpened] = useState(false);
  const router = useRouter();

  return (
    <div
      className={`TOC relative bg-off-light dark:bg-off-dark transition-all shadow px-3 pb-3 rounded-lg`}
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
          className="rounded-md transition ease-out hover:bg-secondary/50 dark:hover:bg-secondary/50
          border-secondary/70 dark:border-secondary/80 border-2 px-2 mb-1"
        >
          {opened ? "close" : "open"}
        </button>
      </div>
      <div
        onMouseEnter={() => {
          setOpened(true);
        }}
        onMouseLeave={() => {
          setOpened(false);
        }}
        className={`list ${
          opened && "show"
        } bg-off-light dark:bg-off-dark py-1 shadow-md w-full rounded-b-lg`}
      >
        {children}
      </div>
    </div>
  );
}
