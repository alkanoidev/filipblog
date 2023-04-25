import { Dispatch, SetStateAction, useRef } from "react";
import classNames from "../utils/classNames";

type Props = {
  searchQuery: string | undefined;
  setSearchQuery: Dispatch<SetStateAction<string | undefined>>;
};

export default function SearchInput({ searchQuery, setSearchQuery }: Props) {
  const inputRef = useRef<any>();
  return (
    <form
      className="flex leading-7 items-center relative w-full"
      onSubmit={(e) => {
        e.preventDefault();
        setSearchQuery(inputRef.current.value);
      }}
    >
      <svg
        className="absolute left-4 fill-primary-light dark:fill-primary-dark h-5 w-5"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <g>
          <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
      </svg>
      <input
        placeholder="Search by title"
        ref={inputRef}
        type="text"
        className={classNames(
          "bg-surface-light dark:bg-surface-dark ease-out w-full h-10 leading-7 pl-10 py-5 border-2 shadow border-transparent rounded-2xl outline-none transition motion-reduce:transition-none",
          "focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark/50"
        )}
      />
    </form>
  );
}
