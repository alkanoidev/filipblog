import type { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
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
    props: { allPosts: JSON.parse(JSON.stringify(posts)), topics },
  };
};

export const Home: NextPage<Props> = ({ allPosts, topics }) => {
  const [posts, setPosts] = useState(allPosts);
  const [selectedTopic, setSelectedTopic] = useState("React");
  useEffect(() => {
    const items = allPosts.map((post) => {
      if (post.module.meta.topics.includes(selectedTopic)) {
        return post;
      }
      return;
    });
    const filtered = items.filter((item) => {
      return item !== undefined;
    });
    console.log(filtered);
    setPosts(filtered);
    // setPosts(items.length);
  }, [selectedTopic]);

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

type Props = { allPosts: PostType[]; topics: Array<string> };

export default Home;
