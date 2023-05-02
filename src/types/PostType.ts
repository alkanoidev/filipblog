type PostType = {
  link: string;
  module: {
    meta: PostMetaType;
  };
};

type PostMetaType = {
  title: string;
  description: string;
  date: Date;
  readTime: number;
  tags: string[];
  minifiedTitle: string;
};
export type { PostMetaType };

export default PostType;
