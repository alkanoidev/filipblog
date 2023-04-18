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
        "text-center px-2 rounded-lg transition",
        "border-2 border-off-dark/20 dark:border-off-light/10",
        "hover:bg-off-dark/20 dark:hover:bg-off-light/20 whitespace-nowrap",
        selectedTopic === title
          ? "bg-primary-light hover:bg-primary-light dark:bg-primary-dark dark:hover:bg-primary-dark text-light dark:text-dark border-primary"
          : "bg-surface-light dark:bg-surface-dark"
      )}
    >
      {title}
    </button>
  );
}

export default Chip;
