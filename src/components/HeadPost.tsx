import BlogPostMeta from "../types/BlogPostMeta";

export const HeadPost = ({
  meta,
  isBlogPost,
}: {
  meta: BlogPostMeta;
  isBlogPost?: boolean;
}) => (
  <>
    <h1 className={isBlogPost ? "great-title" : ""}>{meta.title}</h1>
    <div className="details">
      {isBlogPost ? null : <p>{meta.description}</p>}
      <span>{meta.date}</span>
      <span role="img" aria-label="one coffee">
        ☕ {meta.readTime + " min read"}
      </span>
    </div>
  </>
);
