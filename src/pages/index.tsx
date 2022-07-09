import type { GetStaticProps, NextPage } from "next";
import TopicButton from "../components/Buttons/TopicButton";
import Header from "../components/Header";
import { Post } from "../components/Post";
import PostType from "../types/Post";

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = require("../utils/getAllPosts");
  return { props: { posts: JSON.parse(JSON.stringify(posts)) } };
};

export const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Header />
      <ul className="flex m-0 justify-start gap-2 overflow-x-auto">
        <TopicButton title="all" />
      </ul>
      <ul className="flex items-center flex-col gap-3 my-5">
        {posts &&
          posts.map((post: PostType) => <Post key={post.link} post={post} />)}
      </ul>
    </>
  );
};

type Props = { posts: PostType[] };

export default Home;
