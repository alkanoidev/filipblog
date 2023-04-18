import PostType from "../types/Post";
import { useRouter } from "next/router";
import StatsTray from "./StatsTray";
import TopicsTray from "./TopicsTray";
import Link from "next/dist/client/link";
import classNames from "../utils/classNames";

const PostLink = ({ post }: { post: PostType }) => {
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
          "transition-all motion-reduce:transition-none z-0 text-light-text dark:text-dark-text no-underline",
          "w-full sm:w-80 relative ease-out flex flex-col p-5 rounded-2xl gap-2 bg-off-light dark:bg-off-dark h-max sm:h-56",
          "overflow-y-hidden hover:cursor-pointer hover:text-light-text dark:hover:text-dark-text",
          "ring-2 ring-off-dark/20 dark:ring-off-light/10 hover:shadow-lg dark:hover:shadow-off-light/10 hover:ring-2"
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
