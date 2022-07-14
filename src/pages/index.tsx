import type { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import TopicButton from "../components/Buttons/TopicButton";
import Header from "../components/Header";
import { Post } from "../components/Post";
import PostType from "../types/Post";
import { motion } from "framer-motion";

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = require("../utils/getAllPosts");
  let topics: Array<string> = [];
  topics.push("All");
  posts.map((post: any) => {
    topics.push(...post.module.meta.topics);
  });
  topics = topics.filter((topic, index) => {
    return topics.indexOf(topic) === index;
  });

  return {
    props: { allPosts: JSON.parse(JSON.stringify(posts)), topics },
  };
};

export const Home: NextPage<Props> = ({ allPosts, topics }) => {
  const [posts, setPosts] = useState<PostType[] | undefined>(allPosts);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedTopic || selectedTopic.toLowerCase() === "all") {
      setPosts(allPosts);
    } else {
      const items = allPosts.map((post) => {
        if (post.module.meta.topics.includes(selectedTopic)) {
          return post;
        }
        return null;
      });
      let filtered;
      items.map((item) => {
        if (item !== null) {
          filtered = items.filter((item) => {
            return item !== null;
          });
        }
      });

      setPosts(filtered);
    }
  }, [selectedTopic]);

  return (
    <div>
      <Header />
      <ul className="flex justify-start gap-2 w-full mt-5 overflow-x-auto">
        {topics.map((topic) => (
          <TopicButton
            onClick={() => {
              setSelectedTopic(topic);
            }}
            selectedTopic={selectedTopic}
            title={topic}
            key={topic}
          />
        ))}
      </ul>
      <motion.div
        className="content"
        variants={container}
        initial="initial"
        animate="animate"
      >
        <ul className="flex items-center flex-col gap-5 px-2 sm:px-0 my-5">
          {posts &&
            posts.map((post: PostType) => <Post key={post.link} post={post} />)}
        </ul>
      </motion.div>
    </div>
  );
};
const container = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
type Props = { allPosts: PostType[]; topics: Array<string> };

export default Home;
