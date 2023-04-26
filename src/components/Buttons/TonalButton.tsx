import type { ReactElement, ReactNode } from "react";
import classNames from "../../utils/classNames";

export default function TonalButton({
  children,
  href,
  title,
  icon,
  onClick,
  fullWidth,
}: {
  children?: string | ReactNode | ReactNode[];
  href?: string;
  title: string;
  icon?: ReactElement;
  fullWidth?: boolean;
  isInProjectCard?: boolean;
  onClick?: () => void;
}) {
  if (href)
    return (
      <a
        href={href}
        onClick={onClick}
        aria-label={title}
        className={classNames(
          "py-3 px-6 transition text-center font-semibold focus:outline-none no-underline",
          "group rounded-full",
          "text-primary-light dark:text-primary-dark",

          "inline-flex gap-2 justify-center",
          fullWidth ? "w-full" : "w-fit",
          "bg-surface-light dark:bg-surface-dark",
          // hover
          "hover:bg-primary-light dark:hover:bg-primary-dark",
          "hover:bg-opacity-[12%] dark:hover:bg-opacity-[12%]",
          // focus
          "focus:bg-primary-light dark:focus:bg-primary-dark",
          "focus:bg-opacity-[20%] dark:focus:bg-opacity-[20%]"
        )}
      >
        {icon ? icon : null}
        {title}
        {children}
      </a>
    );
  return (
    <button
      id="secondary-btn"
      aria-label={title}
      className={classNames(
        "py-3 px-6 transition text-center font-semibold focus:outline-none",
        "group rounded-full ring-2",
        "text-primary-light dark:text-primary-dark ring-outline-light dark:ring-outline-dark",
        "inline-flex gap-2 justify-center",
        fullWidth ? "w-full" : "w-fit",
        // hover
        "hover:bg-primary-light dark:hover:bg-primary-dark",
        "hover:bg-opacity-[12%] dark:hover:bg-opacity-[12%]",
        // focus
        "focus:bg-primary-light dark:focus:bg-primary-dark",
        "focus:bg-opacity-[20%] dark:focus:bg-opacity-[20%]"
      )}
    >
      {title}
      {children}
      {icon ? icon : null}
    </button>
  );
}
