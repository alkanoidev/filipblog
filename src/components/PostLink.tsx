import PostType from "../types/Post";
import { useRouter } from "next/router";
import StatsTray from "./StatsTray";
import TopicsTray from "./TopicsTray";
import Link from "next/dist/client/link";

const PostLink = ({ post }: { post: PostType }) => {
  const {
    link,
    module: { meta },
  } = post;
  const router = useRouter();

  return (
      <Link href={router.basePath + "/blog" + link}>
        <div
          id={meta.minifiedTitle}
          className="transition-all motion-reduce:transition-none z-0 text-light-text dark:text-dark-text no-underline
         w-full sm:w-72 relative ease-out flex flex-col p-5 rounded-2xl gap-2 bg-off-light dark:bg-off-dark h-max sm:h-56 
         overflow-y-hidden hover:cursor-pointer hover:ring-primary hover:ring-2 shadow hover:text-light-text dark:hover:text-dark-text"
        >
          <h2>{meta.title}</h2>
          <StatsTray meta={meta} />
          <TopicsTray topics={meta.topics} />
          <p>{meta.description}</p>
        </div>
      </Link>
  );
};

export default PostLink;
