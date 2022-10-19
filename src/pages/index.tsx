import type { GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType, NextPage } from "next";
import { useEffect, useState } from "react";
import TopicButton from "../components/Buttons/TopicButton";
import PostLink from "../components/PostLink";
import PostType from "../types/Post";
import TopAppBar from "../components/TopAppBar";
import { motion } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import SearchInput from "../components/SearchInput";

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = require("../utils/getAllPosts");

  let topics: string[] = [];
  topics.push("All");
  posts.map((post: any) => {
    topics.push(...post.module.meta.topics);
  });

  posts.sort((a: any, b: any) => {
    return b.module.meta.date - a.module.meta.date;
  });

  return {
    props: { allPosts: JSON.parse(JSON.stringify(posts)), topics },
  };
};

export const Home: NextPage<Props> = ({ allPosts, topics }) => {
  const [posts, setPosts] = useState<PostType[] | null>(allPosts);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [blogLinksList] = useAutoAnimate<HTMLUListElement>();
  const [searchQuery, setSearchQuery] = useState<string | undefined>();

  useEffect(() => {
    if (!selectedTopic || selectedTopic.toLowerCase() === "all") {
      setPosts(allPosts);
    } else {
      const selectedPosts = allPosts.filter((post) =>
        post.module.meta.topics.includes(selectedTopic)
      );
      setPosts(selectedPosts);
    }
    if (typeof searchQuery !== "undefined" && searchQuery !== "") {
      const searchedPosts = allPosts.filter((post) =>
        post.module.meta.title
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase())
      );
      if (searchedPosts.length > 0) {
        setPosts(searchedPosts);
      } else {
        setPosts(null);
      }
    }
  }, [selectedTopic, searchQuery]);

  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-3">
          <TopAppBar />
          <SearchInput
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          {(searchQuery === "" || typeof searchQuery === "undefined") && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-start justify-start sm:justify-center sm:flex-wrap gap-2 min-w-full overflow-x-auto"
            >
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
            </motion.ul>
          )}
        </div>
      </motion.div>

      <ul ref={blogLinksList} className="flex flex-col w-full gap-4 pt-3">
        {posts ? (
          posts.map((post: PostType) => (
            <PostLink key={post.link} post={post} />
          ))
        ) : (
          <h2 className="text-center">No Blog Posts Found ;(</h2>
        )}
      </ul>
    </main>
  );
};

type Props = { allPosts: PostType[]; topics: Array<string> };

export default Home;
