import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FETCH_ARTICLE } from "./constants";
import { articlesBySlug } from "./selectors";
import { createStructuredSelector } from "reselect";
import Fetching from "components/Fetching";
import { useRouter } from "next/router";
import Article from "./components";

const ArticlePage = ({ fetchArticle, articles }) => {
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    fetchArticle({ slug });
  }, []);
  console.log(articles);
  return (
    <Fetching fetching={articles[slug]?.fetching} error={articles[slug]?.error}>
      {articles[slug]?.data ? <Article article={articles[slug].data} /> : null}
    </Fetching>
  );
};
export default connect(
  createStructuredSelector({
    articles: articlesBySlug
  }),
  dispatch => ({
    fetchArticle: ({ slug }) => dispatch({ type: FETCH_ARTICLE, slug })
  })
)(ArticlePage);
