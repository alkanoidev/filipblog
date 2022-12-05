import type {
  GetStaticProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { useEffect, useState } from "react";
import TopicButton from "../components/Buttons/TopicButton";
import PostLink from "../components/PostLink";
import PostType from "../types/Post";
import TopAppBar from "../components/TopAppBar";
import { motion } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import SearchInput from "../components/SearchInput";
import PostSkeleton from "../components/Skeletons/PostSkeleton";

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
  const [isLoading, setIsLoading] = useState(true);

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
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [selectedTopic, searchQuery]);

  return (
    <main>
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
              className="mt-2 sm:mt-0 flex items-start scroll-mb-2 justify-start sm:justify-center sm:flex-wrap gap-2 min-w-full overflow-x-auto"
            >
              {topics.map((topic) => (
                <li key={topic}>
                <TopicButton
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
        className="flex flex-wrap gap-4 mt-5 w-full justify-center"
      >
        {posts && !isLoading
          ? posts.map((post: PostType) => (
                <PostLink key={post.link} post={post} />
            ))
          : !isLoading && (
              <h2 className="text-center">No Blog Posts Found ;(</h2>
            )}
        {isLoading &&
          posts?.map((post) => (
            <li key={post.module.meta.minifiedTitle} className="w-full sm:w-auto">
              <PostSkeleton key={post.link} />
            </li>
          ))}
      </ul>
    </main>
  );
};

type Props = { allPosts: PostType[]; topics: Array<string> };

export default Home;
