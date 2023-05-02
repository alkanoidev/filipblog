import ArticleMeta from "./ArticleMeta";

type PostType = {
  link: string;
  module: {
    meta: ArticleMeta;
  };
};

export default PostType;
