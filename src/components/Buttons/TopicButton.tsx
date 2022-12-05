import { MouseEventHandler } from "react";

function TopicButton({
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
      className={`rounded-md transition motion-reduce:transition-none ease-out hover:bg-primary/50 dark:hover:bg-primary/50
       border-primary/70 dark:border-primary/80 border-2 px-2 min-w-max
       ${selectedTopic === title && "bg-primary/50"}`}
    >
      {title}
    </button>
  );
}

export default TopicButton;
