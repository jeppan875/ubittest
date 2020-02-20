import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FETCH_ARTICLES } from "./constants";
import { articleSelector, fetchingArticles, errorArticles } from "./selectors";
import { createStructuredSelector } from "reselect";
import Fetching from "components/Fetching";

const HomePage = ({ fetchArticles, articles, fetching, error }) => {
  useEffect(() => {
    fetchArticles();
  }, []);
  console.log(articles.Items?.[0]);
  return (
    <Fetching fetching={fetching} error={error}>
      <span>{articles.Items?.[0].title}</span>
    </Fetching>
  );
};
export default connect(
  createStructuredSelector({
    articles: articleSelector,
    fetching: fetchingArticles,
    error: errorArticles
  }),
  dispatch => ({
    fetchArticles: () => dispatch({ type: FETCH_ARTICLES })
  })
)(HomePage);
