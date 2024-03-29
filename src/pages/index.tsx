import type { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import PostType from "../types/PostType";
import TopAppBar from "../components/TopAppBar";
import { useCycle } from "framer-motion";
import SearchInput from "../components/SearchInput";
import Chip from "../components/ui/Buttons/Chip";
import BlogPostCard from "../components/ui/BlogPostCard";
import useDebounce from "../hooks/useDebounce";
import Head from "next/head";

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

  const [isVisible, onCycle] = useCycle(true, false);

  const debounce = useDebounce(searchQuery, 500);

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
          .includes(debounce.toLocaleLowerCase())
      );
      setPosts(searchedPosts.length > 0 ? searchedPosts : null);
    }
  }, [selectedTopic, debounce]);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="px-2 sm:px-0 2xl:max-w-5xl xl:max-w-4xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl w-full mx-auto">
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
        <ul className="gap-4 mt-5 w-full flex flex-wrap justify-center">
          {posts && isVisible
            ? posts.map((post: PostType, index) => (
                <BlogPostCard
                  key={post.link}
                  post={post}
                  isVisible={isVisible}
                  spotlight={
                    index === 0 && selectedTopic === "All" && searchQuery === ""
                  }
                />
              ))
            : null}
        </ul>
      </main>
    </>
  );
};

type Props = { allPosts: PostType[]; tags: Array<string> };

export default Home;
