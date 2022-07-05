import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { posts } = require("../../../../utils/getAllPosts");
  res.status(200).json({
    posts: posts,
  });
}
