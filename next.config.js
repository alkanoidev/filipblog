/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPlugins = require("next-compose-plugins");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
const withPWA = require("next-pwa")({
  pwa: {
    dest: "public",
    runtimeCaching,
    register: true,
    skipWaiting: true,
  },
});

// module.exports = withPWA(
//   withMDX({
//     pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
//   })
// );
module.exports = withPlugins([[withPWA], [withMDX]], {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});
