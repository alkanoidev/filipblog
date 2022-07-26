/** @type {import('next').NextConfig} */
// const runtimeCaching = require("next-pwa/cache");
// const withPlugins = require("next-compose-plugins");
// const withPWA = require("next-pwa")({
//   pwa: {
//     dest: "public",
//     runtimeCaching,
//     register: true,
//     skipWaiting: true,
//   },
// });

// module.exports = withPWA(
//   withMDX({
//     pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
//   })
// );
import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

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

export default withMDX(nextConfig);
