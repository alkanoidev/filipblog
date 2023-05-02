import type { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import PostType from "../types/PostType";
import TopAppBar from "../components/TopAppBar";
import { AnimatePresence } from "framer-motion";
import SearchInput from "../components/SearchInput";
import Chip from "../components/Buttons/Chip";
import BlogPostCard from "../components/BlogPostCard";

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = require("../utils/getAllPosts");

  let tags: string[] = [];
  tags.push("All");
  posts.map((post: PostType) => {
    tags.push(...post.module.meta.tags);
  });

  tags = tags.filter((element, index) => {
    return tags.indexOf(element) === index;
  });

  posts.sort((a: any, b: any) => {
    return b.module.meta.date - a.module.meta.date;
  });
  return {
    props: { allPosts: JSON.parse(JSON.stringify(posts)), tags },
  };
};

export const Home: NextPage<Props> = ({ allPosts, tags }) => {
  const [posts, setPosts] = useState<PostType[] | null>(allPosts);
  const [selectedTopic, setSelectedTopic] = useState<string | null>("All");
  const [searchQuery, setSearchQuery] = useState<string | undefined>("");

  useEffect(() => {
    if (!selectedTopic || selectedTopic.toLowerCase() === "all") {
      setPosts(allPosts);
    } else {
      const selectedPosts = allPosts.filter((post) =>
        post.module.meta.tags.includes(selectedTopic)
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
      <div>
        <div className="flex flex-col gap-3">
          <TopAppBar>
            <SearchInput setSearchQuery={setSearchQuery} />
          </TopAppBar>
          {(searchQuery === "" || typeof searchQuery === "undefined") && (
            <ul className="mt-2 sm:mt-0 flex scrollbar-hidden items-start justify-start sm:justify-center sm:flex-wrap gap-2 min-w-full overflow-x-auto">
              {tags.map((topic) => (
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
            </ul>
          )}
        </div>
      </div>
      <AnimatePresence>
        <ul className="gap-4 mt-5 w-full flex flex-wrap justify-center">
          {posts
            ? posts.map((post: PostType, index) => (
                <BlogPostCard
                  key={post.link}
                  post={post}
                  spotlight={
                    index === 0 && selectedTopic === "All" && searchQuery === ""
                  }
                />
              ))
            : null}
        </ul>
      </AnimatePresence>
    </main>
  );
};

type Props = { allPosts: PostType[]; tags: Array<string> };

export default Home;
