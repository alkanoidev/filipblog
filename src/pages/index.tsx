import type { GetStaticProps, NextPage } from "next";
import TopicButton from "../components/Buttons/TopicButton";
import Header from "../components/Header";
import { Post } from "../components/Post";
import PostType from "../types/Post";

export const getStaticProps: GetStaticProps = async (context) => {
  // const res = await fetch(
  //   `${process.env.BASE_URL || "http://localhost:3000"}/api/blog/posts`
  // );
  // const data = await res.json();
  const { posts } = require("../utils/getAllPosts");
  return { props: { posts: JSON.parse(JSON.stringify(posts)) } };
};

export const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Header />
      <ul className="flex justify-start gap-2 overflow-x-auto">
        <TopicButton title="all" />
      </ul>
      {posts &&
        posts.map((post: PostType) => <Post key={post.link} post={post} />)}
    </>
  );
};

type Props = { posts: PostType[] };

export default Home;
