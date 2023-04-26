import { MouseEventHandler } from "react";
import classNames from "../../utils/classNames";

function Chip({
  title,
  onClick,
  selectedTopic,
}: {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  selectedTopic: string | null;
}) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "text-center px-4 py-2 rounded-full transition",
        "text-primary-light dark:text-primary-dark",
        "whitespace-nowrap",
        selectedTopic === title
          ? "bg-primary-light dark:bg-primary-dark text-light dark:text-dark"
          : "bg-surface-light dark:bg-surface-dark hover:bg-primary-light dark:hover:bg-primary-dark hover:bg-opacity-[12%] dark:hover:bg-opacity-[12%]"
      )}
    >
      {title}
    </button>
  );
}

export default Chip;
