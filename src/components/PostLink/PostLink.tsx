import PostType from "../../types/Post";
import { useRouter } from "next/router";
import StatsTray from "../StatsTray";
import TopicsTray from "../TopicsTray";
import Link from "next/dist/client/link";

export const PostLink = ({ post }: { post: PostType }) => {
  const {
    link,
    module: { meta },
  } = post;
  const router = useRouter();

  return (
    <Link href={router.basePath + "/blog" + link}>
      <div
        id={meta.minifiedTitle}
        className="transition-shadow z-0 text-light-text dark:text-dark-text no-underline w-full sm:max-w-sm 
      ease-out flex flex-col p-6 rounded-lg gap-1 bg-off-light dark:bg-off-dark h-max sm:h-auto
			hover:cursor-pointer hover:shadow-[0px_0px_10px_-1px_rgba(0,0,0,0.50)] hover:shadow-secondary 
      hover:ring-secondary hover:ring-[1px] shadow hover:text-light-text dark:hover:text-dark-text"
      >
        <h2>{meta.title}</h2>
        <StatsTray meta={meta} />
        <TopicsTray topics={meta.topics} />
        <p>{meta.description}</p>
      </div>
    </Link>
  );
};
