import React from "react";
import TopicButton from "../Buttons/TopicButton";

type Props = {
  topics: Array<string>;
};

export default function TopicsTray({ topics }: Props) {
  return (
    <ul className="w-full flex gap-2 flex-wrap">
      {topics.map((topic) => (
        <li
          key={topic}
          className="rounded-md border-secondary/70 dark:border-secondary/20 border-2 px-2"
        >
          {topic}
        </li>
      ))}
    </ul>
  );
}
