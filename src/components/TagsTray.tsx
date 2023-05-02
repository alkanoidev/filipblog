type Props = {
  tags: Array<string>;
};

export default function TagsTray({ tags }: Props) {
  return (
    <ul className="w-full flex gap-2 flex-wrap">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border-primary-light/70 dark:border-primary-dark/50 border-2 px-2 text-sm"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
