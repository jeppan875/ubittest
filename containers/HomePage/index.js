import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FETCH_ARTICLES } from "./constants";
import { articleSelector } from "./selectors";
import { createStructuredSelector } from "reselect";

const HomePage = ({ fetchArticles, articles }) => {
  useEffect(() => {
    fetchArticles();
  }, []);
  console.log(articles.data?.Items?.[0]);
  return <span>fvdefdfvdv</span>;
};
export default connect(
  createStructuredSelector({
    articles: articleSelector
  }),
  dispatch => ({
    fetchArticles: () => dispatch({ type: FETCH_ARTICLES })
  })
)(HomePage);
