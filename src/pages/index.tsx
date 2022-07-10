import type { GetStaticProps, NextPage } from "next";
import TopicButton from "../components/Buttons/TopicButton";
import Header from "../components/Header";
import { Post } from "../components/Post";
import PostType from "../types/Post";

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = require("../utils/getAllPosts");
  let topics: any = [];
  posts.map((post: any) => {
    topics.push(...post.module.meta.topics);
  });

  return {
    props: { posts: JSON.parse(JSON.stringify(posts)), topics },
  };
};

export const Home: NextPage<Props> = ({ posts, topics }) => {
  return (
    <>
      <Header />
      <ul className="flex justify-center flex-wrap gap-2 my-5 overflow-x-auto">
        {topics.map((topic) => (
          <TopicButton title={topic} key={topic} />
        ))}
      </ul>
      <ul className="flex items-center flex-col gap-3 my-5">
        {posts &&
          posts.map((post: PostType) => <Post key={post.link} post={post} />)}
      </ul>
    </>
  );
};

type Props = { posts: PostType[]; topics: Array<string> };

export default Home;
