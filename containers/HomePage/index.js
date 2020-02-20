import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FETCH_ARTICLES } from "./constants";
import { articleSelector, fetchingArticles } from "./selectors";
import { createStructuredSelector } from "reselect";
import Fetching from "components/Fetching";

const HomePage = ({ fetchArticles, articles, fetching }) => {
  useEffect(() => {
    fetchArticles();
  }, []);
  console.log(articles.Items?.[0]);
  return (
    <Fetching fetching={fetching}>
      <span>{articles.Items?.[0].title}</span>
    </Fetching>
  );
};
export default connect(
  createStructuredSelector({
    articles: articleSelector,
    fetching: fetchingArticles
  }),
  dispatch => ({
    fetchArticles: () => dispatch({ type: FETCH_ARTICLES })
  })
)(HomePage);
