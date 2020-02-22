import { createArticle, listArticles } from "apiLib/articles";

export default async (req, res) => {
  if (req.method === "POST") {
    createArticle(req, res);
  } else {
    listArticles(req, res);
  }
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb"
    }
  }
};
