import { MouseEventHandler } from "react";

function TopicButton({
  title,
  onClick,
}: {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-md transition ease-out hover:bg-secondary/50 dark:hover:bg-secondary/50 border-secondary/70 dark:border-secondary/80 border-2 px-2"
    >
      {title}
    </button>
  );
}

export default TopicButton;
