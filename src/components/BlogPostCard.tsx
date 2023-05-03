import PostType from "../types/PostType";
import { useRouter } from "next/router";
import StatsTray from "./StatsTray";
import TagsTray from "./TagsTray";
import Link from "next/dist/client/link";
import classNames from "../utils/classNames";
import { AnimatePresence, motion } from "framer-motion";

export default function BlogPostCard({
  post,
  spotlight,
  isVisible,
}: {
  post: PostType;
  spotlight?: boolean;
  isVisible: boolean;
}) {
  const { link, module } = post;
  const basePath = useRouter().basePath;

  return (
    <AnimatePresence>
      {isVisible && (
        <Link href={basePath + link}>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.25 }}
            whileHover={{ scale: 1.05 }}
            id={module.meta.minifiedTitle}
            className={classNames(
              "transition-transform motion-reduce:transition-none text-on-surface-light dark:text-on-surface-dark",
              "relative ease-out flex flex-col p-4 rounded-2xl gap-2 bg-surface-light dark:bg-surface-dark sm:h-56",
              "overflow-y-hidden hover:cursor-pointer hover:text-light-text dark:hover:text-dark-text",
              "hover:scale-105",
              spotlight
                ? "w-full"
                : "md:w-[calc(50%-1rem)] lg:w-[calc(33.333333%-1rem)] w-full"
            )}
          >
            <h1 className="text-xl text-primary-light dark:text-primary-dark">
              {module.meta.title}
            </h1>
            <StatsTray meta={module.meta} />
            <TagsTray tags={module.meta.tags} />
            <p
              className={`mt-6 sm:mt-2 text-on-surface-light dark:text-on-surface-dark ${
                spotlight && "pr-36 sm:pr-56"
              }`}
            >
              {module.meta.description}
            </p>

            {spotlight ? (
              <svg
                height="150"
                viewBox="0 0 450 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 bottom-0 h-24 sm:h-36 z-0"
              >
                <circle
                  cx="112.5"
                  cy="187.5"
                  r="37.5"
                  className="fill-primary-light dark:fill-primary-dark"
                />
                <path
                  d="M210 187.5C210 208.211 226.789 225 247.5 225H450V150H247.5C226.789 150 210 166.789 210 187.5Z"
                  className="fill-primary-light dark:fill-primary-dark"
                />
                <path
                  d="M294 112.5C294 133.211 310.789 150 331.5 150H450V75H331.5C310.789 75 294 91.7893 294 112.5Z"
                  className="fill-[#BDBDBF] dark:fill-[#2A2D31]"
                />
                <path
                  d="M225 262.5C225 283.211 241.789 300 262.5 300H337.5C358.211 300 375 283.211 375 262.5C375 241.789 358.211 225 337.5 225H262.5C241.789 225 225 241.789 225 262.5Z"
                  className="fill-[#BDBDBF] dark:fill-[#2A2D31]"
                />
                <path
                  d="M75 37.5C75 58.2107 91.7893 75 112.5 75H262.5C283.211 75 300 58.2107 300 37.5C300 16.7893 283.211 0 262.5 0H112.5C91.7893 0 75 16.7893 75 37.5Z"
                  className="fill-secondary-light dark:fill-secondary-dark"
                />
                <path
                  d="M375 262.5C375 283.211 391.789 300 412.5 300H450V225H412.5C391.789 225 375 241.789 375 262.5Z"
                  className="fill-secondary-light dark:fill-secondary-dark"
                />
              </svg>
            ) : null}
          </motion.div>
        </Link>
      )}
    </AnimatePresence>
  );
}
