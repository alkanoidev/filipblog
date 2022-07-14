import PostType from "../types/Post";
import { useRouter } from "next/router";
import StatsTray from "./StatsTray";
import TopicsTray from "./TopicsTray";
import { motion } from "framer-motion";

export const Post = ({ post }: { post: PostType }) => {
  const {
    link,
    module: { meta },
  } = post;
  const router = useRouter();

  return (
    <motion.article
      id={meta.minifiedTitle}
      onClick={() => {
        router.push("/blog" + link);
      }}
      className="transition-all w-full ease-out flex flex-col p-6 rounded-lg gap-1 bg-off-light dark:bg-off-dark 
			hover:cursor-pointer hover:shadow-[0px_0px_10px_-1px_rgba(0,0,0,0.50)] hover:shadow-secondary 
      hover:ring-secondary hover:ring-[1px] hover:scale-105 shadow"
      variants={item}
    >
      <h2>{meta.title}</h2>
      <StatsTray meta={meta} />
      <TopicsTray topics={meta.topics} />
      <p>{meta.description}</p>
    </motion.article>
  );
};

const item = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.35,
      type: "spring",
    },
  },
};
