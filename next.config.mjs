/** @type {import('next').NextConfig} */
import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import pkg from "next-compose-plugins";
const { withPlugins } = pkg;
import remarkPrism from "remark-prism";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkPrism],
    rehypePlugins: [],
  },
});

export default withPlugins([[withMDX]], {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});
