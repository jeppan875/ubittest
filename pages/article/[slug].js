import React from "react";
import ArticlePage from "containers/ArticlePage";
import { setArticle } from "containers/ArticlePage//actions";
import fetch from "isomorphic-unfetch";
import { baseUrl } from "utils";
const Article = () => {
  return <ArticlePage />;
};

Article.getInitialProps = async ({ store, req, query }) => {
  if (req) {
    const { slug } = query;
    const res = await fetch(`${baseUrl()}/api/articles?slug=${slug}`);
    const data = await res.json();
    store.dispatch(setArticle({ data, key: slug }));
  }
};

export default Article;
