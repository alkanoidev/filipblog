import type { GetStaticProps, NextPage } from "next";
import Header from "../components/Header";
import { Post } from "../components/Post";
import PostType from "../types/Post";

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`${process.env.URL}/api/blog/posts`);
  const data = await res.json();

  return { props: { posts: data.posts } };
};

export const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      {/* {posts.map((post: PostType) => (
        <Post key={post.link} post={post} />
      ))} */}
      <Header />
    </>
  );
};

type Props = { posts: PostType[] };

export default Home;
