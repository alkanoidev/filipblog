/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://filipblog.netlify.app/",
  generateRobotsTxt: true,
};
