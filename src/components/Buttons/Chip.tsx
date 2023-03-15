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
        "hover:bg-off-dark/20 dark:hover:bg-off-light/20",
        selectedTopic === title
          ? "bg-primary hover:bg-primary text-light border-primary"
          : "bg-off-light dark:bg-off-dark"
      )}
    >
      {title}
    </button>
  );
}

export default Chip;
