import express from "express";

import articles from "pages/api/articles";

const router = express.Router();
router.get("/articles", articles);
export default router;
