import React, { useState } from "react";

export default function TOC({ children }: { children: React.ReactNode[] }) {
  const [opened, setOpened] = useState(true);
  return (
    <div className="TOC bg-off-light dark:bg-off-dark shadown px-3 pb-3 rounded-lg border border-dark/10 dark:border-light/10">
      <div className="flex gap-2 items-end">
        <h4 className="leading-tight text-dark dark:text-light font-normal">
          Table Of Contents
        </h4>
        <button
          onClick={() => {
            setOpened((prev) => !prev);
          }}
          className="rounded-md transition ease-out hover:bg-secondary/50 dark:hover:bg-secondary/50
          border-secondary/70 dark:border-secondary/80 border-2 px-2 mb-1"
        >
          {opened ? "close" : "open"}
        </button>
      </div>
      <div className={`list ${opened && "show"}`}>{children}</div>
    </div>
  );
}
