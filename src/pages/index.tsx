import type { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import PostLink from "../components/PostLink";
import PostType from "../types/Post";
import TopAppBar from "../components/TopAppBar";
import { motion } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import SearchInput from "../components/SearchInput";
import Chip from "../components/Buttons/Chip";

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = require("../utils/getAllPosts");

  let topics: string[] = [];
  topics.push("All");
  posts.map((post: any) => {
    topics.push(...post.module.meta.topics);
  });
  topics = topics.filter((element, index) => {
    return topics.indexOf(element) === index;
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
  const [selectedTopic, setSelectedTopic] = useState<string | null>("All");
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
      setPosts(searchedPosts.length > 0 ? searchedPosts : null);
    }
  }, [selectedTopic, searchQuery]);

  return (
    <main className="px-2 sm:px-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-3">
          <TopAppBar>
            <SearchInput
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </TopAppBar>
          {(searchQuery === "" || typeof searchQuery === "undefined") && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 sm:mt-0 flex items-start justify-start sm:justify-center sm:flex-wrap gap-2 min-w-full overflow-x-auto"
            >
              {topics.map((topic) => (
                <li key={topic}>
                  <Chip
                    onClick={() => {
                      setSelectedTopic(topic);
                    }}
                    selectedTopic={selectedTopic}
                    title={topic}
                    key={topic}
                  />
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </motion.div>

      <ul
        ref={blogLinksList}
        className="gap-4 mt-5 2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl mx-auto flex flex-wrap justify-center"
      >
        {posts ? (
          posts.map((post: PostType, index) => (
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
