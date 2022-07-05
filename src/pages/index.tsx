import type { NextPage } from "next";
import Head from "next/head";
import { Post } from "../components/Post";
import PostType from "../types/Post";
import { posts } from "../utils/getAllPosts";

const Home: NextPage = () => {
  return (
    <>
      {posts.map((post: PostType) => (
        <Post key={post.link} post={post} />
      ))}
    </>
  );
};

export default Home;
