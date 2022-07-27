/** @type {import('next').NextConfig} */
import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import withPWA from "next-pwa";
import pkg from "next-compose-plugins";
import runtimeCaching from "next-pwa/cache.js";
const { withPlugins } = pkg;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

const withPWA1 = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
  },
});

export default withPlugins([[withPWA1], [withMDX]], {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});
