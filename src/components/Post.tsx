import PostType from "../types/Post";
import { useRouter } from "next/router";
import StatsTray from "./StatsTray";

export const Post = ({ post }: { post: PostType }) => {
  const {
    link,
    module: { meta },
  } = post;
  const router = useRouter();

  return (
    <article
      id={meta.minifiedTitle}
      onClick={() => {
        router.push("/blog" + link);
      }}
      className="transition-all w-full ease-out flex flex-col p-6 rounded-lg gap-1 bg-off-light dark:bg-off-dark 
			hover:cursor-pointer hover:shadow-[0px_0px_10px_-1px_rgba(0,0,0,0.50)] hover:shadow-primary 
      hover:ring-primary hover:ring-[1px]"
    >
      <h2>{meta.title}</h2>
      <StatsTray meta={meta} />
      <p>{meta.description}</p>
    </article>
  );
};
