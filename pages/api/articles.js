import { createArticle, listArticles } from "apiLib/articles";

export default async (req, res) => {
  try {
    if (req.method === "POST") {
      createArticle(req, res);
    } else {
      listArticles(req, res);
    }
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.end(JSON.stringify({ err: "Server error" }));
  }
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb"
    }
  }
};
