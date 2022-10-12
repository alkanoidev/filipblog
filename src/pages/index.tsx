import type { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import TopicButton from "../components/Buttons/TopicButton";
import PostLink from "../components/PostLink";
import PostType from "../types/Post";
import TopAppBar from "../components/TopAppBar";
import { motion } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = require("../utils/getAllPosts");

  let topics: Array<string> = [];
  topics.push("All");
  posts.map((post: any) => {
    topics.push(...post.module.meta.topics);
  });

  posts.sort((a: any, b: any) => {
    return b.module.meta.date - a.module.meta.date;
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
  const [blogLinksList] = useAutoAnimate<HTMLUListElement>();

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
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-3">
          <TopAppBar />
        </div>
      </motion.div>

      <div className="home flex gap-2 lg:flex-row flex-col-reverse md:flex-col-reverse mt-5 sm:justify-between">
        <ul
          ref={blogLinksList}
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full auto-rows-auto gap-4"
        >
          {posts &&
            posts.map((post: PostType) => (
              <PostLink key={post.link} post={post} />
            ))}
        </ul>
        <div className="lg:w-2/6 md:w-full sm:w-full">
          <ul className="flex justify-start items-start flex-shrink-0 sm:flex-wrap gap-2 w-full overflow-x-auto pb-3">
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
        </div>
      </div>
    </main>
  );
};

type Props = { allPosts: PostType[]; topics: Array<string> };

export default Home;
