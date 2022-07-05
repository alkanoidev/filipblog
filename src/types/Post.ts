import BlogPostMeta from "./BlogPostMeta";

type PostType = {
  link: string;
  module: {
    meta: BlogPostMeta;
  };
};

export default PostType;
