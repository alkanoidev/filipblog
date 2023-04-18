import PostType from "../types/Post";
import { useRouter } from "next/router";
import StatsTray from "./StatsTray";
import TopicsTray from "./TopicsTray";
import Link from "next/dist/client/link";
import classNames from "../utils/classNames";

const PostLink = ({
  post,
  spotlight,
}: {
  post: PostType;
  spotlight?: boolean;
}) => {
  const {
    link,
    module: { meta },
  } = post;
  const router = useRouter();

  return (
    <Link href={router.basePath + link}>
      <div
        id={meta.minifiedTitle}
        className={classNames(
          "transition-all motion-reduce:transition-none z-0 text-on-surface-light dark:text-on-surface-dark no-underline",
          "relative ease-out flex flex-col p-5 rounded-2xl gap-2 bg-surface-light dark:bg-surface-dark h-max sm:h-56",
          "overflow-y-hidden hover:cursor-pointer hover:text-light-text dark:hover:text-dark-text",
          "ring-off-dark/20 dark:ring-off-light/10 hover:shadow-lg dark:hover:shadow-off-light/10 hover:ring-2",
          spotlight ? "w-full" : "w-full sm:max-w-xs"
        )}
      >
        <h1 className="text-xl">{meta.title}</h1>
        <StatsTray meta={meta} />
        <TopicsTray topics={meta.topics} />
        <p className="mt-2">{meta.description}</p>
      </div>
    </Link>
  );
};

export default PostLink;
