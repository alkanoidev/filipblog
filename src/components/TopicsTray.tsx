type Props = {
  topics: Array<string>;
};

export default function TopicsTray({ topics }: Props) {
  return (
    <ul className="w-full flex gap-2 flex-wrap">
      {topics.map((topic) => (
        <li
          key={topic}
          className="rounded-md border-primary/70 dark:border-primary/20 border-2 px-2 text-sm"
        >
          {topic}
        </li>
      ))}
    </ul>
  );
}
