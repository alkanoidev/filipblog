type Props = {
  topics: Array<string>;
};

export default function TopicsTray({ topics }: Props) {
  return (
    <ul className="w-full flex gap-2 flex-wrap">
      {topics.map((topic) => (
        <li
          key={topic}
          className="rounded-full border-primary-light/70 dark:border-primary-dark/50 border-2 px-2 text-sm"
        >
          {topic}
        </li>
      ))}
    </ul>
  );
}
